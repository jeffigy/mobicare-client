import { Metadata } from "next";

type layoutProps = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Edit repair",
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return <>{children}</>;
};
export default layout;
