import { useFetchUser } from "@/services/queries";
import { useStore } from "@/store/store";
import { jwtDecode } from "jwt-decode";
import { useEffect, useMemo } from "react";

type DecodedToken = {
  UserInfo: {
    email: string;
    roles: string[];
  };
};

const useAuth = () => {
  const { token, setUser, user } = useStore();

  // Decode token only once using useMemo
  const email = useMemo(() => {
    if (!token) return null;

    const { UserInfo } = jwtDecode<DecodedToken>(token);
    return UserInfo.email;
  }, [token]);

  // Fetch user data only if the email is available
  const { data, isSuccess, isError, isLoading, error } = useFetchUser(
    email ?? "",
  );

  // Sync fetched data with Zustand store
  useEffect(() => {
    if (isSuccess && data) {
      setUser(data);
    }
  }, [isSuccess, data, setUser]);

  // Reset user in Zustand store if token is null
  useEffect(() => {
    if (!token) {
      setUser(null);
    }
  }, [token, setUser]);

  // Determine the status based on loading and error state
  const status = isLoading ? "loading..." : isError ? error.message : null;

  return { status, user };
};

export default useAuth;
