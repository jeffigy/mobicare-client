"use client";

import useFormattedDate from "@/hooks/useFormattedDate";
import { RepairType } from "@/types/Repair";
import { useRouter } from "next/navigation";
import React from "react";

type RepairProps = {
  repair: RepairType;
};

const Repair: React.FC<RepairProps> = ({ repair }) => {
  const router = useRouter();
  const formattedDate = useFormattedDate(repair.createdAt);
  return (
    <tr
      className="hover:cursor-pointer hover:bg-base-200"
      onClick={() => router.push(`/dashboard/repairs/${repair.id}`)}
    >
      <td>{repair.customer.name}</td>
      <td>{repair.device.model}</td>
      <td>{repair.status}</td>
      <td>{formattedDate}</td>
    </tr>
  );
};
export default Repair;
