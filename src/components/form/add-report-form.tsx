import React, { useState } from "react";
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
import { Button } from "../../ui/button";
import { useMutation } from "@tanstack/react-query";
import { postApi } from "src/lib/http";
import { useToast } from "src/ui/use-toast";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AddPersonalImageDialog from "../dailog/add-personal-image-dialog";

type ReferenceFormValue = z.infer<typeof addReferenceSchema>;

export default function AddReportForm() {
  // const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof addReferenceSchema>>({
    resolver: zodResolver(addReferenceSchema),
  });

  const { mutate } = useMutation({
    mutationKey: ["AddReferences"],
    mutationFn: (datas: ReferenceFormValue) =>
      postApi("/api/References", {
        ar_title: datas.ar_title,
        en_title: datas.en_title,
        link: datas.link,
      }),
    onSuccess: () => {
      // toast({
      //   title: "اشعار",
      //   variant: "success",
      //   description: "تمت الاضافة بنجاح",
      // });
      toast.success("تمت الاضافة بنجاح.", {
        style: {
          border: "1px solid #4FFFB0",
          padding: "16px",
          color: "#4FFFB0",
        },
        iconTheme: {
          primary: "#4FFFB0",
          secondary: "#FFFAEE",
        },
      });
      navigate("/admin-dashboard/references");
    },
    onError: (error) => {
      // toast({
      //   title: "لم تتم العملية",
      //   description: error.message,
      //   variant: "destructive",
      // });
    },
  });
  const [personalPhoto, setPersonalPhoto] = useState<string>();
  // data?.file.personalPhoto ?? "",
  const onSubmit = (datas: ReferenceFormValue) => {
    mutate(datas);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-[90vh]   w-[100%] "
      >
        {
          <>
            <div className=" items-right col-span-1 flex h-[140px] flex-col mr-10">
              <label className="text-md mb-2 block font-bold text-gray-950">
                صورة التقرير
              </label>
              <AddPersonalImageDialog
                setPersonalPhoto={setPersonalPhoto}
                personalPhoto={personalPhoto}
              />
              <FormField
                control={form.control}
                name="ar_title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="hidden"
                        {...field}
                        onChange={(e) => {
                          field.onChange(personalPhoto);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-3"></div>
          </>
        }
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="عنوان التقرير" />
            <FormField
              control={form.control}
              name="ar_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"عنوان التقرير"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل عنوان التقرير..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div dir="ltr" className="text-end col-span-1 h-auto translate-y-10">
            <Label text="Title" />
            <FormField
              control={form.control}
              name="en_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"Title"}</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div dir="ltr" className="text-end col-span-1 h-auto translate-y-10">
            <Label text="تاريخ النشر" />
            <FormField
              control={form.control}
              name="en_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"تاريخ النشر"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل تاريخ النشر" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="تاريخ التقرير" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"تاريخ التقرير"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل تاريخ التقرير..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="رابط الملف" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"رابط الملف"}</FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل رابط الملف..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="صورة الغلاف للتقرير" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"صورة الغلاف للتقرير"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ادخل صورة الغلاف للتقرير..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* TODO:Textarea */}
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="وصف التقرير" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"وصف التقرير"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل وصف التقرير..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="Description" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"Description"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="enter Description ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="ملخص تنفيذي" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"ملخص تنفيذي"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل ملخص تنفيذي ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="Executive summary" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"Executive summary"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter Executive summary ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="فهرس المحتوى" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"فهرس المحتوى"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل فهرس المحتوى ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="Table of content" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"Table of content"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter Table of content ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="ملاحظة" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"ملاحظة"}</FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل ملاحظة ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="Note" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"Note"}</FormLabel>
                  <FormControl>
                    <Input placeholder="enter the Note ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full translate-x-10 flex justify-end">
          <Button className="text-md mb-10 inline-flex h-10 items-center  justify-center whitespace-nowrap rounded-lg bg-[#000] px-10 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            إضافة
          </Button>
        </div>
      </form>
    </Form>
  );
}
