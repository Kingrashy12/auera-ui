import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, openModal, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ModalSizes = () => {
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
          <Stack wrap align="horizontal">
            <Button radius="md" onClick={() => openModal("size-auto")}>
              Auto
            </Button>
            <Button radius="md" onClick={() => openModal("size-sm")}>
              Small
            </Button>
            <Button radius="md" onClick={() => openModal("size-md")}>
              Medium
            </Button>
            <Button radius="md" onClick={() => openModal("size-lg")}>
              Large
            </Button>
            <Button radius="md" onClick={() => openModal("size-xl")}>
              Extra Large
            </Button>
            <Button radius="md" onClick={() => openModal("size-full")}>
              Full (83%)
            </Button>
            <Button radius="md" onClick={() => openModal("size-full-screen")}>
              Full Screen
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel className="flex-col flex gap-6">
          <CodeBlock fileName="modal/sizes.tsx" code={code} lg="tsx" />
          {/* <CodeBlock
            fileName="overlays/modal/**.tsx"
            code={overlayCodes}
            lg="tsx"
          /> */}
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ModalSizes;

const code = `import { Button, openModal, Stack } from "auera-ui";

export const ModalSizeDemo = () => {
 return (
  <Stack wrap align="horizontal">
    <Button onClick={() => openModal("size-auto")}>
      Auto
    </Button>
    <Button onClick={() => openModal("size-sm")}>
      Small
    </Button>
    <Button onClick={() => openModal("size-md")}>
      Medium
    </Button>
    <Button onClick={() => openModal("size-lg")}>
      Large
    </Button>
    <Button onClick={() => openModal("size-xl")}>
      Extra Large
    </Button>
    <Button onClick={() => openModal("size-full")}>
      Full (83%)
    </Button>
    <Button onClick={() => openModal("size-full-screen")}>
      Full Screen
    </Button>
  </Stack>
 )
}`;

// const overlayCodes = `import {
//   closeModal,
//   IconButton,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalPanel,
// } from "auera-ui";
// import React from "react";
// import { IoIosClose } from "react-icons/io";

// export const SizeAuto = () => {
//   return (
//     <Modal value="size-auto">
//       <ModalPanel size="auto">
//         <ModalHeader>
//           <h1 className="text-xl font-poppins font-semibold theme-dark:text-white">
//             Modal Header
//           </h1>
//           <IconButton radius="xl" onClick={closeModal}>
//             <IoIosClose size={20} />
//           </IconButton>
//         </ModalHeader>
//         <ModalContent className="font-inter">
//           <p className="text-base text-gray-600 theme-dark:text-neutral-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel
//             <br />
//             nulla, inventore delectus dolorem maiores voluptate veniam sit eius
//             <br />
//             dolorum!
//           </p>
//         </ModalContent>
//       </ModalPanel>
//     </Modal>
//   );
// };`;
