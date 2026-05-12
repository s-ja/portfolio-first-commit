import { Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t py-10 md:px-10">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">안승지 · Frontend Developer</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            포트폴리오: 프로젝트 문제 맥락과 해결 과정 중심. Resume: 경력과 이력 정보 중심.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={contact.resume} download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
