import { UploadContext } from "@/context/file-upload";
import { CatchFile, FileContruct, FileData } from "../../types/auera-ui";
import React, { useState } from "react";
import { getDisplayName } from "@/utils/displayname";

/**
 * Utility function that handles file extraction from the `onFileUpload` prop in the `FileUpload` component.
 * It processes the uploaded file and returns either a single `FileData` object or an array of `FileData` objects.
 *
 * @param {Object} params - The parameter object.
 * @param {Function} params.useFile - A callback function that processes the uploaded file.
 * @returns {CatchFile['useFile']} The processed file data, either a single `FileData` object or an array of `FileData` objects.
 *
 * @example
 * // Define a file handler using catchFile
 * const handleFile = catchFile({
 *   useFile(file) {
 *     // If a single file is uploaded, extract its base64 and main file structure
 *     const mainFile = !Array.isArray(file) ? file.main : null;
 *     const base64File = !Array.isArray(file) ? file.base64 : null;
 *
 *     // If multiple files are uploaded, store them in an array
 *     const fileArray = Array.isArray(file) ? file : [];
 *
 *     console.log(mainFile, base64File, fileArray);
 *   },
 * });
 *
 * // Pass it as a prop to the FileUpload component
 * <FileUpload onFileUpload={handleFile}>
 *   // Other file upload components
 * </FileUpload>
 */
const catchFile = ({ useFile }: CatchFile): CatchFile["useFile"] => useFile;

const emptyFile = {
  base64: "",
  main: {
    name: "",
    type: "",
    size: 0,
  },
};

const FileUpload: React.FC<{
  children: React.ReactNode;
  multiple?: boolean;
  onFileUpload?: (file: FileData) => void;
  maxFiles?: number;
}> = ({ children, multiple, onFileUpload, maxFiles }) => {
  const [file, setFile] = useState<FileContruct>(emptyFile);
  const [files, setFiles] = useState<FileContruct[]>([]);

  const loadFiles = (file: FileData) => {
    if (onFileUpload) {
      onFileUpload(file);
    }
  };

  const addFile = (file_: FileContruct) => {
    if (multiple && files.length < maxFiles!) {
      setFiles((prev) => {
        const updatedFiles = [...prev, file_];
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
      value={{ file, addFile, files, removeFile, multiple, maxFiles }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default FileUpload;
export { catchFile };

FileUpload.displayName = getDisplayName("FileUpload");
