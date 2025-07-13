import * as React from "react";
import { tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = getDisplayName("Breadcrumb");

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={tw(
      "flex flex-wrap items-center font-medium gap-1.5 break-words text-sm text-[#737373] theme-dark:text-[#a1a1a1] sm:gap-2.5",
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = getDisplayName("BreadcrumbList");

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={tw("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = getDisplayName("BreadcrumbItem");

type BreadcrumbLinkProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps<"a">
>(({ className, ...props }, ref) => {
  const Comp = props.as || "a";

  return (
    <Comp
      ref={ref}
      className={tw(
        "transition-colors hover:text-[#0a0a0a] theme-dark:hover:text-[#fafafa]",
        className
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = getDisplayName("BreadcrumbLink");

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={tw(
      "font-normal text-[#0a0a0a] theme-dark:text-[#fafafa]",
      className
    )}
    {...props}
  />
));
BreadcrumbPage.displayName = getDisplayName("BreadcrumbPage");

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={tw("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <HiOutlineChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = getDisplayName("BreadcrumbSeparator");

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={tw("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <FiMoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = getDisplayName("BreadcrumbElipssis");

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
