import React, { useState, useCallback, useEffect } from "react";
import BasicCard from "@/components/Cards/BasicCard";
import SearchInput from "@/components/Inputs/SearchInput";
import DropdownSelect from "@/components/Selects/DropdownSelect";
import RankingBox from "@/components/Cards/RankingCard/RankingBox";
import { useDebouncedCallback } from "use-debounce";

type PropsType = {
  title: string;
  searchValue?: string;
  selectedValue?: string;
  rankingList: any[];
  isMaintained?: boolean;
  startPosition?: number;
  onChangeSearch?: (t: any) => void;
  onSelectDropdown?: (t: any) => void;
};

export default function ActivityCard({
  title,
  searchValue,
  selectedValue,
  rankingList,
  isMaintained,
  startPosition,
  onChangeSearch,
  onSelectDropdown,
}: PropsType) {
  const [searchInputValue, setSearchInputValue] = useState(searchValue);
  const debounced = useDebouncedCallback(
    useCallback((value) => {
      onChangeSearch && onChangeSearch(value);
    }, []),
    800,
    { maxWait: 2000 }
  );

  useEffect(() => {
    setSearchInputValue(searchValue);
  }, [searchValue]);

  return (
    <BasicCard>
      <div className="flex gap-[12px] items-center flex-wrap sm:flex-nowrap">
        <strong className="block text-[16px] font-medium leading-[24px]">
          {title}
        </strong>
        {!isMaintained && (
          <div className="w-full sm:w-auto ml-auto">
            <div className="flex gap-[4px] w-full justify-end">
              <SearchInput
                value={searchInputValue}
                placeholder={"Vui lòng nhập tên"}
                onChange={(e) => {
                  setSearchInputValue(e);
                  debounced(e);
                }}
              />
              <DropdownSelect
                selectedValue={selectedValue}
                options={[
                  {
                    label: "Tổng quãng đường",
                    value: "distance",
                    isSelected:
                      selectedValue === "distance" || !selectedValue
                        ? true
                        : false,
                  },
                  {
                    label: "Tổng quãng đường",
                    value: "-distance",
                    isSelected: selectedValue === "-distance",
                  },
                  {
                    label: "Biến động xếp hạng",
                    value: "rank",
                    isSelected: selectedValue === "rank",
                  },
                  {
                    label: "Biến động xếp hạng",
                    value: "-rank",
                    isSelected: selectedValue === "-rank",
                  },
                ]}
                onClick={onSelectDropdown}
              />
            </div>
          </div>
        )}
      </div>
      {rankingList.length ? (
        <div
          className={
            "scrollbar overflow-y-auto h-[238px] md:h-[623px] mt-[12px] -mx-[12px] pt-[21px] px-[12px]"
          }
        >
          {rankingList.slice(startPosition).map((item: any, index: number) => {
            const indexRanking = index + (startPosition || 0);
            return (
              <div key={index} className={`${index !== 0 && "mt-[13px]"}`}>
                <RankingBox
                  data={item}
                  index={item?.rank?.current}
                  isLastItem={indexRanking === rankingList.length - 1}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[calc(100%-24px-12px)] mt-[12px] py-[20px]">
          <p className="text-[#B3B3B3] text-[13px] leading-[24px]">
            {isMaintained
              ? "Tính năng đang được phát triển"
              : "Không có dữ liệu"}
          </p>
        </div>
      )}
    </BasicCard>
  );
}
