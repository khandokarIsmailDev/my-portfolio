"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"      },
  { label: "Projects",   href: "#projects"    },
  { label: "Experience", href: "#experience"  },
  { label: "Contact",    href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { theme, toggle }       = useTheme();
  const router                  = useRouter();
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // অন্য page থেকে home এ redirect হওয়ার পর scroll করবে
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && pathname === "/") {
      // ছোট delay দিতে হবে যাতে page fully render হয়
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        // URL থেকে hash সরিয়ে দাও (optional, clean URL এর জন্য)
        history.replaceState(null, "", "/");
      }, 100);
    }
  }, [pathname]);

  const go = (href: string) => {
    setOpen(false);

    if (pathname === "/") {
      // Same page এ আছি — সরাসরি scroll
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // অন্য page এ আছি — home এ নিয়ে যাও hash সহ
      router.push(`/${href}`);
    }
  };

  const goHome = () => {
    setOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-[var(--bdr)] py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button onClick={goHome}
            className="flex items-center gap-2 group" whileHover={{ scale: 1.02 }}>
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Terminal size={14} className="text-accent" />
            </div>
            <span className="font-sans font-bold text-sm text-[var(--tp)] tracking-wide">
              KI<span className="text-accent">.</span>dev
            </span>
          </motion.button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.button key={l.href} onClick={() => go(l.href)}
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="px-4 py-2 text-sm text-[var(--ts)] hover:text-[var(--tp)] transition-colors rounded-lg hover:bg-[var(--surfaceH)]">
                {l.label}
              </motion.button>
            ))}

            {/* Theme toggle */}
            <motion.button onClick={toggle} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="ml-2 w-9 h-9 rounded-lg border border-[var(--bdr)] hover:border-accent/50 flex items-center justify-center text-[var(--ts)] hover:text-accent transition-all duration-200"
              aria-label="Toggle theme">
              <AnimatePresence mode="wait">
                <motion.span key={theme}
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.a href="/cv.pdf" download
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="ml-2 px-4 py-2 text-sm font-medium bg-accent hover:bg-blue-500 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25">
              Download CV
            </motion.a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggle}
              className="w-9 h-9 rounded-lg border border-[var(--bdr)] flex items-center justify-center text-[var(--ts)]">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button className="text-[var(--ts)]" onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 glass md:hidden">
            <div className="flex flex-col items-center gap-2 pt-8">
              {links.map((l) => (
                <button key={l.href} onClick={() => go(l.href)}
                  className="w-full max-w-xs text-center py-4 text-lg text-[var(--ts)] hover:text-[var(--tp)] transition-colors font-sans">
                  {l.label}
                </button>
              ))}
              <a href="/cv.pdf" download className="mt-4 px-8 py-3 bg-accent text-white rounded-xl font-medium">
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}