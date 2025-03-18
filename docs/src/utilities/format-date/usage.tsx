import CodeBlock from "@/components/layout/code/Block";
import React from "react";

const UsageExample = () => {
  return <CodeBlock lg="ts" fileName="" code={code} />;
};

export default UsageExample;

const code = `import { formatDate } from "auera-ui";

const date = new Date(2024, 1, 15); // February 15, 2024

console.log(formatDate({ date, format: "yyyy-mm-dd" })); 
// Output: "2024-02-15"

console.log(formatDate({ date, format: "mmm-yyyy" })); 
// Output: "Feb 2025"

console.log(formatDate({ date, format: "mmm-dd" })); 
// Output: "Feb 15"
`;
