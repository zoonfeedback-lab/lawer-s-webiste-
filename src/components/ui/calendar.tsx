"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 bg-white rounded-2xl border shadow-sm text-slate-900", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "space-y-4 w-full",
        month_caption: "flex justify-center pt-1 relative items-center h-10",
        caption_label: "text-sm font-semibold text-slate-900",
        nav: "flex items-center gap-1",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 rounded-lg text-slate-700 absolute left-1 top-1"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 rounded-lg text-slate-700 absolute right-1 top-1"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex w-full",
        weekday: "text-slate-500 rounded-md w-9 font-medium text-[0.8rem] text-center",
        week: "flex w-full mt-1",
        day: "h-9 w-9 text-center text-sm p-0 relative",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal rounded-lg text-slate-900 hover:bg-slate-100 aria-selected:opacity-100"
        ),
        selected:
          "bg-blue-900 !text-white rounded-lg hover:bg-blue-800 [&>button]:!text-white [&>button]:hover:!text-white",
        today: "[&>button]:bg-slate-100 [&>button]:text-slate-900 [&>button]:font-bold",
        outside:
          "text-slate-400 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500",
        disabled: "text-slate-400 opacity-50",
        range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4 text-slate-700" />
          ) : (
            <ChevronRight className="h-4 w-4 text-slate-700" />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
