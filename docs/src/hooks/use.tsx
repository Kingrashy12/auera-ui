import { useEffect, useState } from "react";
import { DOCUMENT_ACTIVE, WINDOW_ACTIVE } from "./active";
import { useRouter } from "next/router";

export const useScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (DOCUMENT_ACTIVE) {
      const scrolled = document?.documentElement?.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    } else
      throw new Error(
        "Please switch your components to client-side rendering, as useScrollTop requires access to client-side APIs like `window` and `document`."
      );
  };

  const scrollToTop = () => {
    if (WINDOW_ACTIVE) {
      window?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };

    if (WINDOW_ACTIVE) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (WINDOW_ACTIVE) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return { scrollToTop, visible };
};

type HeadingType = {
  id: string;
  text: string;
  level: string;
};

export const useTableOfContents = () => {
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  const [activeId, setActiveId] = useState("");

  const getPageStatus = () => {
    const Token = "HAS_PAGE_RENDERED";
    const state = localStorage?.getItem(Token);
    const status = state ? JSON.parse(state) : false;
    return status as boolean;
  };

  const router = useRouter();

  useEffect(() => {
    const HAS_PAGE_RENDERED = getPageStatus();
    const fetchHeadings = () => {
      setTimeout(
        () => {
          const headingElements = Array.from(
            document.querySelectorAll("h2, h3")
          );

          const newHeadings = headingElements.map((element) => ({
            id:
              element.id ||
              element?.textContent?.trim().toLowerCase().replace(/\s+/g, "-"),
            text: element.textContent,
            level: element.tagName,
          }));

          setHeadings(newHeadings as HeadingType[]);
        },
        HAS_PAGE_RENDERED ? 300 : 1000
      );
    };

    fetchHeadings();
    router.events.on("routeChangeComplete", fetchHeadings);

    return () => {
      router.events.off("routeChangeComplete", fetchHeadings);
    };
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headingElements = Array.from(document.querySelectorAll("h2, h3"));

      const offsets = headingElements.map((element) => ({
        id: element.id,
        offsetTop: element.getBoundingClientRect().top + scrollY,
      }));

      const activeSection = offsets.find(
        (offset, index) =>
          offset.offsetTop > scrollY &&
          (!offsets[index - 1] || offsets[index - 1].offsetTop <= scrollY)
      );

      setActiveId(activeSection?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return { headings, activeId };
};

export default useTableOfContents;
