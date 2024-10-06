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
import image4 from "../../assets/img/1724086550980.jpg";
import {
  AddAnalysisColumns,
  AddENAnalysisColumns,
  type AddAnalysisOrder,
} from "../column/analysis-column";

import { OrderDataTable } from "src/ui/order-data-table";
import { axiosInstance } from "src/lib/http";
import { useTranslation } from "react-i18next";
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
export default function AnalysisTable() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const defaultData = useMemo<AddAnalysisOrder[]>(() => [], []);
  const columnsMemo = useMemo(() => AddAnalysisColumns, []);
  const columnsMemos = useMemo(() => AddENAnalysisColumns, []);
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
    columns: dir === "ltr" ? columnsMemos : columnsMemo,
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
    <>
      {dir === "ltr" ? (
        <div className="max-w-screen-3xl mx-auto grid grid-cols-4 gap-2 px-12">
          <div className="col-span-4 mt-5 h-auto">
            <div className="">
              <div className="grid grid-cols-4 gap-2 text-right">
                {/* Start : input Text */}
                <div className="text-start col-span-1 h-auto">
                  <Label text="Analysis Title" />
                  <Input
                    placeholder="Search by Analysis Title"
                    value={
                      (table.getColumn("name")?.getFilterValue() as string) ??
                      ""
                    }
                    onChange={(event) =>
                      table
                        .getColumn("name")
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
                    Filter Date Analysis{" "}
                  </Button>
                  <Button
                    className="mr-2 bg-[#d4d4d4] hover:bg-white"
                    type="submit"
                    form="searchEmployee"
                  >
                    {" "}
                    Analysis Status{" "}
                  </Button>
                  <Link to={`/admin-dashboard/add-publications/${3}`}>
                    <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      <Plus className="ml-2" />
                      add analysis
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
      ) : (
        <div className="max-w-screen-3xl mx-auto grid grid-cols-4 gap-2 px-12">
          <div className="col-span-4 mt-5 h-auto">
            <div className="">
              <div className="grid grid-cols-4 gap-2 text-right">
                {/* Start : input Text */}
                <div className=" col-span-1 h-auto">
                  <Label text="عنوان التحليل" />
                  <Input
                    placeholder="بحث بعنوان التحليل"
                    value={
                      (table.getColumn("name")?.getFilterValue() as string) ??
                      ""
                    }
                    onChange={(event) =>
                      table
                        .getColumn("name")
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
                    فلتر بتاريخ التحليل{" "}
                  </Button>
                  <Button
                    className="mr-2 bg-[#d4d4d4] hover:bg-white"
                    type="submit"
                    form="searchEmployee"
                  >
                    {" "}
                    حالة النشر{" "}
                  </Button>
                  <Link to={`/admin-dashboard/add-publications/${3}`}>
                    <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      <Plus className="ml-2" />
                      اضافة التحليل
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
      )}
    </>
  );
}
