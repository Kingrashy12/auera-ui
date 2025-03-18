import Details from "@/components/Details";
import HeaderLabel from "@/components/HeaderLabel";
import CodeBlock from "@/components/layout/code/Block";
import React from "react";

const StrFunUsage = () => {
  return (
    <>
      <Details id="Capitalizing Words">
        <HeaderLabel id="Capitalizing Words" as="h3">
          1. Capitalizing Words
        </HeaderLabel>
        <CodeBlock lg="ts" code={capWord} fileName="" />
      </Details>
      <Details id="Truncating a String">
        <HeaderLabel id="Truncating a String" as="h3">
          2. Truncating a String
        </HeaderLabel>
        <CodeBlock lg="ts" code={truncate} fileName="" />
      </Details>
      <Details id="Generating a URL-Friendly Slug">
        <HeaderLabel id="Generating a URL-Friendly Slug" as="h3">
          3. Generating a URL-Friendly Slug
        </HeaderLabel>
        <CodeBlock lg="ts" code={slug} fileName="" />
      </Details>
      <Details id="Removing Whitespace">
        <HeaderLabel id="Removing Whitespace" as="h3">
          4. Removing Whitespace
        </HeaderLabel>
        <CodeBlock lg="ts" code={space} fileName="" />
      </Details>
      <Details id="Removing Special Characters">
        <HeaderLabel id="Removing Special Characters" as="h3">
          5. Removing Special Characters
        </HeaderLabel>
        <CodeBlock lg="ts" code={removeSpecial} fileName="" />
      </Details>
      <Details id="Converting to Kebab Case">
        <HeaderLabel id="Converting to Kebab Case" as="h3">
          6. Converting to Kebab Case
        </HeaderLabel>
        <CodeBlock lg="ts" code={kebaCase} fileName="" />
      </Details>
      <Details id="Reversing a String">
        <HeaderLabel id="Reversing a String" as="h3">
          7. Reversing a String
        </HeaderLabel>
        <CodeBlock lg="ts" code={reverse} fileName="" />
      </Details>
      <Details id="Converting to PascalCase">
        <HeaderLabel id="Converting to PascalCase" as="h3">
          8. Converting to PascalCase
        </HeaderLabel>
        <CodeBlock lg="ts" code={pascal} fileName="" />
      </Details>
    </>
  );
};

export default StrFunUsage;

const capWord = `import { StrFun } from "auera-ui";

console.log(StrFun.capitalize("hello world", " ", " ")); 
// Output: "Hello World"
`;

const truncate = `import { StrFun } from "auera-ui";

console.log(StrFun.truncate("This is a long sentence.", 10)); 
// Output: "This is a..."
`;

const slug = `import { StrFun } from "auera-ui";

console.log(StrFun.slugify("Hello World!")); 
// Output: "hello-world"
`;

const space = `import { StrFun } from "auera-ui";

console.log(StrFun.removeWhitespace("  Hello   World  ")); 
// Output: "HelloWorld"
`;

const removeSpecial = `import { StrFun } from "auera-ui";

console.log(StrFun.removeSpecialChars("Hello@# World!")); 
// Output: "Hello World"
`;

const kebaCase = `import { StrFun } from "auera-ui";

console.log(StrFun.toKebabCase("Hello World")); 
// Output: "hello-world"
`;

const reverse = `import { StrFun } from "auera-ui";

console.log(StrFun.reverse("hello")); 
// Output: "olleh"
`;

const pascal = `import { StrFun } from "auera-ui";

console.log(StrFun.toPascalCase("hello world")); 
// Output: "HelloWorld"
`;
