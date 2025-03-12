import { getDisplayName } from "@/utils/displayname";
import { forwardRef } from "react";
import { motion } from "motion/react";
import { TabPanelWithMotion } from "../../types/auera-motion";

const slideInVariants = {
  initial: "enter",
  animate: "center",
  exit: "exit",
  variants: {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
};

const TabPanel = forwardRef<HTMLDivElement, TabPanelWithMotion>(
  ({ children, animatePanel, ...props }, ref) => {
    const getAnimation = () => {
      return animatePanel ? { ...slideInVariants } : {};
    };
    return (
      <motion.div
        ref={ref}
        {...getAnimation()}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export default TabPanel;
TabPanel.displayName = getDisplayName("TabPanel");
