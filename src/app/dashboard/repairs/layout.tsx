import { Metadata } from "next";

type layoutProps = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Repairs",
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return <>{children}</>;
};
export default layout;
