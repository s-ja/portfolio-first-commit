import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const experiences = [
  {
    title: "프론트엔드 프로젝트 캠프 : Next.js 3기",
    organization: "스나이퍼팩토리",
    period: "2024.09.20 ~ 2024.11.01 (약 1개월)",
  },
  {
    title: "앱/웹 개발자 인턴형 프로그램 과정",
    organization: "스나이퍼팩토리",
    period: "2023.12.18 ~ 2024.02.16 (약 2개월)",
  },
  {
    title: "프론트엔드 스쿨 플러스 1기",
    organization: "멋쟁이사자처럼",
    period: "2023.10.23 ~ 2023.12.26 (약 2개월)",
  },
  {
    title: "10주 완성! 프로젝트 캠프 : 프론트엔드_리액트",
    organization: "스나이퍼팩토리",
    period: "2023.06.05 ~ 2023.08.11 (약 2개월)",
  },
  {
    title: "프론트엔드 스쿨 4기",
    organization: "멋쟁이사자처럼",
    period: "2022.11.28 ~ 2023.03.29 (약 4개월)",
  },
  {
    title: "스마트 UX/UI 교육 과정",
    organization: "한울직업전문학교",
    period: "2022.02.09 ~ 2022.07.20 (약 5개월)",
  },
];

export function Experience() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">수료 교육</h2>
          <p className="mt-4 text-muted-foreground">
            프론트엔드 개발 역량 강화를 위한 교육 과정들
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((experience, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-lg bg-primary p-2">
                      <BookOpen className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-lg leading-tight">
                        {experience.title}
                      </CardTitle>
                      <CardDescription>
                        {experience.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {experience.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
