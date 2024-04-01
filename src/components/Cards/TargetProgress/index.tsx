"use client";

import { numberWithCommas, roundNumberToFixed } from "@/utils/index";
import BasicCard from "@/components/Cards/BasicCard";
import CircularProgress from "@/components/CircularProgress";

const totalDistance = 40075;

export default function TargetProgress({ distance }: { distance: number }) {
  return (
    <BasicCard>
      <div className="text-center">
        <strong className="block text-[16px] font-medium leading-[24px]">
          Tổng tiến độ chỉ tiêu
        </strong>
        <div className="mt-[24px]">
          <CircularProgress
            percentage={((distance || 0) / 1000 / totalDistance) * 100}
            circularWidth={186}
            strokeWidth={10}
            color={"#EA2F70"}
            iconWidth={130}
            iconHeight={130}
            iconSrc={"/images/earthIcon.svg"}
          />
        </div>
        <div className="mt-[16px]">
          <strong className="text-[#EA2F70] text-[40px] font-normal leading-[48px] align-middle">
            {numberWithCommas(roundNumberToFixed((distance || 0) / 1000, 2))}
          </strong>
          <span className="inline-block align-middle text-[0]">
            <span className="inline-block mx-[7px] text-[#EA2F70] text-[40px] leading-normal align-middle">
              /
            </span>
            <span className="inline-block text-[#B3B3B3] text-[20px] leading-[24px] text-left align-middle">
              {numberWithCommas(totalDistance)} <br />
              km
            </span>
          </span>
        </div>
        <p className="mt-[20px] text-[#EA2F70] text-[16px] leading-[24px]">
          Mục tiêu chạy 1 vòng Trái Đất 🌏
        </p>
      </div>
    </BasicCard>
  );
}
