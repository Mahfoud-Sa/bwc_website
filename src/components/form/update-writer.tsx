import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addWriterSchema, WriterResp } from "src/types/validation";
import { z } from "zod";
import Label from "src/ui/label";
import { Input } from "src/ui/input";
import { Button } from "../../ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance, postApi } from "src/lib/http";
import { useToast } from "src/ui/use-toast";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AddPersonalImageDialog from "../dailog/add-personal-image-dialog";
import { Textarea } from "src/ui/textarea";
import { FileInput } from "src/ui/file-upload";

type ReferenceFormValue = z.infer<typeof addWriterSchema>;

export default function UpdateWriterForm() {
  // const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof addWriterSchema>>({
    resolver: zodResolver(addWriterSchema),
  });

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

  console.log("WriterData?.en_fullName", WriterData);
  useEffect(() => {
    if (WriterData && addWriterSchema) {
      form.reset({
        ar_fullName: WriterData.ar_fullName,
        En_fullName: WriterData.en_fullName,
        ar_description: WriterData.ar_description,
        en_description: WriterData.en_description,
        ar_role: WriterData.ar_role,
        en_role: WriterData.en_role,
      });

      // Set the existing image URL for preview
      setExistingImageUrl(WriterData.image); // This should be the image URL string
    }
  }, [WriterData]);
  const { mutate } = useMutation({
    mutationKey: ["Writer"],
    mutationFn: (datas: ReferenceFormValue) => {
      const formData = new FormData();
      formData.append("ar_fullName", datas.ar_fullName); // Corrected this from decisionDate to decisionName
      formData.append("En_fullName", datas.En_fullName);
      formData.append("ar_description", datas.ar_description);
      formData.append("en_description", datas.en_description);
      formData.append("ar_role", datas.ar_role);
      formData.append("en_role", datas.en_role);
      if (datas.ImageFile) {
        formData.append("ImageFile", datas.ImageFile[0]); // Add the file to formData
      }
      return postApi(`/api/Writers/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
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
      navigate("/admin-dashboard/writer");
    },
    onError: (error) => {
      toast.success("لم تتم العميله.", {
        style: {
          border: "1px solid  #FF5733 ",
          padding: "16px",
          color: " #FF5733 ",
        },
        iconTheme: {
          primary: " #FF5733 ",
          secondary: "#FFFAEE",
        },
      });
    },
  });
  const [personalPhoto, setPersonalPhoto] = useState<string>();
  //   data?.file.personalPhoto ?? "",
  const onSubmit = (datas: ReferenceFormValue) => {
    mutate(datas);
  };

  function setNewImageFile(file: File) {
    throw new Error("Function not implemented.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-[90vh]   w-[100%] bg-[#f2f2f2] "
      >
        <div>
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover"
            />
          ) : existingImageUrl ? (
            <img
              src={existingImageUrl}
              alt="Existing Image"
              className="w-32 h-32 object-cover"
            />
          ) : (
            <p>No image uploaded</p>
          )}
        </div>
        <div className=" grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]">
          {/* <label className="text-md mb-2 block font-bold text-gray-950">
            صورة الكاتب
          </label> */}

          <div className=" col-span-1 h-auto translate-y-10">
            <FormField
              control={form.control}
              name="ImageFile"
              render={() => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    {/* New Image Upload */}
                    <input type="file" accept="image/*" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="الاسم الكامل " />
            <FormField
              control={form.control}
              name="ar_fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"الاسم الكامل "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل الاسم الكامل ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div dir="ltr" className="text-end col-span-1 h-auto translate-y-10">
            <Label text="المسمئ الوظيفي" />
            <FormField
              control={form.control}
              name="ar_role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"المسمئ الوظيفي"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل المسمئ الوظيفي" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="en_role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"role"}</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter role..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="full name" />
            <FormField
              control={form.control}
              name="En_fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"full name"}</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter full name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="ar_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"عن الكتاب"}</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white border-2 border-[#d1d5db] rounded-xl"
                      rows={5}
                      {...field}
                      placeholder="ادخل عن الكتاب..."
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-3 h-auto translate-y-10">
            <Label text="about writer" />
            <FormField
              control={form.control}
              name="en_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"about writer"}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white border-2 border-[#d1d5db] rounded-xl"
                      rows={5}
                      {...field}
                      placeholder="Enter about writer ..."
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="w-full translate-x-10 flex justify-end mt-20">
          <Button className="text-md mb-10 inline-flex h-10 items-center  justify-center whitespace-nowrap rounded-lg bg-[#000] px-10 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            تعديل
          </Button>
        </div>
      </form>
    </Form>
  );
}
