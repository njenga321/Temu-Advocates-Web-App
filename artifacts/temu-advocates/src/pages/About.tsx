import { useEffect } from "react";
import { Link } from "wouter";
import { Target, Lock, Award } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const timeline = [
  { year: "2009", event: "Firm founded in Nairobi" },
  { year: "2012", event: "Expanded into commercial dispute resolution" },
  { year: "2016", event: "Real estate practice formalized" },
  { year: "2019", event: "Regional matters across East Africa" },
  { year: "2023", event: "Corporate advisory practice launched" },
  { year: "2025", event: "15 years of practice" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "We think before we advise. Legal work that is fast but wrong is not a service — it is a liability. Every position we take is considered, and every document we produce reflects that standard. We would rather tell a client their position is weak than advise them into avoidable difficulty.",
  },
  {
    icon: Lock,
    title: "Discretion",
    desc: "What happens in your matter stays in your matter. This is not a policy we announce — it is how we operate. Clients share sensitive information to receive legal advice. That information does not travel further than the work requires. The firm's reputation depends on it.",
  },
  {
    icon: Award,
    title: "Accountability",
    desc: "We own our positions and our outcomes. If we made an error in judgment, we say so. If the strategy we recommended did not achieve the result, we do not attribute it to the courts or the other side. Accountability is what makes advice worth taking seriously.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About — Temu Advocates";
  }, []);

  return (
    <main style={{ backgroundColor: "var(--obsidian)" }}>
      {/* PAGE HERO */}
      <section
        className="pt-36 pb-20 relative"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--steel)" }}>
              <Link href="/">
                <span className="cursor-pointer transition-colors duration-200 hover:text-gold" style={{ color: "var(--steel)" }}>Home</span>
              </Link>
              {" "}&rsaquo;{" "}
              <span style={{ color: "var(--gold)" }}>About</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              About the Firm
            </h1>
            <div className="w-16 h-0.5 mt-4" style={{ backgroundColor: "var(--gold)" }} />
          </AnimatedSection>
        </div>
      </section>

      {/* FIRM STORY */}
      <section className="py-20" style={{ backgroundColor: "var(--slate-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-96 lg:h-[540px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80&fit=crop"
                  alt="Courtroom"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(17,19,21,0.25) 0%, transparent 60%)" }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
                Our Story
              </p>
              <h2 className="font-serif text-4xl mb-8" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                Built on clarity.
                <br />
                <em style={{ color: "var(--gold)" }}>Shaped by experience.</em>
              </h2>
              <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--steel)" }}>
                <p>
                  Temu Advocates was established in 2009 to serve a specific kind of client: businesses and individuals who require legal counsel that is direct, well-reasoned, and precisely calibrated to their actual situation. The firm was built on the observation that legal services often drift toward what is comfortable to say rather than what needs to be said.
                </p>
                <p>
                  The practice has grown across corporate and commercial law, dispute resolution, real estate, and private client work. Each area was added when the demand from existing clients made it clear that maintaining a generalist approach was no longer adequate — and when we had counsel who could meet the standard we required.
                </p>
                <p>
                  Today, the firm operates across multiple jurisdictions in East Africa. The principles that shaped the founding remain operational: senior lawyers handle matters directly, advice is given honestly, and the firm's reputation is not something we trade away for short-term client retention.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Our values.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={val.title}>
                  <div
                    className="p-8 h-full"
                    style={{ backgroundColor: "var(--slate-navy)", borderTop: "3px solid var(--gold)" }}
                  >
                    <Icon size={28} className="mb-5" style={{ color: "var(--gold)" }} />
                    <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                      {val.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>
                      {val.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24" style={{ backgroundColor: "var(--slate-navy)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
              History
            </p>
            <h2 className="font-serif text-4xl" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              15 years in practice.
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ backgroundColor: "var(--gold)", opacity: 0.4 }}
            />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className="flex gap-8 pb-12 relative">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-3 h-3 rounded-full mt-1.5 ring-4"
                        style={{
                          backgroundColor: "var(--gold)",
                          ringColor: "rgba(214,178,94,0.2)",
                          boxShadow: "0 0 0 4px rgba(214,178,94,0.15)",
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <span
                        className="text-xs font-mono uppercase tracking-widest block mb-1"
                        style={{ color: "var(--gold)" }}
                      >
                        {item.year}
                      </span>
                      <p className="font-serif text-xl" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                        {item.event}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Let us know what you're dealing with.
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--steel)" }}>
              We'll tell you honestly whether it's something we can help with.
            </p>
            <Link href="/contact">
              <button
                className="px-8 py-3.5 text-sm font-sans border transition-all duration-300"
                style={{ borderColor: "var(--gold)", color: "var(--gold)", backgroundColor: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--obsidian)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--gold)";
                }}
              >
                Get in Touch
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
