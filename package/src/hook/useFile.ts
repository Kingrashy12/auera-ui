import { UploadContext } from "@/context/file-upload";
import { useContext } from "react";

export const useFile = () => {
  const context = useContext(UploadContext);
  if (context === undefined) {
    throw new Error(
      "Missing `FileUpload`. Make sure you use FileUpload sub component within `FileUpload`."
    );
  }
  return context;
};
