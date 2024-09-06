import React from "react";
import AddJobForm from "src/components/form/add-job-form";
import Breadcrumb from "src/ui/breadcrumb";

export default function AddJob() {
  return (
    <main>
      <div className="min-h-screen  w-[100%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            <Breadcrumb
              tilte1="المزايا"
              path1="/attendance"
              tilte2=" الوظائف"
              path2="/attendance/add-Attendance"
              tilte3="إضافة وظيفة"
              path3=""
            />
          </div>
        </div>

        <AddJobForm />
      </div>
    </main>
  );
}
