import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import {
  PasswordResetUserInputType,
  PasswordResetUserReturnType,
} from "@/types/PasswordResetUserType";
import {
  RegisterUserInputType,
  RegisterUserResponeType,
  RegisterUserReturnType,
} from "@/types/RegisterUserTypes";
import {
  SendOtpInputType,
  SendOtpResponseType,
  SendOtpReturnType,
} from "@/types/SendOtpType";

//Will Send OTP to user who is attempting to register there account
export async function sendOTP({
  email,
}: {
  email: string;
}): Promise<SendOtpReturnType> {
  try {
    const response = await ClientSide.post<SendOtpResponseType>(
      "/api/send-otp",
      {
        email,
        ...queryParams,
      }
    );
    if (!response.data.status) {
      throw new Error(response.data.message);
    }
    const { message } = response.data;
    return { message };
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   throw new Error(
    //     error.response?.data.errors[0] ||
    //       error.response?.data.message ||
    //       error.message
    //   );
    // } else if (error instanceof Error) {
    //   throw new Error(error.message);
    // } else {
    //   throw new Error("Something went wrong!");
    // }

    throw new Error(globalErrorHandler(error));
  }
}

//Will verify the user data and OTP and then create there account
export async function registerUser({
  email,
  password,
  otp,
  name,
}: RegisterUserInputType): Promise<RegisterUserReturnType> {
  try {
    const response = await ClientSide.post<RegisterUserResponeType>(
      "/api/register",
      {
        email,
        password,
        otp,
        name,
        ...queryParams,
      }
    );

    if (!response.data.status) {
      throw new Error(response.data.message);
    }
    const { message, access_token: token, user } = response.data;
    return { message, user, token };
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   throw new Error(error.message);
    // } else if (error instanceof Error) {
    //   throw new Error(error.message);
    // } else {
    //   throw new Error("Something went wrong!");
    // }

    throw new Error(globalErrorHandler(error));
  }
}

//Will send OTP pin to user email that will be required to reset there password
export async function sendPasswordResetPin({
  email,
}: SendOtpInputType): Promise<SendOtpReturnType> {
  try {
    const response = await ClientSide.post<SendOtpResponseType>(
      "/api/user/send-password-reset-email",
      {
        email,
        ...queryParams,
      }
    );

    if (!response.data.status) {
      throw new Error(response.data.message);
    }
    const { message } = response.data;
    return { message };
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   throw new Error(error.message);
    // } else if (error instanceof Error) {
    //   throw new Error(error.message);
    // } else {
    //   throw new Error("Something went wrong!");
    // }
    throw new Error(globalErrorHandler(error));
  }
}

//Will verify the user data and pin and then there password will be changed
export async function sendPasswordRestUserData({
  email,
  password,
  token,
  password_confirmation,
}: PasswordResetUserInputType): Promise<PasswordResetUserReturnType> {
  try {
    const response = await ClientSide.post<RegisterUserResponeType>(
      "/api/user/password-reset",
      {
        email,
        password,
        token,
        password_confirmation,
        ...queryParams,
      }
    );

    if (!response.data.status) {
      throw new Error(response.data.message);
    }
    const { message } = response.data;
    return { message };
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   throw new Error(error.message);
    // } else if (error instanceof Error) {
    //   throw new Error(error.message);
    // } else {
    //   throw new Error("Something went wrong!");
    // }
    throw new Error(globalErrorHandler(error));
  }
}
