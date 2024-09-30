"use client";

import { useRefreshMutation } from "@/services/mutations";
import { useStore } from "@/store/store";
import { AxiosApiResponse } from "@/types/ServerResponse";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const PersistLogin = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { token, persist } = useStore();
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const {
    isPending,
    isSuccess,
    isError,
    error,
    isIdle,
    mutate: refresh,
  } = useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true) {
      const verifyRefreshToken = () => {
        console.log("verifying refresh token");
        try {
          refresh();
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  if (!persist) {
    console.log(persist);
    console.log("No persistence, proceeding.");
    return <>{children}</>;
  }

  if (isPending) {
    console.log("Loading...");
    return <p>loading...</p>;
  }

  if (isError) {
    console.error("Error refreshing token:", error);
    return (
      <p className="errmsg">
        {`${(error as AxiosApiResponse)?.response?.data.message} - `}
        <button onClick={() => router.replace("/")}>Please login again</button>.
      </p>
    );
  }

  if (isSuccess && trueSuccess) {
    console.log("success");
    return <>{children}</>;
  }

  if (token && isIdle) {
    console.log("token and uninit");
    return <>{children}</>;
  }
};

export default PersistLogin;
