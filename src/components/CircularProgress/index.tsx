import Image from "next/image";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;

  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({
  color,
  pct,
  rSize,
  strokeWidth,
}: {
  color: string;
  pct: number;
  rSize: number;
  strokeWidth: number;
}) => {
  const r = rSize;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  const strokeW = strokeWidth;

  return (
    <circle
      r={r}
      cx={r - strokeW / 2}
      cy={r + strokeW / 2}
      fill={"transparent"}
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeW}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap={"round"}
    ></circle>
  );
};

const Icon = ({
  width,
  height,
  src,
}: {
  width: number;
  height: number;
  src: string;
}) => {
  return (
    <Image
      src={src}
      alt="Metub MOVE"
      width={width}
      height={height}
      style={{ objectFit: "cover" }}
    />
  );
};

export default function CircularProgress({
  percentage,
  circularWidth,
  strokeWidth,
  color,
  iconWidth,
  iconHeight,
  iconSrc,
  iconClasses,
}: {
  percentage: number;
  circularWidth: number;
  strokeWidth: number;
  color: string;
  iconWidth: number;
  iconHeight: number;
  iconSrc: string;
  iconClasses?: string;
}) {
  const pct = cleanPercentage(percentage);
  return (
    <div
      className="inline-flex items-center justify-center relative"
      style={{
        width: circularWidth + strokeWidth,
        height: circularWidth + strokeWidth,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          width={circularWidth + strokeWidth}
          height={circularWidth + strokeWidth}
        >
          <g
            transform={`rotate(270 ${circularWidth / 2} ${circularWidth / 2})`}
          >
            <Circle
              color="lightgrey"
              pct={100}
              rSize={circularWidth / 2}
              strokeWidth={strokeWidth}
            />
            <Circle
              color={color}
              pct={pct}
              rSize={circularWidth / 2}
              strokeWidth={strokeWidth}
            />
          </g>
        </svg>
      </div>
      <div className={`w-[${iconWidth}px] h-[${iconHeight}px] ${iconClasses}`}>
        <Icon width={iconWidth} height={iconHeight} src={iconSrc} />
      </div>
    </div>
  );
}
