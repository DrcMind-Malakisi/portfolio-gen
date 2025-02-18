import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  User,
  Heart,
} from "lucide-react";

import { getFontClass } from "@/font/font";

import Image from "next/image";
import {
  Education,
  Experience,
  PortfolioData,
  Project,
} from "@/types/portfolio";
import TemplateNavigation from "./template-navigation";
import { PortfolioData as FormData } from "@/lib/validations/add-portfolio";
import { ModeToggle } from "../dark-mode";

interface PortfolioProps {
  data: PortfolioData | FormData;
}

const DefaultTemplate: React.FC<PortfolioProps> = ({ data }) => {
  const renderAboutSection = (data: PortfolioData | FormData) => (
    <section id="about" className="mb-16 relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent h-[1px] -top-4 dark:from-blue-900 dark:to-transparent" />
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        <Image
          src={data.imageUrl ? data.imageUrl : "/avatar.svg"}
          alt={data.fullName || "Profile utilisateur"}
          width={128}
          height={128}
          className="w-32 h-32 rounded-2xl shadow-lg object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold mb-6 inline-flex items-center gap-3 dark:text-white">
            {data.fullName}
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl dark:text-gray-300">
            {data.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-4 group">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors dark:bg-blue-900 dark:group-hover:bg-blue-800">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href={`mailto:${data.email}`}
                className="text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
              >
                {data.email}
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors dark:bg-blue-900 dark:group-hover:bg-blue-800">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                {data.address}
              </span>
            </div>
          </div>
          {data.socialLinks && (
            <div className="flex gap-4 mb-12">
              {data.socialLinks.github && (
                <a
                  href={data.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {data.socialLinks.linkedin && (
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {data.socialLinks.x && (
                <a
                  href={data.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
              {data.socialLinks.facebook && (
                <a
                  href={data.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {data.socialLinks.instagram && (
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Compétences
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderProjectsSection = (projects: Project[]) => (
    <section id="projects" className="mb-16 relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent h-[1px] -top-4 dark:from-purple-900 dark:to-transparent" />
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 dark:text-white">
        <Code className="w-7 h-7 text-purple-600 dark:text-purple-400" />
        Projects
        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div>
              <Image
                src={project.thumbnail ? project.thumbnail : "/projet.jpg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2 dark:text-gray-300">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium group dark:text-purple-400 dark:hover:text-purple-300"
            >
              View Project
              <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );

  const renderEducationSection = (education: Education[]) => (
    <section id="education" className="mb-16 relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent h-[1px] -top-4 dark:from-green-900 dark:to-transparent" />
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 dark:text-white">
        <GraduationCap className="w-7 h-7 text-green-600 dark:text-green-400" />
        Education
        <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
      </h2>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-green-600 font-medium mt-1 dark:text-green-400">
                  {edu.diploma}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium px-3 py-1 bg-green-50 rounded-full dark:bg-green-900">
                  {edu.year}
                </span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderExperienceSection = (experiences: Experience[]) => (
    <section id="experience" className="mb-16 relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent h-[1px] -top-4 dark:from-orange-900 dark:to-transparent" />
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 dark:text-white">
        <Briefcase className="w-7 h-7 text-orange-600 dark:text-orange-400" />
        Experience
        <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
      </h2>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-orange-600 font-medium mt-1 dark:text-orange-400">
                  {exp.company}
                </p>
                <p className="text-gray-600 mt-3 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                <span className="font-medium px-3 py-1 bg-orange-50 rounded-full dark:bg-orange-900">
                  {exp.startDate}
                </span>
                <span className="text-gray-400 dark:text-gray-500">→</span>
                <span className="font-medium px-3 py-1 bg-orange-50 rounded-full dark:bg-orange-900">
                  {exp.endDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div
      className={`min-h-screen bg-gray-50 pb-24 relative dark:bg-gray-900 ${getFontClass(
        data.theme.font
      )}`}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {renderAboutSection(data)}
        {data.projects &&
          data.projects.length > 0 &&
          renderProjectsSection(data.projects)}
        {data.education &&
          data.education.length > 0 &&
          renderEducationSection(data.education)}
        {data.experience &&
          data.experience.length > 0 &&
          renderExperienceSection(data.experience)}
      </div>
      <footer className="bg-white border-t border-gray-100 py-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
          <p className="text-gray-600 mb-2 flex items-center gap-2 dark:text-gray-300">
            Fait avec <Heart className="w-4 h-4 text-red-500" /> par{" "}
            {data.username}
          </p>
          <ModeToggle />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Tout droit reservé.
          </p>
        </div>
      </footer>

      <TemplateNavigation />
    </div>
  );
};

export default DefaultTemplate;
