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
import { addJobSchema } from "src/types/validation";
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
import { Textarea } from "src/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "src/ui/select";
import { cn } from "src/lib/utils";
import { Badge } from "src/ui/badge";
import { ChevronsUpDown } from "lucide-react";

type ReferenceFormValue = z.infer<typeof addJobSchema>;

export default function AddJobForm() {
  // const { toast } = useToast();
  const [states, _setStates] = useState([
    { label: "متاحة", value: true },
    { label: "غير متاحة", value: false },
  ]);
  const [publish, _setPublish] = useState([
    { label: "مشنور", value: true },
    { label: "غير منشور", value: false },
  ]);
  const [texts, setTexts] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleDelete = (index: number) => {
    const updatedTexts = texts.filter((_, i) => i !== index);
    setTexts(updatedTexts);
  };
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof addJobSchema>>({
    resolver: zodResolver(addJobSchema),
  });

  const { mutate } = useMutation({
    mutationKey: ["AddReferences"],
    mutationFn: (datas: ReferenceFormValue) =>
      postApi("/api/References", {
        // ar_title: datas.ar_title,
        // en_title: datas.en_title,
        // link: datas.link,
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
                صورة المؤسسة
              </label>
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
            <div className="col-span-3"></div>
          </>
        }
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="عنوان الوظيفة" />
            <FormField
              control={form.control}
              name="Ar_jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"عنوان الوظيفة"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل عنوان الوظيفة..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="text-end col-span-1 h-auto translate-y-10">
            <Label text="Job Title" />
            <FormField
              control={form.control}
              name="En_jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"Job Title"}</FormLabel>
                  <FormControl>
                    <Input dir="ltr" placeholder="Enter Job Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="اخر تاريخ للتسجيل" />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"اخر تاريخ للتسجيل"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="ادخل اخر تاريخ للتسجيل"
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
            <Label text="رابط التقديم" />
            <FormField
              control={form.control}
              name="formLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"رابط التقديم"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل رابط التقديم..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="حالة الوظيفة" />
            <FormField
              control={form.control}
              name="avaliable"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      dir="rtl"
                      onValueChange={field.onChange}
                      defaultValue={String(field.value)}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="اختر حالة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {states?.map((statuse) => (
                            <SelectItem
                              key={statuse.label}
                              value={String(statuse.value)}
                            >
                              {statuse.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="حالة  النشر" />
            <FormField
              control={form.control}
              name="publish"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      dir="rtl"
                      onValueChange={field.onChange}
                      defaultValue={String(field.value)}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="اختر حالة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {publish?.map((publishs) => (
                            <SelectItem
                              key={publishs.label}
                              value={String(publishs.value)}
                            >
                              {publishs.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <FormField
              control={form.control}
              name="Ar_skiles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"عنوان الوظيفة"}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="ادخل عنوان الوظيفة..."
                        value={inputValue} // Use inputValue to manage the current input
                        onChange={(e) => {
                          setInputValue(e.target.value); // Update local state
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && inputValue.trim()) {
                            const newValues = Array.isArray(field.value)
                              ? [...field.value, inputValue]
                              : [inputValue]; // Ensure it's an array
                            field.onChange(newValues); // Update form field with new array
                            setTexts(newValues);
                            setInputValue(""); // Clear the input after adding
                            e.preventDefault(); // Prevent form submission
                          }
                        }}
                        name={field.name}
                        ref={field.ref}
                        onBlur={field.onBlur}
                        className="pr-20" // Add padding to the right for the badge
                      />
                      {Array.isArray(field.value) && field.value.length > 0 && (
                        <Badge className="absolute right-2 top-2">
                          {`تم تحديد ${field.value.length}`}
                        </Badge>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div>
          {texts.map((text, index) => (
            <div key={index} className="flex items-center mb-2">
              <p className="mr-2">{text}</p>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(index)} // Attach delete handler
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className=" col-span-1 h-auto translate-y-10">
            <Label text="التفاصيل" />
            <FormField
              control={form.control}
              name="Ar_basicDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"التفاصيل"}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="ادخل التفاصيل..."
                      className="bg-white"
                      {...field}
                      rows={5}
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
          <div className="text-end col-span-1 h-auto translate-y-10">
            <Label text="Description" />
            <FormField
              control={form.control}
              name="En_basicDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"Description"}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      dir="ltr"
                      placeholder="enter Description ..."
                      {...field}
                      rows={5}
                      className="bg-white"
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
            إضافة
          </Button>
        </div>
      </form>
    </Form>
  );
}
