import React from "react";
import AddTaskForce from "src/components/form/add-task-force";
import Breadcrumb from "src/ui/breadcrumb";
import { useTranslation } from "react-i18next";
import EnBreadcrumb from "src/ui/en-breadcrumb";

export default function AddEmployee() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <main>
      <div className="fixed h-screen  w-[83.5%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            {dir === "ltr" ? (
              <EnBreadcrumb
                tilte1="Organizations and Employees"
                path1="/attendance"
                tilte2=" Task Force"
                path2="/attendance/add-Attendance"
                tilte3="Add Task Force"
                path3="/attendance/add-Attendance"
              />
            ) : (
              <Breadcrumb
                tilte1="المؤسسات و الموظفين"
                path1="/attendance"
                tilte2=" فريق العمل"
                path2="/attendance/add-Attendance"
                tilte3="إضافة فريق العمل"
                path3="/attendance/add-Attendance"
              />
            )}
            <AddTaskForce />
          </div>
        </div>
      </div>
    </main>
  );
}
