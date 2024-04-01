import Image from "next/image";
import { numberWithCommas, roundNumberToFixed } from "@/utils/index";

export default function RankingBox({
  data,
  index,
  isLastItem,
}: Readonly<{
  data: any;
  index: number;
  isLastItem: boolean;
}>) {
  return (
    <div
      className="flex gap-[12px] sm:gap-[20px] items-stretch min-h-[32px] md:min-h-[48px]"
      title={data?.athlete?.name || ""}
    >
      <div className="flex sm:gap-[8px] items-center">
        <div className="w-[24px] md:w-[40px] h-[24px] md:h-[40px] text-center">
          {index < 3 ? (
            <Image
              src={`/images/${
                index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"
              }Icon.svg`}
              alt={""}
              width={40}
              height={40}
              style={{
                objectFit: "cover",
              }}
            />
          ) : (
            <span className="inline-block text-[#B3B3B3] text-[12px] leading-[40px]">
              {index + 1}
            </span>
          )}
        </div>

        <div className="relative">
          <div className="overflow-hidden relative z-1 w-[32px] md:w-[48px] h-[32px] md:h-[48px] border rounded-full">
            <Image
              src={data?.athlete?.avatar || "/images/no-avatar.png"}
              alt={data?.athlete?.name || ""}
              width={48}
              height={48}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          {index < 3 && (
            <div className="absolute z-2 top-[-9px] right-[-7px] md:top-[-21px] md:right-[-17px] w-[20px] md:w-[40px] h-[20px] md:h-[40px]">
              <Image
                src={`/images/${
                  index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"
                }CrownIcon.svg`}
                alt={""}
                width={40}
                height={40}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex flex-[1_0_0%] gap-[12px] items-center relative text-[12px] md:text-[14px] leading-[18px] md:leading-[22px] ${
          isLastItem ? "after:hidden" : "after:block"
        } after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:border-b after:border-b-[#D9D9D9]`}
      >
        <div className="flex gap-[12px] items-center w-full">
          <strong className="font-normal">{data?.athlete?.name || ""}</strong>
          <div className="ml-auto">
            <div className="flex items-center w-[120px] md:w-[100px] lg:w-[120px]">
              {typeof data?.rank?.previous === "undefined" ? (
                <div className={`flex items-center text-[#702AC3]`}>
                  <Image
                    src="/images/newbie.svg"
                    alt=""
                    width={16}
                    height={16}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <span className="ms-1 text-[12px] leading-[16px]">New</span>
                </div>
              ) : data?.rank?.change ? (
                <div
                  className={`flex items-center ${
                    data?.rank?.change > 0 ? "text-[#52C32A]" : "text-[#F53318]"
                  }`}
                >
                  <Image
                    src={
                      data?.rank?.change > 0
                        ? "/images/increaseIcon.svg"
                        : "/images/decreaseIcon.svg"
                    }
                    alt=""
                    width={16}
                    height={16}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <span className="text-[12px] leading-[16px]">
                    {Math.abs(data?.rank?.change || 0)}
                  </span>
                </div>
              ) : (
                <></>
              )}

              <span className="ml-auto">
                {numberWithCommas(
                  roundNumberToFixed((data.distance || 0) / 1000, 2)
                )}
                km
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
