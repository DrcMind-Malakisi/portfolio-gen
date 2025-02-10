import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/ImageUpload";
import {
  Trash2,
  Plus,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
} from "lucide-react";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";

export function PersonalInfoForm() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const handleUploadComplete = (res: any) => {
    setValue("imageUrl", res[0].url);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Nom complet</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message as string}</p>
          )}
        </div>
        <div>
          <Label htmlFor="username">Nom d'utilisateur</Label>
          <Input
            id="username"
            {...register("username")}
            placeholder="johndoe"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message as string}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="bio">Biographie</Label>
        <Textarea
          id="bio"
          {...register("bio")}
          placeholder="Parlez-nous de vous..."
        />
        {errors.bio && (
          <p className="text-red-500">{errors.bio.message as string}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message as string}</p>
          )}
        </div>
        <div>
          <Label htmlFor="address">Adresse</Label>
          <Input
            id="address"
            {...register("address")}
            placeholder="123 Rue Example, Ville"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message as string}</p>
          )}
        </div>
      </div>

      <div>
        <Label>Image de profil</Label>

        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            handleUploadComplete(res);
          }}
        />
      </div>

      <div>
        <Label>Liens sociaux</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Twitter className="w-5 h-5" />
            <Input placeholder="URL Twitter" {...register("socialLinks.x")} />
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="w-5 h-5" />
            <Input
              placeholder="URL LinkedIn"
              {...register("socialLinks.linkedin")}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <Input
              placeholder="URL GitHub"
              {...register("socialLinks.github")}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Facebook className="w-5 h-5" />
            <Input
              placeholder="URL Facebook"
              {...register("socialLinks.facebook")}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Instagram className="w-5 h-5" />
            <Input
              placeholder="URL Instagram"
              {...register("socialLinks.instagram")}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <Label>Compétences</Label>
          <Button type="button" onClick={() => appendSkill("")} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
        {skillFields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mt-2">
            <Input
              {...register(`skills.${index}`)}
              placeholder="Nouvelle compétence"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeSkill(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
