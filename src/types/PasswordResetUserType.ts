export interface PasswordResetUserResponeType {
  status: boolean;
  message: string;
  errors?: string[];
}

export interface PasswordResetUserInputType {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}

export interface PasswordResetUserReturnType {
  message: string;
}
