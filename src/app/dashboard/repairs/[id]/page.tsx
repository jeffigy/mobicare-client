"use client";

import RepairDetails from "@/components/repairs/details/RepairDetails";
import { useRepairs } from "@/services/queries/repairQueries";
import { useParams } from "next/navigation";
import Alert from "@/components/ui/Alert";
import DetailsLoading from "@/components/repairs/details/DetailsLoading";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRepairs();
  const repair = data?.find((repair) => repair.id === id);

  if (isLoading) return <DetailsLoading />;
  if (isError) return <Alert message={error.message} type="error" />;
  if (!repair) return <Alert message={"Repair not found"} type="error" />;

  return (
    <div className="flex w-full justify-center">
      <RepairDetails repair={repair} />
    </div>
  );
};

export default Page;
