import { Box, Button, IconButton, Modal } from "auera-ui";

export default function Home() {
  return (
    <Box centered className="w-full h-screen gap-5" direction="column">
      <Button>Hello Next.js</Button>
      <Modal.Trigger value="test">
        <Button>Open</Button>
      </Modal.Trigger>
      <Modal value="test">
        <Modal.Panel>
          <Modal.Header>
            <p>Hi modal</p>
            <Modal.Trigger type="close" value="">
              <IconButton>
                <p>Click</p>
              </IconButton>
            </Modal.Trigger>
          </Modal.Header>
          <Modal.Content centerContent>Hello</Modal.Content>
        </Modal.Panel>
      </Modal>
    </Box>
  );
}
