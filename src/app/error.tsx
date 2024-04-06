"use client";

import Image from "next/image";

export default function Error500() {
  return (
    <div className="bg-[#ffffff] min-h-screen lg:px-24 lg:py-24 md:py-10 md:px-44 px-4 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <h1 className="my-2 text-gray-800 font-bold text-2xl">
          Ối. Lỗi server.s
        </h1>
        <p className="my-2 text-gray-800">
          Đừng lo, đây không phải lỗi của bạn. Chúng tôi sẽ khắc phục sớm nhất
          có thể.
        </p>
        <div className="my-2 mt-10">
          <a
            href="/"
            className="block sm:w-full lg:w-[200px] my-2 md py-2.5 px-8 text-center text-white bg-[#ef9d00] rounded-[8px]"
          >
            Trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
