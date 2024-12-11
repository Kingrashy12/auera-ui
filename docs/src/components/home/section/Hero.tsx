import Clipboard from "@/components/Clipboard";
import { Box, Button } from "auera-ui";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="flex px-8 py-4 h-screen max-[550px]:px-5">
      <Box className="gap-3 h-full" fullWidth centered>
        <Box direction="column" className="gap-3 py-3 w-full" centered>
          <h1 className="font-bold tag text-5xl font-montserrat leading-tight text-primary max-[550px]:text-4xl text-center">
            Build <span className="colored">beautiful</span> UIs, effortlessly.
          </h1>
          <p className="font-inter-tight font-medium text-lg text-muted text-center">
            Streamline your workflow with customizable, modern components <br />
            crafted to enhance your React applications.
          </p>
          <Box className="mt-3 gap-3 items-center" wrap>
            <Link href="/docs/getting-started/quick-start">
              <Button
                radius="xl"
                className="font-inter"
                size="xl"
                flavour="frost"
                rightIcon={FiArrowRight}
              >
                Get Started
              </Button>
            </Link>
            <Box className="bg-cmd p-2 rounded-xl w-fit flex items-center gap-1 px-2">
              <code className="font-medium font-mono text-sm text-cmd-code">
                npm i auera-ui react-icons
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
