import { TransactionHistoryType } from "@/types/ManageSubscriptionTypes";
import styles from "./SubscriptionsHistory.module.css";
import { formatDateTime } from "@/helpers/formatDate";

function SubscriptionsHistory({
  transactionHistoryData,
}: {
  transactionHistoryData: TransactionHistoryType[];
}) {
  return (
    <div className={`${styles.tableWrapper} p-3`}>
      <div className={styles.table}>
        {/* Headings */}
        <div className={`${styles.header} fontWeight500 textSecondary`}>
          <div className={styles.cell}>Date</div>
          <div className={styles.cell}>Type</div>
          <div className={styles.cell}>Amount</div>
        </div>
        {/* Data Rows */}
        {transactionHistoryData && transactionHistoryData.length > 0 ? (
          <div className="d-flex flex-column gap-3">
            {transactionHistoryData.map((transaction, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.cell}>
                  {formatDateTime(transaction.created_at)}
                </div>
                <div className={styles.cell}>{transaction.description}</div>
                <div
                  className={styles.cell}
                  style={{ color: transaction.amount < 0 ? "red" : "#08B94E" }}
                >
                  {transaction.amount > 0 ? "+" : "-"}$
                  {Math.abs(transaction.amount)}
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
  );
}

export default SubscriptionsHistory;
