import Details from "@/components/Details";
import CodeBlock from "@/components/layout/code/Block";
import React from "react";

const FormatBytesUsage = () => {
  return (
    <Details>
      <CodeBlock lg="ts" fileName="" code={code} />
    </Details>
  );
};

export default FormatBytesUsage;

const code = `import { formatBytes } from "auera-ui";


console.log(formatBytes(1024));
// Output: => "1 KB"

console.log(formatBytes(1048576));
// Output: => "1 MB"

console.log(formatBytes(123456789));
// Output: => "117.74 MB"

console.log(formatBytes(9876543210));
// Output: => "9.21 GB"

console.log(formatBytes(0));
// Output: => "0 Bytes"
`;
