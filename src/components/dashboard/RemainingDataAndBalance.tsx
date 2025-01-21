"use client";
import { useAuth } from "@/Contexts/AuthContext";
import { calculateRemainingPercentage } from "@/helpers/calculateRemainingPercenatge";
import { formatDateTime } from "@/helpers/formatDate";
import { getLineUsage, getSingleLine } from "@/lib/LineApis";
import { useQuery } from "@tanstack/react-query";
import { CalendarCheck } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import LoadingSkelton from "../layout/LoadingSkelton";
import CopyToClipboard from "./CopyToClipboard";
import CustomProgressBar from "./CustomProgressBar";
import styles from "./RemainingDataAndBalance.module.css";

function RemainingDataAndBalance() {
  const { user } = useAuth();
  const params = useParams<{ id: string }>();

  const { data: lineUsage, isLoading: isLineUsageLoading } = useQuery({
    queryKey: ["lineUsage", params.id],
    queryFn: () => getLineUsage(params.id),
  });

  const { data: lineDetail, isLoading: isLineDetailsLoading } = useQuery({
    queryKey: ["line", params.id],
    queryFn: () => getSingleLine(params.id),
  });

  const lineUsageDummy = {
    name: "",
    data: {
      total: {
        unit: "GB",
        value: 1,
      },
      remaining: {
        unit: "GB",
        value: 1,
      },
    },
    minutes: {
      total: {
        unit: "Minutes",
        value: 1200,
      },
      remaining: {
        unit: "Minutes",
        value: 780,
      },
    },
    sms: {
      total: {
        unit: "SMS",
        value: 1200,
      },
      remaining: {
        unit: "SMS",
        value: 620,
      },
    },
  };

  const { data } = lineUsage ? lineUsage : lineUsageDummy;
  const remaningData = calculateRemainingPercentage(
    data.total.value,
    data.remaining.value
  );
  // const remaningMinutes = calculateRemainingPercentage(
  //   minutes.total.value,
  //   minutes.remaining.value
  // );
  // const remaningSms = calculateRemainingPercentage(
  //   sms.total.value,
  //   sms.remaining.value
  // );
  const [breakpoint, setBreakpoint] = useState("");
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setBreakpoint("sm");
      } else if (width >= 576 && width < 768) {
        setBreakpoint("md");
      } else if (width >= 768 && width < 992) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    updateBreakpoint();

    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return (
    <div className="my-5">
      <Row>
        {/* Remaining balanace and user detail data */}

        {isLineDetailsLoading ? (
          <Col lg={5}>
            <LoadingSkelton />
          </Col>
        ) : (
          <Col lg={5} className="d-flex flex-column gap-3">
            {/* user name */}
            <div>
              <p className="font30 fontWeight500">Hi, {user?.name}</p>
              <p className="font20 textSecondary">Current Balance </p>
            </div>

            {/* user balance */}
            <p className="font50 fontWeight500">${user?.balance}</p>

            {/* user detail */}
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-1">
                  <Image
                    src={"/images/pinkDot.svg"}
                    width={8}
                    height={8}
                    alt="pink dot"
                  />
                  <p className="fontWeight500">Number</p>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <Image
                    src={"/images/phone.svg"}
                    width={25}
                    height={25}
                    alt="pink dot"
                  />
                  <p className="fontWeight500">{lineDetail?.number}</p>
                  <div className="ms-2">
                    <CopyToClipboard content={lineDetail?.number!} />
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-1">
                  <Image
                    src={"/images/pinkDot.svg"}
                    width={8}
                    height={8}
                    alt="pink dot"
                  />
                  <p className="fontWeight500">Status</p>
                </div>
                <div className=" ms-2 d-flex align-items-center gap-1">
                  <Image
                    src={"/images/shieldIcon.svg"}
                    width={25}
                    height={25}
                    alt="pink dot"
                  />
                  <p className="fontWeight500">{lineDetail?.status}</p>
                </div>
              </div>

              {/* 3 */}
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-1">
                  <Image
                    src={"/images/pinkDot.svg"}
                    width={8}
                    height={8}
                    alt="pink dot"
                  />
                  <p className="fontWeight500">Renew</p>
                </div>
                <div className=" ms-2 d-flex align-items-center gap-1">
                  {/* <Image
                  src={"/images/homeIcon.svg"}
                  width={25}
                  height={25}
                  alt="pink dot"
                /> */}
                  <CalendarCheck size={26} className="textAccent" />
                  <p className="fontWeight500">
                    {formatDateTime(lineDetail?.end_date!)}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        )}

        {/* Remaining data */}

        {isLineUsageLoading ? (
          <Col lg={7}>
            <LoadingSkelton />
          </Col>
        ) : (
          <Col lg={7} className={`d-flex ${styles.usageBg} mt-5 mt-sm-0`}>
            <div className="d-flex justify-content-between align-items-center w-100">
              {/* remaining internet card */}
              <div
                className={`${styles.usageCard} p-4 d-flex flex-column gap-2`}
              >
                <div className="d-flex justify-content-center">
                  <Image
                    src={"/images/remainingInternet.svg"}
                    height={breakpoint === "sm" ? 40 : 70}
                    width={breakpoint === "sm" ? 40 : 70}
                    alt="remaining internet"
                  />
                </div>
                <p
                  className={`fontWeight500 text-center ${
                    breakpoint === "sm" ? "font10" : "font18"
                  }`}
                >
                  Remaining Internet
                </p>
                <div>
                  {/* <ProgressBar now={80} className={`${styles.purpleBar}`} /> */}
                  <CustomProgressBar value={remaningData} fillColor="#5740FF" />
                </div>
                <p
                  className={`fontWeight500 text-center ${
                    breakpoint === "sm" ? "font18" : "font24"
                  }`}
                  style={{ color: "#5740FF" }}
                >
                  {data.remaining.value}
                  {data.remaining.unit}
                </p>
              </div>

              {/* remaining minutes card */}
              <div
                className={`${styles.usageCard} p-4 d-flex flex-column gap-2`}
              >
                <div className="d-flex justify-content-center">
                  <Image
                    src={"/images/arrowPhone.svg"}
                    height={breakpoint === "sm" ? 40 : 70}
                    width={breakpoint === "sm" ? 40 : 70}
                    alt="remaining internet"
                  />
                </div>
                <p
                  className={`fontWeight500 text-center ${
                    breakpoint === "sm" ? "font10" : "font18"
                  }`}
                >
                  Remaining Minutes
                </p>
                <div>
                  {/* <ProgressBar now={80} className={`${styles.purpleBar}`} /> */}
                  <CustomProgressBar value={100} fillColor="#FC5447" />
                </div>
                <p
                  className={`fontWeight500 text-center ${
                    breakpoint === "sm" ? "font18" : "font24"
                  }`}
                  style={{ color: "#FC5447" }}
                >
                  Unlimited
                  {/* {minutes.remaining.value} */}
                </p>
              </div>

              {/* remaining sms card */}
              <div
                className={`${styles.usageCard} p-4  d-flex flex-column gap-2`}
              >
                <div className="d-flex justify-content-center">
                  <Image
                    src={"/images/sms.svg"}
                    height={breakpoint === "sm" ? 40 : 70}
                    width={breakpoint === "sm" ? 40 : 70}
                    alt="remaining internet"
                  />
                </div>
                <p
                  className={`fontWeight500 text-center ${
                    breakpoint === "sm" ? "font10" : "font18"
                  } px-1 px-sm-3`}
                >
                  Remaining SMS
                </p>
                <div>
                  {/* <ProgressBar now={80} className={`${styles.purpleBar}`} /> */}
                  <CustomProgressBar value={100} fillColor="#6FD195" />
                </div>
                <p
                  className={`fontWeight500 text-center ${
                    breakpoint === "sm" ? "font18" : "font24"
                  }`}
                  style={{ color: "#6FD195" }}
                >
                  Unlimited
                  {/* {sms.remaining.value} */}
                </p>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default RemainingDataAndBalance;
