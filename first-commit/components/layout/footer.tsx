import { contact } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-base font-semibold">
              안승지 - Frontend Developer
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Portfolio: First Commit - 새로운 시작
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={`mailto:${contact.email}`}
              >
                <span className="font-medium text-foreground">Email:</span>
                <span className="ml-2">{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-medium text-foreground">GitHub:</span>
                <span className="ml-2">{contact.github}</span>
              </a>
            </li>
            <li>
              <a
                className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={contact.resume}
                download
              >
                <span className="font-medium text-foreground">Resume:</span>
                <span className="ml-2">Download PDF</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 안승지. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
