import { Badge } from "@/components/ui/badge";
import { techGroups } from "@/lib/portfolio-data";

export function TechStack() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">기술 스택</h2>
          <p className="mt-4 text-muted-foreground">최신 이력서 기준 기술 분류. 프로젝트 상세에서 사용 맥락 보완.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {techGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
