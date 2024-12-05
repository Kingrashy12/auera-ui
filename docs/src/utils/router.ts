"use client";

export const Router = () => {
  const { pathname, href } =
    typeof window !== "undefined"
      ? window.location
      : { pathname: "", href: "" };

  return { pathname, href };
};
