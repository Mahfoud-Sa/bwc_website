import React from "react";
import AddWriterForm from "src/components/form/add-writer";
import Breadcrumb from "src/ui/breadcrumb";

export default function AddWriter() {
  return (
    <main>
      <div className="min-h-screen  w-[100%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            <Breadcrumb
              tilte1="المؤسسات و الموظفين"
              path1="/attendance"
              tilte2=" الكُتَّاب"
              path2="/attendance/add-Attendance"
              tilte3="إضافة كاتب"
              path3=""
            />
          </div>
        </div>

        <AddWriterForm />
      </div>
    </main>
  );
}
