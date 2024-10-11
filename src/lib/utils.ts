import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tw = cn;

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(
  isoDate: string,
  formatStr = "do MMMM yyyy",
): string {
  try {
    const date = parseISO(isoDate);
    return format(date, formatStr);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
}
