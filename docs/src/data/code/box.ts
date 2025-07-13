export const boxCode = {
  basic: `import { Box } from "auera-ui";
    
const BasicBox = () => {
 return (
   <Box className="border-dashed border font-inter text-muted
   text-base p-4 border-[var(--auera-text-muted)]" >
    This is a basic Box content.
   </Box>
 )
};`,
  direction: `import { Box } from "auera-ui";
    
const DirectionDemo = () => {
 return (
   <Box direction="column" fullWidth className="p-4 gap-4">
     <Box className="bg-blue-500 w-full h-24 rounded-md" />
     <Box className="bg-blue-700 w-full h-24 rounded-md" />
  </Box>
 )
};`,
};
