import { Download, Github, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Vue3</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">안승지</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">Frontend Developer · 프론트엔드 개발자</p>
          <p className="mx-auto mt-8 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
            복잡한 데이터와 운영 흐름을 사용자 판단 비용이 낮은 화면 구조로 전환
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            이력서의 이력 나열 반복 최소화. 프로젝트별 문제 상황, 제약 조건, 판단 근거, 트러블슈팅 중심 구성.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
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
