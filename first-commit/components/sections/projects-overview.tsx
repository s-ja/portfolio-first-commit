import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";

export function ProjectsOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">프로젝트</h2>
          <p className="mt-4 text-muted-foreground">메인: 5개 프로젝트 요약. 상세 페이지: 문제 상황, 판단 근거, 트러블슈팅 분리 서술.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{project.type}</Badge>
                  <span className="text-sm text-muted-foreground">{project.period}</span>
                  <span className="text-sm text-muted-foreground">{project.team}</span>
                </div>
                <div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6">
                <div className="space-y-4">
                  <p className="text-sm font-medium leading-relaxed">{project.summary}</p>
                  <div className="rounded-md border bg-muted/30 p-4">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">Core Problem</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.coreProblem}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold">대표 키워드</p>
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword) => (
                      <Badge key={keyword} variant="secondary">{keyword}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold">기술 스택</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <Button asChild>
                    <Link href={`/projects/${project.slug}`}>
                      상세 보기
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {project.links.github && (
                    <Button variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
