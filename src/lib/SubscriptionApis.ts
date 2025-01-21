import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import { ManageSubscriptionResponseType } from "@/types/ManageSubscriptionTypes";

export async function manageSubscription(redirect_url: string) {
  try {
    const { platform, platform_version } = queryParams;
    const modifiedQueryParams = { platform, platform_version, redirect_url };
    const response = await ClientSide.get<ManageSubscriptionResponseType>(
      "/api/subscription/manage-subscription",
      { params: modifiedQueryParams }
    );

    return response.data.data.url;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
