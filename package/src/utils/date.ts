import { FormatDate } from "@/types/utils";

const formatDate = ({
  date,
  format = "yyyy-mm-dd",
  locale = "en-US",
  replaceFormat,
}: FormatDate) => {
  const now = new Date(date);

  const dates = {
    "yyyy-mm-dd": now
      .toLocaleDateString(locale, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\/|-/g, "-"),
    "mm-yyyy": now
      .toLocaleDateString(locale, {
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-"),
    "dd-mmm": now
      .toLocaleDateString(locale, {
        month: "short",
        day: "2-digit",
      })
      .replace(/\/|-/g, "-"),
  };

  let formattedDate = dates[format];

  if (replaceFormat) {
    const separator = replaceFormat;
    formattedDate = formattedDate.replace(/-|\/| |,/g, separator);
  }

  return formattedDate;
};

export default formatDate;
