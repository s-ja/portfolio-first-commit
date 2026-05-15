import { GitBranch, LayoutDashboard, Route } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { highlights } from "@/lib/portfolio-data";

const icons = [LayoutDashboard, Route, GitBranch];

export function Highlights() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">핵심 강점</h2>
          <p className="mt-4 text-muted-foreground">
            이력서 역량 목록의 반복 대신, 프로젝트에서 검증 가능한 작업 기준
            3개로 압축
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = icons[index];

            return (
              <Card key={highlight.title} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight.summary}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {highlight.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
