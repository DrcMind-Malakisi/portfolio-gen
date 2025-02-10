import type React from "react";
import { NavBar } from "@/components/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4">
      <NavBar />
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}
