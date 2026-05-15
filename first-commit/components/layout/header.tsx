"use client";

import { Github, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/portfolio-data";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-10">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#top" className="flex flex-col justify-start">
          <span className="text-lg font-bold leading-none">First Commit</span>
          <span className="mt-1 text-xs text-muted-foreground">
            Frontend Portfolio
          </span>
        </a>
        <nav className="flex items-center gap-1" aria-label="주요 링크">
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="테마 변경"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}
