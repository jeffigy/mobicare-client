import Prefetch from "@/components/auth/Prefetch";
import Navbar from "@/components/ui/Navbar";
import dynamic from "next/dynamic";
import React from "react";

const PersistLogin = dynamic(() => import("@/components/auth/PersistLogin"), {
  ssr: false,
});

type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <PersistLogin>
      <Prefetch>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex p-10"> {children}</div>
        </div>
      </Prefetch>
    </PersistLogin>
  );
};
export default layout;
