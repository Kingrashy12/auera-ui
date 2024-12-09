import { StackProps } from "../../types/auera-ui";
import Box from "../Box/Box";
import { tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";

const Stack = ({
  children,
  wrap,
  align = "vertical",
  ...props
}: StackProps) => {
  return (
    <Box
      className={tw(
        props.className as string,
        align === "vertical" ? "flex-col" : "flex-row",
        "items-center justify-center gap-3 w-full"
      )}
      wrap={wrap}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Stack;
Stack.displayName = getDisplayName("Stack");
