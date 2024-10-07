import RepairDetails from "@/components/repairs/details/RepairDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repair Details",
};

const Page = () => {
  return (
    <div className="flex w-full justify-center">
      <RepairDetails />
    </div>
  );
};

export default Page;
