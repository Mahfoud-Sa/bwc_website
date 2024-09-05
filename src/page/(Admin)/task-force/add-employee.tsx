import React from "react";
import AddTaskForce from "src/components/form/add-task-force";
import Breadcrumb from "src/ui/breadcrumb";

export default function AddEmployee() {
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
              tilte3="إضافة فريق العمل"
              path3="/attendance/add-Attendance"
            />
            <AddTaskForce />
          </div>
        </div>
      </div>
    </main>
  );
}
