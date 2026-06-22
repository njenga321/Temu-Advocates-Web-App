import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Briefcase, Scale, Building, Users, Landmark, Shield, Heart, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { practiceAreas } from "../data/practiceAreas";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Briefcase,
  Scale,
  Building,
  Users,
  Landmark,
  Shield,
  Heart,
  FileText,
};

export default function Practice() {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Practice Areas — Temu Advocates";
  }, []);

  return (
    <main style={{ backgroundColor: "var(--obsidian)" }}>
      {/* PAGE HERO */}
      <section
        className="pt-36 pb-20 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1920&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(17,19,21,0.85)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--steel)" }}>
              <Link href="/">
                <span className="cursor-pointer" style={{ color: "var(--steel)" }}>Home</span>
              </Link>
              {" "}&rsaquo;{" "}
              <span style={{ color: "var(--gold)" }}>Practice Areas</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Practice Areas
            </h1>
            <div className="w-16 h-0.5 mt-4" style={{ backgroundColor: "var(--gold)" }} />
            <p className="mt-6 text-base max-w-xl" style={{ color: "var(--steel)" }}>
              Eight areas of practice. Each built around a specific set of client needs, handled by counsel with relevant experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PRACTICE AREAS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.07}>
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.icon] || Briefcase;
              const isOpen = expanded === area.id;

              return (
                <StaggerItem key={area.id}>
                  <div
                    className="transition-all duration-300"
                    style={{
                      backgroundColor: "var(--slate-navy)",
                      border: isOpen ? "1px solid var(--gold)" : "1px solid rgba(214,178,94,0.1)",
                    }}
                  >
                    <button
                      className="w-full text-left p-8 flex items-start gap-5"
                      onClick={() => setExpanded(isOpen ? null : area.id)}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Icon size={24} style={{ color: "var(--gold)" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl mb-2" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                          {area.name}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>
                          {area.short}
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {isOpen ? (
                          <ChevronUp size={18} style={{ color: "var(--gold)" }} />
                        ) : (
                          <ChevronDown size={18} style={{ color: "var(--steel)" }} />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        className="px-8 pb-8"
                        style={{ borderTop: "1px solid rgba(214,178,94,0.15)" }}
                      >
                        <p className="text-sm leading-relaxed mt-6 mb-6" style={{ color: "var(--ivory)", opacity: 0.85 }}>
                          {area.long}
                        </p>
                        <ul className="space-y-2">
                          {area.details.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-sm" style={{ color: "var(--steel)" }}>
                              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                              {d}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8">
                          <Link href="/contact">
                            <button
                              className="px-6 py-2.5 text-xs font-mono uppercase tracking-widest border transition-all duration-300"
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
                              Enquire About This Area
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--slate-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Not sure which area applies?
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--steel)" }}>
              Describe your matter and we'll point you in the right direction.
            </p>
            <Link href="/contact">
              <button
                className="px-8 py-3.5 text-sm font-sans transition-all duration-300"
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
