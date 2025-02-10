export type Project = {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
};

export type Education = {
  institution: string;
  diploma: string;
  year: string;
  location: string;
};

export type Experience = {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type PortfolioData = {
  id?: string;
  username: string;
  fullName: string;
  bio: string;
  email: string;
  address: string;
  imageUrl: string;
  socialLinks?: {
    x?: string;
    linkedin?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
  };
  skills: string[]; // Inputs dynamiques
  theme: {
    font: string;
  };
  projects: Project[];
  education: Education[];
  experience: Experience[];
};
