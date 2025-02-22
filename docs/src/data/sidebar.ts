import {
  FaBookOpen,
  FaClipboardList,
  FaCubes,
  FaLayerGroup,
  FaMap,
} from "react-icons/fa";
import { TbCodeCircleFilled } from "react-icons/tb";

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
      { label: "Avatar", uri: "/docs/components/avatar" },
      { label: "Button", uri: "/docs/components/button", updated: true },
      { label: "Backdrop", uri: "/docs/components/backdrop" },
      { label: "Box", uri: "/docs/components/box" },
      { label: "Checkbox", uri: "/docs/components/checkbox" },
      { label: "Stack", uri: "/docs/components/stack" },
      { label: "Switch", uri: "/docs/components/switch" },
      { label: "Card", uri: "/docs/components/card" },
      { label: "Drawer", uri: "/docs/components/drawer" },
      {
        label: "DynamicBreadcrumb",
        uri: "/docs/components/dynamic-dreadcrumb",
        soon: true,
      },
      {
        label: "IconButton",
        uri: "/docs/components/icon-button",
        updated: true,
      },
      { label: "Icon", uri: "/docs/components/icon" },
      { label: "Modal", uri: "/docs/components/modal" },
      { label: "MapItems", uri: "/docs/components/mapitems" },
      { label: "GroupMap", uri: "/docs/components/groupmap" },
      { label: "OTP Input", uri: "/docs/components/otp-input" },
      { label: "TextInput", uri: "/docs/components/textinput", soon: true },
      { label: "Media", uri: "/docs/components/media", soon: true },
      { label: "Skeleton", uri: "/docs/components/skeleton", soon: true },
      { label: "Select", uri: "/docs/components/select", soon: true },
      {
        label: "Password Input",
        uri: "/docs/components/password-input",
        soon: true,
      },
      { label: "File Upload", uri: "/docs/components/file-upload", soon: true },
      { label: "Loading", uri: "/docs/components/loading", soon: true },
      { label: "Tabs", uri: "/docs/components/tabs" },
      { label: "ToolTip", uri: "/docs/components/tooltip", soon: true },
      { label: "Toast", uri: "/docs/components/toast" },
      {
        label: "Status Badge",
        uri: "/docs/components/status-badge",
      },
      {
        label: "Breadcrumb",
        uri: "/docs/components/breadcrumb",
        soon: true,
      },
      {
        label: "Collapse",
        uri: "/docs/components/collapse",
      },
      {
        label: "Menu",
        uri: "/docs/components/menu",
        soon: true,
      },
      {
        label: "Fab",
        uri: "/docs/components/fab",
        soon: true,
      },
    ],
  },
  // {
  //   header: "Utilities ",
  //   links: [
  //     { label: "StrFun", uri: "/docs/utilities/strfun", docs_soon: true },
  //     {
  //       label: "groupData",
  //       uri: "/docs/utilities/group-data",
  //       docs_soon: true,
  //     },
  //     {
  //       label: "formatDate",
  //       uri: "/docs/utilities/form-date",
  //       docs_soon: true,
  //     },
  //     {
  //       label: "formatTime",
  //       uri: "/docs/utilities/form-time",
  //       docs_soon: true,
  //     },
  //     {
  //       label: "formatTimeAgo",
  //       uri: "/docs/utilities/form-time-ago",
  //       docs_soon: true,
  //     },
  //     {
  //       label: "formatTimeDiff",
  //       uri: "/docs/utilities/form-time-diff",
  //       docs_soon: true,
  //     },
  //   ],
  // },
];
