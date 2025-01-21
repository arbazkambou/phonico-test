export interface TransactionHistoryType {
  id: string;
  source: string;
  description: string;
  amount: number;
  created_at: string;
}

export interface ManageSubscriptionResponseType {
  status: boolean;
  data: {
    url: string;
  };
}

export interface TransactionHistoryResponseType {
  status: boolean;
  data: TransactionHistoryType[];
}
