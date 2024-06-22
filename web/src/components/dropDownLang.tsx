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

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <div className="flex flex-col dropdownlanguage">
      <ul className="flex flex-col gap-4">
        {languages.map(({ name, lang, code }) => (
          <button
            className={code === i18n.language ? "selected" : ""}
            key={code}
            onClick={() => changeLanguage(code)}
          >
            {name}
          </button>
        ))}
      </ul>
    </div>
  );
}
