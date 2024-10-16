import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { axiosInstance } from "src/lib/http";
import Label from "src/ui/label";
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

export default function ViewNews() {
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
            <div className="h-[2px]  w-[100%] mx-auto bg-black my-3"></div>
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
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Time to read" />
                <p>{PublicationInfoData?.t2read}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Tags" />
                <div className="">
                  {PublicationInfoData?.tags.map((Item, index) => (
                    <div key={index} className="">
                      <p>
                        {index + 1} . {Item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="وصف الخبر" />
                <div className="">
                  <p className="break-words whitespace-pre-wrap">
                    {PublicationInfoData?.ar_description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="Description" />
                <div className="">
                  <p className="break-words whitespace-pre-wrap">
                    {PublicationInfoData?.ar_description}
                  </p>
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
                  صورة الخبر
                </label>
                <img src={PublicationInfoData?.b_image} alt="" />
              </div>
            </div>
            <div className="h-[2px]  w-[100%] mx-auto bg-black my-3"></div>
            <div className="grid min-h-[100px] mt-4 items-start gap-4 overflow-y-scroll scroll-smooth text-right">
              <div className="text-start h-auto">
                <label htmlFor="" className="float-start">
                  إضافة صور للخبر اخرى
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
                <Label text="عنوان الخبر" />
                <p>{PublicationInfoData?.ar_Title}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="News Title" />
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
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="وقت القراءه " />
                <p>{PublicationInfoData?.t2read}</p>
              </div>
              <div className="text-start col-span-1 h-auto translate-y-10">
                <Label text="وسوم" />
                <div className="">
                  {PublicationInfoData?.tags.map((Item, index) => (
                    <div key={index} className="">
                      <p>
                        {index + 1} . {Item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 w-full px-10 items-start gap-4 text-right min-h-[20vh]">
              <div className="col-span-1 h-auto translate-y-10">
                <Label text="وصف الخبر" />
                <div>
                  <p className="break-words whitespace-pre-wrap">
                    {PublicationInfoData?.ar_description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 w-[100%] px-10 items-start gap-4 text-right min-h-[20vh]  ">
              <div className="text-end col-span-1 h-auto translate-y-10">
                <Label text="Description" />
                <div className="">
                  <p className="break-words whitespace-pre-wrap">
                    {PublicationInfoData?.ar_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
