import Title from "@/components/Title";
import { Box, Button } from "auera-ui";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

const PageNotFound = () => {
  const router = useRouter();
  return (
    <>
      <Title title="Page Not Found" />
      <Box centered fullWidth direction="column" className="h-[80vh] gap-3">
        <Image src={"/logo.png"} alt="Logo" width={120} height={120} />
        <h2 className="font-inter-tight text-primary font-medium text-2xl">
          404. Page not found
        </h2>
        <p className="font-inter text-dim font-medium text-base text-center">
          This page has been removed or is not yet available. Sorry for the
          inconvenience.
        </p>
        <Button
          className="mt-4"
          radius="full"
          variant="ghost"
          size="xl"
          onClick={() => router.back()}
          leftIcon={HiOutlineArrowLeft}
        >
          Return Back
        </Button>
      </Box>
    </>
  );
};

export default PageNotFound;
