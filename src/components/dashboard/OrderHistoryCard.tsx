import { LineHistoryType } from "@/types/LineHistoryTypes";
import { Ban, CircleDashed, UserRoundCheck } from "lucide-react";
import styles from "./OrderHistoryCard.module.css";
import { useRouter } from "next/navigation";

function OrderHistoryCard({ orderHistory }: { orderHistory: LineHistoryType }) {
  const { imei, status, line_status, has_active_line, activation_line } =
    orderHistory;
  const router = useRouter();
  return (
    <div className={`${styles.esimCard} d-flex flex-column  gap-3`}>
      <div
        className={`${styles.cardHeader} d-flex align-items-center justify-content-between p-3`}
      >
        <p className="font20 fontWeight600">IMEI</p>
        <p className="font20 fontWeight500">{imei}</p>
      </div>
      <div className="d-flex flex-column gap-3 px-3 py-2">
        <div className="d-flex align-items-center justify-content-between gap-5">
          <p className="font20 fontWeight500">Status</p>
          <p
            className="fontWeight500"
            style={{
              color: `${
                status === "SUCCESS"
                  ? "#4CAF50"
                  : status === "INITIALIZED"
                  ? "#F78100"
                  : "#FF0B0B"
              }`,
            }}
          >
            {status}
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-between gap-5">
          <p className="font20 fontWeight500">Line Status</p>
          <p className="fontWeight500">
            {line_status && status !== "FAILED"
              ? line_status
              : !line_status && status !== "FAILED"
              ? "In Process..."
              : "FAILED"}
          </p>
        </div>
      </div>
      {status !== "FAILED" && line_status === "ACTIVE" && <ActiveMessage />}
      {status !== "FAILED" && line_status === "SUSPENDED" && (
        <SuspendedMessage />
      )}
      {status !== "FAILED" && line_status === "PENDING" && <PendingMessage />}
      {status !== "FAILED" && line_status === "DEACTIVATED" && (
        <DeactivatedMessage />
      )}
      {status !== "FAILED" && line_status === "WAITING-NUMBER" && (
        <WaitingMessage />
      )}
      {status !== "FAILED" && line_status === "PROCESSING" && (
        <ProcessingMessage />
      )}
      {status === "FAILED" && <FailedMessage />}
      {line_status === "FAILED" && <FailedMessage />}

      {status !== "FAILED" && line_status === "" && <PendingMessage />}
      {/* {line_status === "Active" && <ActiveMessage />} */}
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="myButton myButtonOutline my-3 px-5"
          disabled={has_active_line ? false : true}
          onClick={() =>
            router.push(
              `${activation_line ? `/my-esim/${activation_line.id}` : "#"}`
            )
          }
        >
          Manage Lines
        </button>
      </div>
    </div>
  );
}

export default OrderHistoryCard;

function ActiveMessage() {
  return (
    <p
      className="d-flex align-items-center px-3 gap-2 font14 fontWeight400"
      style={{ color: "#4CAF50" }}
    >
      <UserRoundCheck />
      Your Number is activated successfully proceed to manage line.
    </p>
  );
}

function SuspendedMessage() {
  return (
    <p
      className="d-flex align-items-center px-3 gap-2 font14 fontWeight400"
      style={{ color: "#B14305" }}
    >
      <Ban />
      Your number has been suspended due to payment failure. Contact support
      team and pay within 5 days to restore your number.
    </p>
  );
}

function PendingMessage() {
  return (
    <p
      className="d-flex align-items-center px-3 gap-2 font14 fontWeight400"
      style={{ color: "#F78100" }}
    >
      <CircleDashed />
      Your number is in processing you will receive the confirmation in a while.
    </p>
  );
}

function WaitingMessage() {
  return (
    <p
      className="d-flex align-items-center px-3 gap-2 font14 fontWeight400"
      style={{ color: "#F78100" }}
    >
      <CircleDashed />
      Number is pending activation.
    </p>
  );
}
function ProcessingMessage() {
  return (
    <p
      className="d-flex align-items-center px-3 gap-2 font14 fontWeight400"
      style={{ color: "#F78100" }}
    >
      <CircleDashed />
      Number is pending activation.
    </p>
  );
}

function FailedMessage() {
  return (
    <p
      className="d-flex align-items-center px-3 gap-2 font14 fontWeight400"
      style={{ color: "#FF0B0B" }}
    >
      <Ban />
      Number activation has been failed.
    </p>
  );
}

function DeactivatedMessage() {
  return (
    <p
      className="d-flex align-items-center px-3 gap-2 font14 fontWeight400"
      style={{ color: "#FF0B0B" }}
    >
      <Ban />
      Your number has been deactivated permanently.
    </p>
  );
}
