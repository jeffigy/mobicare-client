import CreateRepairForm from "@/features/repairs/create/CreateRepairForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "New Repair",
};

const Page = () => {
  return (
    <>
      <CreateRepairForm />
    </>
  );
};

export default Page;
