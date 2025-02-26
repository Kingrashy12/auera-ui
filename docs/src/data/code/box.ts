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
  with_motion: `import { Box, Stack } from "auera-ui";
    
const MotionDemo = () => {
 return (
   <Stack>
    <Box
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     whileHover={{ scale: 1.05 }}
     transition={{ duration: 0.5, ease: "easeOut" }}
     className="p-4 shadow-md rounded-md bg-blue-500 text-white text-center font-poppins cursor-pointer"
    >
      Sliding In From Left
    </Box>

    <Box
     initial={{ opacity: 0, x: 50 }}
     animate={{ opacity: 1, x: 0 }}
     whileHover={{ scale: 1.05, translateX: 10, translateY: -20 }}
     transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
     className="p-4 shadow-md rounded-md bg-green-500 text-white text-center font-poppins cursor-pointer"
    >
      Sliding In From Right
    </Box>
  </Stack>
 )
};`,
};
