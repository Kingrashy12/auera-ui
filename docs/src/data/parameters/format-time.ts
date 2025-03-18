export const formatTimeParams = [
  {
    prop: "date",
    type: "Date",
    description: "The date or timestamp to format.",
    default: "undefined",
  },
  {
    prop: "format",
    type: '"hh:mm" | "hh:mm:ss" | "hh:mm AM/PM" | "hh:mm:ss AM/PM"',
    description: "The time format pattern.",
    default: "hh:mm",
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
    description:
      "Replaces delimiters in the formatted time with a custom string.",
    default: "undefined",
  },
  {
    prop: "timeZone",
    type: '"UTC" | "PST" | "EST" | "CST" | "MST" | "IST" | "GMT" | "CET" | "EET" | "JST" | "AEST" | "AKST" | "HST" | "AST" | "NST" | "SST" | "CHST" | "BST" | "WET" | "EAT" | "MSK" | "SAMT" | "PKT" | "ICT" | "SGT" | "CST-China" | "KST" | "AEDT" | "NZST" | "FJT" | "HKT"',
    description: "The time zone to use for formatting.",
    default: "undefined",
  },
];
