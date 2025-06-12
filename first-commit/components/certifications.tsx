import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Trophy } from "lucide-react"

const certifications = [
  {
    category: "자격증",
    icon: Award,
    items: [
      { name: "컴퓨터그래픽기능사", date: "2022.09", organization: "한국산업인력공단" },
      { name: "GTQi(그래픽기술자격 일러스트) 1급", date: "2022.05", organization: "한국생산성본부" },
      { name: "GTQ(그래픽기술자격) 1급", date: "2022.04", organization: "한국생산성본부" },
    ],
  },
  {
    category: "어학",
    icon: Globe,
    items: [
      { name: "TOEIC", date: "2022.08", organization: "855점" },
      { name: "TOEIC Speaking Test", date: "2021.12", organization: "140점/Intermediate High" },
    ],
  },
  {
    category: "수상",
    icon: Trophy,
    items: [{ name: "참여 교육 우수 수료상", date: "2024.02", organization: "스나이퍼팩토리/웅진씽크빅/인사이드아웃" }],
  },
]

export function Certifications() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">자격/어학/수상</h2>
          <p className="mt-4 text-muted-foreground">보유 자격증과 어학 능력, 수상 경력</p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {certifications.map((section, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-primary p-2">
                      <section.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle>{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <div className="text-xs text-muted-foreground">
                          <div>{item.date}</div>
                          <div>{item.organization}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
