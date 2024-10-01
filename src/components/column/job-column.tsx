import { type ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { Button } from "../../ui/button";

import { SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";

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
    accessorKey: "id",
    header: "رقم الوظيفة",
  },
  {
    id: "ar_jobTitle",
    accessorKey: "ar_jobTitle",
    header: "عنوان الوظيفة",
  },
  {
    accessorKey: "endDate",
    header: "اخر تاريخ للتسجيل",
    sortingFn: "datetime",
  },
  {
    id: "avaliable",
    accessorKey: "avaliable",
    header: "حالة الوظيفة",
    cell: ({ row }) => {
      const avaliable = row.original.avaliable;
      return avaliable === true ? "متاحة" : "غير متاحة";
    },
    filterFn: (row, columnId, filterValue) => {
      // If no filter is applied, show all rows
      if (filterValue === undefined) {
        return true;
      }
      return row.getValue(columnId) === filterValue;
    },
  },

  {
    accessorKey: "publish",
    header: "نشر/إلغاء النشر",
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
          <Link to={`/admin-dashboard/jobs/update-job/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/jobs/info/${row.original.id}`}>
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
    accessorKey: "id",
    header: "job num",
  },
  {
    id: "en_jobTitle",
    accessorKey: "en_jobTitle",
    header: "Job Title",
  },

  {
    accessorKey: "endDate",
    header: "Ending Date",
    sortingFn: "datetime",
  },
  {
    accessorKey: "avaliable",
    header: "Available",
    cell: ({ row }) => {
      const avaliable = row.original.avaliable;
      return avaliable === true ? "available" : "unavailable";
    },
    filterFn: (row, columnId, filterValue) => {
      // If no filter is applied, include all rows
      if (filterValue === undefined) {
        return true;
      }
      return row.getValue(columnId) === filterValue;
    },
  },

  {
    accessorKey: "publish",
    header: "publish/unpublished",
    cell: ({ row }) => {
      const publish = row.original.publish;
      return publish === true ? "publish" : "unpublished";
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <div className="flex justify-center ">
          <Link to={`/admin-dashboard/jobs/update-job/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <SquarePen className="" />
            </Button>
          </Link>
          <Link to={`/admin-dashboard/jobs/info/${row.original.id}`}>
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
