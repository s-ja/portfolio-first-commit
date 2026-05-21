import { Badge } from "@/components/ui/badge";
import { techGroups } from "@/lib/portfolio-data";

export function TechStack() {
  return (
    <section className="bg-section-alt py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            기술 스택
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            최신 이력서 기준 기술 분류. 프로젝트 상세에서 사용 맥락 보완.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12">
          {techGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
