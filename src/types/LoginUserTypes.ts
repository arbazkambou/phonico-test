export interface LoginUserResponseType {
  status: boolean;
  access_token: string;
  device_token: string | null;
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    number: string | number;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    stripe_id: string;
    pm_type: string;
    pm_last_four: string;
    trial_ends_at: string;
    source: string;
    image_url: string;
    deleted_at: string;
    balance: number;
  };
}

export interface LoginUserInputType {
  email: string;
  password: string;
}
