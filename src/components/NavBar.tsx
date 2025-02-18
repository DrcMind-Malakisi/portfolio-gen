import Link from "next/link";

import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./dark-mode";

export function NavBar() {
  return (
    <nav className="bg-white dark:bg-secondary px-4 md:px-6 shadow-sm">
      <div className="">
        <div className="flex justify-between items-center h-16">
          <Link href="/dashboard" className="text-2xl font-bold text-primary">
            Portfolio-gen
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
