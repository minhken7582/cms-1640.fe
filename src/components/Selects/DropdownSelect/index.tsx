import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PropsType {
  options: any;
  selectedValue?: string;
  onClick?: (value: any) => void;
}

export default function DropdownSelect({
  options,
  selectedValue,
  onClick,
}: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(
    options.find((n: any) => n.isSelected)?.value || ""
  );

  const handleClick = (event: any) => {
    setIsSelected(event.target.value);
    setIsOpen(false);
    onClick && onClick(event.target.value);
  };

  useEffect(() => {
    setIsSelected(selectedValue || "distance");
    setIsOpen(false);
  }, [selectedValue]);

  return (
    <div className="relative z-10">
      <button
        type="button"
        className={`p-[4px] rounded-[4px] transition ${
          isOpen ? "bg-[#702AC3]/20" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/images/arrowDownIcon.svg" alt="" width={24} height={24} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-[200px] p-[8px] mt-[2px] rounded-[8px] bg-white shadow-[0_3px_8px_0_rgba(40,41,61,0.16)]">
          {options &&
            options.map((option: any) => (
              <button
                type="button"
                className={`flex w-full py-[7px] px-[4px] rounded-[4px] bg-transparent text-[12px] font-normal leading-[16px] ${
                  option?.value == isSelected
                    ? "bg-[#702AC3]/10 text-[#702AC3]"
                    : "text-[#404040]"
                }`}
                value={option.value}
                onClick={handleClick}
                key={option.value}
              >
                <div className="inline-flex gap-[12px] w-full pointer-events-none">
                  <Image
                    src="/images/arrowUpSIcon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={option.value?.includes("-") ? "" : "rotate-180"}
                  />

                  <span className="block text-nowrap">{option.label}</span>

                  {option?.value == isSelected && (
                    <Image
                      src="/images/checkmark.svg"
                      alt=""
                      width={8}
                      height={9}
                      className="ml-auto me-2"
                    />
                  )}
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
