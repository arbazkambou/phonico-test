"use client";
import React, { useState } from "react";
import LoginForm from "@/components/Authentication/login/LoginForm";
import RegisterForm from "@/components/Authentication/register/RegisterForm";
import styles from "./AuthTabs.module.css";
import PasswordResetForm from "@/components/Authentication/reset-password/PasswordResetForm";
import Link from "next/link";

function AuthTabs({
  activeTabProp,
}: {
  activeTabProp: "login" | "register" | "reset";
}) {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "reset">(
    activeTabProp || "login"
  );

  const handleTabClick = (tab: "login" | "register") => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="d-flex flex-column gap-1 mb-4">
        {activeTab === "reset" ? (
          <h2 className="font30 fontWeight700">Forgot Password</h2>
        ) : (
          <h2 className="font30 fontWeight700">
            Start Your Journey with My e-SIM
          </h2>
        )}

        <p className="textMuted">
          Elevate your Medical practice with cutting-edge features, entirely for
          FREE. Let&apos;s get started today!
        </p>
      </div>
      {activeTab !== "reset" && (
        <div className={styles["tabs-container"]}>
          <Link
            href={"/login"}
            className={`${styles["tab-button"]} ${
              activeTab === "login" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("login")}
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className={`${styles["tab-button"]} ${
              activeTab === "register" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("register")}
          >
            Register
          </Link>
        </div>
      )}
      <div className={`${styles["tab-content"]}`}>
        {activeTab === "login" && (
          <div className="d-flex flex-column gap-5">
            <LoginForm />
          </div>
        )}
        {activeTab === "register" && (
          <div className="d-flex flex-column gap-5">
            <RegisterForm />
          </div>
        )}

        {activeTab === "reset" && (
          <div className="d-flex flex-column gap-5">
            <PasswordResetForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthTabs;
