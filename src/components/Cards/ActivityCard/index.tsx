import BasicCard from "@/components/Cards/BasicCard";
import CircularProgress from "@/components/CircularProgress";
import Image from "next/image";
import { numberWithCommas, roundNumberToFixed } from "@/utils/index";

export default function ActivityCard({
  title,
  currentValue,
  totalValue,
  unit,
  percentage,
  iconSrc,
  iconWidth,
  iconHeight,
  growthRatePercent,
  growthRateComparison,
}: Readonly<{
  title: string;
  currentValue: any;
  totalValue: any;
  unit: string;
  percentage: number;
  iconSrc: string;
  iconWidth?: number;
  iconHeight?: number;
  growthRatePercent?: number;
  growthRateComparison?: any;
}>) {
  return (
    <BasicCard>
      <strong className="block text-[16px] font-medium leading-[24px] truncate">
        {title}
      </strong>
      <div className="mt-[12px]">
        <div className="flex flex-wrap md:flex-nowrap gap-[24px]">
          <div className="block">
            <strong className="block text-[28px] font-normal leading-[36px]">
              {currentValue}
            </strong>
            <span className="block mt-[8px] w-[80px] h-[1px] bg-[#B3B3B3]"></span>
            <span className="block mt-[8px] text-[#B3B3B3] text-[16px] leading-[24px]">
              {totalValue} {unit}
            </span>
            <div className="flex gap-[4px] items-center mt-[12px]">
              {growthRateComparison && (
                <>
                  <Image
                    src={
                      growthRateComparison === "Dec"
                        ? "/images/arrowDecrease.svg"
                        : "/images/arrowIncrease.svg"
                    }
                    alt=""
                    width={20}
                    height={20}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <span
                    className={`${
                      growthRateComparison === "Dec"
                        ? "text-[#F53318]"
                        : "text-[#52C32A]"
                    } text-[12px] leading-[16px]`}
                  >
                    {numberWithCommas(
                      roundNumberToFixed(Math.abs(growthRatePercent || 0), 2)
                    )}{" "}
                    % {growthRateComparison || ""}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="ml-auto mr-0 sm:mr-auto sm:ml-auto md:mr-0 sm:ml-auto">
            <CircularProgress
              percentage={percentage}
              circularWidth={70}
              strokeWidth={6}
              color={"#702AC3"}
              iconWidth={iconWidth || 36}
              iconHeight={iconHeight || 36}
              iconSrc={iconSrc}
              iconClasses={"relative -top-[3px]"}
            />
          </div>
        </div>
      </div>
    </BasicCard>
  );
}
