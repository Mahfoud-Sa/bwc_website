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

type ReferenceFormValue = z.infer<typeof addJobSchema>;

const kindOfCase = [
  { label: "منشورات", value: 1 },
  { label: "الاخبار", value: 2 },
  { label: "تحليلات", value: 3 },
] as const;
export default function AddPublications() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  const onSubmit = (datas: ReferenceFormValue) => {
    mutate(datas);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-[90vh]  w-[100%] bg-[#f2f2f2]"
      >
        <div className="grid h-[100px] grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right ">
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
        </div>

        <div className="w-full translate-x-10 flex justify-end">
          <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            إضافة مرجع
          </Button>
        </div>
      </form>
    </Form>
  );
}
