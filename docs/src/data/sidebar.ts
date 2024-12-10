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
  { label: "Docs", icon: FaBookOpen, color: "#10B981" },
  { label: "Components", icon: FaCubes, color: "#3B82F6" },
  { label: "Changelog", icon: FaClipboardList, color: "#FACC15" },
  { label: "Roadmap", icon: FaMap, color: "#EF4444", soon: true },
  { label: "Templates", icon: FaLayerGroup, color: "#8B5CF6", soon: true },
  {
    label: "Playground",
    icon: TbCodeCircleFilled,
    color: "#F97316",
    soon: true,
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
      { label: "Colors", uri: "/docs/" },
      { label: "Overide styles", uri: "/docs/" },
    ],
  },
  {
    header: "Components",
    links: [
      { label: "Button", uri: "/docs/components/button" },
      { label: "Backdrop", uri: "/docs/components/backdrop" },
      { label: "Box", uri: "/docs/components/box" },
      { label: "Drawer", uri: "/docs/components/drawer" },
      { label: "IconButton", uri: "/docs/components/icon-button" },
      { label: "Icon", uri: "/docs/components/icon" },
      { label: "Modal", uri: "/docs/components/modal" },
      { label: "MapItems", uri: "/docs/components/map-items" },
      { label: "GroupMap", uri: "/docs/components/group-map" },
      { label: "OTP Input", uri: "/docs/components/otp-input" },
      {
        label: "StatusBadge",
        uri: "/docs/components/status-badge",
        soon: true,
      },
      {
        label: "Breadcrumb",
        uri: "/docs/components/breadcrumb",
        soon: true,
      },
    ],
  },
];
