import Toast from "./Toast";

interface ToasterProps {
  className?: string;
}

const Toaster: React.FC<ToasterProps> = ({ className }) => {
  return (
    <>
      <Toast className={className} />
    </>
  );
};

export default Toaster;
