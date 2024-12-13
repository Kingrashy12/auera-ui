import {
  FaBookOpen,
  FaClipboardList,
  FaCubes,
  FaLayerGroup,
  FaMap,
} from "react-icons/fa";
import { TbCodeCircleFilled } from "react-icons/tb";

//TODO: Add link to the links below
export const linksWithIcon = [
  {
    label: "Docs",
    icon: FaBookOpen,
    color: "#10B981",
    href: "/docs/getting-started/quick-start",
  },
  {
    label: "Components",
    icon: FaCubes,
    color: "#3B82F6",
    href: "/docs/components/overview",
  },
  {
    label: "Changelog",
    icon: FaClipboardList,
    color: "#FACC15",
    href: "https://github.com/Kingrashy12/auera-ui/blob/main/CHANGELOG.md",
    external: true,
  },
  { label: "Roadmap", icon: FaMap, color: "#EF4444", soon: true, href: "" },
  {
    label: "Templates",
    icon: FaLayerGroup,
    color: "#8B5CF6",
    soon: true,
    href: "/templates",
  },
  {
    label: "Playground",
    icon: TbCodeCircleFilled,
    color: "#F97316",
    soon: true,
    href: "/playground",
  },
];

export const sideBarLinks = [
  {
    header: "Getting Started",
    links: [
      { label: "Quick Start", uri: "/docs/getting-started/quick-start" },
      { label: "Usage", uri: "/docs/getting-started/usage" },
    ],
  },
  {
    header: "Customization",
    links: [{ label: "Design ", uri: "/docs/customization/design" }],
  },
  {
    header: "Components",
    links: [
      { label: "Button", uri: "/docs/components/button" },
      { label: "Backdrop", uri: "/docs/components/backdrop" },
      { label: "Box", uri: "/docs/components/box" },
      { label: "Checkbox", uri: "/docs/components/checkbox" },
      { label: "Stack", uri: "/docs/components/stack" },
      { label: "Switch", uri: "/docs/components/switch" },
      { label: "Card", uri: "/docs/components/card" },
      { label: "Drawer", uri: "/docs/components/drawer" },
      { label: "IconButton", uri: "/docs/components/icon-button" },
      { label: "Icon", uri: "/docs/components/icon" },
      { label: "Modal", uri: "/docs/components/modal" },
      { label: "MapItems", uri: "/docs/components/map-items" },
      { label: "GroupMap", uri: "/docs/components/group-map" },
      { label: "OTPInput", uri: "/docs/components/otp-input" },
      { label: "TextInput", uri: "/docs/components/textinput", soon: true },
      { label: "Tabs", uri: "/docs/components/tabs" },
      {
        label: "StatusBadge",
        uri: "/docs/components/status-badge",
      },
      {
        label: "Breadcrumb",
        uri: "/docs/components/breadcrumb",
        soon: true,
      },
    ],
  },
];
