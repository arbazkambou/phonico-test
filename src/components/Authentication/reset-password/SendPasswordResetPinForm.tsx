"use client";

import FormError from "@/components/helpers/FormError";
import { sendPasswordResetPin } from "@/lib/AuthApis";
import { SendOtpInputType } from "@/types/SendOtpType";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import OrLine from "@/components/Authentication/OrLine";
// import SocialLogins from "@/components/Authentication/SocialLogins";

function SendPasswordResetPinForm({
  setIsOTPSent,
}: {
  setIsOTPSent: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendOtpInputType>();

  const { mutate: sendPasswordResetPinApi, isPending: isSending } = useMutation(
    {
      mutationFn: sendPasswordResetPin,
      onSuccess: (data) => {
        toast.success(data.message);
        setIsOTPSent(true);
      },
      onError: (error) => toast.error(error.message),
    }
  );

  async function onOtpSubmit(formData: SendOtpInputType) {
    sendPasswordResetPinApi(formData);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onOtpSubmit)}
        className="mt-5 d-flex flex-column gap-4"
      >
        <div className="d-flex flex-column gap-1">
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            className={`myInput myInputGrey`}
            id="email"
            placeholder="name@example.com"
            {...register("email", { required: "Email is required" })}
            disabled={isSending}
          />
          {errors?.email && <FormError message={errors.email.message} />}
        </div>

        <button
          className="myButton myButtonOutline mt-4"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Sending OTP..." : "Submit"}
        </button>
      </form>
      {/* <OrLine /> */}
      {/* <SocialLogins /> */}
      <p className="textMuted text-center font12 mt-2">
        By signing up to create an account I accept Company’s{" "}
        <span className="textPrimary">Terms of use & Privacy Policy</span>
      </p>
    </>
  );
}

export default SendPasswordResetPinForm;
