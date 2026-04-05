"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { skills } from "@/data";

const cats = ["All","DevOps","Cloud","Backend","Frontend","Database","Monitoring","IaC","CI/CD"];

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute left-0 top-1/3 w-80 h-80 rounded-full bg-accentPurple/4 blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel number="02" label="Skills" />
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[var(--tp)] leading-tight mb-4">
            Tools &amp; Technologies
          </h2>
          <p className="text-[var(--ts)] mb-10 max-w-xl">
            A curated set of tools I rely on in production — from infrastructure automation to full-stack development.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map(c => (
              <motion.button key={c} onClick={() => setActive(c)} whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  active === c
                    ? "bg-accent text-white border border-accent"
                    : "border border-[var(--bdr)] text-[var(--tm)] hover:border-accent/40 hover:text-[var(--ts)]"
                }`}>
                {c}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="flex flex-wrap gap-3">
          {filtered.map((skill, i) => (
            <motion.div key={skill.name} layout
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              whileHover={{ y: -3, scale: 1.04 }}
              className="group glass rounded-xl px-4 py-3 border-glow hover:border-accent/30 cursor-default transition-all duration-200"
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${skill.color}18`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: skill.color }} />
                <span className="text-sm text-[var(--ts)] group-hover:text-[var(--tp)] transition-colors font-medium">{skill.name}</span>
              </div>
              <p className="text-xs text-[var(--tm)] mt-1 font-mono">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
