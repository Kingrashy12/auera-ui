import TabLink from "@/components/TabLink";
import React from "react";

const references = [
  {
    reference: "Sizes",
    imp: "/docs/reference/modal#sizes",
  },
  {
    reference: "Placement",
    imp: "/docs/reference/modal#placement",
  },
  {
    reference: "Radius",
    imp: "/docs/reference/modal#radius",
  },
  {
    reference: "Transitions",
    imp: "/docs/reference/modal#transitions",
  },
];

const ModalReference = () => {
  return (
    <ul className="space-y-1">
      {references.map((ref, index) => (
        <li key={index} className="text-white">
          <TabLink to={ref.imp} label={ref.reference} className="text-sm" />
        </li>
      ))}
    </ul>
  );
};

export default ModalReference;
