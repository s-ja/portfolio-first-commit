import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/portfolio-data";

export function CareerSummary() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            경력 및 수료 교육
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {experience
            .filter((item) => item.featured)
            .map((item) => (
              <Card
                key={item.title}
                className="border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg font-semibold leading-tight sm:text-xl">
                        {item.organization} {item.title}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.role}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
