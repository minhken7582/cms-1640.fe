export default function BasicCard({
  isNoPadding,
  children,
}: Readonly<{
  isNoPadding?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`overflow-hidden h-full rounded-[8px] bg-white shadow-[0_3px_7px_0_rgba(0,0,0,0.07)] ${
        isNoPadding ? "" : "p-[16px] sm:p-[20px]"
      }`}
    >
      {children}
    </div>
  );
}
