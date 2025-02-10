import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap, Briefcase, Save } from "lucide-react";

interface BottomNavBarProps {
  onAddEducation: () => void;
  onAddExperience: () => void;
  isSubmiting: boolean;
}

const fonts = [
  { value: "inter", label: "Inter" },
  { value: "lato", label: "Lato" },

  {
    value: "lusitana",
    label: "Lusitana",
  },
  {
    value: "raleway",
    label: "Raleway",
  },
  {
    value: "montserrat",
    label: "Montserrat",
  },

  { value: "poppins", label: "Poppins" },
];

export function BottomNavBar({
  onAddEducation,
  onAddExperience,
  isSubmiting,
}: BottomNavBarProps) {
  const { setValue, watch, formState } = useFormContext();
  const currentFont = watch("theme.font");

  console.log(formState.errors);

  const handleFontChange = (value: string) => {
    setValue("theme.font", value, { shouldValidate: true });
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm shadow-lg rounded-full py-3 px-4 flex items-center space-x-3">
      <Button variant="ghost" size="sm" onClick={onAddEducation} type="button">
        <GraduationCap className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={onAddExperience} type="button">
        <Briefcase className="h-4 w-4" />
      </Button>
      <Select value={currentFont} onValueChange={handleFontChange}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Police" />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((font) => (
            <SelectItem key={font.value} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        size="sm"
        type="submit"
        disabled={isSubmiting || !formState.errors}
      >
        {isSubmiting ? (
          <span className="loader mr-2"></span>
        ) : (
          <Save className="h-4 w-4 mr-2" />
        )}
        Sauvegarder
      </Button>
    </div>
  );
}
