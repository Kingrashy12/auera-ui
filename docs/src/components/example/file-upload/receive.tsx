import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { useDocState } from "@/hooks/docs";
import { replaceInCode } from "@/utils/global";
import {
  Button,
  catchFile,
  FileUpload,
  FileUploadList,
  FileUploadTrigger,
  Stack,
  TabHandle,
  TabPanel,
  Tabs,
  toast,
} from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const FileUploadDemo = () => {
  const { lang } = useDocState();
  const handleFile = catchFile({
    useFile(file) {
      toast.success("Check your console for the file data");
      console.log(file);
    },
  });

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
            <FileUpload onFileUpload={handleFile}>
              <FileUploadTrigger accept={["*"]}>
                <Button>Upload</Button>
              </FileUploadTrigger>
              <FileUploadList />
            </FileUpload>
          </Stack>
        </TabPanel>
        <TabPanel className="mt-4">
          <CodeBlock
            code={
              lang.ext === "tsx"
                ? code
                : replaceInCode(code, /<FileData\s*\|\s*null>/g, "")
            }
            fileName="demo.tsx"
            lg="tsx"
          />
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
  catchFile,
  FileData
} from "auera-ui";
import { useState } from "react";
 
export const UploadDemo = () => {
 const [uploadedFile, setUploadedFile] = useState<FileData | null>(null);

 const handleFile = catchFile({
    useFile(file) {
    // \`\ file\` is of type \`\FileData\`
    // Store the file in state if needed.
    console.log(file);
    setUploadedFile(file);
    },
 });

 return (
  <FileUpload onFileUpload={handleFile}>
     <FileUploadTrigger accept={["*"]}>
       <Button>Upload</Button>
     </FileUploadTrigger>
     <FileUploadList />
   </FileUpload>
 )
};`;
