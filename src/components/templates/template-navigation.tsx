"use client";
import { Briefcase, Code, GraduationCap, User } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

export default function TemplateNavigation({}: Props) {
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-2 py-2 flex items-center gap-1 transition-all duration-300 hover:scale-105 z-10">
        <a
          href="#about"
          className={`p-2 md:p-3 rounded-full transition-all duration-300 flex items-center gap-2 group ${
            activeSection === "about"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-500 hover:bg-gray-50"
          }`}
        >
          <User className="w-5 h-5" />
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeSection === "about"
                ? "opacity-100 max-w-[100px]"
                : "opacity-0 max-w-0 hidden md:inline-block"
            }`}
          >
            A propos
          </span>
        </a>
        <a
          href="#projects"
          className={`p-2 md:p-3 rounded-full transition-all duration-300 flex items-center gap-2 group ${
            activeSection === "projects"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-500 hover:bg-gray-50"
          }`}
        >
          <Code className="w-5 h-5" />
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeSection === "projects"
                ? "opacity-100 max-w-[100px]"
                : "opacity-0 max-w-0 hidden md:inline-block"
            }`}
          >
            Projects
          </span>
        </a>

        <a
          href="#experience"
          className={`p-2 md:p-3 rounded-full transition-all duration-300 flex items-center gap-2 group ${
            activeSection === "experience"
              ? "bg-orange-50 text-orange-600"
              : "text-gray-500 hover:bg-gray-50"
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeSection === "experience"
                ? "opacity-100 max-w-[100px]"
                : "opacity-0 max-w-0 hidden md:inline-block"
            }`}
          >
            Experience
          </span>
        </a>

        <a
          href="#education"
          className={`p-2 md:p-3 rounded-full transition-all duration-300 flex items-center gap-2 group ${
            activeSection === "education"
              ? "bg-green-50 text-green-600"
              : "text-gray-500 hover:bg-gray-50"
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeSection === "education"
                ? "opacity-100 max-w-[100px]"
                : "opacity-0 max-w-0 hidden md:inline-block"
            }`}
          >
            Education
          </span>
        </a>
      </nav>
    </>
  );
}
