export interface LineType {
  id: string;
  user_id: string;
  status: string;
  zipcode: string;
  imei: string;
  number: string;
  iccid: string;
  activation_code: string;
  sim_id: string;
  price: string;
  end_date: string;
  plan_name: string;
  created_at: string;
}

export interface LineUsageType {
  name: string;
  data: {
    total: {
      unit: string;
      value: number;
    };
    remaining: {
      unit: string;
      value: number;
    };
  };
  minutes: {
    total: {
      unit: string;
      value: number;
    };
    remaining: {
      unit: string;
      value: number;
    };
  };
  sms: {
    total: {
      unit: string;
      value: number;
    };
    remaining: {
      unit: string;
      value: number;
    };
  };
}

export interface AddonUsageType extends LineUsageType {
  id: number;
}
export interface GetAllLinesResponseType {
  status: boolean;
  data: LineType[];
}

export interface GetSingleLineResponseType {
  status: boolean;
  data: LineType;
  error: string;
  message: string;
}

export interface GetLineUsageResponseType {
  status: boolean;
  message: string;
  data: {
    overall: LineUsageType;
    main_plan: LineUsageType;
    addons: AddonUsageType;
  };
}

export interface SimType {
  id: string;
  iccid: string;
  status: string;
  user_id: string;
  lpa: string;
  activation_code: string;
  smdp_address: string;
  imei: string;
}
export interface GetSimOnLineResponseType {
  status: boolean;
  data: SimType;
  message: string;
}
