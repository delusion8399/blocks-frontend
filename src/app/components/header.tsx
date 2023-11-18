import Link from "next/link";
import box from "../components/assets/box.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="p-5 flex justify-between items-center max-w-6xl mx-auto">
        <div className="logo text-2xl flex items-center">
          <span>
            <Image src={box} alt="block" height={35} width={35} />
          </span>
          <span className="font-semibold ml-1">Blocks</span>
        </div>
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-lg border dark:text-white dark:bg-black hover:bg-black hover:text-white"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
