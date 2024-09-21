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
  getSortedRowModel,
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
  AddWriterColumns,
  AddEnWriterColumns,
  type AddWriterOrder,
} from "../../components/column/writer-column";

import { OrderDataTable } from "src/ui/order-data-table";
import { axiosInstance } from "src/lib/http";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "src/ui/select";
// import { ReferenceResp } from "src/types/validation";

export interface WriterProp {
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  Nopub: number;
  dob: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
}

export type WriterResp = {
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  Nopub: number;
  dob: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
};

const writers: WriterResp[] = [
  {
    id: 1,
    ar_fullName: "أحمد علي",
    en_fullName: "Ahmed Ali",
    image: "https://example.com/images/ahmed.png",
    Nopub: 25,
    ar_description: "كاتب متخصص في الأدب العربي.",
    en_description: "A writer specializing in Arabic literature.",
    ar_role: "كاتب",
    en_role: "Writer",
    dob: "1980-05-12", // Date of Birth added
  },
  {
    id: 2,
    ar_fullName: "ليلى سعيد",
    en_fullName: "Laila Saeed",
    image: "https://example.com/images/laila.png",
    Nopub: 10,
    ar_description: "متخصصة في كتابة المقالات الصحفية.",
    en_description: "Specializes in writing journalistic articles.",
    ar_role: "صحفية",
    en_role: "Journalist",
    dob: "1990-09-22",
  },
  {
    id: 3,
    ar_fullName: "محمد يوسف",
    en_fullName: "Mohammed Youssef",
    image: "https://example.com/images/mohammed.png",
    Nopub: 30,
    ar_description: "باحث وكاتب في العلوم الاجتماعية.",
    en_description: "Researcher and writer in social sciences.",
    ar_role: "باحث",
    en_role: "Researcher",
    dob: "1985-02-17",
  },
  {
    id: 4,
    ar_fullName: "سارة عبد الله",
    en_fullName: "Sara Abdullah",
    image: "https://example.com/images/sara.png",
    Nopub: 15,
    ar_description: "كاتبة وشاعرة متخصصة في الأدب الحديث.",
    en_description: "Writer and poet specializing in modern literature.",
    ar_role: "كاتبة",
    en_role: "Writer",
    dob: "1995-11-30",
  },
  {
    id: 5,
    ar_fullName: "خالد حسن",
    en_fullName: "Khalid Hassan",
    image: "https://example.com/images/khalid.png",
    Nopub: 8,
    ar_description: "كاتب متخصص في المقالات العلمية.",
    en_description: "Writer specializing in scientific articles.",
    ar_role: "كاتب",
    en_role: "Writer",
    dob: "2000-04-10",
  },
];

export default function WriterTable() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const defaultData = useMemo<AddWriterOrder[]>(() => [], []);
  const columnsMemo = useMemo(() => AddWriterColumns, []);
  const columnsMemos = useMemo(() => AddEnWriterColumns, []);
  const [data, setData] = useState<WriterProp[]>([]);
  const fetchIssueById = async () => {
    try {
      const response = await axiosInstance.get<WriterResp>(`/api/Writers`);
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
    data: writers ?? defaultData,
    // data.length ? data[0]
    // @ts-ignore
    columns: dir === "ltr" ? columnsMemos : columnsMemo,
    state: {
      rowSelection,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    sortingFns: {
      myCustomSortingFn: (rowA, rowB, columnId) => {
        return rowA.original[columnId] > rowB.original[columnId] ? 1 : -1;
      },
    },
  });
  return (
    <>
      {dir === "ltr" ? (
        <div className="max-w-screen-3xl mx-auto grid grid-cols-4 gap-2 px-12">
          <div className="col-span-4 mt-5 h-auto">
            <div className="">
              <div className="grid grid-cols-4 gap-2 text-right">
                {/* Start : input Text */}
                <div className=" col-span-1 h-auto">
                  <label htmlFor="" className="float-start">
                    Writer name
                  </label>
                  <Input
                    placeholder="Enter Writer name"
                    value={
                      (table
                        .getColumn("en_fullName")
                        ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                      table
                        .getColumn("en_fullName")
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
                    Filter Number{" "}
                  </Button>

                  <Link to={"/admin-dashboard/writer/add-writer"}>
                    <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      <Plus className="mr-2" />
                      Add a Writer
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
                  <Label text="اسم الكاتب" />
                  <Input
                    placeholder="بحث باسم الكاتب"
                    value={
                      (table
                        .getColumn("ar_fullName")
                        ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                      table
                        .getColumn("ar_fullName")
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
                  <Select
                    dir="rtl"
                    onValueChange={(value) => {
                      table.setSorting([
                        {
                          id: "Nopub",
                          desc: value === "الاكثر",
                        },
                      ]);
                    }}
                  >
                    <SelectTrigger className="w-[180px] bg-[#d4d4d4]">
                      <SelectValue placeholder="فلتر بعدد" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#d4d4d4]">
                      <SelectGroup>
                        <SelectLabel>فلتر بعدد</SelectLabel>
                        <SelectItem value="الاكثر">الاكثر</SelectItem>
                        <SelectItem value="الاقل">الاقل</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select
                    dir="rtl"
                    onValueChange={(value) => {
                      table.setSorting([
                        {
                          id: "dob",
                          desc: value === "الاحدث",
                        },
                      ]);
                    }}
                  >
                    <SelectTrigger className="w-[180px] bg-[#d4d4d4]">
                      <SelectValue placeholder="فلتر بالتاريخ" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#d4d4d4]">
                      <SelectGroup>
                        <SelectLabel>فلتر بالتاريخ</SelectLabel>
                        <SelectItem value="الاقدم">الاقدم</SelectItem>
                        <SelectItem value="الاحدث">الاحدث</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Link to={"/admin-dashboard/writer/add-writer"}>
                    <Button className="text-md inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#000] px-4 py-2 text-sm font-bold text-white ring-offset-background  transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      <Plus className="ml-2" />
                      إضافة كاتب
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
