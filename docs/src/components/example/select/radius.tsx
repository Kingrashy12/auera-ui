import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import {
  For,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "auera-ui";
import React from "react";

const SelectDemo = () => {
  return (
    <CardContent>
      <TabLayout
        code={code}
        className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1"
      >
        <For
          each={["none", "sm", "md", "lg", "xl", "2xl"]}
          render={(radius) => (
            <Select radius={radius as never}>
              <SelectTrigger placeholder={`Select a fruit (${radius})`} />
              <SelectContent>
                {[
                  { name: "Apple", value: "apple", emoji: "🍎" },
                  { name: "Banana", value: "banana", emoji: "🍌" },
                  { name: "Cherry", value: "cherry", emoji: "🍒" },
                ].map((fruit, index) => (
                  <SelectItem key={index} value={fruit.value}>
                    {fruit.emoji} {fruit.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </TabLayout>
    </CardContent>
  );
};

export default SelectDemo;

const code = `import { Select, SelectContent, SelectItem, SelectTrigger, For, Box } from "auera-ui";

export const SelectDemo = () => {
 return (
  <Box className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
   <For
    each={["none", "sm", "md", "lg", "xl", "2xl"]}
    render={(radius) => (
      <Select radius={radius}>
        <SelectTrigger placeholder={\`Select a fruit (\${radius})\} />
        <SelectContent>
          {[
            { name: "Apple", value: "apple", emoji: "🍎" },
            { name: "Banana", value: "banana", emoji: "🍌" },
            { name: "Cherry", value: "cherry", emoji: "🍒" },
          ].map((fruit, index) => (
            <SelectItem key={index} value={fruit.value}>
             {fruit.emoji} {fruit.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )}
    />
  </Box>
 )
};`;
