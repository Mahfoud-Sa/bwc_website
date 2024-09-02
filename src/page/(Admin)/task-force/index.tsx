import React from "react";
import TaskForceTable from "src/components/table/taskforce-table";
import Breadcrumb from "src/ui/breadcrumb";

export default function TaskForceIndex() {
  return (
    <main>
      <div className="fixed h-screen  w-[83.5%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            <Breadcrumb
              tilte1="المؤسسات و الموظفين"
              path1="/attendance"
              tilte2=" فريق العمل"
              path2="/attendance/add-Attendance"
              tilte3=""
              path3=""
            />
          </div>
        </div>

        <TaskForceTable />
      </div>
    </main>
  );
}
