"use client";

import React, { useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainLayout from "@/components/MainLayout";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  firstDate: Yup.string().required(),
  finalDate: Yup.string().required(),
});

export default function CreateEvent() {
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

  return (
    <MainLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create event
              </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Event
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Event name"
                    value={values?.name}
                    onChange={handleChange}
                    required
                  />

                  {errors?.name && touched?.name && (
                    <span className="text-red-500 text-sm">{errors?.name}</span>
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
