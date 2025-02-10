"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfoForm } from "@/components/forms/PersonalInfoForm";
import { ProjectsForm } from "@/components/forms/ProjectsForm";
import { EducationForm } from "@/components/forms/EducationForm";
import { ExperienceForm } from "@/components/forms/ExperienceForm";
import { BottomNavBar } from "@/components/BottomNavBar";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { portfolioSchema } from "@/lib/validations/add-portfolio";
import { createPortfolio, editPortfolio } from "./action";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { PortfolioData } from "@/types/portfolio";

type CreatePortfolioProps = {
  data?: PortfolioData;
};

export default function CreatePortfolio({
  data: userPortfolio,
}: CreatePortfolioProps) {
  const [activeSections, setActiveSections] = useState([
    "personal",
    "projects",
  ]);
  const router = useRouter();
  const [isSubmiting, setisSubmiting] = useState(false);

  const methods = useForm<PortfolioData>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: userPortfolio ?? {
      theme: { font: "inter" },
      skills: [],
      projects: [],
      education: [],
      experience: [],
    },
  });

  const onSubmit = async (data: PortfolioData) => {
    setisSubmiting(true);

    // Ici, vous enverriez les données à votre backend
    if (userPortfolio) {
      const portfolio = await editPortfolio(data, userPortfolio.id as string);
      if (portfolio) {
        toast({
          title: "Portfolio modifié avec succès",
          description: "Votre portfolio a été modifié avec succès",
        });
        router.push(`/dashboard/portfolio/${portfolio.id}`);
        console.log("Portfolio modifié avec succès :", portfolio);
      } else {
        toast({
          title: "Il y a eu erreur",
          description:
            "Nous rencontrons une erreur lors de la modification de votre portfolio",
        });
      }
      setisSubmiting(false);
    } else {
      const portfolio = await createPortfolio(data);
      if (portfolio) {
        toast({
          title: "Portfolio créé avec succès",
          description: "Votre portfolio a été créé avec succès",
        });
        router.push(`/dashboard/portfolio/${portfolio.id}`);
        console.log("Portfolio créé avec succès :", portfolio);
      } else {
        toast({
          title: "Il y a eu erreur",
          description:
            "Nous rncontrons une erreur lors de l'enreigistrement de votre portfolio",
        });
      }
    }
    setisSubmiting(false);
  };

  const removeSection = (section: string) => {
    setActiveSections(activeSections.filter((s) => s !== section));
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-8 pb-20 container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8 overflow-y-auto max-h-[calc(100vh-200px)]">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <PersonalInfoForm />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Projets</CardTitle>
              </CardHeader>
              <CardContent>
                <ProjectsForm />
              </CardContent>
            </Card>
            {activeSections.includes("education") && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Éducation
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSection("education")}
                    >
                      Supprimer
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EducationForm />
                </CardContent>
              </Card>
            )}
            {activeSections.includes("experience") && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Expérience
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSection("experience")}
                    >
                      Supprimer
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ExperienceForm />
                </CardContent>
              </Card>
            )}
          </div>
          <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
            <div className="h-full overflow-y-auto pr-4">
              <PortfolioPreview />
            </div>
          </div>
        </div>
        <BottomNavBar
          onAddEducation={() =>
            setActiveSections([...activeSections, "education"])
          }
          onAddExperience={() =>
            setActiveSections([...activeSections, "experience"])
          }
          isSubmiting={isSubmiting}
        />
      </form>
    </FormProvider>
  );
}
