import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  description: z.string().min(1, "La description est requise"),
  link: z.string().url("L'URL du projet doit être valide"),
  thumbnail: z.string().url("L'URL de la vignette doit être valide"),
});

const educationSchema = z.object({
  institution: z.string().min(1, "L'institution est requise"),
  diploma: z.string().min(1, "Le diplôme est requis"),
  year: z.string().min(1, "L'année est requise"),
  location: z.string().min(1, "Le lieu est requis"),
});

const experienceSchema = z.object({
  title: z.string().min(1, "Le titre du poste est requis"),
  company: z.string().min(1, "L'entreprise est requise"),
  description: z.string().min(1, "La description est requise"),
  startDate: z.string().min(1, "La date de début est requise"),
  endDate: z.string().min(1, "La date de fin est requise"),
});

export const portfolioSchema = z.object({
  username: z
    .string()
    .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères"),
  fullName: z.string().min(1, "Le nom complet est requis"),
  bio: z.string().min(10, "La biographie doit contenir au moins 10 caractères"),
  email: z.string().email("L'email doit être valide"),
  address: z.string().min(1, "L'adresse est requise"),
  imageUrl: z.string().url("L'URL de l'image doit être valide"),
  socialLinks: z
    .object({
      x: z.string().url("L'URL Twitter doit être valide").optional(),
      linkedin: z.string().url("L'URL LinkedIn doit être valide").optional(),
      github: z.string().url("L'URL GitHub doit être valide").optional(),
      facebook: z.string().url("L'URL Facebook doit être valide").optional(),
      instagram: z.string().url("L'URL Instagram doit être valide").optional(),
    })
    .optional(),
  skills: z.array(z.string()).min(1, "Au moins une compétence est requise"),
  theme: z.object({
    font: z.enum([
      "inter",
      "lusitana",
      "raleway",
      "poppins",
      "montserrat",
      "lato",
    ]),
  }),
  projects: z.array(projectSchema),
  education: z.array(educationSchema).optional(),
  experience: z.array(experienceSchema).optional(),
});

export type PortfolioData = z.infer<typeof portfolioSchema>;
