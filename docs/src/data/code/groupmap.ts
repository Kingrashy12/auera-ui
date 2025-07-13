export const groupmap_code = {
  demo: `import { notifications } from "@/data/notification";
import { formatTime } from "@/utils/formatTime";
import {
  Box,
  GroupMap,
  StatusBadge,
} from "auera-ui";
 

const GroupMapDemo = () => {
 return (
  <GroupMap
    data={notifications}
    showKeyOnHead
    dataMapClass="gap-3"
    className="gap-5"
    renderKey={(key) => (
      <h1 className="font-medium font-inter text-md text-neutral-500">
        {formatTime(new Date(key))}
      </h1>
    )}
    renderItem={(item) => (
      <Box
        className="
        gap-2 p-4 rounded-xl cursor-pointer flex-col
        border border-neutral-200 theme-dark:border-neutral-700
        hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 
        transition-all duration-300 ease-in-out shadow-md 
        hover:shadow-lg transform mb-2 active:scale-90 drawer-demo-card
        "
      >
        <Box fullWidth className="flex justify-between items-center">
          <p className="font-semibold text-lg text-neutral-800 theme-dark:text-white">
            {item.title}
          </p>
          {!item.seen && <StatusBadge placement="right-bottom" />}
        </Box>
        <span className="text-neutral-600 text-sm theme-dark:text-neutral-500">
          {item.message}
        </span>
      </Box>
    )}
    groupByKey={(item) => item.timestamp}
    />
 )
};`,
  empty_list: `import { notifications } from "@/data/notification";
import { formatTime } from "@/utils/formatTime";
import {
  Box,
  GroupMap,
  StatusBadge,
} from "auera-ui";
import { CgList } from "react-icons/cg";

const GroupMapDemo = () => {
const data: typeof notifications = [];
 return (
  <GroupMap
    data={data}
    showKeyOnHead
    dataMapClass="gap-3"
    className="gap-5"
    renderKey={(key) => (
      <h1 className="font-medium font-inter text-md text-neutral-500">
        {formatTime(new Date(key))}
      </h1>
    )}
    renderItem={(item) => (
      <Box
        className="
        gap-2 p-4 rounded-xl cursor-pointer flex-col
        border border-neutral-200 theme-dark:border-neutral-700
        hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 
        transition-all duration-300 ease-in-out shadow-md 
        hover:shadow-lg transform mb-2 active:scale-90 drawer-demo-card
        "
      >
        <Box fullWidth className="flex justify-between items-center">
          <p className="font-semibold text-lg text-neutral-800 theme-dark:text-white">
            {item.title}
          </p>
          {!item.seen && <StatusBadge placement="right-bottom" />}
        </Box>
        <span className="text-neutral-600 text-sm theme-dark:text-neutral-500">
          {item.message}
        </span>
      </Box>
    )}
    groupByKey={(item) => item.timestamp}
    emptyListComponent={
      <Box centered className="flex-col gap-2">
        <CgList
          size={50}
          className="theme-dark:text-neutral-300"
        />
        <p className="font-inter text-base font-medium text-neutral-500
         theme-dark:text-neutral-700">
          Notting is here!
        </p>
      </Box>
    }
    />
 )
};`,
};
