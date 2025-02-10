"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useFormContext } from "react-hook-form"
import { Upload } from "lucide-react"

export function ImageUpload() {
  const { setValue } = useFormContext()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles[0]) {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.onloadend = () => {
          setValue("imageUrl", reader.result as string)
        }
        reader.readAsDataURL(file)
      }
    },
    [setValue],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Déposez l'image ici ...</p>
      ) : (
        <div>
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p>Glissez et déposez une image ici, ou cliquez pour sélectionner un fichier</p>
        </div>
      )}
    </div>
  )
}

