import {
  FaBookOpen,
  FaClipboardList,
  FaCubes,
  FaLayerGroup,
  FaMap,
} from "react-icons/fa";
import { TbCodeCircleFilled } from "react-icons/tb";

export const linksWithIcon = [
  { label: "Docs", icon: FaBookOpen, color: "#10B981" }, // Green
  { label: "Components", icon: FaCubes, color: "#3B82F6" }, // Blue
  { label: "Changelog", icon: FaClipboardList, color: "#FACC15" }, // Yellow
  { label: "Roadmap", icon: FaMap, color: "#EF4444" }, // Red
  { label: "Templates", icon: FaLayerGroup, color: "#8B5CF6" }, // Purple
  { label: "Playground", icon: TbCodeCircleFilled, color: "#F97316" }, // Orange
];
