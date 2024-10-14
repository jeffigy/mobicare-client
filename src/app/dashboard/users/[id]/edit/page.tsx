"use client";

import Alert from "@/components/ui/Alert";
import EditUserForm from "@/features/users/edit/EditUserForm";
import { useFetchUsers } from "@/features/users/userQueries";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetchUsers();
  const user = data?.find((user) => user.id === id);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <Alert message={error.message} type="error" />;
  if (!user) return <Alert message={"User not found"} type="error" />;
  return <EditUserForm user={user} />;
};

export default page;
