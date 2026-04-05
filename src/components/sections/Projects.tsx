"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data";

const icons = ["⚙️","☁️","🔗"];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full bg-accent/4 blur-[110px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel number="03" label="Projects" />
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[var(--tp)] leading-tight mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-[var(--ts)] mb-12 max-w-xl">
            Production-grade projects with real architectural decisions, not just tutorials.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}
                className="group glass rounded-2xl border-glow hover:border-accent/30 p-6 flex flex-col h-full transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg">
                    {icons[i] ?? "🛠️"}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border border-[var(--bdr)] hover:border-accent/40 flex items-center justify-center text-[var(--tm)] hover:text-[var(--tp)] transition-all opacity-0 group-hover:opacity-100">
                    <Github size={14} />
                  </a>
                </div>
                <h3 className="font-sans font-bold text-[var(--tp)] text-lg mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-[var(--ts)] leading-relaxed flex-1 mb-5">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0,4).map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-[var(--surfaceH)] border border-[var(--bdr)] text-[var(--tm)] font-mono">{t}</span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-[var(--surfaceH)] border border-[var(--bdr)] text-[var(--tm)] font-mono">+{project.stack.length-4}</span>
                  )}
                </div>
                <Link href={`/projects/${project.id}`}
                  className="flex items-center gap-2 text-sm text-accent hover:text-blue-400 transition-colors font-medium group/link">
                  View Details
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
