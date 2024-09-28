import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { deleteApi, patchApi } from "../../lib/http";
import { useToast } from "../../ui/use-toast";
// import { useAuthHeader } from "react-auth-kit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Label from "src/ui/label";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DraggableDialogContent,
} from "src/ui/dialog";
import { Button } from "src/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/ui/select";

interface DeleteDialogProps {
  id: number;
}
const formSchema = z.object({
  availabel: z.boolean(),
});
type UpdateAvailable = z.infer<typeof formSchema>;
export default function ChangeAvailabilityDialog({ id }: DeleteDialogProps) {
  const availabilityOptions = [
    { label: "متاحة", value: "true" },
    { label: "غير متاحة", value: "false" },
  ];
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (data: UpdateAvailable) => {
      return patchApi(
        `/api/Jobs/Avaliable/${id}?availabel=${data.availabel}`,
        {}
      );
    },
    onSuccess: (data) => {
      console.log("data", data);
      toast.success("تمت العملية بنجاح.");
      navigate("/admin-dashboard/jobs");
      window.location.reload();
    },
    onError: (error) => {
      toast.error(`حدث خطأ: ${error.message}`);
    },
  });
  const onSubmit = (datas: UpdateAvailable) => {
    mutate(datas);
  };

  return (
    <>
      {dir === "ltr" ? (
        <div className="col-span-1 h-auto ">
          <div className="flex h-10 w-10 items-center ml-2 justify-center rounded-lg border-2 border-[#1999E3] bg-[#1999E3]">
            <Dialog>
              <DialogTrigger>
                <Button>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 19.7647C5.39082 19.7647 1.23529 15.6092 1.23529 10.5C1.23529 5.39082 5.39082 1.23529 10.5 1.23529C15.6092 1.23529 19.7647 5.39082 19.7647 10.5C19.7647 15.6092 15.6092 19.7647 10.5 19.7647ZM10.5 0C4.71018 0 0 4.71018 0 10.5C0 16.2898 4.71018 21 10.5 21C16.2898 21 21 16.2898 21 10.5C21 4.71018 16.2898 0 10.5 0ZM9.34439 12.6654L6.37721 9.69817L5.50385 10.5715L9.34439 14.412L15.9075 7.84894L15.0341 6.97558L9.34439 12.6654Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </DialogTrigger>
              <DraggableDialogContent>
                <DialogHeader>
                  <DialogTitle>تعديل حالة الوظيفة</DialogTitle>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div>
                    <Label htmlFor="isAvailable" text="حالة الوظيفة" />
                    <select
                      name="isAvailable"
                      className="itemAvailability form__input"
                      value={form.watch("availabel") ? "true" : "false"} // Convert boolean to string for display
                      onChange={(e) =>
                        form.setValue("availabel", e.target.value === "true")
                      } // Convert string back to boolean
                    >
                      <option value="true">Available</option>
                      <option value="false">Not Available</option>
                    </select>
                  </div>
                  <Button type="submit">تعديل</Button>
                </form>
              </DraggableDialogContent>
            </Dialog>
          </div>
        </div>
      ) : (
        <div className="col-span-1 h-auto ">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#1999E3] bg-[#1999E3]">
            <Dialog>
              <DialogTrigger>
                <Button>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 19.7647C5.39082 19.7647 1.23529 15.6092 1.23529 10.5C1.23529 5.39082 5.39082 1.23529 10.5 1.23529C15.6092 1.23529 19.7647 5.39082 19.7647 10.5C19.7647 15.6092 15.6092 19.7647 10.5 19.7647ZM10.5 0C4.71018 0 0 4.71018 0 10.5C0 16.2898 4.71018 21 10.5 21C16.2898 21 21 16.2898 21 10.5C21 4.71018 16.2898 0 10.5 0ZM9.34439 12.6654L6.37721 9.69817L5.50385 10.5715L9.34439 14.412L15.9075 7.84894L15.0341 6.97558L9.34439 12.6654Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </DialogTrigger>
              <DraggableDialogContent>
                <DialogHeader>
                  <DialogTitle>تعديل حالة الوظيفة</DialogTitle>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div>
                    <Label htmlFor="isAvailable" text="حالة الوظيفة" />
                    <select
                      name="isAvailable"
                      className="itemAvailability form__input"
                      value={form.watch("availabel") ? "true" : "false"} // Convert boolean to string for display
                      onChange={(e) =>
                        form.setValue("availabel", e.target.value === "true")
                      } // Convert string back to boolean
                    >
                      <option value="true">Available</option>
                      <option value="false">Not Available</option>
                    </select>
                  </div>
                  <Button type="submit">تعديل</Button>
                </form>
              </DraggableDialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </>
  );
}
