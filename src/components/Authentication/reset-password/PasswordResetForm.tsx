"use client";

import { useState } from "react";
import SendPasswordResetPinForm from "@/components/Authentication/reset-password/SendPasswordResetPinForm";
import SendPasswordResetUserDataForm from "@/components/Authentication/reset-password/SendPasswordRestUserDataForm";

function PasswordResetForm() {
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);

  return !isOTPSent ? (
    <SendPasswordResetPinForm setIsOTPSent={setIsOTPSent} />
  ) : (
    <SendPasswordResetUserDataForm />
  );
}

export default PasswordResetForm;
