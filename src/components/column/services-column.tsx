import { type ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";

import { SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";

import DeleteDialog from "../dailog/delete-dialog";
import { Link } from "react-router-dom";

export type AddServicesOrder = {
  isSelected: boolean;
  id: string;
  ar_title: string;
  link: string;
};

export const AddServicesColumns: ColumnDef<AddServicesOrder>[] = [
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
    id: "ar_title",
    accessorKey: "ar_title",
    header: "عنوان الخدمة",
  },
  {
    accessorKey: "link",
    header: "وصف الخدمة ",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link to={`/admin-dashboard/references/update/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/services/info`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <DeleteDialog
            url={`/api/References/${row.original?.id}`}
            path={"/admin-dashboard/references"}
          />
        </div>
      );
    },
  },
];
