"use client";

import { useAuth } from "@/Contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import FormError from "@/components/helpers/FormError";
// import OrLine from "@/components/Authentication/OrLine";
// import SocialLogins from "@/components/Authentication/SocialLogins";
interface Inputs {
  email: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { login, isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { mutate: loginApi, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Login Successfully!");
      router.push("/");
    },
    onError: (error) => toast.error(error.message),
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [router, isAuthenticated]);

  async function onSubmit(formData: Inputs) {
    loginApi(formData);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 d-flex flex-column gap-4"
      >
        <div className="d-flex flex-column gap-1">
          <label htmlFor="email" className="myLabelGrey">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            id="email"
            maxLength={100}
            className={`myInput myInputGrey`}
            placeholder="Enter email"
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

          {errors?.password && <FormError message={errors.password.message} />}
          <Link
            href={"/reset-password"}
            className={`font14 ${styles.link} mt-2`}
          >
            Forgot password?
          </Link>
        </div>

        <button
          className="myButton myButtonOutline mt-4"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
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

export default LoginForm;
