export interface AddonsType {
  id: number;
  name: string;
  price: number;
  data_quantity: string;
  data_unit: string;
  details: string;
  expiry_unit: string;
  expiry: number;
  plan_code: string;
  plan_id: string;
  type: string;
  sms: number;
  minutes: number;
  status: number;
}

export interface AddonHistoryType {
  id: number;
  name: string;
  price: number;
  pivot: {
    activation_line_id: string;
    activation_add_on_id: number;
    price: number;
    start_date: string;
    end_date: string;
  };
}
export interface getApplicableAddonsResponseType {
  status: boolean;
  data: AddonsType[];
}

export interface GetAddonsHistoryResponseType {
  status: boolean;
  data: AddonHistoryType[];
}

export interface ApplyAddonResponseType {
  status: boolean;
  data: {
    url: string;
  };
}
