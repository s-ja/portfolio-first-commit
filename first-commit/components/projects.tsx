import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ProjectImageSwiper } from "./project-image-swiper"

const projects = [
  {
    title: "Linkle",
    subtitle: "소셜 링크 공유 플랫폼",
    period: "2024.10 ~ 2025.01 (4개월)",
    team: "4인",
    role: "팀 리더, 프론트엔드 개발",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "빠른 개발 주기: 주 단위 스프린트로 기능 개발 및 배포",
      "웹 접근성 개선: ARIA 라벨, 시맨틱 마크업을 적용한 Lighthouse 접근성 점수 향상",
      "사용자 경험 최적화: 시스템 테마 자동 감지 및 localStorage를 이용한 사용자 지정 테마 적용 기능 구현",
      "CI/CD 자동화: GitHub Actions로 304개 이슈 처리, Vercel 배포 파이프라인 구축",
      "팀 리딩: 개발 과정 및 이슈 문서화, Git 브랜치 전략 및 협업 방식 수립",
      "코드 리뷰: 1주 단위 스프린트 종료 후 병합 담당 및 PR 코드 리뷰 주도적 참여 (총 516개 커밋 기여)",
    ],
    github: "https://github.com/Mt-NextJs/linkle",
    demo: null,
  },
  {
    title: "MODI",
    subtitle: "음원 거래 플랫폼",
    period: "2023.11 ~ 2023.12 (2개월)",
    team: "3인",
    role: "팀 리더, 프론트엔드 개발",
    techStack: ["React", "TypeScript", "Emotion", "Tanstack Query", "Figma"],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    achievements: [
      "인증 시스템 구축: 토큰 만료 문제를 해결하기 위한 Axios Interceptor를 활용한 자동 갱신 시스템 구현",
      "디자인 시스템: Figma 기반 컴포넌트 및 UI 디자인, 재사용성을 고려한 개발 구조 설계",
      "API 통신 최적화: Tanstack Query를 이용한 상태 관리 및 캐싱 구현",
      "팀 리딩: Agile 시스템을 기반으로 한, 1주 단위 스프린트와 데일리 스크럼으로 팀 협업 진행",
      "문서화: README 및 Wiki를 통한 개발 과정 및 기록 문서화, 개발 효율성 향상",
    ],
    github: "https://github.com/techitPlus-FE-team3/open_market_projerct",
    demo: null,
  },
  {
    title: "포인티",
    subtitle: "통증 관리 CRM",
    period: "2023.07 ~ 2023.08 (2개월)",
    team: "4인",
    role: "팀 리더, 프론트엔드 개발",
    techStack: ["React", "TUI Calendar", "Tailwind CSS"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    achievements: [
      "캘린더 대시보드 구현: 월 / 주 / 일간 일정 및 예약 현황 대시보드 구현",
      "반응형 디자인 시스템: 기존 태블릿 앱에서 웹으로 전환 과정에서, 해상도에 따른 반응형 UI 기준 설정 및 디자인 조정",
      "인증 시스템: localStorage 기반 토큰 관리 및 자동 갱신 시스템 구현",
      "팀 리딩: 4인 팀 주도로 개발 과정 및 기록 문서화, 전반적인 협업 시스템 구축",
    ],
    github: "https://github.com/pie-sfac/1-16-careMango",
    demo: null,
  },
]

export function Projects() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">주요 프로젝트</h2>
          <p className="mt-4 text-muted-foreground">교육 과정에서 진행한 핵심 프로젝트들</p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <CardHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-lg">{project.subtitle}</CardDescription>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>기간: {project.period}</span>
                          <span>팀 규모: {project.team}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span>역할: {project.role}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="mb-3 font-semibold">기술 스택</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold">주요 성과</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
                <div className="order-1 md:order-2">
                  <div className="h-full p-6">
                    <ProjectImageSwiper images={project.images} projectName={project.title} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
