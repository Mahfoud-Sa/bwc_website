import { UploadCloud, XCircleIcon } from "lucide-react";
import React, { useState } from "react";
import Breadcrumb from "src/ui/breadcrumb";
import { Button } from "src/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "src/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/ui/form";
import { useMutation } from "@tanstack/react-query";
import { postApi } from "src/lib/http";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Label from "src/ui/label";

const formSchema = z.object({
  FormFile: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5000000,
      "حجم الملف يجب ألا يتجاوز 5MB"
    )
    .refine(
      (file) => !file || file.name.endsWith(".pdf"),
      "يجب أن تكون صيغة الملف PDF"
    ),
  name: z.string(),
});
type ProfileFormValue = z.infer<typeof formSchema>;
export default function Profile() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || undefined;
    if (file) {
      setSelectedFile(file);
      form.setValue("FormFile", file);
    }
  };

  const handleRemoveFile = () => {
    form.reset();
    setSelectedFile(null);
  };
  const { mutate } = useMutation({
    mutationKey: ["AddProfile"],
    mutationFn: (datas: ProfileFormValue) => {
      const formData = new FormData();
      formData.append("FormFile", datas.FormFile as Blob);
      formData.append("name", datas.name);

      return postApi("/api/ProfileFile", formData, {
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

      navigate("/admin-dashboard/profile");
    },
    onError: (error) => {},
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <main>
      <div className="min-h-screen w-[100%] text-right bg-[#f2f2f2] flex flex-col gap-12">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto rounded-lg">
            <Breadcrumb
              tilte1="المزايا"
              path1="/attendance"
              tilte2="الملف الشخصي"
              path2="/admin-dashboard/profile"
              tilte3=""
              path3=""
            />
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="عنوان الملف" />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"عنوان الملف"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="ادخل عنوان الملف ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white w-[60vw] flex justify-center items-center">
                <div className="w-[80%] flex flex-col items-center justify-center gap-6 my-6">
                  <h1 className="text-3xl">الرفع</h1>
                  <FormField
                    control={form.control}
                    name="FormFile"
                    render={({ field }) => (
                      <FormItem className="w-full bg-[#fbf7f2] border border-[#b5adaa] border-dashed h-[50vh]">
                        <label htmlFor="file" className="w-full">
                          <div className="flex flex-col items-center justify-center h-full w-full">
                            <UploadCloud
                              className="text-[#d5ae78]"
                              size={100}
                              strokeWidth={1}
                            />
                            <p className="text-xl">
                              سحب & إفلات و{" "}
                              <span className="text-[#d5ae78]">استعراض</span>
                            </p>
                            <small className="text-[#676767] font-thin">
                              يدعم الصيغة الاتية : PDF
                            </small>
                          </div>
                        </label>
                        <FormControl>
                          <Input
                            type="file"
                            id="file"
                            accept=".pdf"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {selectedFile && (
                    <div className="border w-full">
                      <div className="flex justify-between items-center border-b border-[#d5ae78] p-1.5">
                        <XCircleIcon
                          className="fill-[#bbb] hover:fill-[#a8a8a8] stroke-white cursor-pointer"
                          onClick={handleRemoveFile}
                        />
                        <p>{selectedFile.name}</p>
                      </div>
                    </div>
                  )}
                  <Button className="bg-black text-white w-full">إرسال</Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
