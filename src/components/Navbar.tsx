"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/dashboard/home", name: "Home" },
    { href: "/dashboard/tasks", name: "Tasks" },
    { href: "/dashboard/users", name: "Users" },
  ];
  return (
    <div className="flex justify-center">
      <div className="flex items-center h-14 w-full max-w-screen-lg px-5 justify-between">
        <p className="text-2xl">mobicare</p>
        <div
          className="space-x-5
        "
        >
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
    </div>
  );
};

export default Navbar;
