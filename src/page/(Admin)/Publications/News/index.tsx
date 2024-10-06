import { useTranslation } from "react-i18next";
import NewsTable from "src/components/table/new-table";
import Breadcrumb from "src/ui/breadcrumb";
import EnBreadcrumb from "src/ui/en-breadcrumb";

export default function NewsIndex() {
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
                tilte3="news"
                path3=""
              />
            ) : (
              <Breadcrumb
                tilte1="المنشورات"
                path1="/attendance"
                tilte2=" منشورات"
                path2="/attendance/add-Attendance"
                tilte3="الاخبار"
                path3=""
              />
            )}
          </div>
        </div>

        <NewsTable />
      </div>
    </main>
  );
}
