"use client";

import PersistLogin from "@/components/auth/PersistLogin";
import Prefetch from "@/components/auth/Prefetch";
import Navbar from "@/components/Navbar";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <PersistLogin>
      <Prefetch>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
        </div>
      </Prefetch>
    </PersistLogin>
  );
};
export default layout;
