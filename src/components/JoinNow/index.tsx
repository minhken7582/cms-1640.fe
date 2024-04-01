"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import BasicButton from "@/components/Buttons/BasicButton";

const itemQrDecorations = [
  {
    name: "multiplicationDecoration",
    width: 8,
    height: 8,
    positon: "-top-[16px] -left-[25px]",
  },
  {
    name: "squareDecoration",
    width: 8,
    height: 8,
    positon: "top-[16px] -left-[55px]",
  },
  {
    name: "multiplicationDecoration",
    width: 8,
    height: 8,
    positon: "top-[17px] -left-[34px]",
  },
  {
    name: "multiplicationDecoration",
    width: 8,
    height: 8,
    positon: "-top-[16px] -right-[16px]",
  },
  {
    name: "circleDecoration",
    width: 12,
    height: 12,
    positon: "top-[3px] -right-[32px]",
  },
  {
    name: "squareDecoration",
    width: 8,
    height: 8,
    positon: "top-[8px] -right-[57px]",
  },
  {
    name: "multiplicationDecoration",
    width: 8,
    height: 8,
    positon: "bottom-[5px] -left-[33px]",
  },
  {
    name: "circleDecoration",
    width: 12,
    height: 12,
    positon: "-bottom-[24px] -left-[14px]",
  },
  {
    name: "multiplicationDecoration",
    width: 8,
    height: 8,
    positon: "-bottom-[5px] -right-[33px]",
  },
];

export default function JoinNow({
  members,
}: Readonly<{
  members: any;
}>) {
  const firstFourElements = members?.length ? members.slice(0, 4) : [];

  return (
    <div className="p-[20px_10px_10px] rounded-[12px] bg-[url('/images/bannerBackground.jpg')] bg-no-repeat bg-center bg-cover text-white text-[0px]">
      <span className="text-[24px] font-bold leading-[40px] align-middle">
        Tham gia ngay trên{" "}
      </span>
      <strong className="pr-[6px] text-[32px] leading-[40px] align-middle">
        STRAVA
      </strong>

      {firstFourElements?.length && (
        <div className="inline-block pl-[8px] text-[0px]">
          {firstFourElements
            .splice(0, 4)
            .map((stravaMember: any, index: number) => {
              return (
                <div
                  key={index}
                  className="inline-block overflow-hidden w-[32px] h-[32px] -ml-[8px] border rounded-full align-middle"
                  title={stravaMember.athlete?.name || ""}
                >
                  <Image
                    src={
                      stravaMember.athlete?.avatar || "/images/no-avatar.png"
                    }
                    alt={stravaMember.athlete?.name || ""}
                    width={32}
                    height={32}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              );
            })}
        </div>
      )}

      <div className="mt-[20px] text-[0px]">
        <div className="inline-block relative p-[9px] border border-white rounded-[6px]">
          <QRCodeSVG
            size={74}
            fgColor="#ffffff"
            bgColor={"transparent"}
            value={process?.env?.NEXT_PUBLIC_JOIN_NOW_URL || ""}
          />
          <div className="absolute top-0 left-0 w-full h-full">
            {itemQrDecorations.map((itemQrDecoration, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/${itemQrDecoration.name}.svg`}
                  alt={""}
                  width={itemQrDecoration.width}
                  height={itemQrDecoration.height}
                  className={`absolute ${itemQrDecoration.positon}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[24px]">
        <BasicButton
          href={process?.env?.NEXT_PUBLIC_JOIN_NOW_URL || ""}
          className="w-full"
          target="_blank"
        >
          Tham gia ngay
        </BasicButton>
      </div>
    </div>
  );
}
