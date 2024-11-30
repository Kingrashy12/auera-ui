import { useContext } from "react";
import { ModalContext } from "../context/modal";

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error(
      "ModalProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
