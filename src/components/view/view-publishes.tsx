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
import { addJobSchema } from "src/types/validation";
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
import { Separator } from "src/ui/separator";

type ReferenceFormValue = z.infer<typeof addJobSchema>;

const kindOfCase = [
  { label: "منشورات", value: 1 },
  { label: "الاخبار", value: 2 },
  { label: "تحليلات", value: 3 },
] as const;
export default function ViewPublications() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const form = useForm<z.infer<typeof addJobSchema>>({
    resolver: zodResolver(addJobSchema),
  });
  console.log("selectedValue", selectedValue);
  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10); // Convert id to a number
      setSelectedValue(numericId); // Update the selected value
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

  const onSubmit = (datas: ReferenceFormValue) => {
    mutate(datas);
  };

  return (
    // <>
    //   {selectedValue !== null ? (
    //     selectedValue === 1 ? (
    //       <Form {...form}>
    //         <form
    //           onSubmit={form.handleSubmit(onSubmit)}
    //           className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9"
    //         >
    //           <div className="grid h-[100px]  grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className="col-span-2 h-[50px] mt-7">
    //               <FormField
    //                 control={form.control}
    //                 name="type"
    //                 render={({ field }) => (
    //                   <FormItem className="col-span-2 flex">
    //                     {kindOfCase.map((caseType) => (
    //                       <label
    //                         key={caseType.value}
    //                         className="flex items-center w-full space-x-2"
    //                       >
    //                         <FormControl>
    //                           <div className="relative">
    //                             <input
    //                               type="checkbox"
    //                               value={caseType.value}
    //                               checked={selectedValue === caseType.value}
    //                               onChange={() => {
    //                                 const newValue =
    //                                   selectedValue === caseType.value
    //                                     ? null
    //                                     : caseType.value;
    //                                 setSelectedValue(newValue);
    //                                 field.onChange(newValue);
    //                               }}
    //                               className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-[#D5AE78] checked:border-transparent focus:outline-none"
    //                             />

    //                             <svg
    //                               className={`w-4 h-4 text-white absolute top-1 left-1 pointer-events-none ${
    //                                 selectedValue === caseType.value
    //                                   ? "block"
    //                                   : "hidden"
    //                               }`}
    //                               xmlns="http://www.w3.org/2000/svg"
    //                               viewBox="0 0 20 20"
    //                               fill="currentColor"
    //                             >
    //                               <path
    //                                 fillRule="evenodd"
    //                                 d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
    //                                 clipRule="evenodd"
    //                               />
    //                             </svg>
    //                           </div>
    //                         </FormControl>
    //                         <h1 className="ml-2">{caseType.label}</h1>
    //                       </label>
    //                     ))}
    //                     <FormMessage />
    //                   </FormItem>
    //                 )}
    //               />
    //             </div>
    //           </div>
    //           <div className="grid  min-h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">صورة المنشور</label>
    //               <div className="bg-black w-24 h-24"></div>
    //             </div>
    //           </div>
    //           <div className="h-[1px] mt-3 mb-3 w-full bg-black"></div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">إضافة صور مشنور اخرى</label>
    //               <p>تحميل اربع صور</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="عنوان المنشور" />
    //               <p>تقرير الطلاب 2023</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="Publish Title" />
    //               <p>student report 2023</p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1  ">
    //               <label htmlFor="">اختار الكاتب</label>
    //               <p>علي بن شعيب</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="وقت القراءه" />
    //               <p>50.00</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="تاريخ النشر" />
    //               <p>2024/9/14</p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1  ">
    //               <label htmlFor="">اختار المرجع</label>
    //               <p>000000000000</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="اسم التقرير" />
    //               <p>تقرير الطلاب 2022</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="Report name" />
    //               <p>student report 2022</p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">وصف المنشور</label>
    //               <p>
    //                 نبحث عن أخصائي تسويق إلكتروني، سيعمل إعداد الخطط التسويقية
    //                 وتنسيق وتنظيم الحملات الترويجية والدعائية، وإعداد المحتوى،
    //                 وادارة مواقع التواصل الاجتماعي لزيادة معرفة العملاء والجمهور
    //                 المستهدف بالخدمات التييتقدمها المكتب. فيحدد أخصائي التسويق
    //                 الأسلوب المناسب الذي تتحدث به الحملات إلى الجمهور ليشعر
    //                 بالخصوصية والتميز. كما ينسق حملات تربط موضوعات رائجة
    //                 بمايقدمه المكتب من خدمات لتجذب العملاء المستهدفين.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">Description </label>
    //               <p>
    //                 We are looking for an electronic marketing specialist, who
    //                 will prepare marketing plans, coordinate and organize
    //                 promotional and advertising campaigns, prepare content, and
    //                 manage social media sites to increase the knowledge of
    //                 customers and the target audience about the services
    //                 provided by the office. The marketing specialist determines
    //                 the appropriate way in which campaigns speak to the audience
    //                 so that they feel special and distinguished. It also
    //                 coordinates campaigns linking popular topics to the services
    //                 the office provides to attract targeted clients.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
    //             <div className=" col-span-3 h-auto translate-y-10">
    //               <Label text="ملاحظة" />
    //               <p>
    //                 نبحث عن أخصائي تسويق إلكتروني، سيعمل إعداد الخطط التسويقية
    //                 وتنسيق وتنظيم الحملات الترويجية والدعائية، وإعداد المحتوى،
    //                 وادارة مواقع التواصل الاجتماعي لزيادة معرفة العملاء والجمهور
    //                 المستهدف بالخدمات التييتقدمها المكتب. فيحدد أخصائي التسويق
    //                 الأسلوب المناسب الذي تتحدث به الحملات إلى الجمهور ليشعر
    //                 بالخصوصية والتميز. كما ينسق حملات تربط موضوعات رائجة
    //                 بمايقدمه المكتب من خدمات لتجذب العملاء المستهدفين.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
    //             <div className=" col-span-3 h-auto translate-y-10">
    //               <Label text="Note" />
    //               <p>
    //                 We are looking for an electronic marketing specialist, who
    //                 will prepare marketing plans, coordinate and organize
    //                 promotional and advertising campaigns, prepare content, and
    //                 manage social media sites to increase the knowledge of
    //                 customers and the target audience about the services
    //                 provided by the office. The marketing specialist determines
    //                 the appropriate way in which campaigns speak to the audience
    //                 so that they feel special and distinguished. It also
    //                 coordinates campaigns linking popular topics to the services
    //                 the office provides to attract targeted clients.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="w-full translate-x-10 flex justify-end mt-20 ">
    //             <Button className=" mb-10 text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    //               إضافة
    //             </Button>
    //           </div>
    //         </form>
    //       </Form>
    //     ) : selectedValue === 2 ? (
    //       <Form {...form}>
    //         <form
    //           onSubmit={form.handleSubmit(onSubmit)}
    //           className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9"
    //         >
    //           <div className="grid h-[100px]  grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className="col-span-2 h-[50px] mt-7">
    //               <FormField
    //                 control={form.control}
    //                 name="type"
    //                 render={({ field }) => (
    //                   <FormItem className="col-span-2 flex">
    //                     {kindOfCase.map((caseType) => (
    //                       <label
    //                         key={caseType.value}
    //                         className="flex items-center w-full space-x-2"
    //                       >
    //                         <FormControl>
    //                           <div className="relative">
    //                             <input
    //                               type="checkbox"
    //                               value={caseType.value}
    //                               checked={selectedValue === caseType.value}
    //                               onChange={() => {
    //                                 const newValue =
    //                                   selectedValue === caseType.value
    //                                     ? null
    //                                     : caseType.value;
    //                                 setSelectedValue(newValue);
    //                                 field.onChange(newValue);
    //                               }}
    //                               className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-[#D5AE78] checked:border-transparent focus:outline-none"
    //                             />

    //                             <svg
    //                               className={`w-4 h-4 text-white absolute top-1 left-1 pointer-events-none ${
    //                                 selectedValue === caseType.value
    //                                   ? "block"
    //                                   : "hidden"
    //                               }`}
    //                               xmlns="http://www.w3.org/2000/svg"
    //                               viewBox="0 0 20 20"
    //                               fill="currentColor"
    //                             >
    //                               <path
    //                                 fillRule="evenodd"
    //                                 d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
    //                                 clipRule="evenodd"
    //                               />
    //                             </svg>
    //                           </div>
    //                         </FormControl>
    //                         <h1 className="ml-2">{caseType.label}</h1>
    //                       </label>
    //                     ))}
    //                     <FormMessage />
    //                   </FormItem>
    //                 )}
    //               />
    //             </div>
    //           </div>
    //           <div className="grid  min-h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">صورة الخبر</label>
    //               <div className="bg-black w-24 h-24"></div>
    //             </div>
    //           </div>
    //           <div className="h-[1px] mt-3 mb-3 w-full bg-black"></div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="إضافة صور الخبر اخرى" />
    //               <p>تحميل اربع صور</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="عنوان الخبر" />
    //               <p>تقرير الطلاب 2023</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="News Title" />
    //               <p>student report 2023</p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1  ">
    //               <label htmlFor="">اختار النوع</label>
    //               <p>علي بن شعيب</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="وقت القراءه" />
    //               <p>50.00</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="تاريخ النشر" />
    //               <p>2024/9/14</p>
    //             </div>
    //           </div>

    //           <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">وصف الخبر</label>
    //               <p>
    //                 نبحث عن أخصائي تسويق إلكتروني، سيعمل إعداد الخطط التسويقية
    //                 وتنسيق وتنظيم الحملات الترويجية والدعائية، وإعداد المحتوى،
    //                 وادارة مواقع التواصل الاجتماعي لزيادة معرفة العملاء والجمهور
    //                 المستهدف بالخدمات التييتقدمها المكتب. فيحدد أخصائي التسويق
    //                 الأسلوب المناسب الذي تتحدث به الحملات إلى الجمهور ليشعر
    //                 بالخصوصية والتميز. كما ينسق حملات تربط موضوعات رائجة
    //                 بمايقدمه المكتب من خدمات لتجذب العملاء المستهدفين.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">Description </label>
    //               <p>
    //                 We are looking for an electronic marketing specialist, who
    //                 will prepare marketing plans, coordinate and organize
    //                 promotional and advertising campaigns, prepare content, and
    //                 manage social media sites to increase the knowledge of
    //                 customers and the target audience about the services
    //                 provided by the office. The marketing specialist determines
    //                 the appropriate way in which campaigns speak to the audience
    //                 so that they feel special and distinguished. It also
    //                 coordinates campaigns linking popular topics to the services
    //                 the office provides to attract targeted clients.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
    //             <div className=" col-span-3 h-auto translate-y-10">
    //               <Label text="ملاحظة" />
    //               <p>
    //                 نبحث عن أخصائي تسويق إلكتروني، سيعمل إعداد الخطط التسويقية
    //                 وتنسيق وتنظيم الحملات الترويجية والدعائية، وإعداد المحتوى،
    //                 وادارة مواقع التواصل الاجتماعي لزيادة معرفة العملاء والجمهور
    //                 المستهدف بالخدمات التييتقدمها المكتب. فيحدد أخصائي التسويق
    //                 الأسلوب المناسب الذي تتحدث به الحملات إلى الجمهور ليشعر
    //                 بالخصوصية والتميز. كما ينسق حملات تربط موضوعات رائجة
    //                 بمايقدمه المكتب من خدمات لتجذب العملاء المستهدفين.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
    //             <div className=" col-span-3 h-auto translate-y-10">
    //               <Label text="Note" />
    //               <p>
    //                 We are looking for an electronic marketing specialist, who
    //                 will prepare marketing plans, coordinate and organize
    //                 promotional and advertising campaigns, prepare content, and
    //                 manage social media sites to increase the knowledge of
    //                 customers and the target audience about the services
    //                 provided by the office. The marketing specialist determines
    //                 the appropriate way in which campaigns speak to the audience
    //                 so that they feel special and distinguished. It also
    //                 coordinates campaigns linking popular topics to the services
    //                 the office provides to attract targeted clients.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="w-full translate-x-10 flex justify-end mt-20 ">
    //             <Button className=" mb-10 text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    //               إضافة
    //             </Button>
    //           </div>
    //         </form>
    //       </Form>
    //     ) : (
    //       <Form {...form}>
    //         <form
    //           onSubmit={form.handleSubmit(onSubmit)}
    //           className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9"
    //         >
    //           <div className="grid h-[100px]  grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className="col-span-2 h-[50px] mt-7">
    //               <FormField
    //                 control={form.control}
    //                 name="type"
    //                 render={({ field }) => (
    //                   <FormItem className="col-span-2 flex">
    //                     {kindOfCase.map((caseType) => (
    //                       <label
    //                         key={caseType.value}
    //                         className="flex items-center w-full space-x-2"
    //                       >
    //                         <FormControl>
    //                           <div className="relative">
    //                             <input
    //                               type="checkbox"
    //                               value={caseType.value}
    //                               checked={selectedValue === caseType.value}
    //                               onChange={() => {
    //                                 const newValue =
    //                                   selectedValue === caseType.value
    //                                     ? null
    //                                     : caseType.value;
    //                                 setSelectedValue(newValue);
    //                                 field.onChange(newValue);
    //                               }}
    //                               className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-[#D5AE78] checked:border-transparent focus:outline-none"
    //                             />

    //                             <svg
    //                               className={`w-4 h-4 text-white absolute top-1 left-1 pointer-events-none ${
    //                                 selectedValue === caseType.value
    //                                   ? "block"
    //                                   : "hidden"
    //                               }`}
    //                               xmlns="http://www.w3.org/2000/svg"
    //                               viewBox="0 0 20 20"
    //                               fill="currentColor"
    //                             >
    //                               <path
    //                                 fillRule="evenodd"
    //                                 d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
    //                                 clipRule="evenodd"
    //                               />
    //                             </svg>
    //                           </div>
    //                         </FormControl>
    //                         <h1 className="ml-2">{caseType.label}</h1>
    //                       </label>
    //                     ))}
    //                     <FormMessage />
    //                   </FormItem>
    //                 )}
    //               />
    //             </div>
    //           </div>
    //           <div className="grid  min-h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">صورة التحليل</label>
    //               <div className="bg-black w-24 h-24"></div>
    //             </div>
    //           </div>
    //           <div className="h-[1px] mt-3 mb-3 w-full bg-black"></div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">إضافة صور التحليل اخرى</label>
    //               <p>تحميل اربع صور</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="عنوان التحليل" />
    //               <p>تقرير الطلاب 2023</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="Analysis Title" />
    //               <p>student report 2023</p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1  ">
    //               <label htmlFor="">اختار الكاتب</label>
    //               <p>علي بن شعيب</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="وقت القراءه" />
    //               <p>50.00</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="تاريخ النشر" />
    //               <p>2024/9/14</p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1  ">
    //               <label htmlFor="">اختار المرجع</label>
    //               <p>000000000000</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="اسم التقرير" />
    //               <p>تقرير الطلاب 2022</p>
    //             </div>
    //             <div className=" col-span-1 h-auto ">
    //               <Label text="Report name" />
    //               <p>student report 2022</p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">وصف التحليل</label>
    //               <p>
    //                 نبحث عن أخصائي تسويق إلكتروني، سيعمل إعداد الخطط التسويقية
    //                 وتنسيق وتنظيم الحملات الترويجية والدعائية، وإعداد المحتوى،
    //                 وادارة مواقع التواصل الاجتماعي لزيادة معرفة العملاء والجمهور
    //                 المستهدف بالخدمات التييتقدمها المكتب. فيحدد أخصائي التسويق
    //                 الأسلوب المناسب الذي تتحدث به الحملات إلى الجمهور ليشعر
    //                 بالخصوصية والتميز. كما ينسق حملات تربط موضوعات رائجة
    //                 بمايقدمه المكتب من خدمات لتجذب العملاء المستهدفين.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="grid  h-[250px] grid-cols-1 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
    //             <div className=" col-span-1 h-auto ">
    //               <label htmlFor="">Description </label>
    //               <p>
    //                 We are looking for an electronic marketing specialist, who
    //                 will prepare marketing plans, coordinate and organize
    //                 promotional and advertising campaigns, prepare content, and
    //                 manage social media sites to increase the knowledge of
    //                 customers and the target audience about the services
    //                 provided by the office. The marketing specialist determines
    //                 the appropriate way in which campaigns speak to the audience
    //                 so that they feel special and distinguished. It also
    //                 coordinates campaigns linking popular topics to the services
    //                 the office provides to attract targeted clients.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
    //             <div className=" col-span-3 h-auto translate-y-10">
    //               <Label text="ملاحظة" />
    //               <p>
    //                 نبحث عن أخصائي تسويق إلكتروني، سيعمل إعداد الخطط التسويقية
    //                 وتنسيق وتنظيم الحملات الترويجية والدعائية، وإعداد المحتوى،
    //                 وادارة مواقع التواصل الاجتماعي لزيادة معرفة العملاء والجمهور
    //                 المستهدف بالخدمات التييتقدمها المكتب. فيحدد أخصائي التسويق
    //                 الأسلوب المناسب الذي تتحدث به الحملات إلى الجمهور ليشعر
    //                 بالخصوصية والتميز. كما ينسق حملات تربط موضوعات رائجة
    //                 بمايقدمه المكتب من خدمات لتجذب العملاء المستهدفين.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-3 w-[100%]  items-start gap-4 text-right h-[20vh]  ">
    //             <div className=" col-span-3 h-auto translate-y-10">
    //               <Label text="Note" />
    //               <p>
    //                 We are looking for an electronic marketing specialist, who
    //                 will prepare marketing plans, coordinate and organize
    //                 promotional and advertising campaigns, prepare content, and
    //                 manage social media sites to increase the knowledge of
    //                 customers and the target audience about the services
    //                 provided by the office. The marketing specialist determines
    //                 the appropriate way in which campaigns speak to the audience
    //                 so that they feel special and distinguished. It also
    //                 coordinates campaigns linking popular topics to the services
    //                 the office provides to attract targeted clients.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="w-full translate-x-10 flex justify-end mt-20 ">
    //             <Button className=" mb-10 text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    //               إضافة
    //             </Button>
    //           </div>
    //         </form>
    //       </Form>
    //     )
    //   ) : (
    //     <p>No value selected</p>
    //   )}
    // </>
    <></>
  );
}
