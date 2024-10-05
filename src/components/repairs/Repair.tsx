"use client";

import useFormattedDate from "@/hooks/useFormattedDate";
import { RepairType } from "@/types/Repair";
import { useRouter } from "next/navigation";
import React from "react";

type RepairProps = {
  task: RepairType;
};

const Repair: React.FC<RepairProps> = ({ task }) => {
  const router = useRouter();
  const formattedDate = useFormattedDate(task.createdAt);
  return (
    <tr
      className="hover:cursor-pointer hover:bg-base-200"
      key={task.id}
      onClick={() => router.push(`/dashboard/tasks/${task.id}`)}
    >
      <td>{task.customer.name}</td>
      <td>{task.device.model}</td>
      <td>{task.status}</td>
      <td>{formattedDate}</td>
    </tr>
  );
};
export default Repair;
