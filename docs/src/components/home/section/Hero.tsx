import Clipboard from "@/components/Clipboard";
import { Box, Button } from "auera-ui";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="flex px-8 py-4 h-screen">
      <Box className="gap-3" fullWidth centered>
        <Box direction="column" className="gap-3 py-3 w-full" centered>
          <h1 className="font-bold text-5xl font-montserrat leading-tight text-text-color">
            Build beautiful UIs, effortlessly.
          </h1>
          <p className="font-inter-tight font-medium text-lg text-dim text-center">
            Streamline your workflow with customizable, modern components <br />
            crafted to enhance your React applications.
          </p>
          <Box className="mt-3 gap-3 items-center">
            <Button
              radius="lg"
              className="font-inter"
              size="lg"
              rightIcon={FiArrowRight}
            >
              Get Started
            </Button>
            <Box className="bg-cmd p-2 rounded-lg w-fit flex items-center gap-1 px-2">
              <code className="font-medium font-mono text-sm text-cmd-code">
                npm i auera-ui
              </code>
              <Clipboard content="npm i auera-ui" />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
