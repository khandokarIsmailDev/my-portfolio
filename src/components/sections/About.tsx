"use client";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { personal } from "@/data";
import { MapPin, Mail, Phone } from "lucide-react";

const highlights = [
  { label: "5+",  sub: "Years Experience"   },
  { label: "20+", sub: "Projects Delivered" },
  { label: "5★",  sub: "Fiverr Rating"      },
  { label: "7",   sub: "Microservices Built" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-accent/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn><SectionLabel number="01" label="About" /></FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[var(--tp)] leading-tight mb-6">
                Building systems that{" "}
                <span className="text-gradient-blue">scale under pressure</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--ts)] leading-relaxed mb-5">{personal.summary}</p>
              <p className="text-[var(--ts)] leading-relaxed">
                I thrive at the intersection of software engineering and DevOps — designing services that are observable, maintainable, and resilient. From distributed tracing with OpenTelemetry to provisioning AWS infrastructure with Pulumi, I care deeply about the full lifecycle of a system.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 space-y-3">
                {[
                  { icon: Mail,  value: personal.email,  href: `mailto:${personal.email}` },
                  { icon: Phone, value: personal.phone,  href: `tel:${personal.phone}`    },
                  { icon: MapPin,value: personal.location, href: null },
                ].map(({ icon: Icon, value, href }) => (
                  <div key={value} className="flex items-center gap-3">
                    <Icon size={15} className="text-accent flex-shrink-0" />
                    {href
                      ? <a href={href} className="text-sm text-[var(--ts)] hover:text-[var(--tp)] transition-colors">{value}</a>
                      : <span className="text-sm text-[var(--ts)]">{value}</span>
                    }
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25} direction="left">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="glass rounded-2xl p-6 border-glow hover:border-accent/30 transition-all duration-300 group">
                  <p className="font-sans text-4xl font-extrabold text-accent mb-1 group-hover:scale-105 transition-transform origin-left">{h.label}</p>
                  <p className="text-sm text-[var(--tm)]">{h.sub}</p>
                </div>
              ))}
              <div className="col-span-2 glass rounded-2xl p-6 border-glow hover:border-[var(--aGreen)]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--aGreen)]/10 border border-[var(--aGreen)]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--tp)] mb-1 font-sans">End-to-End Ownership</p>
                    <p className="text-xs text-[var(--tm)] leading-relaxed">
                      From system design and API architecture to Docker containerization, CI/CD pipelines, and cloud deployment — I own the full lifecycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
