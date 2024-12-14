import Body from "./Drawer";
import DrawerContent from "./DrawerContent";
import DrawerHeader from "./DrawerHeader";
import DrawerFooter from "./DrawerFooter";
import DrawerPanel from "./DrawerPanel";
import DrawerTrigger from "./DrawerTrigger";

const Drawer = Object.assign(Body, {
  Content: DrawerContent,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Panel: DrawerPanel,
  Trigger: DrawerTrigger,
});

export default Drawer;
