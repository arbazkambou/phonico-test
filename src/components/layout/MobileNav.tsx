"use client";

import { History, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./MobileNav.module.css";
import { useAuth } from "@/Contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getAllLines } from "@/lib/LineApis";
import { getLinesHistory } from "@/lib/LineHistoryApis";
import LoadingSkeltonMini from "./LoadingSkeltonMini";
function MobileNav({
  setIsVisible,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [show, setShow] = useState(false);
  const { isAuthenticated, logout, isAuthLoading } = useAuth();

  const { data: lines = [], isLoading: isLinesLoading } = useQuery({
    queryKey: ["lines"],
    queryFn: getAllLines,
    enabled: isAuthenticated,
  });

  const { data: lineHistory = [], isLoading: isLineHistoryLoading } = useQuery({
    queryKey: ["lineHistory"],
    queryFn: getLinesHistory,
    enabled: isAuthenticated,
  });

  const handleClose = () => {
    setShow(false);
    setIsVisible(true);
  };
  const handleShow = () => {
    setShow(true);
    setIsVisible(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Plans", href: "/plans" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  const nonAuthLinks = [
    { label: "Login", href: "/login" },
    { label: "Sign Up", href: "/register" },
  ];

  // const authLinks = [
  //   // { label: "Manage Lines" },
  //   { label: "Order History" },
  //   { label: "Logout" },
  // ];
  return (
    <nav className={`${styles.nav}`}>
      <button
        onClick={handleShow}
        className="myButton myButtonUnColored px-3 py-2"
      >
        <Menu size={28} />
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="d-flex flex-column align-items-center gap-5">
            <div>
              <Image
                src={"/images/siteLogo.png"}
                height={85}
                width={95}
                alt="logo"
                loading="eager"
                priority
              />
            </div>
            <div className="d-flex flex-column align-items-center gap-3">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`${styles.navLinks} ${styles.navLinks}`}
                  onClick={() => {
                    handleClose();
                    setIsVisible(true);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="d-flex flex-column align-items-center gap-3">
              {isAuthLoading || isLinesLoading || isLineHistoryLoading ? (
                <LoadingSkeltonMini />
              ) : isAuthenticated ? (
                <>
                  {lineHistory && lineHistory.length > 0 && (
                    <Link
                      href={`${"/order-history"}`}
                      className={`myButton myButtonColored px-5`}
                    >
                      <History />
                    </Link>
                  )}

                  {lines && lines.length > 0 && (
                    <Link
                      href={`${"/my-esim"}`}
                      className={`myButton myButtonColored px-3`}
                    >
                      Manage Lines
                    </Link>
                  )}

                  <button
                    className={`myButton myButtonUnColored d-flex align-items-center justify-content-center gap-1 py-2 px-4`}
                    onClick={() => logout()}
                  >
                    <span>
                      <Image
                        src={"/images/logoutIcon.svg"}
                        width={20}
                        height={20}
                        alt="logout"
                      />
                    </span>
                    <span className="textAccent fontWeight500 mt-1">
                      Logout
                    </span>
                  </button>
                </>
              ) : (
                // ? authLinks.map((item, index) => {
                //     return item.label === "Logout" ? (
                //       <button
                //         key={index}
                //         className={`myButton myButtonUnColored d-flex align-items-center justify-content-center gap-1`}
                //         onClick={() => {
                //           logout();
                //           handleClose();
                //           setIsVisible(true);
                //         }}
                //       >
                //         <span>
                //           <Image
                //             src={"/images/logoutIcon.svg"}
                //             width={20}
                //             height={20}
                //             alt="logout"
                //           />
                //         </span>
                //         <span className="textAccent fontWeight500 mt-1">
                //           {item.label}
                //         </span>
                //       </button>
                //     ) : (
                //       <Link
                //         href={"/order-history"}
                //         key={index}
                //         className={`myButton myButtonColored px-3`}
                //         onClick={() => {
                //           handleClose();
                //           setIsVisible(true);
                //         }}
                //       >
                //         {item.label}
                //       </Link>
                //     );
                //   })
                nonAuthLinks.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className={`myButton ${
                      item.label === "Login"
                        ? "myButtonColored textWhite fontWeight500"
                        : "myButtonUnColored fontWeight600"
                    }`}
                    onClick={() => {
                      handleClose();
                      setIsVisible(true);
                    }}
                  >
                    {item.label}
                  </Link>
                ))
              )}
            </div>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default MobileNav;
