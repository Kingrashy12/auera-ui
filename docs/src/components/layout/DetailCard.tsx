import { StrFun } from "@/utils/fun";
import { Box } from "auera-ui";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type DetailCardProps = {
  description: string;
};

const DetailCard = ({ description }: DetailCardProps) => {
  const router = useRouter();
  const str = router.pathname.split("/").filter((r) => r !== "");
  const pageName = str[str.length - 1];
  const pageHeader = str[str.length - 2];
  return (
    <Box
      fullWidth
      className="p-8 rounded-lg detailCard border justify-between items-center"
    >
      <Box direction="column" className="gap-3">
        <span className="text-blue-600 font-inter font-semibold text-base">
          {StrFun.capitalize(pageHeader, "-", "-")}
        </span>
        <h1 className="font-inter font-bold text-3xl text-text-color">
          {StrFun.capitalize(pageName, "-", " ")}
        </h1>
        <p className="font-inter font-normal text-base text-dim w-[335px]">
          {description}
        </p>
      </Box>
      <Image src={"/logo.png"} alt="Logo" width={80} height={60} />
    </Box>
  );
};

export default DetailCard;
