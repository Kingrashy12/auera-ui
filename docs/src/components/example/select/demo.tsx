import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Select, SelectContent, SelectItem, SelectTrigger } from "auera-ui";
import React from "react";

const SelectDemo = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Select>
          <SelectTrigger placeholder="Select a fruit" />
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
      </TabLayout>
    </CardContent>
  );
};

export default SelectDemo;

const code = `import { Select, SelectContent, SelectItem, SelectTrigger } from "auera-ui";

export const SelectDemo = () => {
 return (
  <Select>
     <SelectTrigger placeholder="Select a fruit" />
     <SelectContent>
       {[
         { name: "Apple", value: "apple" },
         { name: "Banana", value: "banana" },
         { name: "Cherry", value: "cherry" },
       ].map((fruit, index) => (
        <SelectItem key={index} value={fruit.value}>
          {fruit.name}
        </SelectItem>
       ))}
     </SelectContent>
   </Select>
 )
};`;
