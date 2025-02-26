import { UploadContext } from "@/context/file-upload";
import { FileContruct, FileData, FileUploadProps } from "../../types/auera-ui";
import React, { useState } from "react";
import { getDisplayName } from "@/utils/displayname";
import { useMode } from "@/hook/use";

const emptyFile = {
  base64: "",
  main: {
    name: "",
    type: "",
    size: 0,
  },
};

const FileUpload: React.FC<FileUploadProps> = ({
  children,
  multiple,
  onFileUpload,
  maxFiles = 10,
  mode,
}) => {
  const [file, setFile] = useState<FileContruct>(emptyFile);
  const [files, setFiles] = useState<FileContruct[]>([]);
  const { currentMode } = useMode(mode);

  const loadFiles = (file: FileData) => {
    if (onFileUpload) {
      onFileUpload(file);
    }
  };

  const addFile = (file_: FileContruct) => {
    if (multiple && files.length < maxFiles!) {
      setFiles((prev) => {
        const updatedFiles = [file_, ...prev];
        loadFiles(updatedFiles);
        return updatedFiles;
      });
    } else if (!multiple) {
      setFile(file_);
      loadFiles(file_);
    }
  };

  const removeFile = (index: number) => {
    setFiles((files) => {
      return files.filter((_, idx) => idx !== index);
    });
  };

  return (
    <UploadContext.Provider
      value={{
        file,
        addFile,
        files,
        removeFile,
        multiple,
        maxFiles,
        mode: currentMode,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default FileUpload;

FileUpload.displayName = getDisplayName("FileUpload");
