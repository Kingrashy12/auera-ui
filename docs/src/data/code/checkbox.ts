export const checkbox_codes = {
  demo: `import { Checkbox, Stack } from "auera-ui";

const CheckboxDemo = () => {
 return (
  <Stack>
    <Checkbox> I have read and agree to the terms of service.</Checkbox>
  </Stack>
 )
}`,
  oncheck: `import { Checkbox, Stack } from "auera-ui";
import { useState } from "react";

const CheckboxDemo = () => {
 const [checked, setChecked] = useState(false);

 return (
  <Stack>
    <Checkbox
     onCheckChange={(checked) => setChecked(checked)}
     classNames={{ container: "text-neutral-400 font-inter" }}
    >
      Checked: {JSON.stringify(checked)}
    </Checkbox>
  </Stack>
 )
}`,
  controlled: `import { Checkbox, Stack } from "auera-ui";
import { useState } from "react";

const CheckboxDemo = () => {
 const [checked, setChecked] = useState(true);

 return (
  <Stack>
    <Checkbox
     checked={checked}
     onCheckChange={(status) => setChecked(status)}
     classNames={{ container: "text-neutral-400 font-inter" }}
    >
      Checked: {JSON.stringify(checked)}
    </Checkbox>
  </Stack>
 )
}`,
  color: `import { Checkbox, Stack } from "auera-ui";

const ColorDemo = () => {
 return (
   <Stack align="horizontal">
    <Checkbox color="pink-500" />
    <Checkbox color="purple-600" />
   </Stack>
 )
}`,
  size: `import { Checkbox, Stack } from "auera-ui";

const SizeDemo = () => {
 return (
   <Stack align="horizontal">
     <Checkbox size="xs" />
     <Checkbox size="sm" />
     <Checkbox size="md" />
   </Stack>
 )
}`,
  radius: `import { Checkbox, Stack } from "auera-ui";

const RadiusDemo = () => {
 return (
   <Stack wrap align="horizontal">
     <Checkbox radius="none" />
     <Checkbox radius="sm" />
     <Checkbox radius="md" />
     <Checkbox radius="full" />
   </Stack>
 )
}`,
  color_scheme: `import { Checkbox, Stack } from "auera-ui";

const ColorSchemeDemo = () => {
 return (
   <Stack wrap align="horizontal">
     <Checkbox />
     <Checkbox colorScheme="danger" />
     <Checkbox colorScheme="success" />
     <Checkbox colorScheme="warning" />
   </Stack>
 )
}`,
};
