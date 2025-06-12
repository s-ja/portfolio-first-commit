"use client";

import { Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleDownloadResume = () => {
    // Create a simple resume download - in real implementation, you'd have an actual PDF file
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You would need to add this file to your public folder
    link.download = "안승지_이력서.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            안승지
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            프론트엔드 개발자
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>
                서비스와 사용자 사이의 접점을 디자인하는 프론트엔드 개발자
              </strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              사용자와 비즈니스 사이의 요구를 조율하며, 사용자 경험을 중심으로
              끊임없는 서비스 개선과 최적화를 추구합니다. 프로젝트 단위
              교육과정을 통해 팀 단위 개발 경험을 쌓았으며, 기획 / 개발 /
              배포까지의 전 주기 운영을 주도적으로 수행했습니다.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="mailto:dkstmdwl0615@naver.com">
                <Mail className="mr-2 h-4 w-4" />
                이메일 연락
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/s-ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub 보기
              </a>
            </Button>
            <Button variant="outline" onClick={handleDownloadResume}>
              <Download className="mr-2 h-4 w-4" />
              이력서 다운로드
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
