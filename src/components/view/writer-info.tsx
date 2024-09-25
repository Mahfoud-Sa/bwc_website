import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { axiosInstance } from "src/lib/http";
import { addWriterSchema, WriterResp } from "src/types/validation";
import Label from "src/ui/label";
import { z } from "zod";
type ReferenceFormValue = z.infer<typeof addWriterSchema>;
export default function WriterInfo() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const { id } = useParams<{ id: string }>();
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const fetchData = async () => {
    const response = await axiosInstance.get<WriterResp>(
      `/api/Writers/${id}`,
      {}
    );
    return response.data;
  };
  const {
    data: WriterData,
    error: WriterError,
    isLoading: WriterIsLoading,
  } = useQuery({
    queryKey: ["Writer", id],
    queryFn: fetchData,
    enabled: !!id,
  });

  const form = useForm<z.infer<typeof addWriterSchema>>({
    resolver: zodResolver(addWriterSchema),
  });
  useEffect(() => {
    // if (WriterData) {
    //   form.reset({
    //     ar_fullName: WriterData.ar_fullName,
    //     En_fullName: WriterData.en_fullName,
    //     ar_description: WriterData.ar_description,
    //     en_description: WriterData.en_description,
    //     ar_role: WriterData.ar_role,
    //     en_role: WriterData.en_role,
    //   });
    //   // Set the existing image URL for preview
    //   setExistingImageUrl(WriterData.image); // This should be the image URL string
    // }
  }, [WriterData]);
  return (
    <>
      {dir === "ltr" ? (
        <div className="min-h-[90vh]   w-[100%] bg-[#f2f2f2]">
          <div className="h-[2px]  w-[95%] mx-auto bg-black"></div>
          <div className=" grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[40vh]">
            {/* <label className="text-md mb-2 block font-bold text-gray-950">
            صورة الكاتب
          </label> */}

            <div className=" col-span-1 h-auto translate-y-10">
              <label htmlFor="" className="float-start">
                Writer Photo
              </label>
              <img src={WriterData?.image} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className=" text-start col-span-1 h-auto translate-y-10">
              <Label text="الاسم الكامل بالعربي " />
              {WriterData?.ar_fullName}
            </div>
            <div
              dir="ltr"
              className="text-start col-span-1 h-auto translate-y-10"
            >
              <Label text="المسمئ الوظيفي" />
              {WriterData?.ar_role}
            </div>
          </div>
          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className="text-start col-span-1 h-auto translate-y-10">
              <Label text="role" />
              {WriterData?.en_role}
            </div>
            <div className="text-start col-span-1 h-auto translate-y-10">
              <Label text="full name" />
              {WriterData?.en_fullName}
            </div>
            {/* <div className=" col-span-1 h-auto translate-y-10">
            <Label text="instgram" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"full name"}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.instagram.com/"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
          </div>

          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className=" col-span-3 h-auto translate-y-10">
              <Label text="عن الكتاب" />
              {WriterData?.ar_fullName}
            </div>
          </div>

          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className="text-start col-span-3 h-auto translate-y-10">
              <Label text="about writer" />
              {WriterData?.en_description}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[90vh]   w-[100%] bg-[#f2f2f2]">
          <div className="h-[2px]  w-[95%] mx-auto bg-black"></div>
          <div className=" grid grid-cols-1   w-[100%] px-10 items-start gap-4 text-right h-[50vh]">
            {/* <label className="text-md mb-2 block font-bold text-gray-950">
            صورة الكاتب
          </label> */}

            <div className=" col-span-3   translate-y-10">
              <Label text="صورة الكاتب " />
              <img
                src={WriterData?.image}
                alt=""
                className="col-span-3   translate-y-10"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className=" col-span-1 h-auto translate-y-10">
              <Label text="الاسم الكامل بالعربي " />
              {WriterData?.ar_fullName}
            </div>
            <div
              dir="ltr"
              className="text-end col-span-1 h-auto translate-y-10"
            >
              <Label text="المسمئ الوظيفي" />
              {WriterData?.ar_role}
            </div>
            {/* <div dir="ltr" className="text-end col-span-1 h-auto translate-y-10">
            <Label text="وسائل التواصل " />
            <FormField
              control={form.control}
              name="en_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"وسائل التواصل "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل وسائل التواصل " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
          </div>
          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className=" col-span-1 h-auto translate-y-10">
              <Label text="role" />
              {WriterData?.en_role}
            </div>
            <div className=" col-span-1 h-auto translate-y-10">
              <Label text="full name" />
              {WriterData?.en_fullName}
            </div>
            {/* <div className=" col-span-1 h-auto translate-y-10">
            <Label text="instgram" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"full name"}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.instagram.com/"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
          </div>

          {/* TODO:Textarea */}
          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className=" col-span-3 h-auto translate-y-10">
              <Label text="عن الكتاب" />
              {WriterData?.ar_fullName}
            </div>
          </div>

          <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
            <div className="text-end col-span-3 h-auto translate-y-10">
              <Label text="about writer" />
              {WriterData?.en_description}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
