import React from "react";
import ServicesTable from "src/components/table/services-table";
import Breadcrumb from "src/ui/breadcrumb";

export default function ServicesIndex() {
  return (
    <main>
      <div className="fixed h-screen  w-[83.5%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            <Breadcrumb
              tilte1="المزايا"
              path1="/attendance"
              tilte2=" خدماتنا"
              path2="/attendance/add-Attendance"
              tilte3=""
              path3=""
            />
          </div>
        </div>

        <ServicesTable />
      </div>
    </main>
  );
}