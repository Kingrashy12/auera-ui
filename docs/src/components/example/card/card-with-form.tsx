import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { card_codes } from "@/data/code/card";
import {
  Box,
  Button,
  Card,
  Checkbox,
  PasswordInput,
  TabHandle,
  TabPanel,
  Tabs,
  TextInput,
  Label,
  Media,
} from "auera-ui";
import Link from "next/link";

const CardWithForm = () => {
  return (
    <>
      <CardContent>
        <Tabs variant="solid" rounded containerClass="overflow-visible">
          <TabHandle value="preview">Preview</TabHandle>
          <TabHandle value="code">Code</TabHandle>
          <TabPanel className="mt-3">
            <Card
              classNames={{
                root: "w-fit max-w-sm rounded-[25px]",
              }}
              renderHeader={() => (
                <Box
                  centered
                  fullWidth
                  className="flex-col gap-3 px-4 py-5 border-b theme-dark:border-neutral-800"
                >
                  <Media src="/logo.png" width={50} height={50} />
                  <Box className="flex-col gap-1" centered>
                    <h2 className="text-2xl font-medium font-inter theme-dark:text-white">
                      Sign in
                    </h2>
                    <p className="font-inter text-neutral-400 font-normal text-base">
                      Don&apos;t have an account?{" "}
                      <Link href="#" className="text-blue-500 hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </Box>
                </Box>
              )}
            >
              <form className="flex flex-col gap-4 w-[290px] font-inter">
                <Box className="flex-col gap-2">
                  <Label htmlFor="email" value="Your email" />
                  <TextInput
                    id="email"
                    className="h-[42px] font-poppins text-sm"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </Box>
                <Box className="flex-col gap-2">
                  <Label htmlFor="password" value="Your password" />
                  <PasswordInput
                    id="password"
                    className="h-[42px] font-poppins text-sm"
                    placeholder=""
                    required
                  />
                </Box>

                <Checkbox
                  size="sm"
                  radius="md"
                  classNames={{ container: "theme-dark:text-white" }}
                >
                  Remember me
                </Checkbox>

                <Button radius="xl" fullWidth>
                  Submit
                </Button>
              </form>
            </Card>
          </TabPanel>
          <TabPanel className="mt-3">
            <CodeBlock
              code={card_codes.form_card}
              lg="tsx"
              fileName="card-with-form.tsx"
            />
          </TabPanel>
        </Tabs>
      </CardContent>
    </>
  );
};

export default CardWithForm;
