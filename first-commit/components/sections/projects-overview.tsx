import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";

export function ProjectsOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            주요 프로젝트 요약
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-6">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="space-y-4 pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="font-medium">{project.type}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {project.period}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {project.team}
                  </span>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl">
                    {project.title}
                  </CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-5 pt-0">
                {/* summary — 고정 높이 */}
                <div className="h-12 overflow-hidden">
                  <p className="text-sm font-medium leading-6 line-clamp-2">
                    {project.summary}
                  </p>
                </div>
                {/* coreProblem — 고정 높이 */}
                <div className="rounded-lg border bg-section-alt p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Core Problem
                  </p>
                  <div className="mt-2 h-10 overflow-hidden">
                    <p className="text-sm leading-5 text-muted-foreground line-clamp-2">
                      {project.coreProblem}
                    </p>
                  </div>
                </div>
                {/* keywords — 고정 높이 */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold">대표 키워드</p>
                  <div className="flex h-7 items-start overflow-hidden">
                    <div className="flex flex-wrap gap-2">
                      {project.keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {/* techStack — 고정 높이 */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold">기술 스택</p>
                  <div className="flex h-7 items-start overflow-hidden">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {/* actions */}
                <div className="flex flex-wrap gap-3 border-t pt-4">
                  <Button asChild>
                    <Link href={`/projects/${project.slug}`}>
                      상세 보기
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {project.links.service && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.links.service}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Service
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
