import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="bg-base-10 h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-400 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href={"/dashboard/home"} className="btn btn-primary">
            Go back home
          </Link>
          <button className="btn btn-ghost">
            Contact support <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
