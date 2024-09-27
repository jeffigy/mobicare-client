"use client";
import { useLogoutMutation } from "@/services/mutations";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { isPending, mutate: logout } = useLogoutMutation();
  const navLinks = [
    { href: "/dashboard/home", name: "Home" },
    { href: "/dashboard/tasks", name: "Tasks" },
    { href: "/dashboard/users", name: "Users" },
  ];
  return (
    <div className="flex justify-center">
      <div className="flex h-14 w-full max-w-screen-lg items-center justify-between px-5">
        <p className="text-2xl">mobicare</p>
        <div className="space-x-5">
          {navLinks.map((navlink) => (
            <Link
              key={navlink.name}
              href={navlink.href}
              className={`btn btn-sm ${
                pathname === navlink.href ? "btn-primary" : null
              }`}
            >
              {navlink.name}
            </Link>
          ))}
        </div>
      </div>
      <button onClick={() => logout()}>
        {isPending ? "logging out..." : "logout"}
      </button>
    </div>
  );
};

export default Navbar;
