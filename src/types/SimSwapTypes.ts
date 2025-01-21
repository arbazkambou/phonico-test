export interface SimSwapResponseType {
  status: boolean;
  data: {
    url: string;
  };
}

export interface SimSwapHistoryType {
  id: string;
  type: string;
  status: string;
  paid: string;
  user_id: string;
  activation_line_id: string;
  sim_id: string | null;
  imei: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface SimSwapHistoryResponseType {
  status: boolean;
  data: SimSwapHistoryType[];
}
