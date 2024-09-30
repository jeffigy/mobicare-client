"use client";
import PersistLogin from "@/components/auth/PersistLogin";
import Navbar from "@/components/Navbar";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <PersistLogin>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        {children}
      </div>
    </PersistLogin>
  );
};
export default layout;
