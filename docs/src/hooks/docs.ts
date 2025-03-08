import { DocsContext } from "@/context/docs";
import { useContext } from "react";

export const useDocState = () => {
  const context = useContext(DocsContext);
  if (context === undefined) {
    throw new Error(
      "DocsProvider is missing. Ensure your root layout or App component is wrapped with <DocsProvider>."
    );
  }
  return context;
};
