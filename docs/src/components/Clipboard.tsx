import { Icon, IconButton } from "auera-ui";
import React, { useState } from "react";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";

const Clipboard = ({ content }: { content: string | number }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    // toast.success("Code copied");
    navigator.clipboard?.writeText(content as string);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <IconButton onClick={copy} radius="lg" variants="ghost">
      <Icon icon={copied ? IoCheckmark : IoCopyOutline} />
    </IconButton>
  );
};

export default Clipboard;
