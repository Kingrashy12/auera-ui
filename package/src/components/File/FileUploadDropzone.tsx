import React from "react";
import FileUploadTrigger from "./FileUploadTrigger";
import { IoCloudUpload } from "react-icons/io5";
import { tw } from "stywind";
import { useMode } from "@/hook/use";
import { getDisplayName } from "@/utils/displayname";
import { UploadDropzone } from "../../types/auera-ui";
import Box from "../Box/Box";

const FileUploadDropzone: React.FC<UploadDropzone> = ({
  accept,
  maxSize,
  label,
  description,
  disabled,
  mode,
  labelClass,
  descriptionClass,
  className,
  exceedMessage,
}) => {
  const { currentMode } = useMode(mode);
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
          `flex-col gap-5 rounded-md border-2 border-dashed px-8 py-8 bg-white
         tone-dark:bg-black/95 tone-dark:border-neutral-800 hover:bg-gray-50
          tone-dark:hover:bg-neutral-950`,
          {
            "cursor-not-allowed opacity-80": disabled,
          },
          className
        )}
        centered
      >
        <Box
          centered
          data-theme={currentMode}
          className="p-2 rounded-full bg-green-100 tone-dark:bg-dark-soft-green"
        >
          <IoCloudUpload size={23} className="text-green-600" />
        </Box>
        <Box className="flex-col gap-1" centered>
          <h2
            data-theme={currentMode}
            className={tw(
              "text-black tone-dark:text-white font-medium font-inter text-sm leading-5",
              labelClass
            )}
          >
            {label}
          </h2>
          <span
            data-theme={currentMode}
            className={tw(
              "font-normal font-inter text-neutral-400 tone-dark:text-neutral-700 leading-5 text-sm",
              descriptionClass
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
