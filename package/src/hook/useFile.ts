import { UploadContext } from "@/context/file-upload";
import { useContext } from "react";

export const useFile = () => {
  const context = useContext(UploadContext);
  if (context === undefined) {
    throw new Error("All FileUpload sub must be used within FileUpload");
  }
  return context;
};
