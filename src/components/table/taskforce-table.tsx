import React, { useState, useMemo, useEffect } from "react";
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
  AddWriterColumns,
  type AddWriterOrder,
} from "../../components/column/writer-column";

import { OrderDataTable } from "src/ui/order-data-table";
import { axiosInstance } from "src/lib/http";
// import { ReferenceResp } from "src/types/validation";

export interface ReferenceProp {
  id: number;
  ar_title: string;
  en_title: string;
  link: string;
}

export type ReferenceResp = {
  id: number;
  ar_title: string;
  en_title: string;
  link: string;
};

const reference: ReferenceProp[] = [
  { id: 1, ar_title: "sss1", en_title: "dfgdf", link: "asdasdasd1" },
  { id: 1, ar_title: "sss2", en_title: "dfgdf", link: "asdasdasd2" },
  { id: 1, ar_title: "sss3", en_title: "dfgdf", link: "asdasdasd3" },
  { id: 1, ar_title: "sss4", en_title: "dfgdf", link: "asdasdasd4" },
  { id: 1, ar_title: "sss5", en_title: "dfgdf", link: "asdasdasd5" },
];
export default function TaskForceTable() {
  const defaultData = useMemo<AddWriterOrder[]>(() => [], []);
  const columnsMemo = useMemo(() => AddWriterColumns, []);
  const [data, setData] = useState<ReferenceProp[]>([]);
  const fetchIssueById = async () => {
    try {
      const response = await axiosInstance.get<ReferenceResp>(
        `/api/References`
      );
      return [response.data];
    } catch (error) {
      console.error("Error fetching issue:", error);
      throw error;
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchIssueById();
      setData(data);
    };

    getData();
  }, []);

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    // @ts-ignore
    data: data.length ? data[0] : defaultData,
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
              <Label text="اسم الموظف" />
              <Input
                placeholder="بحث باسم الموظف"
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
                بحث سريع{" "}
              </Button>
              <Link to={"/admin-dashboard/taskforce/add-employee"}>
                <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  <Plus className="ml-2" />
                  إضافة موظف
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
