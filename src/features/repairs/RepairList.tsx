"use client";

import { useRepairs } from "@/services/queries/repairQueries";
import Repair from "./Repair";
import TableLoading from "./TableLoading";
import Alert from "../../components/ui/Alert";

const RepairList = () => {
  const { data, isLoading, isError, error } = useRepairs();

  if (isError) {
    return <Alert type="error" message={error.message} />;
  }

  if (isLoading) {
    return <TableLoading />;
  }

  return (
    <div className="card card-bordered w-full max-w-screen-lg border-gray-700 bg-base-100 shadow">
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th className="hidden lg:table-cell">Customer Name</th>
              <th>Device</th>
              <th>Status</th>
              <th className="hidden md:table-cell">Date created</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((repair) => <Repair key={repair.id} repair={repair} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepairList;
