import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import {
  CheckImeiResponseType,
  CheckImeiReturnType,
  SupportedDeviceResponseType,
  SupportedDeviceReturnType,
} from "@/types/SupportedDevicesType";
import axios from "axios";
const url =
  "https://esimcard.com/api/get-supported-mobile-devices?key=esimcard-2001-101110-2030";

export async function getSupportedDeviceList(): Promise<SupportedDeviceReturnType> {
  try {
    const response = await axios.get<SupportedDeviceResponseType>(url);

    const { data } = response.data;

    return { data };
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   throw new Error(error.response?.data.message || error.message);
    // } else if (error instanceof Error) {
    //   throw new Error(error.message);
    // } else {
    //   throw new Error("Something went wrong!");
    // }

    throw new Error(globalErrorHandler(error));
  }
}

export async function checkImei(imei: string): Promise<CheckImeiReturnType> {
  try {
    const response = await ClientSide.post<CheckImeiResponseType>(
      "/api/internal-api/imei-compatible",

      { imei, ...queryParams },
      {
        headers: { "API-KEY": process.env.NEXT_PUBLIC_API_KEY },
      }
    );
    const { status } = response.data;
    if (status === true) {
      return { status, message: "Your device is eSIM compatible" };
    } else {
      throw new Error(
        "Your device not compatible with esim. You cannot use this device to activate a phone number with us"
      );
    }
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   throw new Error(
    //     error.response?.data.message ||
    //       error.response?.data?.errors[0] ||
    //       error.response?.data?.error ||
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
