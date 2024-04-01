export default function BasicButton({
  href,
  className,
  children,
  target,
  ...rest
}: Readonly<{
  href?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
}>) {
  const defaultClassName =
    "inline-flex align-middle justify-center p-[10px] rounded-[6px] bg-[#ffffff] text-[#7D3FD1] text-[14px] leading-[22px] font-medium";

  if (href) {
    return (
      <a
        href={href}
        className={
          className ? `${defaultClassName} ${className}` : defaultClassName
        }
        {...(target ? { target: target } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={
          className ? `${defaultClassName} ${className}` : defaultClassName
        }
        {...rest}
      >
        {children}
      </button>
    );
  }
}
