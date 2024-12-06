import { Box } from "auera-ui";
import React from "react";
import { tw } from "stywind";

type StepGuideProps = {
  step: number;
  children: React.ReactNode;
  className?: string;
};

const StepGuide = ({ step, children, className }: StepGuideProps) => {
  return (
    <Box className={tw("gap-3 px-2 py-1 w-full", className)} fullWidth>
      <Box direction="column" className="flex-shrink-0 items-center">
        <Box className="bg-sidebar items-center justify-center w-5 h-5 p-4 flex-shrink-0 rounded-lg border-2 border-sidebar">
          <p className="font-poppins font-medium text-sm text-text-color">
            {step}
          </p>
        </Box>
        <div className="border-l-[1.35px] border-l-sidebar h-full" />
      </Box>
      {children}
    </Box>
  );
};

export default StepGuide;
