import React from "react";
import Details from "../Details";
import HeaderLabel from "../HeaderLabel";
import TabLink from "../TabLink";
import { Button, Card, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import { LuEye } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import CodeBlock from "../layout/code/Block";

const UsageDemo = () => {
  return (
    <Details id="basic-usage" className="mb-2">
      <HeaderLabel id="basic-usage">Basic Usage</HeaderLabel>
      <p className="text">
        After{" "}
        <TabLink
          to="/docs/getting-started/quick-start#installation"
          label="installation"
        />
        , you can import any AueraUI component and start playing around. For
        example, try changing the variant on the{" "}
        <TabLink to="/docs/components/button" label="Button" />
      </p>
      <Tabs variant="solid" rounded className="mt-2">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel>
          <Card fullWidth>
            <Stack fullWidth>
              <Button>Hello world</Button>
            </Stack>
          </Card>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="App.tsx" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </Details>
  );
};

export default UsageDemo;
const code = `import { Button } from 'auera-ui';

export default function App() {
  return <Button>Hello world</Button>;
}`;
