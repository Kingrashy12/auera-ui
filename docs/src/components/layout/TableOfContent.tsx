import useTableOfContents, { useScrollTop } from "@/hooks/use";
import { Box } from "auera-ui";
import React from "react";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { createStyle, tw } from "stywind";

const TableOfContent = () => {
  const { scrollToTop } = useScrollTop();

  const { headings, activeId } = useTableOfContents();

  const Table = createStyle("aside").classname(
    "h-[90vh] sticky bg-sidebar border-l/ flex flex-col border-l-sidebar px-6 py-4 top-16 \
     z-20 w-[250px] flex-shrink-0 p-8 max-lg:hidden"
  );

  return (
    <Table>
      <p className="font-inter text-primary font-semibold text-sm">
        On this page
      </p>
      <Box
        direction="column"
        className="gap-3 mt-4 overflow-y-auto mb-3 overflow-x-hidden"
      >
        {headings &&
          headings?.map((heading) => (
            <p
              key={heading.id}
              className={`li level-${heading.level.toLowerCase()}`}
            >
              <IoIosArrowForward
                className="text-dimBlack level-icon"
                size={12}
              />
              <a
                href={`#${heading.id}`}
                className={tw(activeId === heading.id ? "active" : "", "a")}
              >
                {heading.text}
              </a>
            </p>
          ))}
      </Box>
      <Box className="mt-auto py-5 px-3 border-t border-t-sidebar">
        <Box
          className="items-center gap-1 text-dimBlack cursor-pointer"
          onClick={scrollToTop}
        >
          <HiOutlineArrowUpCircle size={19} />
          <p className="font-inter text-[12.6px] font-medium">Scroll to top</p>
        </Box>
      </Box>
    </Table>
  );
};

export default TableOfContent;
