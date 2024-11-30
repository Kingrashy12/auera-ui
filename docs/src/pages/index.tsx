import Title from "@/components/Title";
import { Box } from "auera-ui";

export default function Home() {
  return (
    <>
      <Title title="Auera UI" />
      <Box centered className="w-full h-screen gap-5" direction="column"></Box>
    </>
  );
}
