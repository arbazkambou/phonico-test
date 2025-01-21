import { RefreshCcw } from "lucide-react";
import styles from "./SimSwapHistory.module.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSimSwapHistory } from "@/lib/SimSwapApis";
import LoadingSpinner from "../layout/LoadingSpinner";
import { formatDateTime } from "@/helpers/formatDate";

function SimSwapHistory() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["swapHistory", id],
    queryFn: () => getSimSwapHistory(id),
  });

  function handleRefresh() {
    refetch();
  }
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="font30 fontWeight500 textAccent ">Sim Swap History</p>
        <button
          className="myButton myButtonColored rounded-pill d-flex align-items-center gap-2"
          onClick={handleRefresh}
          disabled={isFetching}
        >
          {isFetching ? (
            "Refetching..."
          ) : (
            <>
              <span>
                <RefreshCcw />
              </span>
              <span>Refresh</span>
            </>
          )}
        </button>
      </div>
      <div className={`${styles.tableWrapper} p-3`}>
        <div className={styles.table}>
          {/* Headings */}
          <div className={`${styles.header} fontWeight500 textSecondary`}>
            <div className={styles.cell}>Date Time</div>
            <div className={styles.cell}>Status</div>
            <div className={styles.cell}>Price</div>
            <div className={styles.cell}>Paid Status</div>
          </div>
          {/* Data Rows */}
          {data && data.length > 0 ? (
            <div className="d-flex flex-column gap-3">
              {data.map((history, index) => (
                <div key={index} className={styles.row}>
                  <div className={styles.cell}>
                    {formatDateTime(history.created_at)}
                  </div>
                  <div className={styles.cell}>{history.status}</div>
                  <div className={styles.cell}>${history.price}</div>
                  <div className={styles.cell}>{history.paid}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.row}>
              <div
                className={styles.cell}
                style={{ flex: 1, textAlign: "center" }}
              >
                No data available
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimSwapHistory;
