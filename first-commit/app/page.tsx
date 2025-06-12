import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CoreCompetencies } from "@/components/core-competencies";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoreCompetencies />
        <TechStack />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
      </main>
    </div>
  );
}
