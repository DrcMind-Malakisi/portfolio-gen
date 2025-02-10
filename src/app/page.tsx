import React from "react";
import {
  Sparkles,
  Code2,
  Share2,
  Palette,
  Users,
  ArrowRight,
  Github,
  Laptop,
  Briefcase,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Sticky */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-violet-500" />
              <span className="text-xl font-bold">Portfolio-gen</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                Comment ça marche
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button variant={"outline"}>Commencer</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-24 pb-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Créez Votre Portfolio Professionnel
            <span className="text-violet-500"> en Quelques Minutes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Mettez en valeur vos compétences, projets et expériences avec un
            portfolio en ligne élégant. Aucune connaissance en code requise -
            remplissez simplement vos informations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard/create-portfolio">
              <Button variant={"default"}>
                Créer Gratuitement{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/p/tacite">
              <Button variant={"outline"}>
                Voir la Démo <Github className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-gray-50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Tout ce dont vous avez besoin pour briller en ligne
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<Code2 className="h-8 w-8 text-violet-500" />}
                title="Sans Code Requis"
                description="Remplissez simplement vos informations et nous générons instantanément votre portfolio professionnel."
              />
              <FeatureCard
                icon={<Palette className="h-8 w-8 text-violet-500" />}
                title="Design Personnalisable"
                description="Choisissez parmi différents thèmes, polices et couleurs pour correspondre à votre marque personnelle."
              />
              <FeatureCard
                icon={<Share2 className="h-8 w-8 text-violet-500" />}
                title="Partage Facile"
                description="Obtenez une URL unique pour votre portfolio à partager avec les recruteurs potentiels."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Comment ça marche ?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <ProcessCard
                icon={<Laptop className="h-8 w-8 text-violet-500" />}
                step="1"
                title="Créez votre compte"
                description="Inscrivez-vous en quelques secondes avec votre email"
              />
              <ProcessCard
                icon={<Briefcase className="h-8 w-8 text-violet-500" />}
                step="2"
                title="Ajoutez vos expériences"
                description="Remplissez vos informations professionnelles"
              />
              <ProcessCard
                icon={<GraduationCap className="h-8 w-8 text-violet-500" />}
                step="3"
                title="Personnalisez"
                description="Choisissez votre thème et vos couleurs"
              />
              <ProcessCard
                icon={<Share2 className="h-8 w-8 text-violet-500" />}
                step="4"
                title="Partagez"
                description="Diffusez votre portfolio professionnel"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Ce que disent nos utilisateurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                content="Portfolio-gen m'a permis de créer un portfolio professionnel en moins d'une heure. Impressionnant !"
                author="Marie L."
                role="Développeuse Frontend"
              />
              <TestimonialCard
                content="Interface intuitive et résultat très professionnel. Exactement ce dont j'avais besoin pour ma recherche d'emploi."
                author="Thomas B."
                role="Designer UX/UI"
              />
              <TestimonialCard
                content="Le meilleur outil pour créer rapidement un portfolio en ligne sans connaissances techniques."
                author="Sophie M."
                role="Photographe"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16">
              La communauté Portfolio-gen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <StatCard number="1,000+" label="Portfolios Créés" />
              <StatCard number="500+" label="Utilisateurs Actifs" />
              <StatCard number="98%" label="Clients Satisfaits" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-violet-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Prêt à créer votre portfolio ?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
              Rejoignez des milliers de professionnels qui ont déjà créé leur
              portfolio avec Portfolio-gen
            </p>
            <Button className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
              Commencer Gratuitement
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-violet-500" />
                <span className="text-xl font-bold">Portfolio-gen</span>
              </div>
              <p className="text-gray-600">
                Créez votre portfolio professionnel en quelques minutes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#features" className="hover:text-violet-600">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-violet-600">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-violet-600">
                    Témoignages
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-violet-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-600">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-600">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-violet-600">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-600">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-600">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>© 2024 Portfolio-gen. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-violet-500 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessCard({
  icon,
  step,
  title,
  description,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg">
        {icon}
        <div className="absolute -top-2 -right-2 bg-violet-500 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white">
          {step}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({
  content,
  author,
  role,
}: {
  content: string;
  author: string;
  role: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200">
      <MessageSquare className="h-8 w-8 text-violet-500 mb-4" />
      <p className="text-gray-700 mb-6">{content}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-8">
      <p className="text-4xl font-bold text-violet-500 mb-2">{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

export default App;
