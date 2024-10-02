import { type ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import DeleteDialog from "../dailog/delete-dialog";
import { Link } from "react-router-dom";
import EditIcon from "src/assets/icons/edit-icon";
import Tooltip from "src/ui/tooltap";

export type AddTaskForceOrder = {
  isSelected: boolean;
  id: number;
  ar_name: string;
  en_name: string;
  ar_degree: string;
  en_degree: string;
  ar_role: string;
  en_role: string;
  img: string;
};

export const AddTaskForceColumns: ColumnDef<AddTaskForceOrder>[] = [
  {
    accessorKey: "image",
    header: "صورة الموظف",
    cell: ({ row }) => {
      return (
        <div className=" w-[50px] h-[50px] rounded-full">
          <img
            src={row.original.img}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      );
    },
  },
  {
    id: "ar_name",
    accessorKey: "ar_name",
    header: "الاسم الكامل ",
  },
  {
    accessorKey: "ar_degree",
    header: "الدرجة ",
  },
  {
    accessorKey: "ar_role",
    header: "المسمى الوظيفي ",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link
            to={`/admin-dashboard/taskforce/update-employee/${row.original?.id}`}
          >
            <Tooltip text="تعديل">
              <Button
                className="bg-[#d5ae78] text-white ml-3 rounded-lg"
                size={"sm"}
              >
                <EditIcon />
              </Button>
            </Tooltip>
          </Link>
          <Link to={`/admin-dashboard/taskforce/info/${row.original?.id}`}>
            <Tooltip text="عرض">
              <Button
                className="bg-[#d5ae78] text-white ml-3 rounded-lg"
                size={"sm"}
              >
                <Eye className="" />
              </Button>
            </Tooltip>
          </Link>
          <Tooltip text="حذف">
            <DeleteDialog
              url={`/api/Taskforce/${row.original?.id}`}
              path={"/admin-dashboard/taskforce"}
            />
          </Tooltip>
        </div>
      );
    },
  },
];
export const AddEnTaskForceColumns: ColumnDef<AddTaskForceOrder>[] = [
  {
    accessorKey: "image",
    header: "Employee Photo",
    cell: ({ row }) => {
      return (
        <div className=" w-[50px] h-[50px] rounded-full">
          <img
            src={row.original.img}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      );
    },
  },
  {
    id: "en_name",
    accessorKey: "en_name",
    header: "full name ",
  },
  {
    accessorKey: "en_degree",
    header: "degree",
  },
  {
    accessorKey: "en_role",
    header: "role",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link
            to={`/admin-dashboard/taskforce/update-employee/${row.original?.id}`}
          >
            <Tooltip text="Edit">
              <Button
                className="bg-[#d5ae78] text-white ml-3 rounded-lg"
                size={"sm"}
              >
                <EditIcon />
              </Button>
            </Tooltip>
          </Link>
          <Link to={`/admin-dashboard/taskforce/info/${row.original?.id}`}>
            <Tooltip text="view">
              <Button
                className="bg-[#d5ae78] text-white ml-3 rounded-lg"
                size={"sm"}
              >
                <Eye className="" />
              </Button>
            </Tooltip>
          </Link>
          <Tooltip text="delete">
            <DeleteDialog
              url={`/api/Taskforce/${row.original?.id}`}
              path={"/admin-dashboard/taskforce"}
            />
          </Tooltip>
        </div>
      );
    },
  },
];
