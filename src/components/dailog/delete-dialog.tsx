import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";
import { deleteApi } from "../../lib/http";
import { useToast } from "../../ui/use-toast";
// import { useAuthHeader } from "react-auth-kit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface DeleteDialogProps {
  url: string;
  disabled?: boolean;
  keys?: string[];
  path: string;
}

export default function DeleteDialog({
  url,
  disabled = false,
  keys,
  path,
}: DeleteDialogProps) {
  //   const authToken = useAuthHeader();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  // const { toast } = useToast();

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: () => deleteApi(`${url}`),
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: keys });
      window.location.reload();
      navigate(`/${path}`);
    },
  });

  useEffect(() => {
    if (isPending) {
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
    }
  }, [isPending, toast]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("تمت الحذف بنجاح.", {
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
      window.location.reload();
    }
  }, [isSuccess, toast]);

  useEffect(() => {
    if (isError) {
      toast.error("لم تتم العميله.", {
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
    }
  }, [isError, error, toast]);

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={`m-0 flex w-full items-center gap-1 rounded px-2 py-1.5 text-right text-red-500 hover:bg-gray-100 ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={disabled}
      >
        <Trash fill="#ef4444" size={15} />
        {dir === "ltr" ? "delete" : "حذف"}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#f2f2f2]">
        <AlertDialogHeader className="*:text-right">
          <AlertDialogTitle>
            {dir === "ltr" ? "are you sure?" : "هل أنت متأكد؟"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {dir === "ltr"
              ? "You can't back down later. Data will be deleted once and for all"
              : "لا يمكنك التراجع فيما بعد. سوف يتم حذف البيانات بشكل نهائي."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="!justify-between gap-3">
          <AlertDialogCancel className="text-muted-foregrounds">
            {dir === "ltr" ? "cancel" : "الغاء"}
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 text-white hover:bg-red-500"
            onClick={() => {
              mutate();
            }}
          >
            {dir === "ltr" ? "delete" : "حذف"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
