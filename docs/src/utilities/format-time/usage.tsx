import Details from "@/components/Details";
import HeaderLabel from "@/components/HeaderLabel";
import CodeBlock from "@/components/layout/code/Block";
import React from "react";

const FormatTimeUsage = () => {
  return (
    <Details>
      <Details id="basic-usage">
        <HeaderLabel id="basic-usage" as="h3">
          Basic Usage
        </HeaderLabel>
        <CodeBlock code={basicCode} fileName="" lg="ts" />
      </Details>
      <Details id="using-a-different-locale">
        <HeaderLabel id="using-a-different-locale" as="h3">
          Using a Different Locale
        </HeaderLabel>
        <CodeBlock code={diffLocale} fileName="" lg="ts" />
      </Details>
      <Details id="custom-delimiter-replacement">
        <HeaderLabel id="custom-delimiter-replacement" as="h3">
          Custom Delimiter Replacement
        </HeaderLabel>
        <CodeBlock code={customDeli} fileName="" lg="ts" />
      </Details>
      <Details id="using-a-specific-time-zone">
        <HeaderLabel id="using-a-specific-time-zone" as="h3">
          Using a Specific Time Zone
        </HeaderLabel>
        <CodeBlock code={timeZone} fileName="" lg="ts" />
      </Details>
    </Details>
  );
};

export default FormatTimeUsage;

const basicCode = `import { formatTime } from "auera-ui";

const now = new Date();

// Default format (24-hour)
console.log(formatTime({ date: now })); 
// Output: "14:30"

// 24-hour format with seconds
console.log(formatTime({ date: now, format: "hh:mm:ss" })); 
// Output: "14:30:45"

// 12-hour format with AM/PM
console.log(formatTime({ date: now, format: "hh:mm AM/PM" })); 
// Output: "02:30 PM"

// 12-hour format with seconds
console.log(formatTime({ date: now, format: "hh:mm:ss AM/PM" })); 
// Output: "02:30:45 PM"
`;

const diffLocale = `import { formatTime } from "auera-ui";

const now = new Date();

console.log(formatTime({ date: now, locale: "fr-FR" }));
// Output: "14:30" (24-hour format in French locale)
`;

const customDeli = `import { formatTime } from "auera-ui";

const now = new Date();

console.log(formatTime({ date: now, format: "hh:mm:ss", replaceFormat: "-" }));
// Output: "14-30-45"
`;

const timeZone = `import { formatTime } from "auera-ui";

const now = new Date();

console.log(formatTime({ date: now, timeZone: "PST" }));
// Output: "HH:MM" (PST is UTC-8)

console.log(formatTime({ date: now, timeZone: "IST" }));
// Output: "HH:MM" (IST is UTC+5:30)
`;
