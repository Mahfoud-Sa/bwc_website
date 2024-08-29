import React from "react";
import ReferencesTable from "src/components/table/referencesTable";
import Breadcrumb from "src/ui/breadcrumb";

export default function References() {
  return (
    <main>
      <div className="fixed h-screen  w-[83.5%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            <Breadcrumb
              tilte1="المنشورات"
              path1="/attendance"
              tilte2=" المراجع"
              path2="/attendance/add-Attendance"
              tilte3=""
              path3=""
            />
          </div>
        </div>

        <ReferencesTable />
      </div>
    </main>
  );
}
