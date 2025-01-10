import { getDisplayName } from "@/utils/displayname";
import { forwardRef } from "react";
import { motion } from "motion/react";
import { TabPanelWithMotion } from "../../types/auera-motion";

const motionVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const TabPanel = forwardRef<HTMLDivElement, TabPanelWithMotion>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        {...props}
        ref={ref}
        initial="enter"
        animate="center"
        exit="exit"
        variants={motionVariants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
);

export default TabPanel;
TabPanel.displayName = getDisplayName("TabPanel");
