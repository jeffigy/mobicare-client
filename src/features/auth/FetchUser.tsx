"use client";

import useAuth from "@/hooks/useAuth";

const FetchUser = () => {
  const { user, isError, error, isLoading } = useAuth();

  return (
    <div>
      <h1>status {status}</h1>
      <h1>welcome {user?.email}</h1>
    </div>
  );
};

export default FetchUser;
