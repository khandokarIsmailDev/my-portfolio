"use client";
/**
 * Hero Section — v3 refinements
 * ✅ Roboto typography (900 heading / 500 title / 400 body)
 * ✅ Neon glow profile image (blue→green pulse, no black border)
 * ✅ Neon background orbs replacing plain rounded squares
 * ✅ Corrected professional title from data
 */
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { personal } from "@/data";

export default function Hero() {
  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Grid background ───────────────────────────────── */}
      <div className="absolute inset-0 grid-bg" />

      {/* ── Neon background orbs (replaces plain square shapes) ── */}
      {/* Large blue bloom — top right */}
      <div className="neon-orb-blue absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none opacity-90" />
      {/* Green bloom — bottom left */}
      <div className="neon-orb-green absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none opacity-80" />
      {/* Purple accent — center */}
      <div className="neon-orb-purple absolute top-1/2 left-1/3 -translate-y-1/2 w-[380px] h-[280px] rounded-full pointer-events-none opacity-70" />
      {/* Extra small blue accent — bottom right */}
      <div className="neon-orb-blue absolute bottom-1/4 right-1/4 w-[240px] h-[240px] rounded-full pointer-events-none opacity-50" />

      {/* ── Subtle animated neon dots ─────────────────────── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width:  i % 2 === 0 ? "6px" : "4px",
            height: i % 2 === 0 ? "6px" : "4px",
            left:   `${12 + i * 13}%`,
            top:    `${20 + (i % 3) * 22}%`,
            background: i % 3 === 0
              ? "rgba(59,130,246,0.7)"
              : i % 3 === 1
              ? "rgba(16,185,129,0.6)"
              : "rgba(139,92,246,0.6)",
            boxShadow: i % 3 === 0
              ? "0 0 8px 2px rgba(59,130,246,0.5)"
              : i % 3 === 1
              ? "0 0 8px 2px rgba(16,185,129,0.4)"
              : "0 0 8px 2px rgba(139,92,246,0.4)",
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.8, 1] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* ── Main content ──────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT: Text ─────────────────────────────────── */}
          <div className="order-2 lg:order-1">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--aGreen)]/30 bg-[var(--aGreen)]/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--aGreen)] animate-pulse-slow" />
              <span className="text-xs text-[var(--aGreen)] font-mono font-medium tracking-wide">
                Available · Open to opportunities
              </span>
            </motion.div>

            {/* Name — Roboto 900 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.92] tracking-tighter mb-6"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}
            >
              <span className="text-gradient">{personal.name.split(" ")[0]}</span>
              <br />
              <span style={{ color: "var(--tp)" }}>{personal.name.split(" ")[1]}</span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </motion.h1>

            {/* Professional title — Roboto 500 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-10 bg-accent flex-shrink-0" />
              <p
                className="font-mono text-xs text-accent tracking-widest uppercase"
                style={{ fontWeight: 500 }}
              >
                {personal.subtitle}
              </p>
            </motion.div>

            {/* Tagline — Roboto 400 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base md:text-lg max-w-md mb-10"
              style={{
                color: "var(--ts)",
                lineHeight: 1.75,
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              {personal.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.button
                onClick={() => go("#projects")}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-6 py-3 bg-accent hover:bg-blue-500 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                style={{ fontWeight: 500 }}
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="/cv.pdf" download
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 border border-[var(--bdr)] hover:border-accent/50 rounded-xl font-medium transition-all duration-200"
                style={{ color: "var(--ts)", fontWeight: 500 }}
              >
                <Download size={15} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-5"
            >
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--tm)", fontWeight: 400 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--tp)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--tm)")}
              >
                <Github size={15} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--tm)", fontWeight: 400 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--tp)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--tm)")}
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <span className="text-sm font-mono" style={{ color: "var(--tm)" }}>
                {personal.location}
              </span>
            </motion.div>
          </div>

          {/* RIGHT: Profile image ───────────────────────── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* ── Neon glow image container ──────────────
                    No black border. Soft-corner image.
                    Neon box-shadow: blue→green animated pulse  */}
                <div
                  className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-[300px] lg:h-[340px] rounded-[1.75rem] overflow-hidden profile-neon-ring"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Khandokar Ismail — Full Stack & DevOps Engineer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle bottom fade */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/4"
                    style={{ background: "linear-gradient(to top, rgba(5,10,18,0.35), transparent)" }}
                  />
                </div>

                {/* Outer soft bloom behind image */}
                <div
                  className="absolute -inset-4 rounded-[2.5rem] -z-10 opacity-60"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(59,130,246,0.22) 0%, rgba(16,185,129,0.12) 50%, transparent 75%)",
                    filter: "blur(12px)",
                  }}
                />

                {/* Badge — Open to Work */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-2.5 border-glow shadow-xl"
                >
                  <p className="text-xs font-mono mb-0.5" style={{ color: "var(--tm)", fontWeight: 400 }}>
                    Status
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--aGreen)] animate-pulse-slow" />
                    <p className="text-xs" style={{ color: "var(--tp)", fontWeight: 500 }}>
                      Open to Work
                    </p>
                  </div>
                </motion.div>

                {/* Badge — Experience */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                  className="absolute -top-4 -right-6 glass rounded-xl px-4 py-2.5 border-glow shadow-xl"
                >
                  <p className="text-xs font-mono mb-0.5" style={{ color: "var(--tm)", fontWeight: 400 }}>
                    Experience
                  </p>
                  <p className="text-sm text-accent" style={{ fontWeight: 700 }}>5+ Years</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono" style={{ color: "var(--tm)" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--tm), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
