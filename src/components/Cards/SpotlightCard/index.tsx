import Image from "next/image";
import { numberWithCommas, roundNumberToFixed } from "@/utils/index";
import BasicCard from "@/components/Cards/BasicCard";

export default function SpotlightCard({ memberInfo }: { memberInfo: any }) {
  return (
    <BasicCard isNoPadding={true}>
      <div className="relative h-full py-[12px] bg-gradient-to-b from-[#8332E2] to-[#6023A9] text-white text-center">
        <div className="relative z-20">
          <div className="relative w-[80px] h-[80px] mx-auto border-2 border-[#FFAA39] rounded-full">
            <div className="overflow-hidden relative rounded-full">
              <Image
                src={memberInfo?.athlete?.avatar || "/images/no-avatar.png"}
                alt={memberInfo?.athlete?.name || ""}
                width={80}
                height={80}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <span className="inline-block absolute z-20 bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] w-[24px] h-[24px] border border-[#FFFFFF] rounded-full bg-[#FFAA39] text-[#FFFFFF] text-[14px] font-normal leading-[22px] text-center">
              1
            </span>
            <div className="absolute z-10 top-0 bottom-0 left-[50%] -translate-x-[50%] w-[calc(100%+20px)]">
              <span className="absolute bottom-0 left-0 w-[31px] h-[66px] bg-[url('/images/laurelDecoration.png')] bg-no-repeat bg-center bg-cover"></span>
              <span className="absolute bottom-0 right-0 [transform:rotateY(180deg)] w-[31px] h-[66px] bg-[url('/images/laurelDecoration.png')] bg-no-repeat bg-center bg-cover"></span>
            </div>
          </div>
          <strong className="block mt-[15px] text-[20px] font-medium leading-[24px]">
            {memberInfo?.athlete?.name || ""}
          </strong>
          <span className="block mt-[3px] text-[28px] font-normal leading-[35px]">
            {numberWithCommas(
              roundNumberToFixed((memberInfo?.distance || 0) / 1000, 2)
            )}{" "}
            km
          </span>
        </div>
        <div className="absolute z-10 -top-[7px] -bottom-[7px] left-0 w-full">
          <span className="absolute top-0 left-0 w-full h-full bg-[url('/images/spotlightCardLeftDecoration.png')] bg-no-repeat bg-left bg-[length:auto_100%]"></span>
          <span className="absolute top-0 right-0 w-full h-full bg-[url('/images/spotlightCardRightDecoration.png')] bg-no-repeat bg-right bg-[length:auto_100%]"></span>
        </div>
      </div>
    </BasicCard>
  );
}
