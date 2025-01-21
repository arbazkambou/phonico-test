// globalErrorHandler.ts

import axios from "axios";

export function globalErrorHandler(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.errors[0] ||
      error.response?.data?.message ||
      error.message
    );
  } else if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong!";
}
