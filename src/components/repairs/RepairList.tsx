"use client";

import { useRepairs } from "@/services/queries";
import Repair from "./Repair";
import TableLoading from "./TableLoading";
import ErrorAlert from "../ui/Alert";

const RepairList = () => {
  const { data, isLoading, isError, error } = useRepairs();

  if (isError) {
    return <ErrorAlert error={error} />;
  }

  if (isLoading) {
    return <TableLoading />;
  }

  return (
    <div className="card card-bordered w-full max-w-screen-lg bg-base-100 shadow">
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Device</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{data?.map((task) => <Repair task={task} />)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default RepairList;
