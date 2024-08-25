import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Checkbox } from "../../ui/checkbox";

import { type z } from "zod";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

export type AddReferenceOrder = {
  isSelected: boolean;
  id: string;
  title: string;
  link: string;
};

export const AddReferenceColumns: ColumnDef<AddReferenceOrder>[] = [
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
    id: "title",
    accessorKey: "title",
    header: "العنوان",
  },
  {
    accessorKey: "link",
    header: "الرابط",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      //   const { data: session } = useSession();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>الإعدادات</DropdownMenuLabel>

            <DropdownMenuSeparator />

            {/* // <DropdownMenuItem>تعديل</DropdownMenuItem> */}
            <Sheet>
              <SheetTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-[#450A0A] hover:text-white focus:bg-[#450A0A] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                تعديل
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle> تعديل طلب إضافة موظف</SheetTitle>
                  {/* <AddEmployeeForm
                          data={row.original.data}
                          id={row.original.id}
                        /> */}
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-[#450A0A] hover:text-white focus:bg-[#450A0A] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                عرض
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle> طلب إضافة موظف</SheetTitle>
                  {/* <OrderView
                      data={row.original.data}
                      id={row.original.id}
                      isFinal={row.original.status == OrderStatus.firstApproved}
                      username={row.original.CreatedBy?.fullName ?? ""}
                      orderDate={row.original.date}
                    /> */}
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
