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
  publish: z.boolean(),
});
type UpdateAvailable = z.infer<typeof formSchema>;
export default function ChangePublishesDialog({ id }: DeleteDialogProps) {
  const availabilityOptions = [
    { label: "نشر", value: "true" },
    { label: "غير منشور", value: "false" },
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
      return patchApi(`/api/Jobs/Publish/${id}?publish=${data.publish}`, {});
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
    <div className="col-span-1 h-auto ">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#450A0A]">
        <Dialog>
          <DialogTrigger>
            <Button>
              <svg
                className="h-4 w-4 p-1"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33073 5.62035H5.61644V9.33464H4.37835V5.62035H0.664062V4.38225H4.37835V0.667969H5.61644V4.38225H9.33073V5.62035Z"
                  fill="#450A0A"
                />
              </svg>
            </Button>
          </DialogTrigger>
          <DraggableDialogContent>
            <DialogHeader>
              <DialogTitle>تعديل حالة النشر</DialogTitle>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="isAvailable" text="حالة النشر" />
                <select
                  name="isAvailable"
                  className="itemAvailability form__input"
                  value={form.watch("publish") ? "true" : "false"} // Convert boolean to string for display
                  onChange={(e) =>
                    form.setValue("publish", e.target.value === "true")
                  } // Convert string back to boolean
                >
                  <option value="true">منشور</option>
                  <option value="false">غير منشور</option>
                </select>
              </div>
              <Button type="submit">تعديل</Button>
            </form>
          </DraggableDialogContent>
        </Dialog>
      </div>
    </div>
  );
}
