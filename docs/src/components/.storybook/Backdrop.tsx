import React, { useState } from "react";
import { Box, Button, Drop as DropType, Backdrop as Drop } from "auera-ui";

const Backdrop = ({ mode, intensity }: DropType) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <Drop
          mode={mode || "dark"}
          intensity={intensity}
          open={open}
          onClose={() => setOpen(false)}
          centerContent
        >
          <Button>Drop content</Button>
        </Drop>
      ) : (
        <Box centered className="w-full h-full">
          <Button onClick={() => setOpen(true)}>Open Backdrop</Button>
        </Box>
      )}
    </>
  );
};

export default Backdrop;
