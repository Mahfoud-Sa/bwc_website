import { type ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";

import { SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";

import DeleteDialog from "../dailog/delete-dialog";
import { Link } from "react-router-dom";

export type AddTaskForceOrder = {
  isSelected: boolean;
  id: number;
  name: string;
  degree: string;
  role: string;
  image: string;
};

export const AddTaskForceColumns: ColumnDef<AddTaskForceOrder>[] = [
  {
    accessorKey: "isSelected",
    header: ({ table }) => (
      <Checkbox
        className="m-2"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="m-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
  },

  {
    id: "image",
    accessorKey: "image",
    header: "صورة الموظف",
    cell: ({ row }) => {
      return (
        <div className=" w-[50px] h-[50px] rounded-full">
          <img
            src={row.original.image}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "الاسم الكامل ",
  },
  {
    accessorKey: "degree",
    header: "الدرجة ",
  },
  {
    accessorKey: "role",
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
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/taskforce/info/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <DeleteDialog
            url={`/api/Taskforce/${row.original?.id}`}
            path={"/admin-dashboard/taskforce"}
          />
        </div>
      );
    },
  },
];
