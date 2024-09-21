import React from "react";
import AddWriterForm from "src/components/form/add-writer";
import Breadcrumb from "src/ui/breadcrumb";
import { useTranslation } from "react-i18next";
import EnBreadcrumb from "src/ui/en-breadcrumb";

export default function AddWriter() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <main>
      <div className="min-h-screen  w-[100%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            {dir === "ltr" ? (
              <EnBreadcrumb
                tilte1="Organizations and Employees"
                path1="/attendance"
                tilte2=" Writers"
                path2="/attendance/add-Attendance"
                tilte3="Add a Writer"
                path3=""
              />
            ) : (
              <Breadcrumb
                tilte1="المؤسسات و الموظفين"
                path1="/attendance"
                tilte2=" الكُتَّاب"
                path2="/attendance/add-Attendance"
                tilte3="إضافة كاتب"
                path3=""
              />
            )}
          </div>
        </div>

        <AddWriterForm />
      </div>
    </main>
  );
}
