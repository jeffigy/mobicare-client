import RepairList from "@/components/repairs/RepairList";
import Fab from "@/components/ui/Fab";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Repairs",
};

const Page = () => {
  return (
    <div className="flex w-full justify-center">
      <Fab
        href="/dashboard/repairs/new"
        icon={<PlusIcon className="h-6 w-6" />}
      />
      <RepairList />
    </div>
  );
};

export default Page;
