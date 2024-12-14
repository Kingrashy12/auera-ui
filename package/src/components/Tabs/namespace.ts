import TabHandle from "./TabHandle";
import TabPanel from "./TabPanel";
import TabList from "./Tabs";

const Tabs = Object.assign(TabList, {
  Handle: TabHandle,
  Panel: TabPanel,
});

export default Tabs;
