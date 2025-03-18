import Details from "@/components/Details";
import CodeBlock from "@/components/layout/code/Block";
import React from "react";

const FormatTimeAgeExample = () => {
  return (
    <Details>
      <CodeBlock lg="ts" fileName="" code={code} />
    </Details>
  );
};

export default FormatTimeAgeExample;

const code = `import { formatTimeAgo } from "auera-ui";

const now = new Date();

console.log(formatTimeAgo(new Date(now)));
// Output: "Just now"

console.log(formatTimeAgo(new Date(now.getTime() - 60 * 1000)));
// Output: "1 minute ago"

console.log(formatTimeAgo(new Date(now.getTime() - 5 * 60 * 1000)));
// Output: "5 minutes ago"

console.log(formatTimeAgo(new Date(now.getTime() - 2 * 60 * 60 * 1000)));
// Output: "2 hours ago"

console.log(formatTimeAgo(new Date(now.getTime() - 24 * 60 * 60 * 1000)));
// Output: "1 day ago"

console.log(formatTimeAgo(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)));
// Output: "1 week ago"

console.log(formatTimeAgo(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)));
// Output: "1 month ago"
`;
