import { isBefore, isAfter, parseISO } from "date-fns";

type DateRange = {
  start_date: string;
  end_date: string;
};

export function getStatus(dateRange: DateRange): "Active" | "Expired" {
  const now = new Date();
  const startDate = parseISO(
    dateRange?.start_date ? dateRange.start_date : "2024-10-29 08:10:28"
  );
  const endDate = parseISO(
    dateRange?.end_date ? dateRange.end_date : "2024-11-29 08:10:28"
  );

  if (isBefore(startDate, now) && isAfter(endDate, now)) {
    return "Active";
  } else {
    return "Expired";
  }
}
