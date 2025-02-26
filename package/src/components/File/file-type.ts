import { FileType } from "../../types/auera-ui";
import { IconType } from "react-icons";
import { AiFillFileMarkdown } from "react-icons/ai";
import {
  FaRegFile,
  FaRegFileImage,
  FaRegFileVideo,
  FaRegFileAudio,
  FaRegFilePdf,
  FaRegFileWord,
  FaRegFileExcel,
  FaRegFilePowerpoint,
  FaRegFileArchive,
  FaRegFileCode,
  FaRegFileAlt,
} from "react-icons/fa";

const fileType: Record<FileType, IconType> = {
  "image/png": FaRegFileImage,
  "image/jpg": FaRegFileImage,
  "image/jpeg": FaRegFileImage,
  "image/gif": FaRegFileImage,
  "image/webp": FaRegFileImage,
  "image/svg+xml": FaRegFileImage,

  "video/mp4": FaRegFileVideo,
  "video/webm": FaRegFileVideo,
  "video/ogg": FaRegFileVideo,
  "video/mkv": FaRegFileVideo,

  "audio/mpeg": FaRegFileAudio,
  "audio/mp3": FaRegFileAudio,
  "audio/ogg": FaRegFileAudio,
  "audio/wav": FaRegFileAudio,
  "audio/flac": FaRegFileAudio,

  "application/pdf": FaRegFilePdf,
  "application/msword": FaRegFileWord,
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    FaRegFileWord,

  "application/vnd.ms-excel": FaRegFileExcel,
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    FaRegFileExcel,

  "application/vnd.ms-powerpoint": FaRegFilePowerpoint,
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    FaRegFilePowerpoint,

  "application/zip": FaRegFileArchive,
  "application/x-rar-compressed": FaRegFileArchive,
  "application/x-zip-compressed": FaRegFileArchive,

  "application/json": FaRegFileCode,
  "application/xml": FaRegFileCode,
  "text/plain": FaRegFileAlt,
  "text/csv": FaRegFileExcel,

  "text/markdown": AiFillFileMarkdown,
  "text/mdx": AiFillFileMarkdown,

  "*": FaRegFile,
};

export default fileType;
