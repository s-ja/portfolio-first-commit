import { GitBranch, LayoutDashboard, Route } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { highlights } from "@/lib/portfolio-data";

const icons = [LayoutDashboard, Route, GitBranch];

export function Highlights() {
  return (
    <section className="bg-section-alt py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            핵심 강점
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            이력서 역량 목록의 반복 대신, 프로젝트에서 검증 가능한 작업 기준
            3개로 압축
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = icons[index];

            return (
              <Card
                key={highlight.title}
                className="border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold leading-tight sm:text-xl">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight.summary}
                  </p>
                  <ul className="space-y-3">
                    {highlight.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{point}</span>
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
