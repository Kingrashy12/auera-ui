import { Box } from "auera-ui";
import React from "react";
import { createStyle } from "stywind";
import CodeTag from "./CodeTag";

type ReferenceType = {
  reference: {
    prop: string;
    type: string;
    description: string;
    default: string;
  }[];
};
const RefCell = createStyle(Box).classname(
  "flex-1 p-[9px_12px] text-left gap-2"
);
const Default = createStyle("p").classname(
  "text-[13px] font-poppins font-normal text-muted"
);

const APITable = ({ reference }: ReferenceType) => {
  return (
    <Box
      direction="column"
      className="mt-2 overflow-hidden rounded-lg border border-[var(--auera-card-border)] theme-light:shadow-card-shadow-light theme-dark:shadow-card-shadow-dark"
    >
      <Box direction="column" className="gap-3 overflow-x-auto">
        {reference.map((ref, index) => (
          <Box
            className="border-b border-b-sidebar transition-colors"
            direction="column"
            key={index}
          >
            <RefCell>
              <CodeTag>{ref.prop}</CodeTag>
            </RefCell>
            <RefCell className="items-center">
              <Default>Type:</Default>
              <CodeTag>{ref.type}</CodeTag>
            </RefCell>
            <RefCell>
              <p className="font-poppins font-normal text-sm text-primary text-left">
                {ref.description}
              </p>
            </RefCell>
            <RefCell className="items-center">
              <Default className="default">Default:</Default>
              <span className="text-blue-600 font-poppins font-normal text-[13px] tracking-wide">
                {ref.default}
              </span>
            </RefCell>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default APITable;
