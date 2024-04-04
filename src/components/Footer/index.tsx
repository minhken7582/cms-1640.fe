import Image from "next/image";
import { MenuItems } from "@/constants";

export default function Footer({
  session,
}: Readonly<{
  session?: any;
}>) {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            CMS
          </a>
          . All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a href={item?.url} className={"hover:underline me-4 md:me-6"}>
                {item?.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
