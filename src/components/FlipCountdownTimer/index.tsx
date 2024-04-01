"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./style.scss";

export default function FlipCountdownTimer({ time }: { time: any }) {
  return (
    <div className="flex justify-center">
      <FlipClockCountdown
        to={time}
        className={"flip-countdown-timer-custom"}
        renderMap={[true, true, true, false]}
        labels={["ngày", "giờ", "phút", "giây"]}
        labelStyle={{
          color: "#7029C3",
          fontSize: 12,
          fontWeight: 400,
          textTransform: "lowercase",
        }}
        showSeparators={false}
        separatorStyle={{ size: 0 }}
        digitBlockStyle={{
          overflow: "hidden",
          width: 36,
          height: 50,
          border: "none",
          borderRadius: 8,
          backgroundColor: "#EEF2FD",
          boxShadow: "none",
          color: "#7029C3",
          fontSize: 28,
        }}
        dividerStyle={{ color: "#ffffff", height: 2 }}
        duration={0.5}
        hideOnComplete={false}
      ></FlipClockCountdown>
    </div>
  );
}
