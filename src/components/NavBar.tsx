import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

export function NavBar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="">
        <div className="flex justify-between items-center h-16">
          <Link href="/dashboard" className="text-2xl font-bold text-gray-900">
            Portfolio-gen
          </Link>
          <div className="flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
