import DefaultTemplate from "@/components/templates/template-01";
import { prisma } from "@/lib/prisma";
import { PortfolioData } from "@/types/portfolio";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const username = (await params).username;

  const portfolio = (await prisma.portfolio.findUnique({
    where: {
      username: username,
    },
  })) as unknown as PortfolioData;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${portfolio.fullName}  - Portfolio`,
    description: portfolio.bio,
    authors: [
      { name: portfolio.fullName, url: portfolio.socialLinks?.linkedin },
    ],

    openGraph: {
      images: [portfolio.imageUrl, ...previousImages],
    },

    twitter: {
      card: "summary_large_image",
      title: `${portfolio.fullName}  - Portfolio`,
      description: portfolio.bio,
      images: [portfolio.imageUrl],
    },
  };
}

export default async function page({ params }: Props) {
  const { username } = await params;
  const portfolio = (await prisma.portfolio.findUnique({
    where: {
      username: username,
    },
  })) as unknown as PortfolioData;
  return (
    <main>
      <DefaultTemplate data={portfolio} />
    </main>
  );
}
