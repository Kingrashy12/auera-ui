import { TableProviderContext } from "@/context/table";
import { useMode } from "@/hook/use";
import { ModeType } from "@/types/auera-system";

interface Provider {
  mode?: ModeType;
  children: React.ReactNode;
}

const TableProvider: React.FC<Provider> = ({ mode, children }) => {
  const { currentMode } = useMode(mode);

  return (
    <TableProviderContext.Provider value={{ mode: currentMode }}>
      {children}
    </TableProviderContext.Provider>
  );
};

export default TableProvider;

TableProvider.displayName = "AueraUI.TableProvider";
