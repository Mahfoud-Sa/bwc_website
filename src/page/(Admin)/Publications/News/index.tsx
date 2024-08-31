import React from "react";
import OrganizationsUnderBwcTable from "src/components/table/organizations-under-bwc-table";
import Breadcrumb from "src/ui/breadcrumb";

export default function NewsIndex() {
  return (
    <main>
      <div className="fixed h-screen  w-[83.5%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            <Breadcrumb
              tilte1="المؤسسات و الموظفين"
              path1="/attendance"
              tilte2=" المؤسسات التي نديرها"
              path2="/attendance/add-Attendance"
              tilte3=""
              path3=""
            />
          </div>
        </div>

        <OrganizationsUnderBwcTable />
      </div>
    </main>
  );
}
