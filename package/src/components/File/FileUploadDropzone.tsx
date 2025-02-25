import React, { useState } from "react";
import FileUploadTrigger from "./FileUploadTrigger";
import { IoCloudUpload } from "react-icons/io5";
import { tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";
import { UploadDropzone } from "../../types/auera-ui";
import Box from "../Box/Box";
import { useFile } from "@/hook/useFile";
import { useShared } from "./shared";

const FileUploadDropzone: React.FC<UploadDropzone> = ({
  accept,
  maxSize,
  label,
  description,
  disabled,
  classNames,
  exceedMessage,
}) => {
  const { mode: currentMode } = useFile();

  const [isDragging, setIsDragging] = useState(false);

  const { handleFileAdd } = useShared();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files.length > 0) {
      const files = event.dataTransfer.files;
      handleFileAdd(files, maxSize!, exceedMessage!);
    }
  };

  return (
    <FileUploadTrigger
      exceedMessage={exceedMessage}
      disabled={disabled}
      maxSize={maxSize}
      accept={accept}
    >
      <Box
        data-theme={currentMode}
        className={tw(
          `flex-col gap-5 rounded-md mb-4 border-2 border-dashed px-8 py-8 bg-white
         tone-dark:bg-black/95 tone-dark:border-neutral-800 hover:bg-gray-50
          tone-dark:hover:bg-neutral-950`,
          {
            "cursor-not-allowed opacity-80 select-none": disabled,
            "border-blue-500 bg-blue-100 tone-dark:border-blue-600 tone-dark:bg-dark-soft-blue":
              isDragging,
          },
          classNames?.root
        )}
        centered
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Box
          centered
          data-theme={currentMode}
          className="p-2 rounded-full bg-green-100 tone-dark:bg-dark-soft-green"
        >
          <IoCloudUpload size={23} className="text-green-600" />
        </Box>
        <Box className="flex-col gap-2" centered>
          <h4
            data-theme={currentMode}
            className={tw(
              "text-black tone-dark:text-white font-medium font-inter text-base leading-5",
              classNames?.label
            )}
          >
            {label}
          </h4>
          <span
            data-theme={currentMode}
            className={tw(
              "font-normal font-inter text-neutral-400 tone-dark:text-neutral-700 leading-5 text-sm",
              classNames?.description
            )}
          >
            {description}
          </span>
        </Box>
      </Box>
    </FileUploadTrigger>
  );
};

export default FileUploadDropzone;
FileUploadDropzone.displayName = getDisplayName("FileUploadDropzone");
