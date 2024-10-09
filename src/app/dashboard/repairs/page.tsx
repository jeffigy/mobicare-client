"use client";

import RepairList from "@/components/repairs/RepairList";
import Fab from "@/components/ui/Fab";
import { PlusIcon } from "lucide-react";
import React from "react";

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
