import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Pencil, PlusCircle, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

export default async function PortfolioList({}: Props) {
  const { userId } = await auth();
  const portfolios = await prisma.portfolio.findMany({
    where: {
      userId: userId as string,
    },
  });

  if (portfolios.length === 0) {
    return (
      <div className="flex justify-center items-center  bg-background">
        <Card className="w-full  mx-auto">
          <CardHeader className="text-center">
            <Briefcase className="w-16 h-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl font-bold">
              Commencez votre voyage professionnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Vous n'avez pas encore de portfolio. C'est le moment idéal pour
              créer votre vitrine professionnelle en ligne !
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center justify-center">
                <PlusCircle className="w-5 h-5 mr-2 text-primary" />
                <span>Présentez vos compétences et réalisations</span>
              </li>
              <li className="flex items-center justify-center">
                <PlusCircle className="w-5 h-5 mr-2 text-primary" />
                <span>Partagez votre parcours professionnel</span>
              </li>
              <li className="flex items-center justify-center">
                <PlusCircle className="w-5 h-5 mr-2 text-primary" />
                <span>Attirez l'attention des recruteurs</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/dashboard/create-portfolio">
              <Button variant="outline" size="lg" className="w-full">
                <PlusCircle className="mr-2 h-5 w-5" /> Créer mon premier
                portfolio
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {portfolios.map((portfolio) => (
          <Card key={portfolio.id} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{portfolio.fullName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>@{portfolio.username}</p>
            </CardContent>
            <CardFooter className="flex justify-between space-x-4">
              <Link href={`/p/${portfolio.username}`}>
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> Aperçu
                </Button>
              </Link>
              <Link href={`/dashboard/portfolio/${portfolio.id}`}>
                <Button variant="default" size="sm">
                  <Pencil className="mr-2 h-4 w-4" /> Modifier
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
