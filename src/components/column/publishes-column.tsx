import { type ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";

import { type z } from "zod";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import DeleteDialog from "../dailog/delete-dialog";
import { Link } from "react-router-dom";

export type AddPublishesOrder = {
  isSelected: boolean;
  id: number;
  name: string;
  img: string;
  link: string;
};

export const AddOPublishesColumns: ColumnDef<AddPublishesOrder>[] = [
 
  {
    id: "img",
    accessorKey: "img",
    header: "ص",
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
    accessorKey: "name",
    header: "العنوان",
  },
  {
    accessorKey: "link",
    header: "تاريخ النشر",
  },
  {
    accessorKey: "link",
    header: "اسم التقرير",
  },
  {
    accessorKey: "link",
    header: "اسم الكاتب",
  },
  {
    accessorKey: "link",
    header: "النوع",
  },
  {
    accessorKey: "link",
    header: "حالة النشر",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link to={`/admin-dashboard/organization/update/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/organization/info/${row.original.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <DeleteDialog
            url={`/api/OrgUndBWC/${row.original?.id}`}
            path={"/admin-dashboard/organization"}
          />
        </div>
      );
    },
  },
];
