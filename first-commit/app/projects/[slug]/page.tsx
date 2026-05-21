import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProject, projects } from "@/lib/portfolio-data";

const detailSections = [
  { key: "context", title: "당시 문제 상황" },
  { key: "constraints", title: "제약 조건" },
  { key: "decisions", title: "판단 기준" },
  { key: "process", title: "해결 과정" },
  { key: "troubleshooting", title: "트러블슈팅" },
  { key: "result", title: "결과와 배운 점" },
] as const;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - First Commit`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b bg-section-alt py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8 -ml-2 px-2">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              메인으로 돌아가기
            </Link>
          </Button>
          <div className="max-w-4xl space-y-6">
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
              <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {project.subtitle}
              </p>
            </div>
            <p className="max-w-3xl text-base leading-relaxed md:text-lg">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
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
                <Button asChild>
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
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            <aside className="h-fit rounded-lg border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold">프로젝트 요약</p>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="text-muted-foreground">역할</dt>
                  <dd className="mt-1.5 font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">핵심 문제</dt>
                  <dd className="mt-1.5 leading-relaxed text-muted-foreground">
                    {project.coreProblem}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">키워드</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="space-y-6">
              {detailSections.map((section) => {
                const content = project.detail[section.key];

                return (
                  <Card key={section.key} className="border bg-card shadow-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {Array.isArray(content) ? (
                        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                          {content.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {content}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
