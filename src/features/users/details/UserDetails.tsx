"use client";

import { useParams } from "next/navigation";
import React from "react";
import { useFetchUsers } from "../userQueries";
import Alert from "@/components/ui/Alert";
import { PencilIcon, Trash2 } from "lucide-react";
import UserDetailsLoading from "./UserDetailsLoading";
import Link from "next/link";

const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetchUsers();
  const user = data?.find((user) => user.id === id);

  if (isLoading) return <UserDetailsLoading />;
  if (isError) return <Alert type="error" message={error.message} />;
  if (!user) return <Alert type="error" message="User not found" />;

  return (
    <div className="card card-bordered mx-auto flex w-full max-w-screen-sm flex-col border-gray-700 bg-base-100">
      <div className="card-body space-y-2">
        <div className="avatar mx-auto">
          <div className="w-40 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p className="mx-auto text-xl font-bold">{user.name}</p>
        <div className="card-actions justify-center">
          <Link
            href={`/dashboard/users/${user.id}/edit`}
            className="btn btn-primary max-w-sm grow"
          >
            <PencilIcon /> Edit
          </Link>
          <button className="btn btn-neutral border-none">
            {" "}
            <Trash2 />
          </button>
        </div>
        <UserDetail showDivider={true} label="Email" value={user.email} />
        <UserDetail
          showDivider={true}
          label="Active Status"
          value={String(user.active ? "Enable" : "Disabled")}
        />
        <UserDetail
          showDivider={true}
          label="Account Verification"
          value={String(user.verified ? "Verified" : "Not verified")}
        />
        <UserDetail
          showDivider={false}
          label="Role"
          value={String(
            user.roles.map((role) => {
              return ` ${role.charAt(0).toUpperCase()}${role.slice(1)}`;
            }),
          )}
        />
      </div>
    </div>
  );
};

const UserDetail = ({
  label,
  value,
  showDivider,
}: {
  label: string;
  value: string;
  showDivider: boolean;
}) => {
  return (
    <div>
      <p className="font-bold text-gray-500">{label}</p>
      <p>{value}</p>
      {showDivider && <div className="divider"></div>}
    </div>
  );
};

export default UserDetails;
