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

export type AddReferenceOrder = {
  isSelected: boolean;
  id: string;
  ar_title: string;
  en_title: string;
  link: string;
};

export const AddReferenceColumns: ColumnDef<AddReferenceOrder>[] = [
  

  {
    id: "ar_title",
    accessorKey: "ar_title",
    header: "العنوان",
  },
  {
    accessorKey: "link",
    header: "الرابط",
    cell: ({ row }) => (
      <a href={row.original.link} target="_blank">
        {row.original.link}
      </a>
    ),
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
          <Link to={`/admin-dashboard/references/info/${row.original.id}`}>
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
export const EnAddReferenceColumns: ColumnDef<AddReferenceOrder>[] = [
 

  {
    id: "en_title",
    accessorKey: "en_title",
    header: "title",
  },
  {
    accessorKey: "link",
    header: "link",
    cell: ({ row }) => (
      <a href={row.original.link} target="_blank">
        {row.original.link}
      </a>
    ),
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
          <Link to={`/admin-dashboard/references/info/${row.original.id}`}>
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
