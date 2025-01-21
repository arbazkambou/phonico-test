"use client";

import FormError from "@/components/helpers/FormError";
import { useAuth } from "@/Contexts/AuthContext";
import { setCookieWithOptions } from "@/helpers/setCookieWithOptions";
import { registerUser } from "@/lib/AuthApis";
import { RegisterUserInputType } from "@/types/RegisterUserTypes";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface RegisterUser extends RegisterUserInputType {
  confirmPassword: string;
}

function SendUserDataForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterUser>();

  const [showPassword, setShowPassword] = useState(false);

  const password = watch("password");

  const router = useRouter();

  const { setUser, setIsAuthenticated } = useAuth();
  const { mutate: registerUserApi, isPending: isRegistering } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(data.message);
      setUser(data.user);
      setCookieWithOptions({
        key: "token",
        value: data.token,
        options: {
          expires: 1,
          secure: true,
        },
      });
      setIsAuthenticated(true);
      router.push("/");
    },

    onError: (error) => toast.error(error.message),
  });

  async function onRegisterSubmit(formData: RegisterUserInputType) {
    registerUserApi(formData);
  }
  return (
    <form
      onSubmit={handleSubmit(onRegisterSubmit)}
      className="mt-5 d-flex flex-column gap-4"
    >
      <div className="d-flex flex-column gap-1">
        <label htmlFor="name" className="myLabelGrey">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g Arbaz Shoukat"
          className={`myInput myInputGrey`}
          disabled={isRegistering}
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 5,
              message: "Name must be 5 characters long",
            },
          })}
        />
        {errors?.name && <FormError message={errors.name.message} />}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="email" className="myLabelGrey">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`myInput myInputGrey`}
          disabled={isRegistering}
          placeholder="Enter email"
          {...register("email", { required: "Email is required" })}
        />
        {errors?.email && <FormError message={errors.email.message} />}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="password" className="myLabelGrey">
          Password
        </label>
        {/* <input
          type="password"
          id="password"
          placeholder="*********"
          disabled={isRegistering}
          className={`myInput myInputGrey`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be 8 characters long",
            },
          })}
        /> */}

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
            disabled={isRegistering}
          />

          <span
            style={{ position: "absolute", right: "10px", top: "25%" }}
            className="textAccent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>

        {errors?.password && <FormError message={errors.password.message} />}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="passwordConfirm" className="myLabelGrey">
          Confirm Password
        </label>

        <input
          className={`myInput myInputGrey`}
          id="passwordConfirm"
          placeholder="*********"
          type={showPassword ? "text" : "password"}
          disabled={isRegistering}
          {...register("confirmPassword", {
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
        {errors?.confirmPassword && (
          <FormError message={errors.confirmPassword.message} />
        )}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="otp" className="myLabelGrey">
          OTP
        </label>
        <input
          type="text"
          id="otp"
          placeholder="e.g. 1234"
          className={`myInput myInputGrey`}
          disabled={isRegistering}
          {...register("otp", {
            required: "OTP is required",
          })}
        />
        {errors?.otp && <FormError message={errors.otp.message} />}
      </div>

      <button
        disabled={isRegistering}
        className="myButton myButtonOutline mt-4"
        type="submit"
      >
        {isRegistering ? "Verifying..." : "Register"}
      </button>
    </form>
  );
}

export default SendUserDataForm;
