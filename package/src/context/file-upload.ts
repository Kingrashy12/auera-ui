import { createContext } from "react";
import { FileContruct } from "../types/auera-ui";

type UploadContextProps = {
  file: FileContruct;
  files: FileContruct[];
  addFile: (file: FileContruct) => void;
  removeFile: (index: number) => void;
  multiple?: boolean;
  maxFiles?: number;
};

export const UploadContext = createContext<UploadContextProps | undefined>(
  undefined
);
