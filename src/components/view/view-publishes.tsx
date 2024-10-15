import React from "react";
import { addPublishes } from "src/types/validation";
import { z } from "zod";
import Label from "src/ui/label";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance, postApi } from "src/lib/http";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface publicationView {
  id: number;
  type: string;
  ar_Title: string;
  en_Title: string;
  b_image: string;
  images: string[];
  writers: Writer[];
  reportId: null;
  report: null;
  publish: boolean;
  t2read: number;
  tags: string[];
  date_of_publish: Date;
  ar_table_of_content: any[];
  en_table_of_content: any[];
  ar_description: string;
  en_description: string;
  ar_Note: null;
  en_Note: string;
  references: Reference[];
}

export interface Reference {
  id: number;
  ar_title: string;
  en_title: string;
  link: string;
  publication: Publication[];
}

export interface Publication {
  id: number;
  type: string;
  ar_Title: string;
  en_Title: string;
  b_image: string;
  images: string[];
  writers: Writer[];
  reportId: null;
  report: null;
  publish: boolean;
  t2read: number;
  tags: string[];
  date_of_publish: Date;
  ar_table_of_content: null;
  en_table_of_content: null;
  ar_description: string;
  en_description: string;
  ar_Note: null;
  en_Note: string;
  references: null[];
}

export interface Writer {
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
  publication: null[];
  soicalmedia: any[];
}

type ReferenceFormValue = z.infer<typeof addPublishes>;

export default function ViewPublications() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const { id } = useParams<{ id: string }>();

  const fetchData = async () => {
    const response = await axiosInstance.get<publicationView>(
      `/api/ManagingPublications/${id}`,
      {}
    );
    return response.data;
  };
  const {
    data: PublicationInfoData,
    error: PublicationInfoError,
    isLoading: PublicationInfoIsLoading,
  } = useQuery({
    queryKey: ["getByIdPublication", id],
    queryFn: fetchData,
    enabled: !!id,
  });

  return (
    <>
      {dir === "ltr" ? (
        <div className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9">
          <div className="border-2 border-black w-[100%] rounded-lg my-5 p-2 mx-auto ">
            <div className="grid   grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right min-h-[20vh] ">
              <div className="text-start col-span-1 h-auto ">
                <label htmlFor="" className="float-start">
                  publication image
                </label>
                <img src={PublicationInfoData?.b_image} alt="" />
              </div>
            </div>
            <div className="grid min-h-[100px] mt-4 items-start gap-4 overflow-y-scroll scroll-smooth text-right">
              <div className="text-start h-auto">
                <label htmlFor="" className="float-start">
                  More publication Image
                </label>
                <div className="flex flex-wrap gap-4">
                  {PublicationInfoData?.images.map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                      <img
                        src={item}
                        alt={`publication-${index}`}
                        className="w-[200px] h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}

            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="عنوان المنشور" />
                <p>{PublicationInfoData?.ar_Title}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Publish Title" />
                <p>{PublicationInfoData?.en_Title}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Date of Publication" />
                <p>
                  {String(PublicationInfoData?.date_of_publish).split("T")[0]}
                </p>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="writers" />
                <div className="flex flex-wrap gap-4">
                  {PublicationInfoData?.writers.map((Item, index) => (
                    <div key={index} className="flex items-end gap-4">
                      <p>{Item.en_fullName}</p>
                      <img
                        src={Item.image}
                        alt=""
                        className="w-[100px] h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Time to read" />
                <p>{PublicationInfoData?.t2read}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="references" />
                <div className="flex flex-wrap gap-4">
                  {PublicationInfoData?.references.map((Item, index) => (
                    <div key={index} className="flex items-end gap-4">
                      <a href={Item.link}>{Item.en_title}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}

            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Tags" />
                <div className="">
                  {PublicationInfoData?.tags.map((Item, index) => (
                    <div key={index} className="">
                      <p>{Item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="وصف المنشور" />
                <div className="">
                  {PublicationInfoData?.ar_description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: PublicationInfoData.ar_description,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Description" />
                <div className="">
                  {PublicationInfoData?.en_description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: PublicationInfoData.en_description,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="ملاحظة" />
                <div className="">
                  <p>{PublicationInfoData?.ar_Note}</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Note" />
                <div className="">
                  <p>{PublicationInfoData?.en_Note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[90vh]  w-[100%] bg-[#f2f2f2] px-9">
          <div className="border-2 border-black w-[100%] rounded-lg my-5 p-2 mx-auto ">
            <div className="grid   grid-cols-3 items-start gap-4 overflow-y-scroll scroll-smooth text-right min-h-[20vh] ">
              <div className="text-start col-span-1 h-auto ">
                <label htmlFor="" className="float-start">
                  صورة المنشور
                </label>
                <img src={PublicationInfoData?.b_image} alt="" />
              </div>
            </div>
            <div className="grid min-h-[100px] mt-4 items-start gap-4 overflow-y-scroll scroll-smooth text-right">
              <div className="text-start h-auto">
                <label htmlFor="" className="float-start">
                  إضافة صور مشنور اخرى
                </label>
                <div className="flex flex-wrap gap-4">
                  {PublicationInfoData?.images.map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                      <img
                        src={item}
                        alt={`publication-${index}`}
                        className="w-[200px] h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}

            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="عنوان المنشور" />
                <p>{PublicationInfoData?.ar_Title}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Publish Title" />
                <p>{PublicationInfoData?.en_Title}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="تاريخ النشر" />
                <p>
                  {String(PublicationInfoData?.date_of_publish).split("T")[0]}
                </p>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="كتاب" />
                <div className="flex flex-wrap gap-4">
                  {PublicationInfoData?.writers.map((Item, index) => (
                    <div key={index} className="flex items-end gap-4">
                      <p>{Item.en_fullName}</p>
                      <img
                        src={Item.image}
                        alt=""
                        className="w-[100px] h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="وقت القراءه " />
                <p>{PublicationInfoData?.t2read}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="مراجع" />
                <div className="flex flex-wrap gap-4">
                  {PublicationInfoData?.references.map((Item, index) => (
                    <div key={index} className="flex items-end gap-4">
                      <a href={Item.link}>{Item.en_title}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}

            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="وسوم" />
                <div className="">
                  {PublicationInfoData?.tags.map((Item, index) => (
                    <div key={index} className="">
                      <p>{Item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="وصف المنشور" />
                <div className="">
                  {PublicationInfoData?.ar_description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: PublicationInfoData.ar_description,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-end col-span-1 h-auto translate-y-10">
                <Label text="Description" />
                <div className="">
                  {PublicationInfoData?.en_description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: PublicationInfoData.en_description,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="ملاحظة" />
                <div className="">
                  <p>{PublicationInfoData?.ar_Note}</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-end col-span-1 h-auto translate-y-10">
                <Label text="Note" />
                <div className="">
                  <p>{PublicationInfoData?.en_Note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
