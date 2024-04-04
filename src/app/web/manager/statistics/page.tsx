"use client";

import React, { useState, FormEvent } from "react";
import MainLayout from "@/components/MainLayout";
import InputDatepicker from "@/components/InputDatepicker";
import dayjs from "dayjs";

export default function Statistics() {
  return (
    <MainLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mb-5">
          <a
            href="/web/manager/event"
            className="flex items-center mb-1 text-2xl text-gray-400 dark:text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3517_16523)">
                <path
                  d="M4.74609 11.9961C4.74609 12.1914 4.83203 12.3711 4.98828 12.5195L10.1758 17.6992C10.332 17.8476 10.4961 17.918 10.6836 17.918C11.0664 17.918 11.3711 17.6367 11.3711 17.2461C11.3711 17.0586 11.3008 16.8711 11.1758 16.7539L9.42578 14.9727L6.33203 12.1523L6.16797 12.5352L8.68359 12.6914H18.5664C18.9727 12.6914 19.2539 12.4023 19.2539 11.9961C19.2539 11.5898 18.9727 11.3008 18.5664 11.3008H8.68359L6.16797 11.457L6.33203 11.8477L9.42578 9.01953L11.1758 7.23828C11.3008 7.11328 11.3711 6.93359 11.3711 6.74609C11.3711 6.35547 11.0664 6.07422 10.6836 6.07422C10.4961 6.07422 10.332 6.13672 10.1602 6.30859L4.98828 11.4727C4.83203 11.6211 4.74609 11.8008 4.74609 11.9961Z"
                  fill="#9ca3af"
                />
              </g>
              <defs>
                <clipPath id="clip0_3517_16523">
                  <rect
                    width="14.5078"
                    height="11.8516"
                    fill="white"
                    transform="translate(4.74609 6.07422)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="text-sm ml-1 text-gray-400 dark:text-white">
              List of event
            </span>
          </a>

          <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
            Event A - Year
          </h1>
        </div>

        <div className="relative overflow-x-auto border shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Contribution
                </th>
                <th scope="col" className="px-6 py-3">
                  Student
                </th>
                <th scope="col" className="px-6 py-3">
                  Faculty
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3].map((item, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Nguyen Van A</td>
                  <td className="px-6 py-4">Software Engineer</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="flex items-center justify-end -space-x-px h-8 text-sm m-5">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </MainLayout>
  );
}
