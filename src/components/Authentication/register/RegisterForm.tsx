"use client";

import { useAuth } from "@/Contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SendEmailForm from "@/components/Authentication/register/SendEmailForm";
import SendUserDataForm from "@/components/Authentication/register/SendUserDataForm";
function RegisterForm() {
  const { isAuthenticated } = useAuth();
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [router, isAuthenticated]);

  return isOTPSent ? (
    <SendUserDataForm />
  ) : (
    <SendEmailForm setIsOTPSent={setIsOTPSent} />
  );
}

export default RegisterForm;
