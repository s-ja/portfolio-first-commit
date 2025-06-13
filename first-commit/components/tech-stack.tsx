import { Badge } from "@/components/ui/badge";

const techStack = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "styled-components",
  ],
  "도구/배포": [
    "Git",
    "GitHub Actions",
    "Vercel",
    "Prettier",
    "Husky",
    "Lint-Staged",
  ],
  디자인: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  "관심 분야": [
    "웹 접근성",
    "성능 최적화",
    "사용자 경험 개선",
    "빠른 프로토타이핑",
  ],
};

export function TechStack() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">기술 스택</h2>
          <p className="mt-4 text-muted-foreground">Tech Stacks</p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
