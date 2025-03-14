import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Select, SelectContent, SelectItem, SelectTrigger } from "auera-ui";
import React from "react";

const fruits = [
  { name: "Apple", value: "apple", emoji: "🍎" },
  { name: "Banana", value: "banana", emoji: "🍌" },
  { name: "Cherry", value: "cherry", emoji: "🍒" },
];

const TriggerVariants = () => {
  return (
    <CardContent>
      <TabLayout
        code={code}
        className="flex items-center gap-5 max-[600px]:flex-wrap"
      >
        <Select>
          <SelectTrigger variant="ghost" placeholder="Select a fruit" />
          <SelectContent>
            {fruits.map((fruit, index) => (
              <SelectItem key={index} value={fruit.value}>
                {fruit.emoji} {fruit.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger variant="outline" placeholder="Select a fruit" />
          <SelectContent>
            {fruits.map((fruit, index) => (
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

export default TriggerVariants;

const code = `import { Select, SelectContent, SelectItem, SelectTrigger, Box } from "auera-ui";

const fruits = [
  { name: "Apple", value: "apple", emoji: "🍎" },
  { name: "Banana", value: "banana", emoji: "🍌" },
  { name: "Cherry", value: "cherry", emoji: "🍒" },
];


export const SelectDemo = () => {
 return (
  <Box className="items-center gap-5 max-[600px]:flex-wrap">
   <Select>
      <SelectTrigger variant="ghost" placeholder="Select a fruit" />
       <SelectContent>
         {fruits.map((fruit, index) => (
           <SelectItem key={index} value={fruit.value}>
            {fruit.emoji} {fruit.name}
           </SelectItem>
         ))}
       </SelectContent>
     </Select>
     <Select>
      <SelectTrigger variant="outline" placeholder="Select a fruit" />
       <SelectContent>
         {fruits.map((fruit, index) => (
           <SelectItem key={index} value={fruit.value}>
            {fruit.emoji} {fruit.name}
           </SelectItem>
         ))}
       </SelectContent>
     </Select>
  </Box>
 )
};`;
