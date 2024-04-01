"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { callApi } from "@/utils/api";
import { numberWithCommas, roundNumberToFixed } from "@/utils/index";
import FlipCountdownTimer from "@/components/FlipCountdownTimer";
import InputDatepicker from "@/components/InputDatepicker";
import BasicCard from "@/components/Cards/BasicCard";
import SpotlightCard from "@/components/Cards/SpotlightCard";
import ActivityCard from "@/components/Cards/ActivityCard";
import RankingCard from "@/components/Cards/RankingCard";
import TargetProgress from "@/components/Cards/TargetProgress";
import JoinNow from "@/components/JoinNow";

export default function HomePage() {
  const allMembers = Number(process?.env?.NEXT_PUBLIC_ALL_MEMBERS ?? 0);
  const timeCountdown = dayjs(
    process.env.NEXT_PUBLIC_REMAINING_TIME_MILLISECONDS
  ).format();
  const defaultFilters = {
    start_date: dayjs("2024-01-31").startOf("day").format(),
    end_date: dayjs().endOf("day").format(),
    search: "",
    sort: "",
  };

  const [data, setData] = useState({
    rankingFirst: {},
    results: [],
    ranking: [],
    summary: {
      current: {
        steps: 0,
        distance: 0,
        athlete: {
          active: 0,
          total: 0,
        },
      },
      previous: {
        steps: 0,
        distance: 0,
        athlete: {
          active: 0,
          total: 0,
        },
      },
    },
  });

  const [filters, setFilters] = useState(defaultFilters);
  const [rankingListStartPosition, setRankingListStartPosition] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let params = {
        start_date: filters.start_date,
        end_date: filters.end_date,
        sort: filters.sort,
        search: filters.search,
      };

      if (!filters?.sort) {
        params.sort = "distance";
      }

      if (filters?.search || filters?.sort) {
        setRankingListStartPosition(0);
        params.search = filters.search ? filters.search.trim() : "";
      } else if (rankingListStartPosition !== 1) {
        setRankingListStartPosition(1);
      }

      const res = await callApi(
        `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_ACTIVITIES_SUMMARY__URL}` ??
          "",
        process.env.NEXT_PUBLIC_ACTIVITIES_SUMMARY__METHOD ?? "",
        params
      );

      if (filters?.search || filters?.sort) {
        setData({
          rankingFirst: data.rankingFirst,
          results: data?.results || [],
          ranking: res?.results || [],
          summary: res?.summary || {},
        });
      } else {
        setData({
          rankingFirst: res?.results?.length ? res?.results[0] : {},
          results: res?.results || [],
          ranking: res?.results || [],
          summary: res?.summary || {},
        });
      }

      setLoading(false);
    } catch (error) {}
  };

  const onChangeDatePicker = (value: any) => {
    setFilters({
      start_date: value?.startDate
        ? dayjs(value?.startDate).startOf("day").format()
        : dayjs("2024-01-31").startOf("day").format(),
      end_date: value?.endDate
        ? dayjs(value?.endDate).endOf("day").format()
        : dayjs().endOf("day").format(),
      search: "",
      sort: "",
    });
  };

  const handleSearchRankingList = (value: any) => {
    setFilters({
      ...filters,
      search: value,
    });
  };

  const handleSelectDropdown = (value: any) => {
    setFilters({
      ...filters,
      sort: value,
    });
  };

  useEffect(() => {
    fetchData();

    const fetchDataInterval = setInterval(() => {
      fetchData();
    }, 60 * 1000); // 60 giây

    return () => clearInterval(fetchDataInterval);
  }, [filters]);

  return (
    <div className="container mx-auto px-[12px]">
      <div className="lg:-mt-[52px]">
        <InputDatepicker
          value={{ startDate: filters.start_date, endDate: filters.end_date }}
          onChange={onChangeDatePicker}
        />
        <p className="mt-[8px] text-[#B3B3B3] text-[13px] leading-[24px]">
          Dữ liệu được tổng hợp tính từ ngày 31/01/2024
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[12px] xl:gap-[16px] 2xl:gap-[24px] mt-[20px]">
        <div className="col-span-full xl:hidden">
          <TargetProgress distance={data?.summary?.current?.distance || 0} />
        </div>
        <div className="col-span-full xl:col-span-3">
          <div className="grid grid-cols-6 gap-[12px] xl:gap-[16px] 2xl:gap-[24px]">
            <div className="col-span-full lg:col-span-2">
              <SpotlightCard memberInfo={data?.rankingFirst || {}} />
            </div>
            <div className="col-span-full sm:col-span-3 lg:col-span-2">
              <ActivityCard
                title="Bước chạy"
                currentValue={numberWithCommas(
                  roundNumberToFixed(data?.summary?.current?.steps || 0, 0)
                )}
                totalValue={numberWithCommas(40075000)}
                unit="bước"
                percentage={
                  ((data?.summary?.current?.steps || 0) / 40075000) * 100
                }
                iconSrc={"/images/shoesIcon.gif"}
                iconWidth={42}
                iconHeight={42}
                growthRatePercent={
                  (((data?.summary?.current?.steps || 0) -
                    (data?.summary?.previous?.steps || 0)) /
                    (data?.summary?.previous?.steps || 0)) *
                  100
                }
                growthRateComparison={
                  (data?.summary?.current?.steps || 0) >
                  (data?.summary?.previous?.steps || 0)
                    ? "Inc"
                    : (data?.summary?.current?.steps || 0) <
                      (data?.summary?.previous?.steps || 0)
                    ? "Dec"
                    : ""
                }
              />
            </div>
            <div className="col-span-full sm:col-span-3 lg:col-span-2">
              <ActivityCard
                title="Thành viên hoạt động"
                currentValue={numberWithCommas(
                  data?.summary?.current?.athlete?.active || 0
                )}
                totalValue={numberWithCommas(allMembers)}
                unit="người"
                percentage={
                  ((data?.summary?.current?.athlete?.active || 0) /
                    allMembers) *
                  100
                }
                iconSrc={"/images/activityIcon.gif"}
                iconWidth={68}
                iconHeight={68}
                growthRatePercent={
                  (((data?.summary?.current?.athlete?.active || 0) -
                    (data?.summary?.previous?.athlete?.active || 0)) /
                    (data?.summary?.previous?.athlete?.active || 0)) *
                  100
                }
                growthRateComparison={
                  (data?.summary?.current?.athlete?.active || 0) >
                  (data?.summary?.previous?.athlete?.active || 0)
                    ? "Inc"
                    : (data?.summary?.current?.athlete?.active || 0) <
                      (data?.summary?.previous?.athlete?.active || 0)
                    ? "Dec"
                    : ""
                }
              />
            </div>
            <div className="col-span-full md:col-span-3">
              <RankingCard
                title="Cá nhân xuất sắc nhất"
                rankingList={data?.ranking || []}
                startPosition={rankingListStartPosition}
                searchValue={filters.search || ""}
                onChangeSearch={handleSearchRankingList}
                selectedValue={filters.sort || ""}
                onSelectDropdown={handleSelectDropdown}
              />
            </div>
            <div className="col-span-full md:col-span-3">
              <RankingCard
                title="Nhóm xuất sắc nhất"
                rankingList={[]}
                isMaintained={true}
              />
            </div>
          </div>
        </div>
        <div className="col-span-full xl:col-span-1">
          <div className="grid grid-cols-12 gap-[12px] xl:gap-[16px] 2xl:gap-[24px] h-full">
            <div className="col-span-full md:col-span-7 xl:col-span-full hidden xl:block">
              <TargetProgress
                distance={data?.summary?.current?.distance || 0}
              />
            </div>
            <div className="col-span-full">
              <BasicCard>
                <div className="text-center">
                  <strong className="block text-[#7029C3] text-[12px] font-normal leading-[16px]">
                    THỜI GIAN CÒN LẠI
                  </strong>
                  <div className="mt-[12px]">
                    <FlipCountdownTimer time={timeCountdown} />
                  </div>
                  <div className="mt-[20px]">
                    <JoinNow members={data?.results || []} />
                  </div>
                </div>
              </BasicCard>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed left-0 top-0 z-50 block h-full w-full bg-white opacity-75">
          <span className="r-4 relative top-1/2 mx-auto my-0 block h-0 w-0 text-green-500 opacity-75">
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-12 h-12 w-12 animate-spin fill-[#EA2F70] text-gray-200 dark:text-gray-600 -ml-[24px]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </span>
        </div>
      )}
    </div>
  );
}
