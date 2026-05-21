import { Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance">
            프론트엔드 개발자 안승지의 포트폴리오 입니다
          </h1>
          <div>
            <h2 className="tracking-tight text-muted-foreground sm:text-4xl">
              Under Construction...
            </h2>
            <span className="text-sm text-muted-foreground">
              (보수중 입니다)
            </span>
          </div>
          <div className="inline-block text-sm mt-2">
            <p>Frontend Developer | 프론트엔드 개발자</p>
            <div className="flex flex-wrap justify-between mt-2 text-muted-foreground">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-pretty font-bold text-xl leading-relaxed sm:text-2xl md:text-3xl lg:leading-snug">
            서비스와 사용자 사이의 접점을 디자인하는 프론트엔드 개발자
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            기술적 구현에 그치지 않고, 서비스로서 사용자에게 어떻게 다가갈지
            고민합니다.
            <br />
            단순한 코드 구현을 넘어, 서비스의 지속 가능한 성장을 위한 문제
            해결자가 되고자 합니다.
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
