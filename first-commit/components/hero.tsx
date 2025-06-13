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
            Seung ji, An
            <br />
            Web Frontend Developer
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>
                서비스와 사용자 사이의 접점을 디자인하는 프론트엔드 개발자
              </strong>
            </p>
            <p className="text-muted-foreground leading-relaxed text-left">
              사용자와 비즈니스 사이의 요구를 조율하며, 사용자 경험을 중심으로
              끊임없는 서비스 개선과 최적화를 추구합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed text-left">
              프로젝트 단위 교육과정을 통해 팀 단위 개발 경험을 쌓았으며, 기획 /
              개발 / 배포까지의 전 주기 운영, 특히 CI/CD 환경 구축, 코드 문서화,
              GitHub 기반 협업을 주도적으로 수행했습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed text-left">
              또한, 디자인 전공 경험을 바탕으로 UI/UX와 인터페이스 구조에 대한
              이해를 갖추고 있으며, 다양한 팀원과의 협업 속에서 현실적 구현
              가능성과 기술적 요구사항 사이의 조율을 경험했습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed text-left">
              주어진 제약 조건과 요구사항 속에서 정확한 문제 정의와 빠른
              의사결정, 그리고 상황 판단에 따른 다양한 도구를 이용한 최선의
              구현을 목표로 합니다.
            </p>
            <p className="leading-relaxed text-left italic">
              단순한 '구현자'가 아닌, 서비스의 성장에 주도적으로 기여하는 문제
              해결자가 되고자 합니다.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="mailto:dkstmdwl0615@naver.com">
                <Mail className="mr-2 h-4 w-4" />
                ansj8777@gmail.com
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/s-ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Account
              </a>
            </Button>
            <Button variant="outline" onClick={handleDownloadResume}>
              <Download className="mr-2 h-4 w-4" />
              이력서.md
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
