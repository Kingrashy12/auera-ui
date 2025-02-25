import React, { useRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { useFile } from "@/hook/useFile";
import { UploadTrigger } from "../../types/auera-ui";
import { tw } from "stywind";
import { useShared } from "./shared";

const FileUploadTrigger: React.FC<UploadTrigger> = ({
  children,
  accept = ["image/png, image/jpeg"],
  maxSize = 32,
  disabled,
  exceedMessage,
}) => {
  const { multiple } = useFile();
  const { handleFileAdd } = useShared();

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    handleFileAdd(files!, maxSize, exceedMessage!);
  };

  return (
    <>
      <div
        onClick={() => uploadRef.current?.click()}
        className={tw(
          disabled && "cursor-not-allowed pointer-events-none select-none"
        )}
      >
        {children}
      </div>
      <input
        ref={uploadRef}
        onChange={handleUpload}
        type="file"
        multiple={multiple}
        className="hidden"
        accept={accept?.join(",")}
      />
    </>
  );
};

export default FileUploadTrigger;
FileUploadTrigger.displayName = getDisplayName("FileUploadTrigger");
