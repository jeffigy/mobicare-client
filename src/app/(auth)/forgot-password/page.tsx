import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Forgot password",
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-6">
      <div className="mx-auto w-full max-w-md space-y-6">
        <h3 className="mb-8 text-3xl font-extrabold max-md:text-center">
          Forgot password
        </h3>

        <ForgotPasswordForm />
      </div>
    </div>
  );
};
export default Page;
