import { DocsContext } from "@/context/docs";
import { langs } from "@/data/app.data";
import { WINDOW_ACTIVE } from "@/hooks/active";
import { BaseLangStruct, BaseStructData } from "@/types/global";
import React, { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";

const DocsProvider = ({ children }: { children: React.ReactNode }) => {
  const LANG_KEY = "AUERAUI_DOC_LANG";

  const getLang = () => {
    let key = "";
    if (WINDOW_ACTIVE) {
      const state = localStorage.getItem(LANG_KEY) || "";
      key = state;
    }

    const currentLang = langs.find((lang) => lang.name === key);
    return currentLang;
  };

  const [lang, setLang] = useState<BaseLangStruct>(() => {
    const current = getLang();
    return (
      (current as BaseLangStruct) ?? {
        name: "TypeScript",
        icon: BiLogoTypescript,
        color: "blue",
        ext: "tsx",
        baseExt: "ts",
      }
    );
  });
  const [framework, setFramework] = useState<BaseStructData>({
    name: "Next",
    icon: BiLogoTypescript,
    color: "black",
  });

  const updateLang = (lang: BaseLangStruct) => {
    setLang(lang);
    if (WINDOW_ACTIVE) {
      localStorage.setItem(LANG_KEY, lang.name);
    }
  };
  const updateFramework = (type: BaseStructData) => setFramework(type);

  return (
    <DocsContext.Provider
      value={{ framework, lang, updateFramework, updateLang }}
    >
      {children}
    </DocsContext.Provider>
  );
};

export default DocsProvider;
