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
import ChangeAvailabilityDialog from "../dailog/change-job-avalibilty";
import ChangePublishesDialog from "../dailog/change-publish";

export type AddJobOrder = {
  isSelected: boolean;
  id: number;
  ar_jobTitle: string;
  en_jobTitle: string;
  img: string;
  avaliable: boolean;
  publish: boolean;
  ar_basicDescription: string;
  en_basicDescription: string;
  ar_skiles: string[];
  en_skiles: string[];
  ar_advances: string[];
  en_advances: string[];
  formLink: string;
  endDate: Date;
};

export const AddJobColumns: ColumnDef<AddJobOrder>[] = [
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
    accessorKey: "id",
    header: "رقم الوظيفة",
  },
  {
    id: "ar_jobTitle",
    accessorKey: "ar_jobTitle",
    header: "عنوان الوظيفة",
  },
  {
    accessorKey: "ar_basicDescription",
    header: "وصف الوظيفة",
  },
  {
    accessorKey: "avaliable",
    header: "حالة الوظيفة",
    cell: ({ row }) => {
      const avaliable = row.original.avaliable;
      return avaliable === true ? "متاحة" : "غير متاحة";
    },
  },
  {
    accessorKey: "publish",
    header: "حالة الوظيفة",
    cell: ({ row }) => {
      const publish = row.original.publish;
      return publish === true ? "نشر" : "غير منشور";
    },
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
          <Link to={`/admin-dashboard/jobs/info`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <ChangeAvailabilityDialog id={row.original.id} />
          <ChangePublishesDialog id={row.original.id} />
          <DeleteDialog
            url={`/api/Jobs/${row.original?.id}`}
            path={"/admin-dashboard/jobs"}
          />
        </div>
      );
    },
  },
];

export const AddEnJobColumns: ColumnDef<AddJobOrder>[] = [
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
    accessorKey: "id",
    header: "job num",
  },
  {
    id: "en_jobTitle",
    accessorKey: "en_jobTitle",
    header: "Job Title",
  },
  {
    accessorKey: "en_basicDescription",
    header: "Basic Description",
  },
  {
    accessorKey: "avaliable",
    header: "Available",
    cell: ({ row }) => {
      const avaliable = row.original.avaliable;
      return avaliable === true ? "متاحة" : "غير متاحة";
    },
  },
  {
    accessorKey: "publish",
    header: "Publish",
    cell: ({ row }) => {
      const publish = row.original.publish;
      return publish === true ? "نشر" : "غير منشور";
    },
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
          <Link to={`/admin-dashboard/jobs/info`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <Eye className="" />
            </Button>
          </Link>
          <ChangeAvailabilityDialog id={row.original.id} />
          <ChangePublishesDialog id={row.original.id} />
          <DeleteDialog
            url={`/api/Jobs/${row.original?.id}`}
            path={"/admin-dashboard/jobs"}
          />
        </div>
      );
    },
  },
];
