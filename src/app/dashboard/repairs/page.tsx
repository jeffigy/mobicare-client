import RepairList from "@/components/repairs/RepairList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Repairs",
};

const Page = () => {
  return (
    <div className="flex w-full justify-center">
      <RepairList />
    </div>
  );
};

export default Page;
