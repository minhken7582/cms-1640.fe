"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItems } from "@/constants";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Header({
  session,
}: Readonly<{
  session?: any;
}>) {
  const pathname = usePathname();
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={"/images/logo.svg"}
              className="h-8"
              width={32}
              height={32}
              alt="cms"
            />
          </a>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex items-center text-sm md:me-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() => setOpenUserMenu(!openUserMenu)}
              onBlur={() =>
                setTimeout(() => {
                  setOpenUserMenu(false);
                }, 1000)
              }
            >
              <span className="sr-only">Open user menu</span>
              <Image
                src={"/images/no-avatar.svg"}
                className="h-8 rounded-full"
                width={32}
                height={32}
                alt="cms"
              />

              <span className="hidden">{session?.user?.roleId || ""}</span>

              <span className="text-sm text-gray-900 ml-2 dark:text-white hidden lg:block">
                {session?.user?.name || session?.user?.email || ""}
              </span>
            </button>

            <div
              className={`${
                openUserMenu ? "block" : "hidden"
              } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
              style={{ position: "absolute", inset: "50px 15px auto auto" }}
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {session?.user?.name || "Hi"}
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {session?.user?.email || ""}
                </span>
              </div>

              <ul className="py-0" aria-labelledby="user-menu-button">
                <li>
                  <button
                    type="button"
                    className="block w-full text-start cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={() => handleSignOut()}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {MenuItems.filter((n) => n?.roleId === session?.user?.roleId).map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={item?.url}
                      className={
                        pathname === item?.url
                          ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                          : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                      aria-current="page"
                    >
                      {item?.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
