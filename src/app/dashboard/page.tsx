import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import PortfolioList from "@/components/portfolio-list";
import DashboardLoading from "@/components/skeleton/dashboard";

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mes Portfolios</h1>
        <Link href="/dashboard/create-portfolio">
          <Button>Créer un nouveau portfolio</Button>
        </Link>
      </div>
      <Suspense fallback={<DashboardLoading />}>
        <PortfolioList />
      </Suspense>
    </div>
  );
}
