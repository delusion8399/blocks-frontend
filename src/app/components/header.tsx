import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="p-5 flex justify-between items-center max-w-6xl mx-auto">
        <div className="logo text-2xl">Blocks</div>
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
