export interface GetCheckoutSummaryResponseType {
  status: boolean;
  data: {
    balance: number;
    total_amount: number;
    discount: number;
    amount_deducted_from_wallet: number;
    amount_deducted_from_card: number;
  };
}

export interface ProcessCheckoutInputType {
  zipcode: string;
  imei: string;
  activation_plan_id: string;
  redirect_url: string;
}

export interface ProcessCheckoutResponseType {
  status: boolean;
  errors: string[];
  data: {
    verfied: boolean;
    stripe_checkout_url: string;
    open_checkout: boolean;
  };
}

export interface ProcessCheckoutReturnType {
  stripeCheckoutUrl?: string;
  openCheckout: boolean;
}
