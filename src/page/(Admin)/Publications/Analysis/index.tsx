import { useTranslation } from "react-i18next";
import AnalysisTable from "src/components/table/analysis-table";
import Breadcrumb from "src/ui/breadcrumb";
import EnBreadcrumb from "src/ui/en-breadcrumb";

export default function AnalysisIndex() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <main>
      <div className="fixed h-screen  w-[83.5%] text-right bg-[#f2f2f2]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-2 mt-4 h-auto  rounded-lg">
            {dir === "ltr" ? (
              <EnBreadcrumb
                tilte1="Publications"
                path1="/attendance"
                tilte2=" publications"
                path2="/attendance/add-Attendance"
                tilte3="analysis"
                path3=""
              />
            ) : (
              <Breadcrumb
                tilte1="المنشورات"
                path1="/attendance"
                tilte2=" منشورات"
                path2="/attendance/add-Attendance"
                tilte3="التحاليل"
                path3=""
              />
            )}
          </div>
        </div>

        <AnalysisTable />
      </div>
    </main>
  );
}
