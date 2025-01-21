import { format } from "date-fns";

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  if (!dateString) {
    return "Missing date";
  }

  if (isNaN(date.getTime())) throw new Error("Invalid date format");

  return format(date, "M-d-yy  , hh:mm a");
}
