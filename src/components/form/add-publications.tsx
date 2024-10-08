import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MAX_FILES,
} from "../../types/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addPublishes } from "src/types/validation";
import { z } from "zod";
import Label from "src/ui/label";
import { Input } from "src/ui/input";
import { Button } from "../../ui/button";
import { useMutation } from "@tanstack/react-query";
import { postApi } from "src/lib/http";
import { useToast } from "src/ui/use-toast";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Tiptap from "src/ui/Tiptap";
import { Textarea } from "src/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/ui/select";
import EngTiptap from "src/ui/EngTiptap";

type PublishesFormValue = z.infer<typeof addPublishes>;

const kindOfCase = [
  { label: "منشورات", value: 1 },
  { label: "الاخبار", value: 2 },
  { label: "تحليلات", value: 3 },
] as const;
export default function AddPublications() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const form = useForm<z.infer<typeof addPublishes>>({
    resolver: zodResolver(addPublishes),
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  console.log("selectFiles", selectedFiles);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  console.log("selectedValue", selectedValue);
  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);
      setSelectedValue(numericId);
    }
  }, [id]);

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
  const { mutate } = useMutation({
    mutationKey: ["AddReferences"],
    mutationFn: (datas: PublishesFormValue) => {
      const formData = new FormData();
      formData.append("Ar_Title", datas.Ar_Title);
      formData.append("En_Title", datas.En_Title);
      formData.append("date_of_publish", datas.date_of_publish);
      formData.append("Ar_description", datas.Ar_description);
      formData.append("En_description", datas.En_description);
      formData.append("An_note", datas.An_note);
      formData.append("En_note", datas.En_note);

      if (datas.ImageFile) {
        formData.append("ImageFile", datas.ImageFile[0]);
      }
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("images", selectedFiles[i]); // Change "images[]" to "images"
      }

      return postApi("/api/Publications", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
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
      navigate("/admin-dashboard/publications");
    },
    onError: (error) => {
      // toast({
      //   title: "لم تتم العملية",
      //   description: error.message,
      //   variant: "destructive",
      // });
    },
  });

  const handleMultiFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);

      // Validate files using Zod schema
      const validation = addPublishes.safeParse({ images: fileArray });
      if (!validation.success) {
        setSelectedFiles([]);
        setPreviewUrls([]);
        setError(validation.error.errors[0].message);
        return;
      }

      setSelectedFiles(fileArray);

      // Generate preview URLs
      const urls = fileArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);

      // Update form state with File[]
      form.setValue("images", fileArray);
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedFiles = [...selectedFiles];
    const updatedUrls = [...previewUrls];

    // Revoke the object URL to free memory
    URL.revokeObjectURL(updatedUrls[index]);

    // Remove the file and URL from the arrays
    updatedFiles.splice(index, 1);
    updatedUrls.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setPreviewUrls(updatedUrls);

    // Update form state
    form.setValue("images", updatedFiles);
  };

  const onSubmit = (datas: PublishesFormValue) => {
    mutate(datas);
  };

  return (
    <>
      {selectedValue !== null ? (
        selectedValue === 1 ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9"
            >
              <div className="grid h-[100px]  grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                {/* <div className="col-span-2 h-[50px] mt-7">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="col-span-2 flex">
                        {kindOfCase.map((caseType) => (
                          <label
                            key={caseType.value}
                            className="flex items-center w-full space-x-2"
                          >
                            <FormControl>
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  value={caseType.value}
                                  checked={selectedValue === caseType.value}
                                  onChange={() => {
                                    const newValue =
                                      selectedValue === caseType.value
                                        ? null
                                        : caseType.value;
                                    setSelectedValue(newValue);
                                    field.onChange(newValue);
                                  }}
                                  className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-[#D5AE78] checked:border-transparent focus:outline-none"
                                />

                                <svg
                                  className={`w-4 h-4 text-white absolute top-1 left-1 pointer-events-none ${
                                    selectedValue === caseType.value
                                      ? "block"
                                      : "hidden"
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </FormControl>
                            <h1 className="ml-2">{caseType.label}</h1>
                          </label>
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">صورة المنشور</label>
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
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className="col-span-1 h-auto">
                  <label>إضافة صور مشنور اخرى</label>
                  <FormField
                    control={form.control}
                    name="images"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Images</FormLabel>
                        <FormControl>
                          <input
                            type="file"
                            accept={ACCEPTED_IMAGE_TYPES.join(",")}
                            multiple
                            onChange={(e) => {
                              setSelectedFiles(
                                Array.from(e.target.files ?? [])
                              );
                            }}
                            disabled={false}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {error && <p className="error">{error}</p>}
                {previewUrls.length > 0 && (
                  <div className="preview-container">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="image-preview">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          width={100}
                          height={100}
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteImage(index)}
                          aria-label={`Delete image ${index + 1}`}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <div className=" col-span-1 h-auto ">
                  <Label text="عنوان المنشور" />
                  <FormField
                    control={form.control}
                    name="Ar_Title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"عنوان المنشور"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ادخل عنوان المنشور..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="Publish Title" />
                  <FormField
                    control={form.control}
                    name="En_Title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"Publish Title"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="enter Publish Title..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1  ">
                  <label htmlFor="">اختار الكاتب</label>
                  {/* <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl className="w-full">
                          
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="ابحث بالسنة" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">2024</SelectItem>
                              <SelectItem value="dark">2023</SelectItem>
                              <SelectItem value="system">2022</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="وقت القراءه" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"وقت القراءه"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="ادخل وقت القراءه..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="تاريخ النشر" />
                  <FormField
                    control={form.control}
                    name="date_of_publish"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"تاريخ النشر"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="ادخل تاريخ النشر..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1  ">
                  <label htmlFor="">اختار المرجع</label>
                  {/* <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl className="w-full">
                          
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="ابحث بالسنة" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">2024</SelectItem>
                              <SelectItem value="dark">2023</SelectItem>
                              <SelectItem value="system">2022</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="اسم التقرير" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"اسم التقرير"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="ادخل اسم التقرير..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="Report name" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"Report name"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="enter Report name..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">وصف المنشور</label>
                  <FormField
                    control={form.control}
                    name="Ar_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>sadasd</FormLabel>
                        <FormControl>
                          <Tiptap
                            description={"ادخل الوصف"}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">Description </label>
                  <FormField
                    control={form.control}
                    name="En_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>sadasd</FormLabel>
                        <FormControl>
                          <EngTiptap
                            description={"Enter the Description "}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
                <div className=" col-span-3 h-auto translate-y-10">
                  <Label text="ملاحظة" />
                  <FormField
                    control={form.control}
                    name="An_note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"ملاحظة"}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-white border-2 border-[#d1d5db] rounded-xl"
                            rows={5}
                            {...field}
                            placeholder="ادخل ملاحظة ..."
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
                <div className=" col-span-3 h-auto translate-y-10">
                  <Label text="Note" />
                  <FormField
                    control={form.control}
                    name="En_note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">{"Note"}</FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-white border-2 border-[#d1d5db] rounded-xl"
                            rows={5}
                            {...field}
                            placeholder="Enter Note ..."
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full translate-x-10 flex justify-end mt-20 ">
                <Button className=" mb-10 text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  إضافة
                </Button>
              </div>
            </form>
          </Form>
        ) : selectedValue === 2 ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9"
            >
              {/* <div className="grid h-[100px]  grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className="col-span-2 h-[50px] mt-7">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="col-span-2 flex">
                        {kindOfCase.map((caseType) => (
                          <label
                            key={caseType.value}
                            className="flex items-center w-full space-x-2"
                          >
                            <FormControl>
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  value={caseType.value}
                                  checked={selectedValue === caseType.value}
                                  onChange={() => {
                                    const newValue =
                                      selectedValue === caseType.value
                                        ? null
                                        : caseType.value;
                                    setSelectedValue(newValue);
                                    field.onChange(newValue);
                                  }}
                                  className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-[#D5AE78] checked:border-transparent focus:outline-none"
                                />

                                <svg
                                  className={`w-4 h-4 text-white absolute top-1 left-1 pointer-events-none ${
                                    selectedValue === caseType.value
                                      ? "block"
                                      : "hidden"
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </FormControl>
                            <h1 className="ml-2">{caseType.label}</h1>
                          </label>
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div> */}
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">صورة الخبر</label>
                  {/* <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl>

                          <input type="file" accept="image/*" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">إضافة صور الخبر اخرى</label>
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
                <div className=" col-span-1 h-auto ">
                  <Label text="عنوان الخبر" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"عنوان الخبر"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="ادخل عنوان الخبر..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="News Title" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"News Title"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="enter News Title..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1  ">
                  <label htmlFor="">اختار النوع</label>
                  {/* <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl className="w-full">
                         
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="ابحث بالسنة" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">2024</SelectItem>
                              <SelectItem value="dark">2023</SelectItem>
                              <SelectItem value="system">2022</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="وقت القراءه" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"وقت القراءه"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="ادخل وقت القراءه..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="تاريخ النشر" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"تاريخ النشر"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="ادخل تاريخ النشر..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>

              <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">وصف الخبر</label>
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>sadasd</FormLabel>
                        <FormControl>
                          <Tiptap
                            description={"ادخل وصف الخبر"}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">Description </label>
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>sadasd</FormLabel>
                        <FormControl>
                          <Tiptap
                            description={"Enter the name filed"}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>

              <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
                <div className=" col-span-3 h-auto translate-y-10">
                  <Label text="ملاحظة" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"ملاحظة"}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-white border-2 border-[#d1d5db] rounded-xl"
                            rows={5}
                            {...field}
                            placeholder="ادخل ملاحظة ..."
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
                <div className=" col-span-3 h-auto translate-y-10">
                  <Label text="Note" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">{"Note"}</FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-white border-2 border-[#d1d5db] rounded-xl"
                            rows={5}
                            {...field}
                            placeholder="Enter Note ..."
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="w-full translate-x-10 flex justify-end mt-20 ">
                <Button className=" mb-10 text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  إضافة
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9"
            >
              {/* <div className="grid h-[100px]  grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className="col-span-2 h-[50px] mt-7">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="col-span-2 flex">
                        {kindOfCase.map((caseType) => (
                          <label
                            key={caseType.value}
                            className="flex items-center w-full space-x-2"
                          >
                            <FormControl>
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  value={caseType.value}
                                  checked={selectedValue === caseType.value}
                                  onChange={() => {
                                    const newValue =
                                      selectedValue === caseType.value
                                        ? null
                                        : caseType.value;
                                    setSelectedValue(newValue);
                                    field.onChange(newValue);
                                  }}
                                  className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-[#D5AE78] checked:border-transparent focus:outline-none"
                                />

                                <svg
                                  className={`w-4 h-4 text-white absolute top-1 left-1 pointer-events-none ${
                                    selectedValue === caseType.value
                                      ? "block"
                                      : "hidden"
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </FormControl>
                            <h1 className="ml-2">{caseType.label}</h1>
                          </label>
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div> */}
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">صورة التحليل</label>
                  {/* <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl>

                          <input type="file" accept="image/*" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">إضافة صور التحليل اخرى</label>
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
                <div className=" col-span-1 h-auto ">
                  <Label text="عنوان التحليل" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"عنوان التحليل"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ادخل عنوان التحليل..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="Analysis Title" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"Analysis Title"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="enter Analysis Title..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1  ">
                  <label htmlFor="">اختار الكاتب</label>
                  {/* <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl className="w-full">
                          
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="ابحث بالسنة" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">2024</SelectItem>
                              <SelectItem value="dark">2023</SelectItem>
                              <SelectItem value="system">2022</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="وقت القراءه" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"وقت القراءه"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="ادخل وقت القراءه..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="تاريخ النشر" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"تاريخ النشر"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="ادخل تاريخ النشر..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1  ">
                  <label htmlFor="">اختار المرجع</label>
                  {/* <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl className="w-full">
                          
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="ابحث بالسنة" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">2024</SelectItem>
                              <SelectItem value="dark">2023</SelectItem>
                              <SelectItem value="system">2022</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="اسم التقرير" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"اسم التقرير"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="ادخل اسم التقرير..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className=" col-span-1 h-auto ">
                  <Label text="Report name" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"Report name"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="enter Report name..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">وصف التحليل</label>
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>sadasd</FormLabel>
                        <FormControl>
                          <Tiptap
                            description={"ادخل وصف التحليل"}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
                <div className=" col-span-1 h-auto ">
                  <label htmlFor="">Description </label>
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>sadasd</FormLabel>
                        <FormControl>
                          <Tiptap
                            description={"Enter the name filed"}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>

              <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
                <div className=" col-span-3 h-auto translate-y-10">
                  <Label text="ملاحظة" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">
                          {"ملاحظة"}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-white border-2 border-[#d1d5db] rounded-xl"
                            rows={5}
                            {...field}
                            placeholder="ادخل ملاحظة ..."
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
                <div className=" col-span-3 h-auto translate-y-10">
                  <Label text="Note" />
                  {/* <FormField
                    control={form.control}
                    name="ar_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">{"Note"}</FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-white border-2 border-[#d1d5db] rounded-xl"
                            rows={5}
                            {...field}
                            placeholder="Enter Note ..."
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
              </div>
              <div className="w-full translate-x-10 flex justify-end mt-20 ">
                <Button className=" mb-10 text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  إضافة
                </Button>
              </div>
            </form>
          </Form>
        )
      ) : (
        <p>No value selected</p>
      )}
    </>
  );
}
