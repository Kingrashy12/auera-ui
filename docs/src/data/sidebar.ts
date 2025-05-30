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
    href: "/changelog.md",
    soon: true,
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
    links: [
      { label: "Design ", uri: "/docs/customization/design" },
      { label: "Style Rules", uri: "/docs/customization/style-rules" },
    ],
  },
  {
    header: "Components",
    links: [
      { label: "Avatar", uri: "/docs/components/avatar" },
      { label: "Button", uri: "/docs/components/button", updated: false },
      { label: "Badge", uri: "/docs/components/badge" },
      { label: "Backdrop", uri: "/docs/components/backdrop" },
      { label: "Box", uri: "/docs/components/box" },
      { label: "Checkbox", uri: "/docs/components/checkbox" },
      { label: "Stack", uri: "/docs/components/stack" },
      { label: "Switch", uri: "/docs/components/switch" },
      { label: "Card", uri: "/docs/components/card" },
      { label: "Drawer", uri: "/docs/components/drawer" },
      // {
      //   label: "Dynamic Breadcrumb",
      //   uri: "/docs/components/dynamic-dreadcrumb",
      //   soon: true,
      // },
      {
        label: "IconButton",
        uri: "/docs/components/icon-button",
        updated: false,
      },
      { label: "Icon", uri: "/docs/components/icon" },
      { label: "Modal", uri: "/docs/components/modal" },
      { label: "MapItems", uri: "/docs/components/mapitems" },
      { label: "GroupMap", uri: "/docs/components/groupmap" },
      { label: "OTP Input", uri: "/docs/components/otp-input" },
      { label: "TextInput", uri: "/docs/components/textinput" },
      { label: "Image", uri: "/docs/components/image" },
      { label: "Skeleton", uri: "/docs/components/skeleton" },
      { label: "Select", uri: "/docs/components/select" },
      {
        label: "Password Input",
        uri: "/docs/components/password-input",
      },
      { label: "File Upload", uri: "/docs/components/file-upload" },
      { label: "Loading", uri: "/docs/components/loading" },
      { label: "Tabs", uri: "/docs/components/tabs" },
      { label: "Tooltip", uri: "/docs/components/tooltip", soon: true },
      { label: "Table", uri: "/docs/components/table" },
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
      },
    ],
  },
  {
    header: "Utilities ",
    links: [
      { label: "StrFun", uri: "/docs/utilities/strfun" },
      {
        label: "formatDate",
        uri: "/docs/utilities/format-date",
      },
      {
        label: "formatTime",
        uri: "/docs/utilities/format-time",
      },
      {
        label: "formatTimeAgo",
        uri: "/docs/utilities/format-time-ago",
      },
      {
        label: "Core Utils",
        uri: "/docs/utilities/core-utils",
      },
      {
        label: "formatNumber",
        uri: "/docs/utilities/format-number",
      },
      {
        label: "formatBytes",
        uri: "/docs/utilities/format-bytes",
      },

      // {
      //   label: "handleFileUpload",
      //   uri: "/docs/utilities/handlefile-upload",
      //   docs_soon: true,
      // },
      // {
      //   label: "hasEmptyFields",
      //   uri: "/docs/utilities/has-empty-fields",
      //   docs_soon: true,
      // },
      // {
      //   label: "dyn",
      //   uri: "/docs/utilities/dyn",
      //   docs_soon: true,
      // },
    ],
  },
];
