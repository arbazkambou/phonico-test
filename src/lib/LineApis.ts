import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import {
  GetAllLinesResponseType,
  GetLineUsageResponseType,
  GetSimOnLineResponseType,
  GetSingleLineResponseType,
  LineType,
} from "@/types/LinesTypes";

export async function getAllLines(): Promise<LineType[]> {
  try {
    const response = await ClientSide.get<GetAllLinesResponseType>(
      "/api/line",
      { params: queryParams }
    );
    if (!response.data.status) {
      throw new Error("Could not get lines!");
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getSingleLine(lineId: string | null): Promise<LineType> {
  try {
    const response = await ClientSide.get<GetSingleLineResponseType>(
      `/api/line/${lineId}/details`,
      { params: queryParams }
    );
    if (!response.data.status) {
      if (response.data.message) {
        throw new Error(response.data.message);
      }
      throw new Error("Could not get line detail!");
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getLineUsage(lineId: string) {
  try {
    const response = await ClientSide.get<GetLineUsageResponseType>(
      `/api/line/${lineId}/usage`,
      { params: queryParams }
    );
    if (!response.data.status) {
      throw new Error(response.data.message);
    }

    return response.data.data.overall;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getSimOnLine(lineId: string) {
  try {
    const response = await ClientSide.get<GetSimOnLineResponseType>(
      `/api/line/${lineId}/sim`,
      { params: queryParams }
    );

    if (!response.data.status) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
