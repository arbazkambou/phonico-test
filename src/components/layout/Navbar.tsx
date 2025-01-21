// Navbar.tsx

"use client";
import { useAuth } from "@/Contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MyCart from "../plans/MyCart";
import MobileNav from "./MobileNav";
import styles from "./Navbar.module.css";
import LoadingSkeltonMini from "./LoadingSkeltonMini";
import { useQuery } from "@tanstack/react-query";
import { getAllLines } from "@/lib/LineApis";
import { getLinesHistory } from "@/lib/LineHistoryApis";
import { History } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Plans", href: "/plans/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

const nonAuthLinks = [
  { label: "Login", href: "/login/" },
  { label: "Sign Up", href: "/register/" },
];

// const authLinks = [
//   { label: "Order History" },
//   { label: "Manage Lines" },
//   { label: "Logout" },
// ];

function Navbar() {
  const pathName = usePathname();
  const { isAuthenticated, logout, isAuthLoading } = useAuth();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 70) {
        setIsVisible(true);
      } else if (currentScrollPos > prevScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`${styles.nav} ${
        isVisible ? styles.visible : styles.hidden
      } py-2`}
    >
      <Container>
        <nav className="d-flex justify-content-between align-items-center">
          <Link href={"/"}>
            <div>
              <Image
                src={"/images/siteLogo.png"}
                height={73}
                width={80}
                alt="logo"
                loading="eager"
                priority
              />
            </div>
          </Link>

          <div className="d-none d-lg-flex justify-content-center align-items-center gap-5 fontWeight400">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${styles.navLinks} ${
                  pathName === item.href && styles.active
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="d-none d-lg-flex align-items-center gap-3">
            <MyCart isVisible={isVisible} />

            {isAuthLoading || isLinesLoading || isLineHistoryLoading ? (
              <LoadingSkeltonMini />
            ) : isAuthenticated ? (
              <>
                {lineHistory && lineHistory.length > 0 && (
                  <Link
                    href={`${"/order-history"}`}
                    className={`myButton myButtonColored px-3`}
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
                  <span className="textAccent fontWeight500 mt-1">Logout</span>
                </button>
              </>
            ) : (
              // authLinks.map((item, index) => {
              //   return item.label === "Logout" ? (
              //     <button
              //       key={index}
              //       className={`myButton myButtonUnColored d-flex align-items-center justify-content-center gap-1 py-2 px-4`}
              //       onClick={() => logout()}
              //     >
              //       <span>
              //         <Image
              //           src={"/images/logoutIcon.svg"}
              //           width={20}
              //           height={20}
              //           alt="logout"
              //         />
              //       </span>
              //       <span className="textAccent fontWeight500 mt-1">
              //         {item.label}
              //       </span>
              //     </button>
              //   ) : (
              //     lineHistory && lineHistory.length > 0 && (
              //       <Link
              //         href={`${
              //           item.label === "Manage Lines"
              //             ? "/my-esim"
              //             : "/order-history"
              //         }`}
              //         key={index}
              //         className={`myButton myButtonColored px-3`}
              //       >
              //         {item.label === "Order History" ? (
              //           <History />
              //         ) : (
              //           item.label
              //         )}
              //       </Link>
              //     )
              //   );
              // })
              nonAuthLinks.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`myButton ${
                    item.label === "Login"
                      ? "myButtonColored textWhite fontWeight500"
                      : "myButtonUnColored fontWeight600"
                  }`}
                >
                  {item.label}
                </Link>
              ))
            )}
          </div>
          <div className="d-flex d-lg-none align-items-center gap-4">
            <MyCart isVisible={isVisible} />
            <MobileNav setIsVisible={setIsVisible} />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
