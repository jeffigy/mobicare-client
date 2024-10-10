"use client";

import EditRepairForm from "@/features/repairs/edit/EditRepairForm";
import Alert from "@/components/ui/Alert";
import { useRepairs } from "@/services/queries/repairQueries";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useRepairs();
  const repair = data?.find((repair) => repair.id === id);
  if (isLoading) {
    return (
      <div className="skeleton mx-auto h-[1173px] w-full max-w-screen-sm"></div>
    );
  }
  if (isError) return <Alert message={error.message} type="error" />;
  if (!repair) return <Alert message={"Repair not found"} type="error" />;

  return <EditRepairForm repair={repair} />;
};

export default Page;
