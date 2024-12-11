import { ModalContentType } from "@/types/auera-ui";
import { createStyle, tw } from "stywind";

export const useModal = {
  content: (props: ModalContentType) => {
    const Base = createStyle("div").classname(
      tw(
        props.className,
        "flex flex-col p-3 bg-drawer-content overflow-y-auto h-full m-[5px 0] gap-[16px]",
        props.centerContent ? "items-center justify-center" : ""
      )
    );

    return { Base };
  },
};
