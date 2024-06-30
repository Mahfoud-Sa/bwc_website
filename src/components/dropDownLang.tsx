import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { name: "عربي", lang: "العربية", code: "ar" },
  { name: "EN", lang: "english", code: "en" },
];

export default function DropDownLang() {
  const { i18n } = useTranslation();
  const changeLanguage = (code: any) => {
    i18n.changeLanguage(code);
  };
  const dir = i18n.dir();
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <div className={dir === "ltr" ? "flex flex-col dropdownlanguage" : "flex flex-col dropdownlanguage-rigth"}>
      <ul className="flex flex-col gap-4">
        {languages.map(({ name, lang, code }) => (
          <li
            className={code === i18n.language ? "selected" : ""}
            key={code}
            onClick={() => changeLanguage(code)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
