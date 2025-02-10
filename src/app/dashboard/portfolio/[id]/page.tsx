import { prisma } from "@/lib/prisma";
import { Portfolio } from "@prisma/client";
import React from "react";
import CreatePortfolio from "../../create-portfolio/page";
import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import DetelePortfolio from "@/components/delete-portfolio";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;
  const portfolio = (await prisma.portfolio.findUnique({
    where: {
      id,
    },
  })) as unknown as PortfolioData;
  return (
    <main>
      <div className="flex justify-between items-center mt-4 mb-8">
        <h2 className="font-bold text-2xl">
          Modifier votre portfolio {portfolio.username}
        </h2>
        <div className="flex  gap-4">
          <Link href={`/p/${portfolio.username}`} target="_blank">
            <Button size={"icon"}>
              <Eye size={24} />
            </Button>
          </Link>
          <DetelePortfolio id={portfolio.id as string} />
        </div>
      </div>
      <CreatePortfolio data={portfolio} />
    </main>
  );
}
