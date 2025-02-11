import React, { useRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { useFile } from "@/hook/useFile";
import { UploadTrigger } from "../../types/auera-ui";
import { toast } from "../Toast/Toast";

const FileUploadTrigger: React.FC<UploadTrigger> = ({
  children,
  accept = ["image/png, image/jpeg"],
  maxSize = 32,
  disabled,
  exceedMessage,
}) => {
  const { addFile, multiple, maxFiles, files: stateFiles } = useFile();

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileSizeInMB = (files![0].size / (1024 * 1024)).toFixed(0);

    if (Number(fileSizeInMB) > maxSize) {
      toast.warning(
        exceedMessage || `File size exceeds the ${maxSize}MB limit!`,
        {
          position: "top-left",
        }
      );
    } else if (files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const res = reader.result;
        for (let i = 0; i < files.length; i++) {
          const fileConst = {
            base64: String(res),
            main: files[i],
          };
          const total = stateFiles.length;
          const canAdd = total + files.length <= maxFiles!;

          if (multiple && canAdd) {
            addFile(fileConst);
          } else if (!multiple) {
            addFile(fileConst);
          }
        }
      };

      for (let i = 0; i < files.length; i++) {
        reader.readAsDataURL(files[i]);
      }
    }
  };

  return (
    <>
      <div
        onClick={() => uploadRef.current?.click()}
        className={`${disabled && "cursor-not-allowed pointer-events-none"}`}
      >
        {children}
      </div>
      <input
        ref={uploadRef}
        onChange={handleUpload}
        type="file"
        multiple={multiple}
        className="hidden"
        accept={accept?.toString()}
      />
    </>
  );
};

export default FileUploadTrigger;
FileUploadTrigger.displayName = getDisplayName("FileUploadTrigger");
