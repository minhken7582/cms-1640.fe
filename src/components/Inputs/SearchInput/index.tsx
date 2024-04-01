import React, { ChangeEvent } from "react";
import Image from "next/image";

interface PropsType {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({
  type,
  value,
  placeholder,
  onChange,
}: PropsType) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className="relative">
      <div
        className={
          "absolute top-1/2 left-[16px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        }
      >
        <Image src={"/images/searchIcon.svg"} alt={""} width={24} height={24} />
      </div>
      <input
        type={type || "text"}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${
          value ? "w-full border-[#702AC3]" : "w-0 border-transparent"
        } h-[32px] pr-[8px] pl-[32px] border-b text-[#404040] text-[12px] font-normal leading-[20px] placeholder:text-[#B3B3B3] transition duration-300 focus:w-full focus:border-[#702AC3] focus:outline-none`}
      />
    </div>
  );
}
