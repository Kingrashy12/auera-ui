import Details from "@/components/Details";
import Installation from "@/components/guide/Installation";
import HeaderLabel from "@/components/HeaderLabel";
import DetailCard from "@/components/layout/DetailCard";
import DocsLayout from "@/components/layout/DocsLayout";
import { Box } from "auera-ui";
import Link from "next/link";

import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const QuickStart = () => {
  return (
    <DocsLayout>
      <DetailCard description="Quickly get started with AueraUI and unleash its powerful features in just minutes." />
      <Box direction="column" className="px-3 py-3">
        <p className="text">
          AueraUI is a robust UI library providing flexible, high-quality
          components, built with <b>Tailwind CSS</b>, offering you a powerful
          toolkit to build stunning, interactive user interfaces with ease.
        </p>
      </Box>
      <Details id="getting-started">
        <HeaderLabel id="getting-started">Getting Started</HeaderLabel>
        <p className="text">
          This guide will walk you through getting started with AueraUI.
          You&apos;ll learn how to set it up, customize it and integrate it into
          your project!
        </p>
      </Details>
      <Details id="installation" className="mb-2">
        <HeaderLabel id="installation">Installation</HeaderLabel>
      </Details>
      <Details id="prerequisites">
        <HeaderLabel id="prerequisites" as="h3" className="text-lg">
          Prerequisites
        </HeaderLabel>
        <Box direction="column" className="gap-3 text-text-color">
          <p className="font-inter font-normal text-base gap-1 flex items-center">
            <Link
              href="https://reactjs.org/"
              className=" text-blue-600 hover:opacity-75 flex items-center gap-1"
              target="_blank"
            >
              <>React 18</> <HiArrowTopRightOnSquare size={18} />
            </Link>{" "}
            or later
          </p>
          <p className="font-inter font-normal text-base gap-1 flex items-center">
            <Link
              href="https://tailwindcss.com/"
              className=" text-blue-600 hover:opacity-75 flex items-center gap-1"
              target="_blank"
            >
              <>Tailwind CSS 3.4</> <HiArrowTopRightOnSquare size={18} />
            </Link>{" "}
            or later
          </p>
        </Box>
      </Details>
      <Details className="!gap-0">
        <Installation />
      </Details>
    </DocsLayout>
  );
};

export default QuickStart;
