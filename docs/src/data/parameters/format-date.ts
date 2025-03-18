export const formatDateParms = [
  {
    prop: "date",
    type: "Date",
    description: "The date object to be formatted.",
    default: "undefined",
  },
  {
    prop: "format",
    type: '"yyyy-mm-dd" | "mm-yyyy" | "dd-mmm" | "ddd-mmm-dd" | "yyyy/mm/dd" | "dd-mm-yyyy" | "mmm-yyyy" | "full"',
    description: "The format pattern for the output date.",
    default: "yyyy-mm-dd",
  },
  {
    prop: "locale",
    type: '"en-US" | "en-GB" | "en-CA" | "en-AU" | "en-IN" | "en-NZ" | "en-ZA" | "fr-FR" | "fr-CA" | "de-DE" | "es-ES" | "es-MX" | "it-IT" | "nl-NL" | "pt-PT" | "pt-BR" | "ru-RU" | "pl-PL" | "zh-CN" | "zh-TW" | "ja-JP" | "ko-KR" | "hi-IN" | "th-TH" | "vi-VN" | "ar-SA" | "he-IL" | "tr-TR" | "fa-IR"',
    description: "The locale for formatting.",
    default: "en-US",
  },
  {
    prop: "replaceFormat",
    type: '"" | "-" | "/" | " " | "," | ":"',
    description: "A string to replace default separators",
    default: "undefined",
  },
  {
    prop: "timeZone",
    type: '"UTC" | "PST" | "EST" | "CST" | "MST" | "IST" | "GMT" | "CET" | "EET" | "JST" | "AEST" | "AKST" | "HST" | "AST" | "NST" | "SST" | "CHST" | "BST" | "WET" | "EAT" | "MSK" | "SAMT" | "PKT" | "ICT" | "SGT" | "CST-China" | "KST" | "AEDT" | "NZST" | "FJT" | "HKT"',
    description: "The time zone to use for formatting.",
    default: "undefined",
  },
];
