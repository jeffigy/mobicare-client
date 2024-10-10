import FetchUser from "@/features/auth/FetchUser";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
};

const Page = () => {
  return (
    <div>
      <FetchUser />
    </div>
  );
};

export default Page;
