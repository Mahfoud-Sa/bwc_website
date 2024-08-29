import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addReferenceSchema } from "src/types/validation";
import { z } from "zod";
import Label from "src/ui/label";
import { Input } from "src/ui/input";
export default function AddReferenceForm() {
  const form = useForm<z.infer<typeof addReferenceSchema>>({
    resolver: zodResolver(addReferenceSchema),
  });
  return (
    <Form {...form}>
      <form
        //   onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-[90vh] "
      >
        <div className="grid grid-cols-4 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text=" العنوان   " />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{" العنوان "}</FormLabel>
                  <FormControl>
                    <Input placeholder="   ادخل العنوان ... " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div dir="ltr" className=" text-end col-span-1 h-auto translate-y-10">
            <Label text=" Title   " />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{" Title "}</FormLabel>
                  <FormControl>
                    <Input placeholder="  Enter The Title " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text=" الرابط   " />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{" الرابط "}</FormLabel>
                  <FormControl>
                    <Input placeholder="   ادخل الرابط ... " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
