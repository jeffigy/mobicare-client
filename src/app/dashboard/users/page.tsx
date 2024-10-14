"use client";

import Fab from "@/components/ui/Fab";
import UsersList from "@/features/users/UsersList";
import { UserPlus2 } from "lucide-react";

const Page = () => {
  return (
    <div className="flex w-full justify-center">
      <Fab icon={<UserPlus2 />} href="/dashboard/users/new" />
      <UsersList />
    </div>
  );
};

export default Page;
