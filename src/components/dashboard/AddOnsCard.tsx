import { applyAddon } from "@/lib/AddonsApis";
import { AddonsType } from "@/types/AddonsTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import styles from "./AddOnsCard.module.css";
import toast from "react-hot-toast";

const plansCardData = {
  title: "1GB Topup",
  pricingTitle: "$3/month",
  pricingDescription: "$45 upfront payment required",
  listItems: [
    "No hotspot data included",
    "Top-up premium & hotspot data anytime",
    "No hidden fees",
    "No contract (cancel anytime)",
  ],
  buttonLabel: "View Details",
};
function AddOnsCard({
  bgColor,
  textColor,
  addon,
}: {
  bgColor: string;
  textColor: string;
  addon: AddonsType;
}) {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { name, price, id: addonId } = addon;

  const { mutate: applyAddonApi, isPending } = useMutation({
    mutationFn: applyAddon,
    onSuccess: (data) => {
      toast.success("Redirecting to stripe...");
      queryClient.invalidateQueries({ queryKey: ["addonsHistory"] });
      queryClient.invalidateQueries({ queryKey: ["transactionHistory"] });
      router.push(data);
    },
  });

  return (
    <div className={`${styles.planCard}`}>
      <h3 className="text-center font16 fontWeight600 py-2">{name}</h3>

      <div
        className={`${styles.pricing} ${bgColor} ${textColor} d-flex flex-column justify-content-center align-items-center gap-1 py-3`}
      >
        <p className="font20 fontWeight600">${price}/month</p>
        <p className="font14 fontWeight500">No upfront payment required</p>
      </div>

      <div className="py-2 d-flex flex-column gap-3 mt-2">
        <div className="d-flex flex-column ms-4 gap-2">
          {plansCardData.listItems.map((item, index) => (
            <div className="d-flex  align-items-center gap-2" key={index}>
              <Image
                src={"/images/checkIcon.svg"}
                height={24}
                width={24}
                alt={item}
              />
              <p className="font14 fontWeight400">{item}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <button
            className="myButton myButtonColored textWhite font20 fontWeight500 px-5 py-2"
            onClick={() => {
              let redirect_url = "";
              if (typeof window !== undefined) {
                redirect_url = `${window.location.origin}/my-esim/${id}`;
              }
              applyAddonApi({ lineId: id, addonId, redirect_url });
            }}
            disabled={isPending}
          >
            {isPending ? "Please wait..." : "Apply Addon"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOnsCard;
