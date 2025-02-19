import {
  FormatDateOptions,
  FormatPattern,
  FormatTimeOptions,
  TimeFormatPattern,
} from "../types/utils";

export const formatDate = ({
  date,
  format = "yyyy-mm-dd",
  locale = "en-US",
  replaceFormat,
  timeZone,
}: FormatDateOptions): string => {
  const formatterMap: Record<FormatPattern, Intl.DateTimeFormatOptions> = {
    "yyyy-mm-dd": { year: "numeric", month: "2-digit", day: "2-digit" },
    "mm-yyyy": { month: "short", year: "numeric" },
    "dd-mmm": { day: "2-digit", month: "short" },
    "ddd-mmm-dd": { weekday: "short", month: "short", day: "2-digit" },
    "yyyy/mm/dd": { year: "numeric", month: "2-digit", day: "2-digit" },
    "dd-mm-yyyy": { day: "2-digit", month: "2-digit", year: "numeric" },
    "mmm-yyyy": { month: "short", year: "numeric" },
    full: { weekday: "long", year: "numeric", month: "long", day: "2-digit" },
  };

  let formattedDate = new Intl.DateTimeFormat(locale, {
    ...formatterMap[format],
    timeZone,
  }).format(date);

  if (replaceFormat) {
    formattedDate = formattedDate.replace(/[-/, ]+/g, replaceFormat);
  }

  return formattedDate;
};

export const formatTime = ({
  date,
  format = "hh:mm",
  locale = "en-US",
  replaceFormat,
  timeZone,
}: FormatTimeOptions): string => {
  const formatterMap: Record<TimeFormatPattern, Intl.DateTimeFormatOptions> = {
    "hh:mm": { hour: "2-digit", minute: "2-digit", hour12: false },
    "hh:mm:ss": {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    },
    "hh:mm AM/PM": { hour: "2-digit", minute: "2-digit", hour12: true },
    "hh:mm:ss AM/PM": {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    },
  };

  let formattedTime = new Intl.DateTimeFormat(locale, {
    ...formatterMap[format],
    timeZone,
  }).format(date);

  if (replaceFormat) {
    formattedTime = formattedTime.replace(/[-/, ]+/g, replaceFormat);
  }

  return formattedTime;
};

export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return `${diff} sec${diff !== 1 ? "s" : ""} ago`;
  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};

export const formatTimeDiff = (startDate: Date, endDate: Date): string => {
  const diff = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;

  const days = Math.floor(diff / (3600 * 24));
  const hours = Math.floor((diff % (3600 * 24)) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = Math.floor(diff % 60);

  return `${days} day${days !== 1 ? "s" : ""}, ${hours} hr${
    hours !== 1 ? "s" : ""
  }, ${minutes} min${minutes !== 1 ? "s" : ""}, ${seconds} sec${
    seconds !== 1 ? "s" : ""
  }`;
};
