import { zodResolver } from "@hookform/resolvers/zod";
import Label from "src/ui/label";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { axiosInstance } from "src/lib/http";
import { addOrgSchema, OgResp } from "src/types/validation";
import { z } from "zod";

export default function OrganizationInfo() {
  const { id } = useParams<{ id: string }>();
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const fetchData = async () => {
    const response = await axiosInstance.get<OgResp>(
      `/api/OrgUndBWC/${id}`,
      {}
    );
    return response.data;
  };
  const {
    data: OrgnaztioneData,
    error: OrgnaztioneError,
    isLoading: OrgnaztioneIsLoading,
  } = useQuery({
    queryKey: ["TaskForce", id],
    queryFn: fetchData,
    enabled: !!id,
  });

  const form = useForm<z.infer<typeof addOrgSchema>>({
    resolver: zodResolver(addOrgSchema),
  });
  useEffect(() => {
    if (OrgnaztioneData) {
      form.reset({
        name: OrgnaztioneData.name,
        link: OrgnaztioneData.link,
        // Degree: TaskForceData.degree,
      });

      // Set the existing image URL for preview
      setExistingImageUrl(OrgnaztioneData.img); // This should be the image URL string
    }
  }, [OrgnaztioneData]);
  return (
    <div className="min-h-[90vh]  w-[100%] bg-[#f2f2f2]">
      <div className=" grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]">
        <div className=" col-span-1 h-auto translate-y-10">
          <Label text="صورة المؤسسه" />
          <img src={OrgnaztioneData?.img} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
        <div className=" col-span-1 h-auto translate-y-10">
          <Label text="الاسم المؤسسه" />
          {OrgnaztioneData?.name}
        </div>
        <div className=" col-span-1 h-auto translate-y-10">
          <Label text="رابط المؤسسه" />
          {OrgnaztioneData?.link}
        </div>
      </div>
    </div>
  );
}
