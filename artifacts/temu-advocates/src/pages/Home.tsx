import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Briefcase, Scale, Building, Quote } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} style={{ color: "var(--gold)" }}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 200, suffix: "+", label: "Matters Resolved" },
  { value: 8, suffix: "", label: "Practice Areas" },
  { value: 3, suffix: "", label: "Jurisdictions" },
];

const previewPractice = [
  {
    icon: Briefcase,
    name: "Corporate Law",
    desc: "Board advisory, M&A support, and governance for growing companies. We work at the intersection of legal precision and business strategy.",
    href: "/practice",
  },
  {
    icon: Scale,
    name: "Dispute Resolution",
    desc: "Commercial litigation, arbitration, and mediation. We assess realistic prospects honestly before committing to proceedings.",
    href: "/practice",
  },
  {
    icon: Building,
    name: "Real Estate & Conveyancing",
    desc: "End-to-end property transaction support. Title due diligence, sale agreements, and lease documentation handled with care.",
    href: "/practice",
  },
];

const testimonials = [
  {
    quote: "They told us early that our position had weaknesses and advised us on how to address them before the matter escalated. That kind of directness is what we needed.",
    name: "C. Njoroge",
    title: "Chief Executive, Infrastructure Group",
  },
  {
    quote: "The transaction closed on time. Their team knew the file, communicated clearly, and did not create problems where none existed.",
    name: "M. Otieno",
    title: "Director, Property Development",
  },
  {
    quote: "We had a difficult employment matter that required careful handling. The advice was precise, the process was clean, and the outcome was appropriate.",
    name: "F. Kamau",
    title: "Managing Director, Financial Services",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Temu Advocates — Clarity in Complex Matters";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center parallax-hero"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&fit=crop')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-xs font-mono uppercase tracking-widest mb-6"
                style={{ color: "var(--gold)" }}
              >
                Nairobi, Kenya · Est. 2009
              </p>
              <h1
                className="font-serif text-5xl md:text-7xl leading-tight mb-6"
                style={{ color: "var(--ivory)", fontWeight: 400 }}
              >
                Where judgment
                <br />
                <em style={{ color: "var(--gold)" }}>meets law.</em>
              </h1>
              <p
                className="text-lg mb-10 max-w-lg leading-relaxed"
                style={{ color: "rgba(247,247,245,0.8)" }}
              >
                Temu Advocates provides strategic legal counsel to businesses and individuals
                navigating complex matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/practice">
                  <button
                    className="px-7 py-3.5 text-sm font-sans font-medium transition-all duration-300"
                    style={{ backgroundColor: "var(--gold)", color: "var(--obsidian)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#c4a050"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
                  >
                    Our Practice Areas
                  </button>
                </Link>
                <Link href="/team">
                  <button
                    className="px-7 py-3.5 text-sm font-sans font-medium border transition-all duration-300"
                    style={{ borderColor: "var(--ivory)", color: "var(--ivory)", backgroundColor: "transparent" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(247,247,245,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Meet the Team
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-center items-center"
            >
              <div
                className="w-80 h-96 relative"
                style={{ border: "1px solid var(--gold)" }}
              >
                <div
                  className="absolute inset-3 flex flex-col justify-end p-6"
                  style={{ border: "1px solid rgba(214,178,94,0.3)" }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                    Our commitment
                  </p>
                  <p className="font-serif text-2xl italic" style={{ color: "var(--ivory)" }}>
                    "Clarity in complex matters."
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4" style={{ borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" }} />
                <div className="absolute -top-2 -right-2 w-4 h-4" style={{ borderTop: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" }} />
                <div className="absolute -bottom-2 -left-2 w-4 h-4" style={{ borderBottom: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" }} />
                <div className="absolute -bottom-2 -right-2 w-4 h-4" style={{ borderBottom: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" }} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} style={{ color: "var(--gold)", opacity: 0.7 }} />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: "var(--slate-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center py-6 px-4"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(214,178,94,0.2)" : "none",
                }}
              >
                <div className="font-serif text-4xl font-light mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--steel)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE PREVIEW */}
      <section className="py-24" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Focused expertise.
              <br />
              <em style={{ color: "var(--gold)" }}>Precise counsel.</em>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" staggerDelay={0.12}>
            {previewPractice.map((area) => {
              const Icon = area.icon;
              return (
                <StaggerItem key={area.name}>
                  <div
                    className="p-8 h-full transition-all duration-300 group cursor-pointer"
                    style={{
                      backgroundColor: "var(--slate-navy)",
                      borderTop: "3px solid var(--gold)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(214,178,94,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <Icon size={28} className="mb-5" style={{ color: "var(--gold)" }} />
                    <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                      {area.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--steel)" }}>
                      {area.desc}
                    </p>
                    <Link href={area.href}>
                      <span
                        className="text-sm font-sans transition-colors duration-200"
                        style={{ color: "var(--gold)" }}
                      >
                        Learn more →
                      </span>
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection className="text-center">
            <Link href="/practice">
              <span
                className="text-sm font-sans transition-colors duration-200 cursor-pointer"
                style={{ color: "var(--gold)" }}
              >
                View All Practice Areas →
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY TEMU */}
      <section className="py-24" style={{ backgroundColor: "var(--slate-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
                  alt="Office interior"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(17,19,21,0.3) 0%, transparent 100%)",
                    clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
                  }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "var(--gold)" }}>
                Why Temu
              </p>
              <h2 className="font-serif text-4xl mb-10" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                How we work.
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Judgment over precedent.",
                    desc: "We assess each matter on its actual facts, not templates. Every situation has specific circumstances that generic advice fails to account for.",
                  },
                  {
                    title: "Direct access to senior counsel.",
                    desc: "You speak with the lawyer handling your matter. Not a junior who relays messages, and not a team where responsibility diffuses.",
                  },
                  {
                    title: "Discreet by default.",
                    desc: "Confidentiality is a standard, not a feature. What happens in your matter stays in your matter.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="pl-5"
                    style={{ borderLeft: "2px solid var(--gold)" }}
                  >
                    <h3 className="font-serif text-xl mb-2" style={{ color: "var(--ivory)", fontStyle: "italic" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-24 noise-bg relative overflow-hidden"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
              Client Perspective
            </p>
            <h2 className="font-serif text-4xl" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              What clients say.
            </h2>
          </AnimatedSection>

          <div className="relative min-h-48">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === activeTestimonial ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
                style={{ pointerEvents: i === activeTestimonial ? "auto" : "none" }}
              >
                <div
                  className="p-8 lg:p-12"
                  style={{ backgroundColor: "var(--slate-navy)" }}
                >
                  <Quote size={36} className="mb-6" style={{ color: "var(--gold)", opacity: 0.6 }} />
                  <p
                    className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-6"
                    style={{ color: "var(--ivory)" }}
                  >
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-sans font-medium text-sm" style={{ color: "var(--gold)" }}>
                      {t.name}
                    </p>
                    <p className="font-sans text-xs mt-1" style={{ color: "var(--steel)" }}>
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="w-6 h-0.5 transition-all duration-300"
                style={{ backgroundColor: i === activeTestimonial ? "var(--gold)" : "rgba(214,178,94,0.3)" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--slate-navy)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="font-serif text-4xl md:text-5xl mb-6"
              style={{ color: "var(--ivory)", fontWeight: 400 }}
            >
              A complex matter requires
              <br />
              <em style={{ color: "var(--gold)" }}>a clear head.</em>
            </h2>
            <p className="text-base mb-10" style={{ color: "var(--steel)" }}>
              Reach out. We'll tell you honestly whether we can help.
            </p>
            <Link href="/contact">
              <button
                className="px-10 py-4 text-sm font-sans font-medium transition-all duration-300"
                style={{ backgroundColor: "var(--gold)", color: "var(--obsidian)" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#c4a050"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
              >
                Schedule a Consultation
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
