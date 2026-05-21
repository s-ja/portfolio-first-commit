import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { credentials, education } from "@/lib/portfolio-data";
import { Award, GraduationCap } from "lucide-react";

export function EducationAndCredentials() {
  return (
    <section className="bg-section-alt py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Education & Certifications
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            교육 및 학력, 자격
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <Card className="border bg-card shadow-sm transition-shadow hover:shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold sm:text-xl">
                    {education.school}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {education.period}
              </p>
            </CardContent>
          </Card>
          <Card className="border bg-card shadow-sm transition-shadow hover:shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold sm:text-xl">
                    자격 / 어학 / 수상
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <ul className="space-y-3">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
