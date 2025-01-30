import { TootipProps } from "../../types/auera-ui";
import { tw } from "stywind";

const positions = {
  top: "-top-2 -translate-y-full left-1/2 -translate-x-1/2",
  left: "top-1/2 -translate-y-1/2 -left-2 -translate-x-full",
  right: "top-1/2 -translate-y-1/2 -right-2 translate-x-full",
  bottom: "-bottom-2 translate-y-full left-1/2 -translate-x-1/2",
};

const pointer = {
  top: "bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2",
  left: "top-1/2 -translate-y-1/2 right-0 translate-x-1/2",
  right: "top-1/2 -translate-y-1/2 left-0 -translate-x-1/2",
  bottom: "top-0 -translate-y-1/2 left-1/2 -translate-x-1/2",
};

const Tooltip = ({
  children,
  position = "top",
  label,
  className,
  labelClass,
  containerClass,
  showPointer = true,
}: TootipProps) => {
  const PostionClass = tw(
    positions[position],
    className,
    "theme-light:bg-black theme-dark:bg-neutral-800 p-2 rounded-lg group-hover:flex hidden absolute z-[200]"
  );
  const Pointer = tw(pointer[position], "bg-inherit rotate-45 p-1 absolute");
  return (
    <div className={tw(containerClass, "group relative w-full cursor-pointer")}>
      <>{children}</>
      <div className={PostionClass}>
        <span
          className={tw(
            labelClass,
            "text-white whitespace-nowrap font-medium text-xs"
          )}
        >
          {label}
        </span>
        {showPointer && <div className={Pointer} />}
      </div>
    </div>
  );
};

export default Tooltip;
