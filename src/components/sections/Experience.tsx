"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute left-1/4 top-0 w-80 h-80 rounded-full bg-[var(--aGreen)]/3 blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel number="04" label="Experience" />
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[var(--tp)] leading-tight mb-4">My journey</h2>
          <p className="text-[var(--ts)] mb-16 max-w-xl">Years of building real systems, shipping to production, and growing through challenges.</p>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-[var(--bdr)] to-transparent" />
          <div className="space-y-12 pl-8 md:pl-20">
            {experience.map((exp, i) => <TimelineItem key={i} exp={exp} index={i} />)}

            {/* Education */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute -left-8 md:-left-14 top-1 w-3 h-3 rounded-full border-2 border-[var(--tm)] bg-[var(--bg)]" />
                <div className="glass rounded-2xl border-glow p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-sans font-bold text-[var(--tp)] text-lg">B.Sc. Physics — Appeared, Final Year</h3>
                      <p className="text-sm text-[var(--tm)] font-mono mt-0.5">Gurudayal Government College · National University, Bangladesh</p>
                    </div>
                    <span className="font-mono text-xs text-[var(--tm)] px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--bdr)] whitespace-nowrap">2018 – Present</span>
                  </div>
                  <p className="text-sm text-[var(--ts)] leading-relaxed">
                    Pursuing a physics degree while simultaneously working full-time as a developer — demonstrating strong discipline, time management, and self-driven learning.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative">
      <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute -left-8 md:-left-14 top-1 w-3 h-3 rounded-full bg-accent border-2 border-[var(--bg)] shadow-lg shadow-accent/30" />
      <div className="glass rounded-2xl border-glow hover:border-accent/25 p-6 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-sans font-bold text-[var(--tp)] text-lg">{exp.title}</h3>
            <p className="text-sm text-accent font-mono mt-0.5">{exp.company}</p>
            <p className="text-xs text-[var(--tm)] font-mono">{exp.location}</p>
          </div>
          <span className="font-mono text-xs text-[var(--tm)] px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--bdr)] whitespace-nowrap">{exp.year}</span>
        </div>
        <p className="text-sm text-[var(--ts)] leading-relaxed mb-4">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-mono">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
