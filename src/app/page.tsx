import LoginForm from "@/components/forms/LoginForm";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-6">
      <div className="grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="max-md:text-center">
          <h2 className="text-4xl font-extrabold lg:text-5xl lg:leading-[55px]">
            Welcome to MobiCare
          </h2>
        </div>

        <div className="w-full max-w-md space-y-6 max-md:mx-auto md:ml-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
