import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CareerSummary } from "@/components/sections/career-summary";
import { EducationAndCredentials } from "@/components/sections/education-and-credentials";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { ProjectsOverview } from "@/components/sections/projects-overview";
import { TechStack } from "@/components/sections/tech-stack";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Highlights />
        <ProjectsOverview />
        <TechStack />
        <CareerSummary />
        <EducationAndCredentials />
      </main>
      <Footer />
    </div>
  );
}
