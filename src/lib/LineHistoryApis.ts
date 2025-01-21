import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import { LineHistoryResponseType } from "@/types/LineHistoryTypes";

export async function getLinesHistory() {
  try {
    const response = await ClientSide.get<LineHistoryResponseType>(
      "/api/line-history",
      { params: queryParams }
    );

    if (!response.data.status) {
      throw new Error("Could not get line history");
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
