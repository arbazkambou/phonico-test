import React from "react";
import SubscriptionsHistory from "./SubscriptionsHistory";
import { useMutation, useQuery } from "@tanstack/react-query";
import { manageSubscription } from "@/lib/SubscriptionApis";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getTransactionHistory } from "@/lib/PlanApis";
import LoadingSpinner from "../layout/LoadingSpinner";

const ManageSubscriptions: React.FC = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const {
    data: transactionHistoryData,
    isLoading: isTransactionHistoryLoading,
  } = useQuery({
    queryKey: ["transactionHistory"],
    queryFn: getTransactionHistory,
  });

  const { mutate: manageSubscriptionApi, isPending: isSubscriptionLoading } =
    useMutation({
      mutationFn: manageSubscription,
      onSuccess: (data) => {
        router.push(data);
      },
      onError: () =>
        toast.error("Something went wrong while managing subscriptions!"),
    });

  if (isTransactionHistoryLoading) return <LoadingSpinner />;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="font30 fontWeight500 textAccent ">Transaction History</p>
        <button
          className="myButton myButtonColored rounded-pill d-flex align-items-center gap-2"
          onClick={() => {
            let redirect_url = "";
            if (typeof window !== undefined) {
              redirect_url = `${window.location.origin}/my-esim/${id}`;
            }
            manageSubscriptionApi(redirect_url);
          }}
          disabled={isSubscriptionLoading}
        >
          <span>
            {isSubscriptionLoading ? "Please wait..." : "Manage Subscriptions"}
          </span>
        </button>
      </div>
      <SubscriptionsHistory transactionHistoryData={transactionHistoryData!} />
    </div>
  );
};

export default ManageSubscriptions;
