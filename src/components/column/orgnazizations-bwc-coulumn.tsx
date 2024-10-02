import { type ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";

import { SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";


import DeleteDialog from "../dailog/delete-dialog";
import { Link } from "react-router-dom";
import EditIcon from "src/assets/icons/edit-icon";

export type AddOrganizationsOrder = {
  isSelected: boolean;
  id: number;
  ar_name: string;
  en_name: string;
  img: string;
  link: string;
};

export const AddOrganizationsColumns: ColumnDef<AddOrganizationsOrder>[] = [
 

  {
    accessorKey: "img",
    header: "صورة المؤسسة",
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
    header: "اسم المؤسسة",
  },
  {
    accessorKey: "link",
    header: "رابط موقع المؤسسة",
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
          <Link to={`/admin-dashboard/organization/update/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <EditIcon/>
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
export const AddEnOrganizationsColumns: ColumnDef<AddOrganizationsOrder>[] = [
 

  {
    accessorKey: "img",
    header: "Organization Image",
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
    header: "institution name",
  },
  {
    accessorKey: "link",
    header: "Link",
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
          <Link to={`/admin-dashboard/organization/update/${row.original?.id}`}>
            <Button
              className="bg-[#d5ae78] text-white ml-3 rounded-lg"
              size={"sm"}
            >
              <EditIcon/>
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
