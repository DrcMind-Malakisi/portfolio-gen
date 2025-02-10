import { useFieldArray, useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trash2 } from "lucide-react"

export function ExperienceForm() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  })

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Expérience {index + 1}</h3>
            <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <Label htmlFor={`experience.${index}.title`}>Titre du poste</Label>
            <Input {...register(`experience.${index}.title`)} placeholder="Développeur Full Stack" />
            {errors.experience?.[index]?.title && (
              <p className="text-red-500">{errors.experience[index]?.title?.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor={`experience.${index}.company`}>Entreprise</Label>
            <Input {...register(`experience.${index}.company`)} placeholder="Tech Solutions Inc." />
            {errors.experience?.[index]?.company && (
              <p className="text-red-500">{errors.experience[index]?.company?.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor={`experience.${index}.description`}>Description</Label>
            <Textarea
              {...register(`experience.${index}.description`)}
              placeholder="Décrivez vos responsabilités et réalisations"
            />
            {errors.experience?.[index]?.description && (
              <p className="text-red-500">{errors.experience[index]?.description?.message as string}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`experience.${index}.startDate`}>Date de début</Label>
              <Input type="date" {...register(`experience.${index}.startDate`)} />
              {errors.experience?.[index]?.startDate && (
                <p className="text-red-500">{errors.experience[index]?.startDate?.message as string}</p>
              )}
            </div>
            <div>
              <Label htmlFor={`experience.${index}.endDate`}>Date de fin</Label>
              <Input type="date" {...register(`experience.${index}.endDate`)} />
              {errors.experience?.[index]?.endDate && (
                <p className="text-red-500">{errors.experience[index]?.endDate?.message as string}</p>
              )}
            </div>
          </div>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append({ title: "", company: "", description: "", startDate: "", endDate: "" })}
      >
        Ajouter une expérience
      </Button>
    </div>
  )
}

