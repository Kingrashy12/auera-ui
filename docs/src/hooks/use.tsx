import { useEffect, useState } from "react";
import { DOCUMENT_ACTIVE, WINDOW_ACTIVE } from "./active";

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
