"use client";
/**
 * Contact Section
 * Uses EmailJS to send emails directly to ismailkhandokar0@gmail.com
 * – Loading state, success message, error handling
 * – No backend required
 *
 * Setup: add your EmailJS keys to .env.local:
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 *   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 *   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { personal } from "@/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form,   setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Dynamically import EmailJS so it only loads client-side
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID",
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          to_email:     "ismailkhandokar0@gmail.com",
          reply_to:     form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY"
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/30 to-transparent pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel number="05" label="Contact" />
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[var(--tp)] leading-tight mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-[var(--ts)] mb-14 max-w-xl">
            Open to full-time roles, remote work, and interesting projects. Drop me a message — I reply within 24 hours.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ── Left: contact info cards ── */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {[
                { icon: Mail,     label: "Email",    value: personal.email,                           href: `mailto:${personal.email}` },
                { icon: Github,   label: "GitHub",   value: "github.com/khandokarIsmailDev",          href: personal.github },
                { icon: Linkedin, label: "LinkedIn", value: "khandokar-ismail-87a280301",             href: personal.linkedin },
                { icon: MapPin,   label: "Location", value: personal.location,                        href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div key={label} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
                  className="glass rounded-xl border-glow hover:border-accent/30 p-5 flex items-center gap-4 transition-colors duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--tm)] font-mono mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-[var(--ts)] hover:text-[var(--tp)] transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[var(--ts)]">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* ── Right: Email form ── */}
          <FadeIn delay={0.2} direction="left">
            <form ref={formRef} onSubmit={handleSubmit}
              className="glass rounded-2xl border-glow p-8 space-y-5">

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[var(--tm)] font-mono mb-2 block">Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name" required
                    className="w-full bg-[var(--surface)] border border-[var(--bdr)] rounded-xl px-4 py-3 text-sm text-[var(--tp)] placeholder:text-[var(--tm)] focus:outline-none focus:border-accent/50 transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-[var(--tm)] font-mono mb-2 block">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com" required
                    className="w-full bg-[var(--surface)] border border-[var(--bdr)] rounded-xl px-4 py-3 text-sm text-[var(--tp)] placeholder:text-[var(--tm)] focus:outline-none focus:border-accent/50 transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-xs text-[var(--tm)] font-mono mb-2 block">Message</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or role..." required
                  className="w-full bg-[var(--surface)] border border-[var(--bdr)] rounded-xl px-4 py-3 text-sm text-[var(--tp)] placeholder:text-[var(--tm)] focus:outline-none focus:border-accent/50 transition-colors resize-none" />
              </div>

              {/* Submit button */}
              <motion.button type="submit" disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  status === "success" ? "bg-[var(--aGreen)] text-white" :
                  status === "error"   ? "bg-red-500 text-white" :
                  "bg-accent hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-accent/25"
                } disabled:opacity-60 disabled:cursor-not-allowed`}>
                {status === "loading" && <Loader2 size={15} className="animate-spin" />}
                {status === "success" && <CheckCircle size={15} />}
                {status === "error"   && <AlertCircle size={15} />}
                {status === "idle"    && <Send size={15} />}
                {status === "loading" ? "Sending…"       : ""}
                {status === "success" ? "Message Sent!"  : ""}
                {status === "error"   ? "Failed — retry" : ""}
                {status === "idle"    ? "Send Message"   : ""}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-center text-[var(--aGreen)] font-mono">
                  ✓ Message delivered to ismailkhandokar0@gmail.com
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-center text-red-400 font-mono">
                  ✗ Something went wrong. Try emailing directly: ismailkhandokar0@gmail.com
                </motion.p>
              )}

              <p className="text-xs text-[var(--tm)] text-center font-mono">
                Powered by EmailJS · No data stored
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
