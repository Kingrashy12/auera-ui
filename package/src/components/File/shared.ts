import { useFile } from "@/hook/useFile";
import { toast } from "../Toast/Toast";

export const useShared = () => {
  const { addFile, multiple, maxFiles, files: stateFiles } = useFile();

  const handleFileAdd = (
    files: FileList,
    maxSize: number,
    exceedMessage: string
  ) => {
    const fileReaders: FileReader[] = [];
    const fileURLs: string[] = [];

    Array.from(files!).forEach((file) => {
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(0);

      if (Number(fileSizeInMB) > maxSize) {
        toast.warning(
          exceedMessage || `File size exceeds the ${maxSize}MB limit!`,
          {
            position: "top-left",
          }
        );
      } else {
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target?.result) {
            const fileConst = {
              base64: String(e.target.result),
              main: file,
            };
            const total = stateFiles.length;
            const canAdd = total + files!.length <= maxFiles!;

            if (multiple && canAdd) {
              addFile(fileConst);
            } else if (!multiple) {
              addFile(fileConst);
            }

            fileURLs.push(e.target.result as string);
          }
        };

        reader.onerror = (error) => {
          console.error("Error reading file:", error);
        };

        reader.readAsDataURL(file);
        fileReaders.push(reader);
      }
    });
  };

  return { handleFileAdd };
};
