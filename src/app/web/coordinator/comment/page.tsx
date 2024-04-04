"use client";

import React, { useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainLayout from "@/components/MainLayout";

const schema = Yup.object().shape({
  studentId: Yup.string().required(),
  contributionId: Yup.string().required(),
  comment: Yup.string().required(),
});

export default function Comment() {
  const formik = useFormik({
    initialValues: {
      studentId: "1",
      contributionId: "",
      comment: "",
    },
    validationSchema: schema,
    onSubmit: async ({ studentId, contributionId, comment }) => {
      console.log("submit", studentId, contributionId, comment);
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
                Create comment
              </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Student
                  </label>
                  <select
                    defaultValue={"1"}
                    value={values?.studentId}
                    onChange={handleChange}
                    id="studentId"
                    name="studentId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="1" key="1" selected>
                      Student 1
                    </option>
                    <option value="2" key="2">
                      Student 2
                    </option>
                    <option value="3" key="3">
                      Student 3
                    </option>
                    <option value="4" key="4">
                      Student 4
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contribution
                  </label>
                  <select
                    defaultValue={"1"}
                    value={values?.studentId}
                    onChange={handleChange}
                    id="contributionId"
                    name="contributionId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="1" key="1" selected>
                      Contribution 1
                    </option>
                    <option value="2" key="2">
                      Contribution 2
                    </option>
                    <option value="3" key="3">
                      Contribution 3
                    </option>
                    <option value="4" key="4">
                      Contribution 4
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Comment
                  </label>

                  <input
                    type="text"
                    name="comment"
                    id="comment"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Content"
                    value={values?.comment}
                    onChange={handleChange}
                    required
                  />

                  {errors?.comment && touched?.comment && (
                    <span className="text-red-500 text-sm">
                      {errors?.comment}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="block w-full my-2 text-sm px-5 h-[42px] text-center text-white bg-[#ef9d00] rounded-[8px]"
                >
                  Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
