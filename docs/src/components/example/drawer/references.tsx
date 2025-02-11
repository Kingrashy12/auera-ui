import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { drawer_codes, drawer_content } from "@/data/code/drawer";

const Drawer__Content = () => {
  return (
    <CardContent>
      <CodeBlock
        code={drawer_content}
        lg="tsx"
        fileName="components/examples/DrawerContent.tsx"
      />
    </CardContent>
  );
};

const DemoDrawer = () => {
  return (
    <CardContent>
      <CodeBlock
        code={drawer_codes.overlays.demo}
        lg="tsx"
        fileName="components/overlays/drawer-demo.tsx"
      />
    </CardContent>
  );
};

const FloatDrawer = () => {
  return (
    <CardContent>
      <CodeBlock
        code={drawer_codes.overlays.type}
        lg="tsx"
        fileName="components/overlays/float-drawer.tsx"
      />
    </CardContent>
  );
};

const LeftDrawer = () => {
  return (
    <CardContent>
      <CodeBlock
        code={drawer_codes.overlays.position}
        lg="tsx"
        fileName="components/overlays/left-drawer.tsx"
      />
    </CardContent>
  );
};

export { FloatDrawer, LeftDrawer, DemoDrawer, Drawer__Content };
