"use client";

import useAuth from "@/hooks/useAuth";
import { useLogoutMutation } from "@/services/mutations";
import {
  ChevronDown,
  ClipboardCheck,
  House,
  LogOut,
  Menu,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const navLinks = [
  { icon: <House />, href: "/dashboard/home", name: "Home" },
  {
    icon: <ClipboardCheck />,
    href: "/dashboard/repairs",
    name: "Repairs",
  },
  { icon: <Users />, href: "/dashboard/users", name: "Users" },
  {
    icon: <User />,
    href: "/dashboard/profile",
    name: "Profile",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-center shadow-md">
      <div className="flex h-16 w-full max-w-screen-xl items-center justify-between px-5">
        <Link href={navLinks[0].href} className="text-2xl">
          MobiCare
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
};

const DesktopNav = () => {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const { isPending, mutate: logout } = useLogoutMutation();

  return (
    <div className="hidden items-center space-x-5 md:flex">
      {navLinks.slice(0, 3).map((navlink) => (
        <Link
          key={navlink.name}
          href={navlink.href}
          className={`flex justify-center p-2 ${pathname === navlink.href ? "border-b-4 border-primary text-primary" : null}`}
        >
          {navlink.icon}{" "}
          <p className="hidden lg:ml-2 lg:block">{navlink.name}</p>
        </Link>
      ))}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn rounded-full">
          {isLoading ? (
            <div className="skeleton h-4 w-32"></div>
          ) : (
            <>{user?.email}</>
          )}
          <ChevronDown />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <Link href={navLinks[3].href}>
              {navLinks[3].icon} {navLinks[3].name}
            </Link>
          </li>
          <li>
            <button onClick={() => logout()}>
              <LogOut />
              {isPending ? "logging out..." : "logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const { isPending, mutate: logout } = useLogoutMutation();
  const router = useRouter();

  return (
    <div className="flex justify-end md:hidden">
      <div className="drawer drawer-end z-10">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-outline btn-primary drawer-button"
          >
            <Menu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-80 bg-base-200 px-5 text-base-content">
            <div className="h-16">
              <li className="flex grow flex-col justify-end">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="btn btn-active"
                  onClick={() => router.push(navLinks[3].href)}
                >
                  {isLoading ? (
                    <div className="skeleton h-4 w-full"></div>
                  ) : (
                    user?.email
                  )}
                </label>
              </li>
            </div>
            {navLinks.slice(0, 3).map((navlink) => (
              <li key={navlink.name}>
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className={`mb-3 rounded-none p-2 text-2xl ${pathname === navlink.href ? "border-b-4 border-primary text-primary" : null}`}
                  key={navlink.name}
                  onClick={() => router.push(navlink.href)}
                >
                  {navlink.icon}
                  {navlink.name}
                </label>
              </li>
            ))}
            <li className="flex grow flex-col justify-end">
              <button
                className="btn-xl btn btn-active"
                onClick={() => logout()}
              >
                <LogOut />
                {isPending ? "logging out..." : "logout"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
