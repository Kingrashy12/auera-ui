import { langs } from "@/data/app.data";
import { useDocState } from "@/hooks/docs";
import { BaseLangStruct } from "@/types/global";
import {
  Box,
  Icon,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  useTheme,
} from "auera-ui";
import React from "react";

const Selectors = () => {
  const { lang: language, updateLang } = useDocState();
  const { changeThemeVariant, themeVariant } = useTheme();

  return (
    <>
      <Box className="flex-col gap-1">
        <p className="text-sm font-normal font-inter theme-dark:text-[#ABAFB6] text-neutral-500">
          Language
        </p>
        <Select>
          <SelectTrigger>
            <Box className="items-center gap-1">
              <Icon icon={language.icon} size={28} color={language.color} />

              <p className="font-medium theme-dark:text-white font-inter text-sm">
                {language.name}
              </p>
            </Box>
          </SelectTrigger>
          <SelectContent className="z-900" variant="padded">
            {langs.map((lang, index) => (
              <SelectItem
                key={index}
                value={lang.name}
                isCurrent={lang.name === language.name}
                onSelect={() => updateLang(lang as BaseLangStruct)}
              >
                <Box className="items-center gap-1">
                  <Icon icon={lang.icon} size={28} color={lang.color} />

                  <p className="font-medium theme-dark:text-white font-inter text-sm">
                    {lang.name}
                  </p>
                </Box>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Box>
      <Box className="flex-col gap-1">
        <p className="text-sm font-normal font-inter theme-dark:text-[#ABAFB6] text-neutral-500">
          Theme Variant
        </p>
        <Select>
          <SelectTrigger className="py-2.5">
            <p className="font-medium theme-dark:text-white font-inter text-sm py-0.5">
              {themeVariant.charAt(0).toUpperCase() + themeVariant.slice(1)}
            </p>
          </SelectTrigger>
          <SelectContent className="z-900" variant="padded">
            {["corporate", "obsidian"].map((variant, index) => (
              <SelectItem
                key={index}
                value={variant}
                isCurrent={variant === themeVariant}
                onSelect={() => changeThemeVariant(variant as never)}
              >
                <Box className="items-center gap-1 py-0.5">
                  <p className="font-medium theme-dark:text-white font-inter text-sm">
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </p>
                </Box>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Box>
    </>
  );
};

export default Selectors;
