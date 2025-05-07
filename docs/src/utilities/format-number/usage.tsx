import Details from "@/components/Details";
import CodeBlock from "@/components/layout/code/Block";
import React from "react";

const FormatNumberUsage = () => {
  return (
    <Details>
      <CodeBlock lg="ts" fileName="" code={code} />
    </Details>
  );
};

export default FormatNumberUsage;

const code = `import { formatNumber } from "auera-ui";

console.log(formatNumber(950));
// Output: => "950"

console.log(formatNumber(1500));
// Output: => "1.50K"

console.log(formatNumber(2500000));
// Output: => "2.50M"

console.log(formatNumber(5300000000));
// Output: => "5.30B"
`;
