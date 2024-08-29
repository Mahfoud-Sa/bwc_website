import React, { useState, useMemo } from "react";
import { Button } from "src/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import {
  useReactTable,
  type ColumnFiltersState,
  type RowSelectionState,
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Label from "src/ui/label";
import { Input } from "src/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import {
  AddReferenceColumns,
  type AddReferenceOrder,
} from "../../components/column/add-refernce-column";

import { OrderDataTable } from "src/ui/order-data-table";

export interface refernceProp {
  title: string;
  link: string;
}

const reference: refernceProp[] = [
  { title: "sss1", link: "asdasdasd1" },
  { title: "sss2", link: "asdasdasd2" },
  { title: "sss3", link: "asdasdasd3" },
  { title: "sss4", link: "asdasdasd4" },
  { title: "sss5", link: "asdasdasd5" },
];

export default function ReferencesTable() {
  const columnsMemo = useMemo(() => AddReferenceColumns, []);
  const defaultData = useMemo<AddReferenceOrder[]>(() => [], []);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    // @ts-ignore
    data: reference ?? defaultData,
    // @ts-ignore
    columns: columnsMemo,
    state: {
      rowSelection,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className="max-w-screen-3xl mx-auto grid grid-cols-4 gap-2 px-12">
      <div className="col-span-4 mt-5 h-auto">
        <div className="">
          <div className="grid grid-cols-4 gap-2 text-right">
            {/* Start : input Text */}
            <div className=" col-span-1 h-auto">
              <Label text="الرقم العسكري" />
              <Input
                placeholder="الرقم العسكري"
                value={
                  (table
                    .getColumn("data.militaryNumber")
                    ?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table
                    .getColumn("data.militaryNumber")
                    ?.setFilterValue(event.target.value)
                }
              />
            </div>
            {/* End : input Text */}
          </div>
        </div>
        <div className=" grid grid-cols-4 w-full  items-start gap-4 ">
          <div className="col-span-1 ">
            {/* <p className="">اجمالي نتائج البحث : {orders?.length ?? 0}</p> */}
          </div>
          <div className="col-span-3">
            <div className="flex flex-row-reverse gap-4 ">
              <Button
                className="mr-2 bg-[#d4d4d4] hover:bg-white"
                type="submit"
                form="searchEmployee"
              >
                {" "}
                فلتر بعدد{" "}
              </Button>
              <Button
                className="mr-2 bg-[#d4d4d4] hover:bg-white"
                type="submit"
                form="searchEmployee"
              >
                {" "}
                بحث سريع{" "}
              </Button>
              <Link to={"/admin-dashboard/references/add"}>
                <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  <Plus className="ml-2" />
                  إضافة مرجع
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 rounded-md">
        {/* @ts-ignore */}
        <OrderDataTable columns={columnsMemo} table={table} />
      </div>
    </div>
  );
}
