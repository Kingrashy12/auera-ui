import React from "react";
import {
  FaRegFile,
  FaRegFileAudio,
  FaRegFileImage,
  FaRegFilePdf,
  FaRegFileVideo,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { getDisplayName } from "@/utils/displayname";
import { useMode } from "@/hook/use";
import { useFile } from "@/hook/useFile";
import MapItems from "../utils/MapItems";
import Box from "../Box/Box";
import Icon from "../Icon/Icon";
import { StrFun } from "@/utils";
import { IconButton } from "../Button";
import { FileListProps } from "../../types/auera-ui";

const fileType = {
  "image/png": FaRegFileImage,
  "image/jpg": FaRegFileImage,
  "image/jpeg": FaRegFileImage,
  "video/mp4": FaRegFileVideo,
  "audio/mpeg": FaRegFileAudio,
  "audio/mp3": FaRegFileAudio,
  "application/pdf": FaRegFilePdf,
  default: FaRegFile,
};

type FileType =
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "video/mp4"
  | "application/pdf"
  | "audio/mpeg"
  | "audio/mp3";

const FileUploadList: React.FC<FileListProps> = ({
  mode,
  removeAble,
  showSize,
}) => {
  const { file, files, removeFile } = useFile();

  const { currentMode } = useMode(mode);

  const getFileSize = (size: number) => {
    const fileSizeInMB = (size / (1024 * 1024)).toFixed(2);

    return (
      <p className="font-sans font-normal text-neutral-500 text-xs">
        {fileSizeInMB} MB
      </p>
    );
  };

  return (
    <>
      {files.length >= 1 ? (
        <MapItems
          data={files}
          direction="column"
          className="!gap-5"
          renderItem={(file, index) => (
            <Box
              data-theme={currentMode}
              key={index}
              className="gap-3 items-center rounded-md bg-white tone-dark:bg-black border-1.7 border-neutral-300 \
             tone-dark:border-neutral-800 px-3 py-3 min-h-14 h-auto tone-dark:text-white"
              fullWidth
            >
              <Icon
                size={20}
                className={
                  currentMode === "dark" ? "text-gray-500" : "text-neutral-600"
                }
                icon={fileType[(file.main.type as FileType) || "default"]}
              />
              {file ? (
                <Box className="flex-col">
                  <p className="font-medium text-sm font-sans">
                    {StrFun.truncate(file.main.name, 45)}
                  </p>
                  {showSize && getFileSize(file.main.size)}
                </Box>
              ) : null}
              {removeAble && (
                <IconButton
                  className="ml-auto"
                  mode={currentMode}
                  variant="ghost"
                  onClick={() => removeFile(index)}
                >
                  <CgClose />
                </IconButton>
              )}
            </Box>
          )}
        />
      ) : (
        file.base64 && (
          <Box
            data-theme={currentMode}
            className="gap-3 items-center rounded-md bg-white tone-dark:bg-black border-1.7 border-neutral-300 \
             tone-dark:border-neutral-800 px-3 py-3 min-h-14 h-auto tone-dark:text-white"
            fullWidth
          >
            <Icon
              size={20}
              className={
                currentMode === "dark" ? "text-gray-500" : "text-neutral-600"
              }
              icon={fileType[(file.main.type as FileType) || "default"]}
            />
            {file ? (
              <Box className="flex-col">
                <p className="font-medium text-sm font-sans">
                  {StrFun.truncate(file.main.name, 48)}
                </p>
                {showSize && getFileSize(file.main.size)}
              </Box>
            ) : null}
          </Box>
        )
      )}
    </>
  );
};

export default FileUploadList;
FileUploadList.displayName = getDisplayName("FileUploadList");
