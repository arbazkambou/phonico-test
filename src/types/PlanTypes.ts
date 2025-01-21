export interface PlanType {
  id: string;
  name: string;
  price: number;
  expiry_type: string;
  minutes_usable: number;
  sms_usable: number;
  data_usable: number;
  bill_type: string;
  data_quantity: number;
  unit: string;
}

export interface GetPlanResponseType {
  status: boolean;
  data: PlanType[];
  message?: string;
  errors?: string;
}

export interface GetPlanReturnType {
  data: PlanType[];
}

export interface PlanCartType extends PlanType {
  duration: number;
}
