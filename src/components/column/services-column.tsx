import { type ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";

import { SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";

import DeleteDialog from "../dailog/delete-dialog";
import { Link } from "react-router-dom";

export type AddServicesOrder = {
  isSelected: boolean;
  id: number;
  ar_name: string;
  en_name: string;
  ar_Description: string;
  en_Description: string;
};

export const AddServicesColumns: ColumnDef<AddServicesOrder>[] = [
 
  {
    id: "ar_name",
    accessorKey: "ar_name",
    header: "عنوان الخدمة",
  },
  {
    accessorKey: "ar_Description",
    header: "وصف الخدمة ",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link
            to={`/admin-dashboard/services/update-services/${row.original?.id}`}
          >
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/services/info/${row.original.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <DeleteDialog
            url={`/api/Services/${row.original?.id}`}
            path={"/admin-dashboard/services"}
          />
        </div>
      );
    },
  },
];
export const AddEnServicesColumns: ColumnDef<AddServicesOrder>[] = [
 
  {
    id: "en_name",
    accessorKey: "en_name",
    header: "Title",
  },
  {
    accessorKey: "en_Description",
    header: "Description ",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link
            to={`/admin-dashboard/services/update-services/${row.original?.id}`}
          >
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/services/info/${row.original.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <DeleteDialog
            url={`/api/Services/${row.original?.id}`}
            path={"/admin-dashboard/services"}
          />
        </div>
      );
    },
  },
];
