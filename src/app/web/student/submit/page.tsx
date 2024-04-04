"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainLayout from "@/components/MainLayout";
import InputDatepicker from "@/components/InputDatepicker";
import { useDropzone } from "react-dropzone";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  firstDate: Yup.string().required(),
  finalDate: Yup.string().required(),
});

export default function Submit() {
  const formik = useFormik({
    initialValues: {
      name: "",
      firstDate: "",
      finalDate: "",
    },
    validationSchema: schema,
    onSubmit: async ({ name, firstDate, finalDate }) => {
      console.log("submit", name, firstDate, finalDate);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log("acceptedFiles", acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".png", ".jpg"],
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  return (
    <MainLayout>
      <div className="mb-5">
        <a
          href="/web/student/event"
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

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Submission Status
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Submission status"
                    value={values?.name}
                    onChange={handleChange}
                    required
                  />

                  {errors?.name && touched?.name && (
                    <span className="text-red-500 text-sm">{errors?.name}</span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Submission Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Submission name"
                    value={values?.name}
                    onChange={handleChange}
                    required
                  />

                  {errors?.name && touched?.name && (
                    <span className="text-red-500 text-sm">{errors?.name}</span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Final Closure
                  </label>

                  <InputDatepicker value={new Date()} onChange={handleChange} />

                  {errors?.firstDate && touched?.firstDate && (
                    <span className="text-red-500 text-sm">
                      {errors?.firstDate}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Time Remaining
                  </label>

                  <InputDatepicker value={new Date()} onChange={handleChange} />

                  {errors?.finalDate && touched?.finalDate && (
                    <span className="text-red-500 text-sm">
                      {errors?.finalDate}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    File Submission
                  </label>

                  <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p className="text-sm text-center">
                        Drop the files here ...
                      </p>
                    ) : (
                      <p className="text-sm text-center">
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>

                  {errors?.finalDate && touched?.finalDate && (
                    <span className="text-red-500 text-sm">
                      {errors?.finalDate}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="block w-full my-2 text-sm px-5 h-[42px] text-center text-white bg-[#ef9d00] rounded-[8px]"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
