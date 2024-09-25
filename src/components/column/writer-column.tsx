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

// export type AddWriterOrder = {
//   isSelected: boolean;
//   id: number;
//   ar_fullName: string;
//   en_fullName: string;
//   image: string;
//   ar_description: string;
//   en_description: string;
//   ar_role: string;
//   en_role: string;
// };
export type AddWriterOrder = {
  isSelected: boolean;
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
  publication: any[];
  soicalmedia: Soicalmedia[];
};

export interface Soicalmedia {
  id: number;
  name: string;
  url: string;
  writerId: number;
  writer: null;
}
export const AddWriterColumns: ColumnDef<AddWriterOrder>[] = [
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
    accessorKey: "image",
    header: "ص",
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
    id: "ar_fullName",
    accessorKey: "ar_fullName",
    header: "الاسم الكامل",
  },
  // {
  //   id: "Nopub",
  //   accessorKey: "Nopub",
  //   sortingFn: "basic",
  // },
  // {
  //   header: "dob", // New Date of Birth column
  //   accessorKey: "dob",
  //   sortingFn: "datetime", // Built-in datetime sorting function
  // },
  {
    accessorKey: "ar_fullName",
    header: "المسمى الوظيفي",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link
            to={`/admin-dashboard/writer/update-writer/${row.original?.id}`}
          >
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/writer/info/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <DeleteDialog
            url={`/api/Writers/${row.original?.id}`}
            path={"/admin-dashboard/writer"}
          />
        </div>
      );
    },
  },
];
export const AddEnWriterColumns: ColumnDef<AddWriterOrder>[] = [
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
    accessorKey: "image",
    header: "image",
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
    id: "en_fullName",
    accessorKey: "en_fullName",
    header: "full name",
  },
  // {
  //   id: "Nopub",
  //   accessorKey: "Nopub",
  //   sortingFn: "basic",
  // },
  // {
  //   header: "dob", // New Date of Birth column
  //   accessorKey: "dob",
  //   sortingFn: "datetime", // Built-in datetime sorting function
  // },
  {
    accessorKey: "en_role",
    header: "role",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center ">
          <Link
            to={`/admin-dashboard/writer/update-writer/${row.original?.id}`}
          >
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/writer/info/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <DeleteDialog
            url={`/api/Writers/${row.original?.id}`}
            path={"/admin-dashboard/writer"}
          />
        </div>
      );
    },
  },
];
