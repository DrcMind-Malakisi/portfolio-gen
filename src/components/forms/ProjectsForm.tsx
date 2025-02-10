import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";
import { UploadDropzone } from "@/lib/uploadthing";

export function ProjectsForm() {
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });
  const handleUploadComplete = (res: any, index: number) => {
    setValue(`projects.${index}.thumbnail`, res[0].url);
  };

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Projet {index + 1}</h3>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <Label htmlFor={`projects.${index}.thumbnail`}>
              URL de la vignette
            </Label>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                handleUploadComplete(res, index);
              }}
            />
          </div>
          <div>
            <Label htmlFor={`projects.${index}.title`}>Titre du projet</Label>
            <Input
              {...register(`projects.${index}.title`)}
              placeholder="Mon super projet"
            />
            {Array.isArray(errors.projects) &&
              errors.projects[index]?.title && (
                <p className="text-red-500">
                  {errors.projects[index]?.title?.message as string}
                </p>
              )}
          </div>
          <div>
            <Label htmlFor={`projects.${index}.description`}>Description</Label>
            <Textarea
              {...register(`projects.${index}.description`)}
              placeholder="Une brève description du projet"
            />
            {Array.isArray(errors.projects) &&
              errors.projects[index]?.description && (
                <p className="text-red-500">
                  {errors.projects[index]?.description?.message as string}
                </p>
              )}
          </div>
          <div>
            <Label htmlFor={`projects.${index}.link`}>Lien du projet</Label>
            <Input
              {...register(`projects.${index}.link`)}
              placeholder="https://monprojet.com"
            />
            {Array.isArray(errors.projects) && errors.projects[index]?.link && (
              <p className="text-red-500">
                {errors.projects[index]?.link?.message as string}
              </p>
            )}
          </div>
        </div>
      ))}
      <Button
        type="button"
        onClick={() =>
          append({ title: "", description: "", link: "", thumbnail: "" })
        }
      >
        Ajouter un projet
      </Button>
    </div>
  );
}
