import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import { TransactionHistoryResponseType } from "@/types/ManageSubscriptionTypes";
import { GetPlanResponseType, GetPlanReturnType } from "@/types/PlanTypes";

export async function getPlans(): Promise<GetPlanReturnType> {
  try {
    const response = await ClientSide.get<GetPlanResponseType>(
      "/api/guest-plans",
      {
        headers: { "API-KEY": process.env.NEXT_PUBLIC_API_KEY },
        params: queryParams,
      }
    );

    if (!response.data.status) {
      throw new Error(response.data.message);
    }
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

export async function getTransactionHistory() {
  try {
    const response = await ClientSide.get<TransactionHistoryResponseType>(
      "/api/user/order",
      { params: queryParams }
    );

    if (!response.data.status) {
      throw new Error("Could not get transactions history");
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
