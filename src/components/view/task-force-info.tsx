import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { axiosInstance } from "src/lib/http";
import { addTaskForceSchema, TaskForceResp } from "src/types/validation";
import Label from "src/ui/label";
import { z } from "zod";

export default function TaskForceInfo() {
  const { id } = useParams<{ id: string }>();
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const fetchData = async () => {
    const response = await axiosInstance.get<TaskForceResp>(
      `/api/Taskforce/${id}`,
      {}
    );
    return response.data;
  };
  const {
    data: TaskForceData,
    error: TaskForceError,
    isLoading: TaskForceIsLoading,
  } = useQuery({
    queryKey: ["TaskForce", id],
    queryFn: fetchData,
    enabled: !!id,
  });

  const form = useForm<z.infer<typeof addTaskForceSchema>>({
    resolver: zodResolver(addTaskForceSchema),
  });
  useEffect(() => {
    if (TaskForceData) {
      form.reset({
        Name: TaskForceData.name,
        Role: TaskForceData.role,
        Degree: TaskForceData.degree,
      });

      // Set the existing image URL for preview
      setExistingImageUrl(TaskForceData.image); // This should be the image URL string
    }
  }, [TaskForceData]);
  return (
    <div className="min-h-[90vh]  w-[100%] bg-[#f2f2f2]">
      <div className=" grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]">
        {/* <label className="text-md mb-2 block font-bold text-gray-950">
            صورة الكاتب
          </label> */}

        <div className=" col-span-1 h-auto translate-y-10">
          <Label text="صورة الموظف" />
          <img src={TaskForceData?.image} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
        <div className=" col-span-1 h-auto translate-y-10">
          <Label text="الاسم بالكامل" />
          {TaskForceData?.name}
        </div>
        <div className=" col-span-1 h-auto translate-y-10">
          <Label text="الدرجة" />
          {TaskForceData?.degree}
        </div>

        <div className=" col-span-1 h-auto translate-y-10">
          <Label text="المسمى الوظيفي" />
          {TaskForceData?.role}
        </div>
      </div>
    </div>
  );
}
