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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import image4 from "../../assets/img/1724086550980.jpg";
import {
  AddOrganizationsColumns,
  type AddOrganizationsOrder,
} from "../../components/column/orgnazizations-bwc-coulumn";

import { OrderDataTable } from "src/ui/order-data-table";
import { axiosInstance } from "src/lib/http";
// import { ReferenceResp } from "src/types/validation";

export interface OrgProp {
  id: number;
  name: string;
  link: string;
  imageFile: string;
}

export type OrgResp = {
  id: number;
  name: string;
  link: string;
  imageFile: string;
};

const reference: OrgProp[] = [
  { id: 1, name: "asdasdasd2", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd3", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd4", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd1", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd2", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd3", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd4", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd1", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd2", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd3", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd4", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd1", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd2", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd3", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd4", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd1", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd2", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd3", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd4", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
  { id: 1, name: "asdasdasd5", link: "dfgdf", imageFile: image4 },
];
export default function OrganizationsUnderBwcTable() {
  const defaultData = useMemo<AddOrganizationsOrder[]>(() => [], []);
  const columnsMemo = useMemo(() => AddOrganizationsColumns, []);
  const [data, setData] = useState<OrgProp[]>([]);
  const fetchIssueById = async () => {
    try {
      const response = await axiosInstance.get<OrgResp>(`/api/OrgUndBWC`);
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
    initialState: {
      pagination: {
        pageSize: 5,
      },
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
              <Label text="اسم المؤسسه" />
              <Input
                placeholder="اسم المؤسسه"
                value={
                  (table.getColumn("name")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("name")?.setFilterValue(event.target.value)
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
              <Link to={"/admin-dashboard/organization/add-org"}>
                <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  <Plus className="ml-2" />
                  إضافة مؤسسة
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
