import React, { useEffect, useState } from "react";
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
import { addTaskForceSchema, TaskForceResp } from "src/types/validation";
import { z } from "zod";
import Label from "src/ui/label";
import { Input } from "src/ui/input";
import { Button } from "../../ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance, postApi, putApi } from "src/lib/http";
import { useToast } from "src/ui/use-toast";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

type TaskForceFormValue = z.infer<typeof addTaskForceSchema>;

export default function UpdateTaskForce() {
  // const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [preview, setPreview] = useState<string | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const form = useForm<z.infer<typeof addTaskForceSchema>>({
    resolver: zodResolver(addTaskForceSchema),
  });

  const fetchData = async () => {
    const response = await axiosInstance.get<TaskForceResp>(
      `/api/Taskforce/${id}`,
      {}
    );
    return response.data;
  };
  const {
    data: WriterData,
    error: WriterError,
    isLoading: WriterIsLoading,
  } = useQuery({
    queryKey: ["TaskForce", id],
    queryFn: fetchData,
    enabled: !!id,
  });

  console.log("WriterData?.en_fullName", WriterData);
  useEffect(() => {
    if (WriterData) {
      form.reset({
        Name: WriterData.name,
        Degree: WriterData.degree,
        Role: WriterData.role,
      });

      // Set the existing image URL for preview
      setExistingImageUrl(WriterData.name); // This should be the image URL string
    }
  }, [WriterData]);

  const { mutate } = useMutation({
    mutationKey: ["UpdateTaskForce"],
    mutationFn: (datas: TaskForceFormValue) => {
      const formData = new FormData();
      formData.append("Name", datas.Name); // Corrected this from decisionDate to decisionName
      formData.append("Degree", datas.Degree);
      formData.append("Role", datas.Degree);

      if (datas.ImageFile) {
        formData.append("ImageFile", datas.ImageFile[0]); // Add the file to formData
      }

      return putApi(`/api/Taskforce/${id}`, formData, {
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
      navigate("/admin-dashboard/taskforce");
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const onSubmit = (datas: TaskForceFormValue) => {
    mutate(datas);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-[90vh]  w-[100%] "
      >
        <div className="mt-4">
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        field.onChange(e.target.files);
                        handleFileChange(e); // Set the preview and form data
                      }}
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
            <Label text="الاسم بالكامل" />
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"الاسم بالكامل"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل الاسم بالكامل..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="الدرجة" />
            <FormField
              control={form.control}
              name="Degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"الدرجة"}</FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل الدرجة..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="المسمى الوظيفي" />
            <FormField
              control={form.control}
              name="Role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"المسمى الوظيفي"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل المسمى الوظيفي..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="w-full translate-x-10 flex justify-end">
          <Button className="text-lg inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-6 py-2  font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            تعديل
          </Button>
        </div>
      </form>
    </Form>
  );
}
