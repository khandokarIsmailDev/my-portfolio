import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data";

type Project = typeof projects[0];

export default function ProjectDetail({ project }: { project: Project }) {
  if (!project) return null;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-textPrimary transition-colors mb-8 group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-accent/70">03</span>
              <div className="h-px w-8 bg-accent/30" />
              <span className="font-mono text-xs text-textMuted uppercase tracking-widest">Project Detail</span>
            </div>

            <h1 className="font-sans text-4xl md:text-6xl font-800 text-textPrimary leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-textSecondary leading-relaxed max-w-2xl mb-8">
              {project.shortDesc}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-mono">
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                <Github size={15} />
                View on GitHub
              </a>
              {"live" in project && project.live && (
                <a
                  href={project.live as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent/50 text-textSecondary hover:text-textPrimary rounded-xl text-sm font-medium transition-all duration-200"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          {/* Screenshot placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl border-glow overflow-hidden"
          >
            <div className="h-3 bg-surface border-b border-border flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-surface to-bg">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🖼️</span>
                </div>
                <p className="text-sm text-textMuted font-mono">Project Screenshot</p>
              </div>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl border-glow p-8"
          >
            <h2 className="font-sans text-2xl font-700 text-textPrimary mb-4">Overview</h2>
            <p className="text-textSecondary leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Problem → Solution */}
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl border-glow p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <span className="text-sm">⚠️</span>
                </div>
                <h2 className="font-sans text-xl font-700 text-textPrimary">Problem</h2>
              </div>
              <p className="text-textSecondary leading-relaxed text-sm">{project.problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-2xl border-glow p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accentGreen/10 border border-accentGreen/20 flex items-center justify-center">
                  <span className="text-sm">✅</span>
                </div>
                <h2 className="font-sans text-xl font-700 text-textPrimary">Solution</h2>
              </div>
              <p className="text-textSecondary leading-relaxed text-sm">{project.solution}</p>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="glass rounded-2xl border-glow p-8"
          >
            <h2 className="font-sans text-2xl font-700 text-textPrimary mb-5">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((t) => (
                <div key={t} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surfaceHigh border border-border">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-textSecondary font-mono">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Back button */}
          <div className="pt-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-textPrimary transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((p) => ({ params: { id: p.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.id === params?.id) ?? null;
  return { props: { project } };
};
