import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Wrench } from "lucide-react";

const competencies = [
  {
    icon: Zap,
    title: "빠른 실행력과 사용자 중심 개발",
    items: [
      "1-4개월 단위 프로젝트 다수 경험으로 빠른 개발 주기에 익숙",
      "웹 접근성 개선: ARIA 라벨, 시맨틱 마크업으로 Lighthouse 접근성 점수 향상",
      "사용자 경험 최적화: 디자인 전공 배경을 활용한 UI/UX 개선",
      "생성형 AI활용: ChatGPT, GitHub Copilot, Claude 등을 활용한 빠른 개발",
    ],
  },
  {
    icon: Users,
    title: "팀 리딩 및 협업 경험",
    items: [
      "4인 팀 주도: 기획부터 배포까지 전체 프로세스 리딩 경험",
      "CI/CD 구축: GitHub Actions로 배포 프로세스 자동화",
      "코드 품질 관리: 문서화, 코드 리뷰, Github 중심 협업 시스템 구축",
    ],
  },
  {
    icon: Wrench,
    title: "기술적 문제 해결 능력",
    items: [
      "인증 시스템: Axios Interceptor 토큰 갱신, API 에러 핸들링",
      "상태 관리: React Hook Form, Tanstack Query를 활용한 상태 관리 경험",
      "컴포넌트 설계: useInput 등 커스텀 훅 및 재사용성과 효율성을 고려한 컴포넌트 구조 구축",
      "AI 활용 문제 해결: AI를 활용한 미습득 기술 영역에 대해서도 단계적으로 파악하여 문제를 해결",
    ],
  },
];

export function CoreCompetencies() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">핵심 역량</h2>
          <p className="mt-4 text-muted-foreground">
            Core Competencies
            <br />
            프론트엔드 개발자로서 가지는 핵심 강점과 경험
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {competencies.map((competency, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-primary p-2">
                    <competency.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{competency.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {competency.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-muted-foreground"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
