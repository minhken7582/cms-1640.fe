import Image from "next/image";
import BasicButton from "@/components/Buttons/BasicButton";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-[24px]">
      <div className="w-[120px] h-[60px]">
        <a href="/" title="Metub MOVE">
          <Image
            src={"/images/metubmoveLogo.svg"}
            alt="Metub MOVE"
            width={120}
            height={60}
            priority={true}
            style={{ objectFit: "cover" }}
          />
        </a>
      </div>
    </header>
  );
}
