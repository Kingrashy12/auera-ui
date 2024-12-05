import Details from "@/components/Details";
import HeaderLabel from "@/components/HeaderLabel";
import DetailCard from "@/components/layout/DetailCard";
import DocsLayout from "@/components/layout/DocsLayout";
import { Box } from "auera-ui";
import React from "react";

const QuickStart = () => {
  return (
    <DocsLayout>
      <DetailCard description="Quickly get started with Auera UI and unleash its powerful features in just minutes." />
      <Box direction="column" className="px-3 py-3">
        <p className="text">
          Auera UI is a robust UI library providing flexible, high-quality
          components, built with <b>Tailwind CSS</b>, offering you a powerful
          toolkit to build stunning, interactive user interfaces with ease.
        </p>
      </Box>
      <Details id="getting-started">
        <HeaderLabel id="getting-started">Getting Started</HeaderLabel>
        <p className="text">hhhhhhhhhhh</p>
      </Details>
    </DocsLayout>
  );
};

export default QuickStart;
