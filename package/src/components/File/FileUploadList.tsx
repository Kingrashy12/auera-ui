import React from "react";
import { CgClose } from "react-icons/cg";
import { getDisplayName } from "@/utils/displayname";
import { useFile } from "@/hook/useFile";
import MapItems from "../utils/MapItems";
import Box from "../Box/Box";
import Icon from "../Icon/Icon";
import { StrFun } from "@/utils";
import { IconButton } from "../Button";
import { FileContruct, FileListProps, FileType } from "../../types/auera-ui";
import fileType from "./file-type";
import { tw } from "stywind";

const FileUploadList: React.FC<FileListProps> = ({
  removeAble,
  showSize,
  classNames,
}) => {
  const { file, files, removeFile, mode: currentMode } = useFile();

  const getFileSize = (size: number) => {
    const fileSizeInMB = (size / (1024 * 1024)).toFixed(2);

    return (
      <p className="font-inter font-normal text-neutral-500 text-xs">
        {fileSizeInMB} MB
      </p>
    );
  };

  const getIcon = (file: FileContruct) => {
    const fileIcon = fileType[file.main.type as FileType];
    if (fileType[file.main.type as FileType]) {
      return fileIcon;
    } else return fileType["*"];
  };

  return (
    <>
      {files.length >= 1 ? (
        <MapItems
          data={files}
          direction="column"
          className="gap-4"
          fullWidth
          renderItem={(file_, index) => (
            <Box
              data-theme={currentMode}
              key={index}
              className={tw(
                "gap-3 items-center rounded-md bg-white tone-dark:bg-black border-1.7 border-neutral-300 \
                tone-dark:border-neutral-800 px-3 py-3 min-h-14 h-auto tone-dark:text-white",
                classNames?.root
              )}
              fullWidth
            >
              <Icon
                size={20}
                className={
                  currentMode === "dark" ? "text-gray-500" : "text-neutral-600"
                }
                icon={getIcon(file_)}
              />
              {file_ ? (
                <Box className="flex-col">
                  <p
                    className={tw(
                      "font-medium text-sm font-inter",
                      classNames?.name
                    )}
                  >
                    {StrFun.truncate(file_.main.name, 45)}
                  </p>
                  {showSize && getFileSize(file_.main.size)}
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
            className={tw(
              "gap-3 items-center rounded-md bg-white tone-dark:bg-black border-1.7 border-neutral-300 \
              tone-dark:border-neutral-800 px-3 py-3 min-h-14 h-auto tone-dark:text-white",
              classNames?.root
            )}
            fullWidth
          >
            <Icon
              size={20}
              className={
                currentMode === "dark" ? "text-gray-500" : "text-neutral-600"
              }
              icon={getIcon(file)}
            />
            {file ? (
              <Box className="flex-col">
                <p
                  className={tw(
                    "font-medium text-sm font-inter",
                    classNames?.name
                  )}
                >
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
