import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { collapse_codes } from "@/data/code/collapse";
import { Collapse, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const CollapseDemo = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Collapse
            headerLabel="Toggle Collapse"
            classNames={{ headerLabel: "font-inter text-sm" }}
          >
            <div className="font-inter theme-dark:text-white border rounded-md theme-dark:border-neutral-700 p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              consequuntur veniam saepe eligendi voluptates. Cupiditate,
              nesciunt error? Odit, ut. Cupiditate commodi sapiente possimus
              repellat? Veritatis rerum minima voluptas explicabo! Vero sint
              molestiae itaque saepe reiciendis inventore nesciunt iure deserunt
              voluptatem.
            </div>
          </Collapse>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            code={collapse_codes.demo}
            lg="tsx"
            fileName="collapse/demo.tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default CollapseDemo;
