import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Select, SelectContent, SelectItem, SelectTrigger } from "auera-ui";
import React from "react";

const DisabledSelect = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Select>
          <SelectTrigger placeholder="Select a fruit" />
          <SelectContent>
            {[
              { name: "Apple", value: "apple", emoji: "🍎" },
              { name: "Banana", value: "banana", emoji: "🍌" },
              { name: "Cherry", value: "cherry", emoji: "🍒", disabled: true },
            ].map((fruit, index) => (
              <SelectItem
                disabled={fruit.disabled}
                key={index}
                value={fruit.value}
              >
                {fruit.emoji} {fruit.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </TabLayout>
    </CardContent>
  );
};

export default DisabledSelect;

const code = `import { Select, SelectContent, SelectItem, SelectTrigger } from "auera-ui";

export const SelectDemo = () => {
 return (
  <Select>
     <SelectTrigger placeholder="Select a fruit" />
     <SelectContent>
       {[
           { name: "Apple", value: "apple", emoji: "🍎" },
           { name: "Banana", value: "banana", emoji: "🍌" },
           { name: "Cherry", value: "cherry", emoji: "🍒", disabled: true },
       ].map((fruit, index) => (
        <SelectItem disabled={fruit.disabled} key={index} value={fruit.value}>
           {fruit.emoji} {fruit.name}
        </SelectItem>
       ))}
     </SelectContent>
   </Select>
 )
};`;
