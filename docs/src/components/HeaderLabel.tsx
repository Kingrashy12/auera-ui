import { StrFun } from "auera-ui";
import React from "react";
import { FaLink } from "react-icons/fa";
import { tw } from "stywind";

type HeaderLabelType = {
  id: string;
  children: string | React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
  hideLink?: boolean;
};

const HeaderLabel = ({
  id,
  children,
  className,
  as,
  hideLink,
}: HeaderLabelType) => {
  const ID = StrFun.slugify(id);
  return (
    <a href={`#${ID}`} className="header-link">
      {hideLink ? null : (
        <FaLink className="text-muted" size={as === "h3" ? 14 : 16} />
      )}
      {as === "h3" ? (
        <h3 className={tw("header-3", className as string)} id={ID}>
          {children}
        </h3>
      ) : (
        <h2 className={tw("header-2", className as string)} id={ID}>
          {children}
        </h2>
      )}
    </a>
  );
};

export default HeaderLabel;
