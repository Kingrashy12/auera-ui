import {
  FaBookOpen,
  FaClipboardList,
  FaCubes,
  FaLayerGroup,
  FaMap,
} from "react-icons/fa";
import { TbCodeCircleFilled } from "react-icons/tb";

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
