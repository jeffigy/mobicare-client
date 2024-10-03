"use client";

import { useRepairs } from "@/services/queries";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";

const RepairList = () => {
  const router = useRouter();
  const { data, isLoading, isError, error } = useRepairs();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Device</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((task) => (
          <tr
            className="hover:bg-base-200"
            key={task.id}
            onClick={() => router.push(`/dashboard/tasks/${task.id}`)}
          >
            <td>{task.customer.name}</td>
            <td>{task.device.model}</td>
            <td>{task.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RepairList;
