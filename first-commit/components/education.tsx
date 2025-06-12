import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">학력</h2>
          <p className="mt-4 text-muted-foreground">교육 배경</p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-primary p-2">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <CardTitle>단국대학교(죽전 캠퍼스)</CardTitle>
                  <CardDescription>4년제 대학교</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">기간</span>
                  <span className="text-muted-foreground">
                    2015.03 ~ 2022.08 (졸업)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">전공</span>
                  <span className="text-muted-foreground">패션산업디자인</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">부전공</span>
                  <span className="text-muted-foreground">
                    SW융합콘텐츠전공
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">학점</span>
                  <span className="text-muted-foreground">3.4/4.5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
