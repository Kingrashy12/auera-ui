import { Box } from "auera-ui";
import React from "react";
import { tw } from "stywind";

type StepGuideProps = {
  step: number;
  children: React.ReactNode;
  className?: string;
  id: string;
  removeTrack?: boolean;
};

const StepGuide = ({
  step,
  children,
  className,
  id,
  removeTrack,
}: StepGuideProps) => {
  return (
    <Box
      id={id}
      className={tw(
        "gap-3 px-2 py-1 w-full max-[550px]:px-1",
        className as string
      )}
      fullWidth
    >
      <Box
        direction="column"
        className="shrink-0 items-center max-[550px]:hidden"
      >
        <Box className="bg-sidebar items-center justify-center h-8 p-3 shrink-0 rounded-lg border-2 border-sidebar">
          <p className="font-poppins font-medium text-sm text-primary">
            {step}
          </p>
        </Box>
        <div
          className={tw(
            "border-l-[1.35px] border-l-sidebar h-full",
            removeTrack ? "hidden" : "flex"
          )}
        />
      </Box>
      {children}
    </Box>
  );
};

export default StepGuide;
