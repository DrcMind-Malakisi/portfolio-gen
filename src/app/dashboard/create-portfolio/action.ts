"use server";
import { prisma } from "@/lib/prisma";
import { PortfolioData } from "@/types/portfolio";

import { auth, currentUser } from "@clerk/nextjs/server";

export const createPortfolio = async (data: PortfolioData) => {
  // check if user exists in the database if not create a new user
  const { userId } = await auth();
  const curent = await currentUser();
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId as string,
    },
  });

  if (user === null) {
    await prisma.user.create({
      data: {
        clerkId: userId as string,
        email: curent?.emailAddresses[0].emailAddress as string,
        fullName: curent?.fullName as string,
      },
    });
  }

  // create a new portfolio
  const portfolio = await prisma.portfolio.create({
    data: {
      username: data.username,
      fullName: data.fullName ?? null,
      bio: data.bio ?? null,
      email: data.email,
      address: data.address ?? null,
      imageUrl: data.imageUrl ?? null,
      socialLinks: data.socialLinks ?? {},
      skills: data.skills,
      theme: data.theme,
      projects: data.projects,
      education: data.education ?? [],
      experience: data.experience ?? [],
      user: {
        connect: {
          clerkId: userId as string,
        },
      },
    },
  });

  return portfolio;
};

// edit portfolio

export const editPortfolio = async (data: PortfolioData, id: string) => {
  const portfolio = await prisma.portfolio.update({
    where: {
      id,
    },
    data: {
      username: data.username,
      fullName: data.fullName ?? null,
      bio: data.bio ?? null,
      email: data.email,
      address: data.address ?? null,
      imageUrl: data.imageUrl ?? null,
      socialLinks: data.socialLinks ?? {},
      skills: data.skills,
      theme: data.theme,
      projects: data.projects,
      education: data.education ?? [],
      experience: data.experience ?? [],
    },
  });

  return portfolio;
};
