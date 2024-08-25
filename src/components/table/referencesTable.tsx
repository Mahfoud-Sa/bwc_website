import React, { useState, useMemo } from "react";
import { Button } from "src/ui/button";
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
export default function ReferencesTable() {
  const columnsMemo = useMemo(() => AddReferenceColumns, []);
  const defaultData = useMemo<AddReferenceOrder[]>(() => [], []);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    // @ts-ignore
    data: defaultData,
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
              <Sheet>
                <SheetTrigger
                  className={` text-md  inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#450A0A] px-4 py-2 text-sm font-bold text-white  ring-offset-background transition-colors hover:bg-[#711F1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
                  //   disabled={!accessRejectedOrders()}
                >
                  {/* طلبات مرفوضة : {rejectedOrders?.length} */}
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle> الطلبات المرفوضة</SheetTitle>
                    {/* <AddEmployeeRejectedTable /> */}
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <Button className="mr-2" type="submit" form="searchEmployee">
                {" "}
                بحث{" "}
              </Button>
              <Sheet>
                <SheetTrigger className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  <Plus className="ml-1" />
                  اضافة كاتب
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>طلب إضافة موظف</SheetTitle>
                    {/* <AddEmployeeForm refetch={refetch} /> */}
                  </SheetHeader>
                </SheetContent>
              </Sheet>
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
