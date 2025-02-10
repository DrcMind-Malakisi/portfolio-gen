"use server";

import { prisma } from "@/lib/prisma";

export const removePortfolio = async (id: string) => {
  const portfolio = await prisma.portfolio.delete({
    where: {
      id,
    },
  });

  return portfolio;
};
