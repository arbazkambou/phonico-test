export interface RegisterUserResponeType {
  status: boolean;
  message: string;
  access_token: string;
  token_type: string;
  user: {
    name: string;
    email: string;
    id: string;
    updated_id: string;
    created_at: string;
    email_verified_at: string;
  };
}

export interface RegisterUserInputType {
  name: string;
  email: string;
  password: string;
  otp: string;
}

export interface RegisterUserReturnType {
  message: string;
  token: string;
  user: {
    name: string;
    email: string;
    id: string;
    updated_id: string;
    created_at: string;
    email_verified_at: string;
  };
}
