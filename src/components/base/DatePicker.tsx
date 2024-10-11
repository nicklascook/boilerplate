import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

interface DatePickerProps {
  date?: Date;
  setDate?: (date: Date | undefined) => void;
  dateRange?: DateRange;
  setDateRange?: (dateRange: DateRange | undefined) => void;
  className?: string;
}

export function DatePicker({
  date,
  setDate,
  dateRange,
  setDateRange,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isRangePicker = !!setDateRange;

  const handleSelect = (value: Date | DateRange | undefined) => {
    if (isRangePicker && setDateRange) {
      setDateRange(value as DateRange);
    } else if (setDate) {
      setDate(value as Date);
    }
    if (!isRangePicker) setIsOpen(false);
  };

  const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

  const displayText = isRangePicker
    ? dateRange?.from
      ? `${formatDate(dateRange.from)}${dateRange.to ? ` - ${formatDate(dateRange.to)}` : ""}`
      : "Pick a date range"
    : date
      ? formatDate(date)
      : "Pick a date";

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && !dateRange && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayText}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          {isRangePicker ? (
            <Calendar
              initialFocus
              mode="range"
              selected={dateRange}
              onSelect={handleSelect as (value: DateRange | undefined) => void}
              numberOfMonths={2}
            />
          ) : (
            <Calendar
              initialFocus
              mode="single"
              selected={date}
              onSelect={handleSelect as (value: Date | undefined) => void}
              numberOfMonths={1}
            />
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
