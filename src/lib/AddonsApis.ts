import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import {
  ApplyAddonResponseType,
  GetAddonsHistoryResponseType,
  getApplicableAddonsResponseType,
} from "@/types/AddonsTypes";

export async function getApplicableAddons() {
  try {
    const response = await ClientSide.get<getApplicableAddonsResponseType>(
      "/api/line/addons",
      { params: queryParams }
    );
    if (!response.data.status) {
      throw new Error("Could not get addons");
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getAddonsHistory(lineId: string) {
  try {
    const response = await ClientSide.get<GetAddonsHistoryResponseType>(
      `/api/line/${lineId}/addons`,
      { params: queryParams }
    );
    if (!response.data.status) {
      throw new Error("Could not get addons histroy");
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function applyAddon({
  lineId,
  addonId,
  redirect_url,
}: {
  lineId: string;
  addonId: string | number;
  redirect_url: string;
}) {
  try {
    const response = await ClientSide.post<ApplyAddonResponseType>(
      `/api/line/${lineId}/apply-addons`,
      { addon_id: addonId, redirect_url, ...queryParams }
    );
    if (!response.data.status) {
      throw new Error("Could not apply addons");
    }

    return response.data.data.url;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
