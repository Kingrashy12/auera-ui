import Box from "../Box/Box";
import { tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";
import { StackProps } from "../../types/auera-ui";

const Stack = ({
  children,
  wrap,
  align = "vertical",
  className,
  ...props
}: StackProps) => {
  return (
    <Box
      className={tw(
        align === "vertical" ? "flex-col" : "flex-row",
        "items-center justify-center gap-3 w-full",
        className
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
