import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { personal } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bdr)] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Terminal size={14} className="text-accent" />
          </div>
          <div>
            <p className="text-sm font-sans font-semibold text-[var(--tp)]">Khandokar Ismail</p>
            <p className="text-xs text-[var(--tm)]">Full Stack · DevOps · Cloud</p>
          </div>
        </div>
        <p className="text-xs text-[var(--tm)] text-center">
          © {new Date().getFullYear()} Khandokar Ismail. Built with Next.js &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Github,   href: personal.github },
            { icon: Linkedin, href: personal.linkedin },
            { icon: Mail,     href: `mailto:${personal.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-[var(--bdr)] hover:border-accent/50 flex items-center justify-center text-[var(--tm)] hover:text-accent transition-all duration-200 hover:bg-accent/5">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
