"use client";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [persist, setPersist] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <input
        value={password}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        placeholder="Email"
        className="input input-primary w-full border-none bg-gray-100"
      />

      <input
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        type="password"
        placeholder="Password"
        className="input input-primary w-full border-none bg-gray-100"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            onChange={() => setPersist(!persist)}
            checked={persist}
            disabled={!email || !password}
          />
          <label htmlFor="" className="ml-3 block text-sm">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link href={"/forgot-password"} className="btn btn-link no-underline">
            Forgot your password?
          </Link>
        </div>
      </div>

      <button
        className={`&& "btn-disabled" } btn btn-primary !mt-10 w-full`}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
