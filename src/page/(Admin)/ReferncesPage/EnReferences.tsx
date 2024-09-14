import React from "react";
import EnReferencesTable from "src/components/table/en-referencesTable";

import EnBreadcrumb from "src/ui/en-breadcrumb";

export default function EnReferences() {
  return (
    <main>
      <div className="min-h-screen  w-[100%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            <EnBreadcrumb
              tilte1="publications"
              path1="/attendance"
              tilte2=" references"
              path2="/attendance/add-Attendance"
              tilte3=""
              path3=""
            />
          </div>
        </div>

        <EnReferencesTable />
      </div>
    </main>
  );
}
