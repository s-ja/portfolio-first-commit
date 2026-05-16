import { Download, Github, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="px-3 py-1">
              React
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              Next.js
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              Vue3
            </Badge>
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            안승지
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Frontend Developer
          </p>
          <p className="mx-auto mt-10 max-w-3xl text-pretty text-xl font-medium leading-relaxed sm:text-2xl md:text-3xl lg:leading-snug">
            복잡한 데이터와 운영 흐름을
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">
              사용자 판단 비용이 낮은 화면 구조로 전환
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            이력서의 이력 나열 반복 최소화. 프로젝트별 문제 상황, 제약 조건,
            판단 근거, 트러블슈팅 중심 구성.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={contact.resume} download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
