import { Col, Row } from "react-bootstrap";
import SimSwapHistory from "./SimSwapHistory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { swapSim } from "@/lib/SimSwapApis";
import { useForm } from "react-hook-form";
import FormError from "../helpers/FormError";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
interface Inputs {
  imei: string;
}

function SimSwap() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: swapSim,
    onSuccess: (url) => {
      toast.success("Redirecting to stripe...");
      queryClient.invalidateQueries({
        queryKey: ["swapHistory", id],
      });
      router.push(url);
    },

    onError: () => toast.error("Could not swap your sim"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(formData: Inputs) {
    let redirect_url = "";
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/my-esim/${id}`;
    }

    mutate({ lineId: id, imei: formData.imei, redirect_url });
  }
  return (
    <section>
      <div>
        <div className={`pt-4 px-2 pt-sm-4 px-sm-4`}>
          <p className="font30 fontWeight500 mb-2 mt-4 mt-sm-0">
            Swap Your eSIM{" "}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg={8} className="mb-3">
                <input
                  className="myInput myInputWhite w-100"
                  placeholder="Enter Your Device IMEI"
                  type="text"
                  disabled={isPending}
                  {...register("imei", {
                    required: "IMEI number is required",
                    pattern: {
                      value: /^[0-9]{15}$/,
                      message:
                        "Invalid IMEI. Please enter a 15-digit numeric value.",
                    },
                  })}
                />
                {errors?.imei && <FormError message={errors.imei.message} />}
              </Col>
              <Col lg={4}>
                <button
                  className="myButton myButtonColored w-100"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? "Please wait..." : " Proceed with eSIM Swap"}
                </button>
              </Col>
            </Row>
          </form>
          <SimSwapHistory />
        </div>
      </div>
    </section>
  );
}

export default SimSwap;
