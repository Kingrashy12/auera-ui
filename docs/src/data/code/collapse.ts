export const collapse_codes = {
  demo: `import { Collapse } from "auera-ui";
    
const CollapseDemo = () => {
 return (
  <Collapse
    headerLabel="Toggle Collapse"
    classNames={{ headerLabel: "font-inter text-sm" }}
   >
    <div className="font-inter theme-dark:text-white border rounded-md theme-dark:border-neutral-700 p-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
      consequuntur veniam saepe eligendi voluptates. Cupiditate,
      nesciunt error? Odit, ut. Cupiditate commodi sapiente possimus
      repellat? Veritatis rerum minima voluptas explicabo! Vero sint
      molestiae itaque saepe reiciendis inventore nesciunt iure deserunt
      voluptatem.
    </div>
   </Collapse>
 )
};`,
  render: `import { Collapse, Icon } from "auera-ui";
import { HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi";
    
const CollapseDemo = () => {
 return (
  <Collapse
    renderHeader={(open) => (
      <Box between fullWidth>
        <p className="theme-dark:text-white">Lorem</p>
        <Icon
          icon={open ? HiOutlineChevronDown : HiOutlineChevronRight}
          className="theme-dark:text-white"
          size={19}
        />
      </Box>
    )}
    >
    <div className="font-inter theme-dark:text-white border
     rounded-md theme-dark:border-neutral-700 p-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
      consequuntur veniam saepe eligendi voluptates. Cupiditate,
      nesciunt error? Odit, ut. Cupiditate commodi sapiente possimus
      repellat? Veritatis rerum minima voluptas explicabo! Vero sint
      molestiae itaque saepe reiciendis inventore nesciunt iure deserunt
      voluptatem.
    </div>
   </Collapse>
 )
};`,
};
