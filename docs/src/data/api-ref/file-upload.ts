const upload = [
  {
    prop: "multiple",
    type: "boolean",
    description: "Allows multiple file selection.",
    default: "false",
  },
  {
    prop: "onFileUpload",
    type: "function",
    description: "Callback function triggered when files are uploaded.",
    default: "undefined",
  },
  {
    prop: "maxFiles",
    type: "number",
    description: "Limits the number of files that can be uploaded.",
    default: "10",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Defines the theme mode applied to all upload components.",
    default: '"system"',
  },
];

const trigger = [
  {
    prop: "accept",
    type: "FileType[]",
    description: "Specifies the file types that can be uploaded.",
    default: '["image/png, image/jpeg"]',
  },
  {
    prop: "maxSize",
    type: "number",
    description: "Defines the maximum file size (in MB) allowed for upload.",
    default: "32",
  },
  {
    prop: "exceedMessage",
    type: "string",
    description:
      "Custom warning message displayed when file size exceeds the limit.",
    default: "File size exceeds the ${maxSize}MB limit!",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Disables the file upload functionality when set to true.",
    default: "false",
  },
];

const list = [
  {
    prop: "showSize",
    type: "boolean",
    description: "Displays the file size next to the uploaded file.",
    default: "false",
  },
  {
    prop: "removeAble",
    type: "boolean",
    description:
      "Allows users to remove files from the upload list (only for multiple files).",
    default: "false",
  },
  {
    prop: "classNames",
    type: "object",
    description: "Custom class names for styling the file list.",
    default: "undefined",
    properties: {
      name: {
        type: "string",
        description: "Class name for the file name.",
        default: "undefined",
      },
      root: {
        type: "string",
        description: "Class name for the file container.",
        default: "undefined",
      },
    },
  },
];

const dropzone = [
  {
    prop: "label",
    type: "string",
    description: "Text displayed as the main label for the dropzone.",
    default: "undefined",
  },
  {
    prop: "description",
    type: "string",
    description:
      "Additional text displayed below the label to provide more information.",
    default: "undefined",
  },
  {
    prop: "classNames",
    type: "object",
    description:
      "Custom class names for styling different parts of the dropzone.",
    default: "undefined",
    properties: {
      root: {
        type: "string",
        description: "Class for the root dropzone container.",
        default: "undefined",
      },
      label: {
        type: "string",
        description: "Class for the dropzone label.",
        default: "undefined",
      },
      description: {
        type: "string",
        description: "Class for the dropzone description text.",
        default: "undefined",
      },
    },
  },
  {
    prop: "accept",
    type: "FileType[]",
    description: "Specifies the file types that can be uploaded.",
    default: '["image/png, image/jpeg"]',
  },
  {
    prop: "maxSize",
    type: "number",
    description: "Defines the maximum file size (in MB) allowed for upload.",
    default: "32",
  },
  {
    prop: "exceedMessage",
    type: "string",
    description:
      "Custom warning message displayed when file size exceeds the limit.",
    default: "File size exceeds the ${maxSize}MB limit!",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Disables the dropzone.",
    default: "false",
  },
];

export const fileUploadRef = { upload, trigger, list, dropzone };
