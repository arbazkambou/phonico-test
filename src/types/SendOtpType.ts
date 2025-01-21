export interface SendOtpResponseType {
  status: boolean;
  message: string;
  errors?: string[];
}

export interface SendOtpInputType {
  email: string;
}

export interface SendOtpReturnType {
  message: string;
  errors?: string[];
}
