import { formatDateTime } from "@/helpers/formatDate";
import { LineType } from "@/types/LinesTypes";
import styles from "./EsimDetailCard.module.css";
import Link from "next/link";

function EsimDetailCard({ line }: { line: LineType }) {
  const { iccid, number, status, created_at, id } = line;
  return (
    <div className={`${styles.esimCard} d-flex flex-column  gap-3`}>
      <div
        className={`${styles.cardHeader} d-flex align-items-center justify-content-between p-3`}
      >
        <p className="font20 fontWeight600">ICCID</p>
        <p className="font20 fontWeight500">{iccid}</p>
      </div>
      <div className="d-flex flex-column gap-3 px-3 py-2">
        <div className="d-flex align-items-center justify-content-between gap-5">
          <p className="font20 fontWeight500">Status</p>
          <p className="fontWeight500">{status}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-5">
          <p className="font20 fontWeight500">Number</p>
          <p className="fontWeight500">{number}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-5">
          <p className="font20 fontWeight500">Purchase Date</p>
          <p className="fontWeight500">{formatDateTime(created_at)}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Link
          className="myButton myButtonOutline my-3 px-5"
          href={`/my-esim/${id}`}
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

export default EsimDetailCard;
