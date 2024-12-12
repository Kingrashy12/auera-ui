import dynamic from "next/dynamic";

export { default as Backdrop } from "./.storybook/Backdrop";
export { default as Drawer } from "./.storybook/Drawer/Drawer";
// Next Docs
export { default as RootLayout } from "./layout/RootLayout";
export { default as HomePage } from "./home/Page";

export const DocsLayout = dynamic(() => import("./layout/DocsLayout"));
