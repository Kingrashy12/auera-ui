export const buttonCode = {
  demo: `import { Button } from "auera-ui";
  
const ButtonDemo = () => {
  return <Button>Button</Button>
}`,
  loading: `import { Button } from "auera-ui";
  
const LoadingButton = () => {
  return <Button isLoading>Loading</Button>
}`,

  custom_spinner: `import { Button } from "auera-ui";
import { CgSpinner } from "react-icons/cg";
  
const CustomSpinner = () => {
  return (
    <Button
      isLoading
      spinner={<CgSpinner size={20} className="animate-spin" />}
    >
      Loading
    </Button>
  )
}`,
  variants: `import { Button, Stack } from "auera-ui";
  
const ButtonVariants = () => {
  return (
    <Stack wrap align="horizontal">
      <Button>Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="light">Light</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="flat">Flat</Button>
    </Stack>
  )
}`,
  sizes: `import { Button, Stack } from "auera-ui";
  
const ButtonSizes = () => {
  return (
    <Stack wrap align="horizontal">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </Stack>
  )
}`,
  radius: `import { Button, Stack } from "auera-ui";
  
const ButtonRadius = () => {
  return (
    <Stack wrap align="horizontal">
      <Button radius="none">None</Button>
      <Button radius="sm">Small</Button>
      <Button radius="md">Medium</Button>
      <Button radius="lg">Large</Button>
      <Button radius="xl">Extra Large</Button>
      <Button radius="full">Full</Button>
    </Stack>
  )
}`,
  colors: `import { Button, Stack } from "auera-ui";
  
const ButtonColors = () => {
  return (
    <Stack wrap align="horizontal">
      <Button>Primary</Button>
      <Button colorScheme="danger">Danger</Button>
      <Button colorScheme="warning">Warning</Button>
      <Button colorScheme="success">Success</Button>
    </Stack>
  )
}`,
  flavours: `import { Button, Stack } from "auera-ui";
  
const ButtonDesigns = () => {
  return (
    <Stack wrap align="horizontal">
      <Button>Corporate</Button>
      <Button design="frost">Frost</Button>
      <Button design="neobrutalism">Neobrutalism</Button>
    </Stack>
  )
}`,
  icon: `import { Button, Stack } from "auera-ui";
import { HiOutlineMail, HiOutlineTrash } from "react-icons/hi";
  
const ButtonWithIcon = () => {
  return (
    <Stack wrap align="horizontal">
      <Button>
       <HiOutlineMail size={20} />
        Email
      </Button>
      <Button colorScheme="danger">
        Delete
       <HiOutlineTrash size={20} />
      </Button>
    </Stack>
  )
}`,
};
