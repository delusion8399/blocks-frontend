import Link from "next/link";
import box from "../components/assets/box.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="p-3 sm:p-5 flex justify-between items-center max-w-6xl mx-auto">
        <div className="logo text-xl sm:text-2xl flex items-center">
          <span>
            <Image
              src={box}
              alt="block"
              height={30}
              width={30}
              className="sm:h-[35px] sm:w-[35px]"
            />
          </span>
          <span className="font-semibold ml-1">Blocks</span>
        </div>
        <Link
          href="/dashboard"
          className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg border dark:text-white dark:bg-black hover:bg-black hover:text-white transition-colors"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
