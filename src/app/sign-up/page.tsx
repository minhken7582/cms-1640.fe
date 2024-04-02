"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  roleId: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string()
    .required()
    .min(6)
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      roleId: "US",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: async ({ roleId, email, password, confirmPassword }) => {
      console.log("submit", roleId, email, password, confirmPassword);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 h-screen">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image src={"/images/logo.svg"} alt="logo" width={80} height={32} />
          </a>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up to your account
              </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Role
                  </label>
                  <select
                    defaultValue={"US"}
                    value={values?.roleId}
                    onChange={handleChange}
                    id="roleId"
                    name="roleId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="US" key="US" selected>
                      United States
                    </option>
                    <option value="CA" key="CA">
                      Canada
                    </option>
                    <option value="FR" key="FR">
                      France
                    </option>
                    <option value="DE" key="DE">
                      Germany
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    value={values?.email}
                    onChange={handleChange}
                    required
                  />

                  {errors?.email && touched?.email && (
                    <span className="text-red-500 text-sm">
                      {errors?.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={values?.password}
                    onChange={handleChange}
                    required
                  />

                  {errors?.password && touched?.password && (
                    <span className="text-red-500 text-sm">
                      {errors?.password}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={values?.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  {errors?.confirmPassword && touched?.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors?.confirmPassword}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="block w-full my-2 text-sm px-5 h-[42px] text-center text-white bg-[#ef9d00] rounded-[8px]"
                >
                  Sign up
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/sign-in"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
