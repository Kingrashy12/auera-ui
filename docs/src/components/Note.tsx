import React from "react";
import { tw } from "stywind";

interface NoteProp {
  note: string;
  type: "info" | "error" | "warning" | "fade";
}

const Note: React.FC<NoteProp> = ({ type = "fade", note }) => {
  return (
    <div
      className={tw("gap-3 px-4 py-4 rounded-lg border-l-[3px]", {
        "border-red-500": type === "error",
        "border-blue-500 bg-blue-100 theme-dark:bg-blue-800/30":
          type === "info",
        "border-yellow-500": type === "warning",
        "border-neutral-400 bg-neutral-200 theme-dark:bg-neutral-900":
          type === "fade",
      })}
    >
      <p className="text font-inter text-sm">
        <b>Note:</b> {note}
      </p>
    </div>
  );
};

export default Note;
