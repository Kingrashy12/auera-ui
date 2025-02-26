import { createContext } from "react";
import { FileContruct } from "../types/auera-ui";
import { ModeType } from "@/types/auera-system";

type UploadContextProps = {
  file: FileContruct;
  files: FileContruct[];
  addFile: (file: FileContruct) => void;
  removeFile: (index: number) => void;
  multiple?: boolean;
  maxFiles?: number;
  mode: ModeType;
};

export const UploadContext = createContext<UploadContextProps | undefined>(
  undefined
);
