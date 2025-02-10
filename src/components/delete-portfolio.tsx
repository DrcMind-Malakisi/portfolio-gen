"use client";

import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { removePortfolio } from "@/app/dashboard/portfolio/[id]/action";
import { revalidatePath } from "next/cache";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

type Props = {
  id: string;
};

export default function DetelePortfolio({ id }: Props) {
  const [loading, isLoading] = useState(false);
  const router = useRouter();
  const handleRemovePortfolio = async () => {
    const p = await removePortfolio(id);
    if (p) {
      toast({
        title: "Portfolio supprimé",
        description: "Votre  portfolio a été supprimé",
      });
      revalidatePath("/dasboard");
      router.push("/");
    } else {
      toast({
        title: "Il y a eu une erreur  ",
        description:
          "Nous avons rencontré une erreur lors de  la suppression de votre portfolio",
      });
    }
  };
  return (
    <Button
      size={"icon"}
      variant={"destructive"}
      onClick={async () => {
        isLoading(true);
        await handleRemovePortfolio();
        isLoading(false);
      }}
      disabled={loading}
    >
      {loading ? (
        <span className="animate-pulse">En cours</span>
      ) : (
        <Trash size={18} />
      )}
    </Button>
  );
}
