import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import {
  SimSwapHistoryResponseType,
  SimSwapResponseType,
} from "@/types/SimSwapTypes";

export async function swapSim({
  lineId,
  imei,
  redirect_url,
}: {
  lineId: string;
  imei: string;
  redirect_url: string;
}) {
  try {
    const response = await ClientSide.post<SimSwapResponseType>(
      `/api/line/${lineId}/new-sim`,
      { imei, redirect_url, ...queryParams }
    );

    if (!response.data.status) {
      throw new Error("Could not swap sim");
    }

    return response.data.data.url;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getSimSwapHistory(lineId: string) {
  try {
    const response = await ClientSide.get<SimSwapHistoryResponseType>(
      `/api/line/${lineId}/sim/history`,
      { params: queryParams }
    );

    if (!response.data.status) {
      throw new Error("Could not swap sim");
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
