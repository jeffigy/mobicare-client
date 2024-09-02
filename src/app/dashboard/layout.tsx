import Navbar from "@/components/Navbar";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};
export default layout;
