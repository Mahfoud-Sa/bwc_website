/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "../lib/utils";
import React from "react";
import { Button } from "./button";
import { FormControl } from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { format } from "date-fns";
import { Calendar } from "./calendar";
import { CalendarIcon } from "lucide-react";
import {
  type FieldValues,
  type ControllerRenderProps,
  type FieldPath,
} from "react-hook-form";
import { Input } from "./input";
import { arSA } from "date-fns/locale";

export function InputDatePicker<T extends FieldValues, N extends FieldPath<T>>({
  field,
  dateFormat,
  disabled = false,
}: {
  field: ControllerRenderProps<T, N>;
  dateFormat?: string;
  disabled?: boolean;
}) {
  const [stringDate, setStringDate] = React.useState<string>(
    field.value ? format(field.value, dateFormat ?? "yyyy-MM-dd") : ""
  );
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  return (
    <Popover>
      <div className="relative w-full ">
        <Input
          type="string"
          disabled={disabled}
          value={stringDate}
          placeholder="ادخل التاريخ"
          onChange={(e) => {
            setStringDate(e.target.value);
            const parsedDate = new Date(e.target.value);
            if (parsedDate.toString() === "Invalid Date") {
              setErrorMessage("تاريخ غير صحيح");
              field.onChange(undefined);
            } else {
              setErrorMessage("");
              field.onChange(parsedDate);
            }
          }}
        />
        {errorMessage !== "" && (
          <div className="absolute left-0 text-sm text-red-400">
            {errorMessage}
          </div>
        )}
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            disabled={disabled}
            className={cn(
              "absolute left-2 top-[50%] h-4 translate-y-[-50%] border-none p-3 font-normal",
              !field.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="h-4 w-4 " />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(selectedDate) => {
            if (!selectedDate) return;
            field.onChange(selectedDate);
            setStringDate(format(selectedDate, dateFormat ?? "yyyy/MM/dd"));
            setErrorMessage("");
          }}
          defaultMonth={field.value}
          initialFocus
          captionLayout="dropdown-buttons" // Use dropdown buttons for month/year selection
          locale={arSA} // Apply Arabic locale for RTL layout
          showOutsideDays
        />
      </PopoverContent>
    </Popover>
  );
}
