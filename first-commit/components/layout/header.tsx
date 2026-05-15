"use client";

import { Github, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/portfolio-data";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-10">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl font-bold">Under Construction</h1>
          <span className="text-sm text-muted-foreground">
            보수중 입니다...!
          </span>
        </div>
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:dkstmdwl0615@naver.com">
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
