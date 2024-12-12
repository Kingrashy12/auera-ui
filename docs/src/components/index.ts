import dynamic from "next/dynamic";

export { default as Backdrop } from "./.storybook/Backdrop";
export { default as Drawer } from "./.storybook/Drawer/Drawer";

export { default as RootLayout } from "./layout/RootLayout";

export const HomePage = dynamic(() => import("./home/Page"));
export const DocsLayout = dynamic(() => import("./layout/DocsLayout"));
