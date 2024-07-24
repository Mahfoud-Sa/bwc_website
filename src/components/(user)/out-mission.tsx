import React from "react";
import { useTranslation } from "react-i18next";

export default function OutMission() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <div>
      <div className="px-5">
        <h1 className="text-5xl">{t("our_mission1")}</h1>
        <p className="mt-8 text-xl text-[#5B5B5B]">{t("our_missionDesc")}</p>
      </div>
      {/*  */}
      <div className="px-5 mt-20">
        <h1 className="text-5xl">{t("our_goals1")}</h1>
        <p className="mt-8 text-xl text-[#5B5B5B] leading-10">
          {t("our_goalsDesc")}
        </p>
      </div>
      {/*  */}
      <div className="px-5 mt-20">
        <h1 className="text-5xl">{t("our_message1")}</h1>
        <div className="mt-10">
          <div className="flex items-center">
            <span
              className={
                dir === "ltr"
                  ? " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] mr-2"
                  : " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] ml-2"
              }
            ></span>
            <p className="text-[#5B5B5B]">{t("our_messageDesc1")}</p>
          </div>
          {/*  */}
          <div className="flex items-center mt-10">
            <span
              className={
                dir === "ltr"
                  ? " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] mr-2"
                  : " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] ml-2"
              }
            ></span>
            <p className="text-[#5B5B5B]">
            {t("our_messageDesc2")}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mt-10">
            <span
              className={
                dir === "ltr"
                  ? " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] mr-2"
                  : " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] ml-2"
              }
            ></span>
            <p className="text-[#5B5B5B]">
            {t("our_messageDesc3")}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mt-10">
            <span
              className={
                dir === "ltr"
                  ? " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] mr-2"
                  : " block w-7 h-7 border-2 border-[#333333] bg-gradient-to-r from-[#997740] to-[#CCA972] ml-2"
              }
            ></span>
            <p className="text-[#5B5B5B]">
            {t("our_messageDesc4")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
