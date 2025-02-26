import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import {
  Button,
  FileUpload,
  FileUploadList,
  FileUploadTrigger,
  Stack,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const FileUploadDemo = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <Stack>
            <FileUpload>
              <FileUploadTrigger
                accept={["application/pdf", "video/mp4", "image/jpg"]}
                maxSize={8}
              >
                <Button>Upload File (8 mb)</Button>
              </FileUploadTrigger>
              <FileUploadList />
            </FileUpload>
          </Stack>
        </TabPanel>
        <TabPanel className="mt-4">
          <CodeBlock code={code} fileName="max-size-demo.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default FileUploadDemo;

const code = `import {
  Button,
  FileUpload,
  FileUploadList,
  FileUploadTrigger,
} from "auera-ui";
 
export const UploadDemo = () => {
 return (
  <FileUpload>
     <FileUploadTrigger
      accept={["application/pdf", "video/mp4", "image/jpg"]}
      maxSize={8}
     >
       <Button>Upload File (8 mb)</Button>
     </FileUploadTrigger>
     <FileUploadList />
   </FileUpload>
 )
};`;
