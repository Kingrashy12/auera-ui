import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Fab } from "auera-ui";
import { HiMenu } from "react-icons/hi";
import React from "react";
import For from "@/components/lib/For";
import { useDocState } from "@/hooks/docs";
import { replaceInCode } from "@/utils/global";

const FabColors = () => {
  const { lang } = useDocState();
  return (
    <CardContent>
      <TabLayout
        code={
          lang.ext === "tsx"
            ? code
            : replaceInCode(code, "color as never", "color")
        }
        className="gap-4 flex flex-wrap"
      >
        <For
          each={[
            "blue",
            "red",
            "yellow",
            "green",
            "neutral",
            "thick",
            "teal",
            "gray",
          ]}
          render={(color) => (
            <Fab type="static" color={color as never}>
              <HiMenu size={20} />
            </Fab>
          )}
        />
      </TabLayout>
    </CardContent>
  );
};

export default FabColors;

const code = `import { Fab, For } from "auera-ui";
import { HiMenu } from "react-icons/hi";

export const Demo = () => {
 return (
  <div className="gap-4 flex flex-wrap">
   <For
    each={[
     "blue",
     "red",
     "yellow",
     "green",
     "neutral",
     "thick",
     "teal",
     "gray",
    ]}
    render={(color) => (
      <Fab type="static" size={color as never} >
        <HiMenu size={20} />
      </Fab>
     )}
    />
  </div>
 ) 
};`;
