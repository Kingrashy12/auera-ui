import { Box } from "auera-ui";
import React from "react";
import { createStyle, tw } from "stywind";
import CodeTag from "./CodeTag";
import { ImMinus } from "react-icons/im";

type ReferenceType = {
  reference: {
    prop: string;
    type: string;
    description: string;
    default: string;
    properties?: {
      [x: string]: {
        description: string;
        default: string;
        type: string;
      };
    };
  }[];
};
const RefCell = createStyle(Box).classname(
  "flex-1 p-[9px_12px] text-left gap-2"
);
const Default = createStyle("p").classname(
  "text-[13px] font-poppins font-normal text-muted"
);

const APITable = ({ reference }: ReferenceType) => {
  const getProperties = (ref: (typeof reference)[0]): React.JSX.Element => {
    if (!ref.properties) return <></>;

    return (
      <Box
        fullWidth
        direction="column"
        className="gap-2 border-l-1.7 theme-dark:border-l-neutral-800"
      >
        {Object.entries(ref.properties).map(([key, value]) => (
          <Box
            key={key}
            direction="column"
            className="gap-1 border-b theme-dark:border-neutral-800"
            fullWidth
          >
            <RefCell>
              <CodeTag>{key}</CodeTag>
            </RefCell>
            <RefCell className="items-center">
              <Default>Type:</Default>
              <CodeTag>{value.type}</CodeTag>
            </RefCell>
            <RefCell>
              <p className="font-poppins font-normal text-sm text-primary text-left">
                {value.description}
              </p>
            </RefCell>
            <RefCell className="items-center">
              <Default className="default">Default:</Default>
              <span
                className={tw(
                  "text-blue-600 font-poppins font-normal text-[13px] tracking-wide",
                  {
                    "text-neutral-600 theme-dark:text-neutral-800":
                      value.default === "undefined",
                  }
                )}
              >
                {value.default === "undefined" ? <ImMinus /> : value.default}
              </span>
            </RefCell>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box
      direction="column"
      className="mt-2 overflow-hidden rounded-lg border border-[var(--auera-card-border)] shadow-card theme-dark:shadow-md"
    >
      <Box direction="column" className="gap-3 overflow-x-auto">
        {reference?.map((ref, index) => (
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
              <span
                className={tw(
                  "text-blue-600 font-inter font-normal text-[13px] tracking-wide",
                  {
                    "text-neutral-600 theme-dark:text-neutral-800":
                      ref.default === "undefined",
                  }
                )}
              >
                {ref.default === "undefined" ? <ImMinus /> : ref.default}
              </span>
            </RefCell>
            {ref.properties && (
              <Box className="ml-3 flex-col pr-3">
                <Default className="text-blue-500">Properties: </Default>
                {getProperties(ref)}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default APITable;
