import ClientSide from "@/api/ClientSide";
import { globalErrorHandler } from "@/helpers/globalErrorHandler";
import { queryParams } from "@/helpers/queryParams";
import {
  GetCheckoutSummaryResponseType,
  ProcessCheckoutInputType,
  ProcessCheckoutResponseType,
} from "@/types/CheckoutTypes";

export async function getCheckoutSummary(planId: string | undefined) {
  try {
    const response = await ClientSide.post<GetCheckoutSummaryResponseType>(
      "/api/cart/checkout/summary",
      {
        activation_plan_id: planId,
        ...queryParams,
      }
    );

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function processCheckout({
  zipcode,
  imei,
  activation_plan_id,
  redirect_url,
}: ProcessCheckoutInputType) {
  try {
    const response = await ClientSide.post<ProcessCheckoutResponseType>(
      "/api/cart/checkout/process",
      {
        activation_plan_id,
        imei,
        zipcode,
        redirect_url,
        test: false,
        test_status: false,
        ...queryParams,
      }
    );

    if (!response.data.status) {
      if (response.data.errors) {
        throw new Error(response.data.errors[0]);
      } else {
        throw new Error("Invalid inputs");
      }
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
