import React from "react";
import styles from "./AddOnsHistory.module.css";
import { RefreshCcw } from "lucide-react";
import { AddonHistoryType } from "@/types/AddonsTypes";
import { getStatus } from "../helpers/getStatus";
import { formatDateTime } from "@/helpers/formatDate";

// Define the props interface

function AddOnsHistory({
  addonsHistory,
  handleRefresh,
  isAddonsHistoryLoading,
}: {
  addonsHistory: AddonHistoryType[];
  handleRefresh: () => void;
  isAddonsHistoryLoading: boolean;
}) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="font30 fontWeight500 textAccent ">AddOns History</p>
        <button
          className="myButton myButtonColored rounded-pill d-flex align-items-center gap-2"
          onClick={handleRefresh}
          disabled={isAddonsHistoryLoading}
        >
          {isAddonsHistoryLoading ? (
            "Refreshing..."
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
            <div className={styles.cell}>Date</div>
            <div className={styles.cell}>Name</div>
            <div className={styles.cell}>Expires On</div>
            <div className={styles.cell}>Amount</div>
            <div className={styles.cell}>Status</div>
          </div>
          {/* Data Rows */}

          {addonsHistory && addonsHistory.length > 0 ? (
            <div className="d-flex flex-column gap-3">
              {addonsHistory.map((addon, index) => (
                <div key={index} className={styles.row}>
                  <div className={styles.cell}>
                    {formatDateTime(addon.pivot.start_date)}
                  </div>
                  <div className={styles.cell}>{addon.name}</div>
                  <div className={styles.cell}>
                    {formatDateTime(addon.pivot.end_date)}
                  </div>
                  <div className={styles.cell}>${addon.price}</div>
                  <div
                    className={styles.cell}
                    style={{
                      color:
                        getStatus({
                          start_date: addon.pivot.start_date,
                          end_date: addon.pivot.end_date,
                        }) === "Expired"
                          ? "red"
                          : "#08B94E",
                    }}
                  >
                    {getStatus({
                      start_date: addon.pivot.start_date,
                      end_date: addon.pivot.end_date,
                    })}
                  </div>
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

export default AddOnsHistory;
