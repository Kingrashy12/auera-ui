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
  ({ children, animate, ...props }, ref) => {
    const getAnimation = () => {
      const initial = "enter";
      const animate = "center";
      const exit = "exit";
      const variants = { motionVariants };

      return animate ? { initial, animate, exit, variants } : {};
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
