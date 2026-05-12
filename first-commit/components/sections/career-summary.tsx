import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { careerSummary } from "@/lib/portfolio-data";

export function CareerSummary() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">경력 요약</h2>
          <p className="mt-4 text-muted-foreground">상세 이력은 Resume 기준. 포트폴리오 내 경력 정보는 경험 성격 중심으로 축소.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {careerSummary.map((item) => (
            <Card key={item.title} className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
