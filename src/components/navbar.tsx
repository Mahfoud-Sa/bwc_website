import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import logo2 from "../assets/img/عالم الأعمال خلفية أبيض 1.png";
import LanguageWorld from "../assets/icons/language-world";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import DropDownLang from "./dropDownLang";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [fix, setFix] = useState<boolean>();

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  });
  const [isdropDownOpen, setIsdropDownOpen] = useState(false);
  useEffect(() => {
    i18n.changeLanguage(navigator.language);    
  }, []);
  
  const dir = i18n.dir();

  return (
    <nav className={fix ? "navActive nav" : "nav"}>
      <a href="/" className="site-title">
        <img src={fix ? logo2 : logo} alt="" />
      </a>
      <ul>
        <li>
          <a href="" className="read-the-doc">
            {t("depertment")}
          </a>
        </li>
        <li>
          <a href="">{t("About_us")}</a>
        </li>
        <li>
          <a href="">{t("publishes")}</a>
        </li>
        <li>
          <a href="">{t("reports")}</a>
        </li>
        <li>
          <a href="">{t("archive")}</a>
        </li>
      </ul>
      <div className="nav-left-buttons">
        <button>{t("jobs")}</button>
        <div
          className="cursor-pointer"
          onClick={() => setIsdropDownOpen((prevValue) => !prevValue)}
        >
          <LanguageWorld color="black" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setIsdropDownOpen((prevValue) => !prevValue)}
        >
          {dir === "ltr" ?   "EN" : "عربي" }
          {isdropDownOpen && <DropDownLang />}
        </div>
      </div>
    </nav>
  );
}
