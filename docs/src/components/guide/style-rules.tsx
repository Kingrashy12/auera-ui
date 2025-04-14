import {
  Box,
  For,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "auera-ui";
import CodeTag from "../CodeTag";
import CodeBlock from "../layout/code/Block";

export const FieldBreakdown = () => {
  return (
    <Table rounded raised bordered>
      <TableHead>
        <TableRow>
          <For
            each={["Field", "Type", "Description"]}
            render={(label) => <TableHeaderCell>{label}</TableHeaderCell>}
          />
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>
            <CodeTag>applyBy</CodeTag>
          </TableCell>
          <TableCell>
            <CodeTag>A</CodeTag>
            (e.g., <CodeTag>&quot;id&quot;</CodeTag> or{" "}
            <CodeTag>&quot;class&quot;</CodeTag>)
          </TableCell>
          <TableCell>
            Determines the condition type used to match the <br /> component.
            Optional.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <CodeTag>value</CodeTag>
          </TableCell>
          <TableCell>
            <CodeTag>V</CodeTag>
          </TableCell>
          <TableCell>
            The value to apply (e.g., a class name, a style variant).
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <CodeTag>$where</CodeTag>
          </TableCell>
          <TableCell>
            <CodeTag>{"{ attr: A; is: string }"}</CodeTag>
          </TableCell>
          <TableCell>
            Optional matching condition for more precise targeting.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const UsageExample = () => {
  const code = `import { Provider, defineStyleRules } from "auera-ui";

const styleRules = defineStyleRules({
   button: {
      className: [
        {
          applyBy: "id",
          value: "bg-red-500",
          $where: { attr: "id", is: "delete-btn" }
        },
        {
          applyBy: "variant",
          value: "text-red-500 border-red-500",
          $where: { attr: "variant", is: "outline" }
        }
      ],
      radius: [
        {
          applyBy: "class",
          value: "lg",
          $where: { attr: "class", is: "primary" }
        }
      ]
   }
});


<Provider styleRules={styleRules}>
 <App />
</Provider>`;

  return <CodeBlock fileName="layout.tsx" code={code} />;
};

export const HowItWorks = () => {
  return (
    <Box className="flex-col gap-2 px-1">
      <p className="text !font-medium">
        1. Look for <CodeTag>styleRules.button</CodeTag>.
      </p>
      <p className="text !font-medium">
        2. Filter rules by <CodeTag>applyBy</CodeTag> (like{" "}
        <CodeTag>id</CodeTag>, <CodeTag>variant</CodeTag> or{" "}
        <CodeTag>class</CodeTag>).
      </p>
      <p className="text !font-medium">
        3. Check if <CodeTag>$where</CodeTag> matches the component’s current
        attributes.
      </p>
      <p className="text !font-medium">
        4. Apply the corresponding <CodeTag>value</CodeTag> (e.g., class name,
        radius, etc).
      </p>
    </Box>
  );
};

export const StyleRulesGuide = {
  UsageExample,
  HowItWorks,
};
