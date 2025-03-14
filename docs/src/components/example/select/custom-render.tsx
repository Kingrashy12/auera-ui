import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { useDocState } from "@/hooks/docs";
import { replaceInCode } from "@/utils/global";
import {
  Avatar,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "auera-ui";
import React, { useState } from "react";

const users = [
  { id: "1", name: "Alice Johnson", avatar: images[1] },
  { id: "2", name: "Michael Lee", avatar: images[2] },
  { id: "3", name: "Sophia Chen", avatar: images[3] },
];

const SelectCustomRender = () => {
  const { lang } = useDocState();
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <CardContent>
      <TabLayout
        code={
          lang.ext === "tsx"
            ? code
            : replaceInCode(code, /<string\s*\|\s*null>/, "")
        }
      >
        <Select>
          <SelectTrigger className="flex items-center p-3">
            {selectedUser ? (
              <div className="flex items-center gap-2">
                <Avatar
                  src={users.find((user) => user.id === selectedUser)?.avatar}
                  alt="Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium">
                  {users.find((user) => user.id === selectedUser)?.name}
                </span>
              </div>
            ) : (
              <span className="text-gray-500">Select a user</span>
            )}
          </SelectTrigger>

          <SelectContent>
            {users.map((user) => (
              <SelectItem
                key={user.id}
                value={user.id}
                onSelect={(val) => setSelectedUser(val)}
              >
                <div className="flex items-center gap-2">
                  <Avatar src={user.avatar} alt={user.name} />
                  <span className="text-sm">{user.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </TabLayout>
    </CardContent>
  );
};

export default SelectCustomRender;

const code = `import { images } from "@/constant/images";
import {
  Avatar,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "auera-ui";
import React, { useState } from "react";

const users = [
  { id: "1", name: "Alice Johnson", avatar: images[1] },
  { id: "2", name: "Michael Lee", avatar: images[2] },
  { id: "3", name: "Sophia Chen", avatar: images[3] },
];


export const SelectDemo = () => {
const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <Select>
        <SelectTrigger className="flex items-center p-3">
            {selectedUser ? (
              <div className="flex items-center gap-2">
                <Avatar
                  src={users.find((user) => user.id === selectedUser)?.avatar}
                  alt="Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium">
                  {users.find((user) => user.id === selectedUser)?.name}
                </span>
              </div>
            ) : (
              <span className="text-gray-500">Select a user</span>
            )}
        </SelectTrigger>

        <SelectContent>
            {users.map((user) => (
              <SelectItem
                key={user.id}
                value={user.id}
                onSelect={(val) => setSelectedUser(val)}
              >
                <div className="flex items-center gap-2">
                  <Avatar src={user.avatar} alt={user.name} />
                  <span className="text-sm">{user.name}</span>
                </div>
              </SelectItem>
            ))}
        </SelectContent>
    </Select>
  );
};`;
