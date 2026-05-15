import { contact } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t py-10 md:px-10">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">안승지 - Frontend Developer</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Portfolio: First Commit - 새로운 시작
          </p>
        </div>
        <ul className="flex flex-col">
          <li>
            <a
              className="text-xs text-muted-foreground"
              href={`mailto:${contact.email}`}
            >
              <span className="font-bold">- Email: </span>
              <span>{contact.email}</span>
            </a>
          </li>
          <li>
            <a
              className="text-xs text-muted-foreground"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold">- GitHub: </span>
              <span>{contact.github}</span>
            </a>
          </li>
          <li>
            <a
              className="text-xs text-muted-foreground"
              href={contact.resume}
              download
            >
              <span className="font-bold">- Resume: </span>
              <span>{contact.resume}</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
