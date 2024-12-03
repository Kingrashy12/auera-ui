import { Box } from "auera-ui";
import Image from "next/image";
import React from "react";
import Title from "../Title";

const Dev = () => {
  return (
    <>
      <Title title="Coming Soon - Auera UI" />
      <Box fullWidth direction="column" centered className="h-screen">
        <Box className="text-center" direction="column" centered>
          <div className="mb-6 animate-pulse">
            <Image alt="logo" src="/logo.png" width={130} height={130} />
          </div>

          <p className="font-inter-tight text-text-color font-semibold text-2xl mb-4">
            Hang Tight—Working Hard to Bring This to Life!
          </p>
          <p className="font-inter-tight text-dim font-medium text-lg">
            This page is under development. Thanks for your patience!
          </p>
        </Box>
      </Box>
    </>
  );
};

export default Dev;
