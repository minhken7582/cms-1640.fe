"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

type PropsType = {
  value?: any;
  onChange?: (t: any) => void;
};

export default function InputDatepicker({ value, onChange }: PropsType) {
  const [date, setDate] = useState(value);

  const handleDateFilterChange = (newValue: any) => {
    setDate(newValue);
    onChange && onChange(newValue);
  };

  return (
    <DatePicker
      showIcon
      selected={date}
      onChange={handleDateFilterChange}
      placeholderText="Select date"
      className="border rounded-lg text-sm w-full"
    />
  );
}
