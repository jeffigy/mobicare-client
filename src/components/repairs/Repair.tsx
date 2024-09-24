import { RepairType } from "@/types/Repair";
import React from "react";

type RepairProps = {
  repair: RepairType;
};

const Repair: React.FC<RepairProps> = ({ repair }) => {
  return (
    <div className="w-full max-w-md space-y-3 rounded-md border p-5">
      <p>{repair.customer.name}</p>
      <p>{repair.customer.email}</p>
      <p>{repair.device.brand}</p>
    </div>
  );
};
export default Repair;
