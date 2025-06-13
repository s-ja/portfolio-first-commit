"use client";

import { Github, Mail, Phone, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/안승지_이력서_First Commit.md"; // in public folder
    link.download = "안승지_이력서_First Commit.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">First Commit</h1>
          <span className="text-sm text-muted-foreground">새로운 시작</span>
        </div>
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:dkstmdwl0615@naver.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="tel:010-8642-8777">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/s-ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
