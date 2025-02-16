import { useMenu } from "@/hook/useMenu";
import { getDisplayName } from "@/utils/displayname";

const MenuDivider = () => {
  const { mode } = useMenu();
  return (
    <div
      data-theme={mode}
      className="border-b w-full border-neutral-200 tone-dark:border-neutral-800"
    />
  );
};

export default MenuDivider;
MenuDivider.displayName = getDisplayName("MenuDivider");
