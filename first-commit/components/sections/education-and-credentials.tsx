import { Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contact, credentials, education } from "@/lib/portfolio-data";

export function EducationAndCredentials() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">교육 및 자격</h2>
          <p className="mt-4 text-muted-foreground">이력서 중복 정보 축소. 채용 검토에 필요한 보조 정보만 유지.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="text-xl">{education.school}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{education.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{education.degree}</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="text-xl">자격 / 어학 / 수상</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">요약 정보</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {credentials.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" asChild>
                <a href={contact.resume} download>자세한 이력은 Resume에서 확인</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
