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

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - 안승지 포트폴리오`,
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
    <main className="min-h-screen">
      <section className="border-b bg-muted/30 py-10 md:py-14">
        <div className="container mx-auto">
          <Button variant="ghost" asChild className="mb-8 px-0">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              메인으로 돌아가기
            </Link>
          </Button>
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{project.type}</Badge>
              <span className="text-sm text-muted-foreground">{project.period}</span>
              <span className="text-sm text-muted-foreground">{project.team}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{project.subtitle}</p>
            </div>
            <p className="max-w-3xl text-lg leading-relaxed">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.links.github && (
                <Button variant="outline" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-lg border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold">프로젝트 요약</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">역할</dt>
                <dd className="mt-1 font-medium">{project.role}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">핵심 문제</dt>
                <dd className="mt-1 leading-relaxed">{project.coreProblem}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">키워드</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.keywords.map((keyword) => (
                    <Badge key={keyword} variant="outline">{keyword}</Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>

          <div className="space-y-6">
            {detailSections.map((section) => {
              const content = project.detail[section.key];

              return (
                <Card key={section.key} className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Array.isArray(content) ? (
                      <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {content.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
