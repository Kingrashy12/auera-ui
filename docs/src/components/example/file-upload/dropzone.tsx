import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadList,
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
          <FileUpload multiple>
            <FileUploadDropzone
              accept={["*"]}
              maxSize={100}
              classNames={{ root: "mb-4", label: "text-base" }}
              label="Drag & Drop Files Here or Click to upload"
              description="Supports multiple file types. Click to browse or drag files into the dropzone."
            />
            <FileUploadList />
          </FileUpload>
        </TabPanel>
        <TabPanel className="mt-4">
          <CodeBlock code={code} fileName="dropzone-demo.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default FileUploadDemo;

const code = `import {
  FileUpload,
  FileUploadList,
  FileUploadDropzone,
} from "auera-ui";
 
export const UploadDemo = () => {
 return (
  <FileUpload>
    <FileUploadDropzone
      accept={["*"]}
      maxSize={100}
      label="Drag & Drop Files Here or Click to upload"
      description="Supports multiple file types. Click to browse or drag files into the dropzone."
    />
     <FileUploadList />
   </FileUpload>
 )
};`;
