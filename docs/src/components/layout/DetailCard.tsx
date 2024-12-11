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
  const pageHeader = str[str.length - 2];
  const pageName = router.query.slug;
  return (
    <Box
      fullWidth
      className="p-8 rounded-lg detailCard border justify-between items-center max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-3 max-[550px]:p-5"
    >
      <Box direction="column" className="gap-3">
        <span className="text-blue-600 font-inter font-semibold text-base">
          {StrFun.capitalize(pageHeader, "-", "-")}
        </span>
        <h1 className="font-inter font-bold text-3xl text-primary">
          {StrFun.capitalize(pageName as string, "-", " ")}
        </h1>
        <p className="font-inter font-normal text-base text-muted w-[335px] max-[550px]:w-full">
          {description}
        </p>
      </Box>
      <Image
        src={"/logo.png"}
        alt="Logo"
        className="max-[550px]:hidden"
        width={80}
        height={60}
      />
    </Box>
  );
};

export default DetailCard;
