import React from "react";
import Navber from "../components/navbar";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <div  >
      <Navber />
      <div dir={dir === "ltr" ? "rtl" : "ltr"} className="w-full max-h-[100vh]">
        {/*  */}
        <div className="flex justify-end p-5">
          <h1 className="text-3xl">{t("PrivacyPolicy")}</h1>
          <div className={dir === "ltr" ? "w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] ": "w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "}></div>
        </div>
        {/*  */}
        <div className={dir === "ltr" ? " h-[100%] float-end w-[70%] px-5 mb-10" : "h-[100%] float-right w-[70%] px-5 mb-10"}>
            <h2 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-md my-2" : "text-start text-md my-2"}>{t("PrivacyPolicy_1")}</h2>
          <div >
          <h1 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-2xl" : "text-start text-2xl"}>{t("Information_Collection")}</h1>
          <ul dir={dir === "ltr" ? "ltr" : "rtl"} className="mt-3">
            <li className="px-5 mt-2 text-sm">{t("Information_Collection1")}</li>
          </ul>
          </div>

          {/*  */}
          <div className="mt-5">
          <h1 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-2xl" : "text-start text-2xl"}>{t("Use_of_information")}</h1>
          <ul dir={dir === "ltr" ? "ltr" : "rtl"} className="mt-3">
            <li className="px-5 mt-2 text-sm">{t("Use_of_information1")}</li>
          </ul>
          </div>
          {/*  */}
          <div className="mt-5">
          <h1 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-2xl" : "text-start text-2xl"}>{t("Information_Protection")}</h1>
          <ul dir={dir === "ltr" ? "ltr" : "rtl"} className="mt-3">
            <li className="px-5 mt-2 text-sm">{t("Information_Protection1")}</li>
          </ul>
          </div>
          {/*  */}
          <div className="mt-5">
          <h1 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-2xl" : "text-start text-2xl"}>{t("Sharing_information_with_third_parties")}</h1>
          <ul dir={dir === "ltr" ? "ltr" : "rtl"} className="mt-3">
            <li className="px-5 mt-2 text-sm">{t("Sharing_information_with_third_parties1")}</li>
          </ul>
          </div>
          {/*  */}
          <div className="mt-5">
          <h1 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-2xl" : "text-start text-2xl"}>{t("Visitors'_consent")}</h1>
          <ul dir={dir === "ltr" ? "ltr" : "rtl"} className="mt-3">
            <li className="px-5 mt-2 text-sm">{t("Visitors'_consent1")}</li>
          </ul>
          </div>
          {/*  */}
          <div className="mt-5">
          <h1 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-2xl" : "text-start text-2xl"}>{t("Changes_in_Privacy_Policy")}</h1>
          <ul dir={dir === "ltr" ? "ltr" : "rtl"} className="mt-3">
            <li className="px-5 mt-2 text-sm">{t("Changes_in_Privacy_Policy1")}</li>
          </ul>
          </div>
          {/*  */}
          <div className="mt-5">
          <h1 dir={dir === "ltr" ? "ltr" : "rtl"} className={dir === "ltr" ? "text-start text-2xl" : "text-start text-2xl"}>{t("Contact")}</h1>
          <ul dir={dir === "ltr" ? "ltr" : "rtl"} className="mt-3">
            <li className="px-5 mt-2 text-sm">{t("Contact1")}</li>
          </ul>
          </div>
        </div>
      </div>
      {/*  */}
      <footer className="h-[65vh] p-2 w-full overflow-hidden relative bg-black mt-10">
        <Footer/>
      </footer>
    </div>
  );
}
