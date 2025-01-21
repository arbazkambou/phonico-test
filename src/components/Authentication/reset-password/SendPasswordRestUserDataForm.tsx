"use client";

import FormError from "@/components/helpers/FormError";
import { sendPasswordRestUserData } from "@/lib/AuthApis";
import { PasswordResetUserInputType } from "@/types/PasswordResetUserType";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function SendPasswordRestUserDataForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordResetUserInputType>();
  const [showPassword, setShowPassword] = useState(false);

  const password = watch("password");
  const router = useRouter();

  const { mutate: sendPasswordRestUserDataApi, isPending } = useMutation({
    mutationFn: sendPasswordRestUserData,
    onSuccess: (data) => {
      toast.success(`${data.message} Please login again!`);
      router.push("/login");
    },

    onError: (error) => toast.error(error.message),
  });

  async function onRegisterSubmit(formData: PasswordResetUserInputType) {
    sendPasswordRestUserDataApi(formData);
  }
  return (
    <form
      onSubmit={handleSubmit(onRegisterSubmit)}
      className="mt-5 d-flex flex-column gap-4"
    >
      <div className="d-flex flex-column gap-1">
        <label htmlFor="email" className="myLabelGrey">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className={`myInput myInputGrey`}
          placeholder="name@example.com"
          {...register("email", { required: "Email is required" })}
          disabled={isPending}
        />
        {errors?.email && <FormError message={errors.email.message} />}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="password" className="myLabelGrey">
          Password
        </label>
        <div className="w-100 position-relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be 8 characters long",
              },
            })}
            id="password"
            className={`myInput myInputGrey w-100`}
            placeholder="Enter password"
            disabled={isPending}
          />

          <span
            style={{ position: "absolute", right: "10px", top: "25%" }}
            className="textAccent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>
        {/* <input
          type="password"
          id="password"
          className={`myInput myInputGrey`}
          placeholder="********"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be 8 characters long",
            },
          })}
          disabled={isPending}
        /> */}

        {errors?.password && <FormError message={errors.password.message} />}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="passwordConfirm" className="myLabelGrey">
          Confirm Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="passwordConfirms"
          className={`myInput myInputGrey`}
          disabled={isPending}
          placeholder="********"
          {...register("password_confirmation", {
            required: "Confirm Password is required",
            minLength: {
              value: 8,
              message: "Password must be 8 characters long",
            },
            validate: (value) => {
              return value === password || "Passwords don't match";
            },
          })}
        />
        {errors?.password_confirmation && (
          <FormError message={errors.password_confirmation.message} />
        )}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="pin" className="myLabelGrey">
          Enter pin send to your email
        </label>
        <input
          type="text"
          id="pin"
          disabled={isPending}
          className={`myInput myInputGrey`}
          placeholder="Enter pin here"
          {...register("token", {
            required: "Password reset pin is required",
          })}
        />
        {errors?.token && <FormError message={errors.token.message} />}
      </div>

      <button
        className="myButton myButtonOutline mt-4"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Verifying..." : "Verify"}
      </button>
    </form>
  );
}

export default SendPasswordRestUserDataForm;
