"use client";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import dayjs from "dayjs";

const defaultDatepickerClassNames = {
  container: "relative",
  input:
    "relative transition-all duration-300 w-full tracking-wide focus:ring disabled:opacity-40 disabled:cursor-not-allowed",
  toggle:
    "absolute h-full px-3 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed",
};

type PropsType = {
  value: {
    startDate: any;
    endDate: any;
  };
  onChange: (t: any) => void;
};

export default function InputDatepicker({ value, onChange }: PropsType) {
  const [dateRange, setDateRangeDate] = useState(value);

  const handleDateFilterChange = (newValue: any) => {
    setDateRangeDate(newValue);
    onChange(newValue);
  };

  return (
    <Datepicker
      primaryColor={"rose"}
      useRange={true}
      value={dateRange}
      onChange={handleDateFilterChange}
      placeholder={"dd/mm/yyyy - dd/mm/yyyy"}
      separator={"-"}
      showShortcuts={true}
      showFooter={true}
      displayFormat={"DD/MM/YYYY"}
      i18n={"vi"}
      startWeekOn={"mon"}
      configs={{
        shortcuts: {
          today: "Hôm nay",
          yesterday: "Hôm qua",
          past: (period) => `${period} ngày trước`,
          currentMonth: "Tháng này",
          pastMonth: "Tháng trước",
          last3Months: {
            text: "3 tháng trước",
            period: {
              start: dayjs().subtract(3, "months").format("YYYY-MM-DD"),
              end: dayjs().format("YYYY-MM-DD"),
            },
          },
          allDays: {
            text: "Tất cả",
            period: {
              start: "2024-01-31",
              end: dayjs().format("YYYY-MM-DD"),
            },
          },
        },
        footer: {
          cancel: "Hủy",
          apply: "Đồng ý",
        },
      }}
      containerClassName={`${defaultDatepickerClassNames.container} z-[1000] w-full md:w-[300px] rounded-[6px] bg-[#EA2F70] bg-opacity-5 custom-datepicker`}
      inputClassName={`${defaultDatepickerClassNames.input} py-[10px] pl-[56px] pr-[12px] rounded-[6px] bg-transparent text-[#EA2F70] text-[16px] font-normal leading-[24px] placeholder-opacity-50 placeholder-[#EA2F70] focus:outline-none`}
      toggleClassName={`${defaultDatepickerClassNames.toggle} left-0 rounded-[6px] bg-[#EA2F70] text-white`}
    />
  );
}
