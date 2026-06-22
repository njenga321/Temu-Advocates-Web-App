import { useEffect } from "react";
import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import { teamData } from "../data/teamData";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";

export default function Team() {
  useEffect(() => {
    document.title = "Our Team — Temu Advocates";
  }, []);

  return (
    <main style={{ backgroundColor: "var(--obsidian)" }}>
      {/* PAGE HERO */}
      <section
        className="pt-36 pb-20 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
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
              <span style={{ color: "var(--gold)" }}>Our Team</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mb-3" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              The people behind the work.
            </h1>
            <div className="w-16 h-0.5 mt-4" style={{ backgroundColor: "var(--gold)" }} />
            <p className="mt-6 text-base max-w-xl" style={{ color: "var(--steel)" }}>
              Senior counsel. No hand-offs to juniors without your knowledge.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {teamData.map((member) => (
              <StaggerItem key={member.id}>
                <div
                  className="flex flex-col sm:flex-row gap-0 overflow-hidden h-full transition-all duration-300"
                  style={{ backgroundColor: "var(--slate-navy)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(214,178,94,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Photo */}
                  <div className="sm:w-48 flex-shrink-0">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-56 sm:h-full object-cover object-center"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 flex flex-col justify-between" style={{ borderTop: "3px solid var(--gold)" }}>
                    <div>
                      <h3 className="font-serif text-2xl mb-1" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
                        {member.title}
                      </p>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--steel)" }}>
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {member.specializations.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 text-xs font-mono"
                            style={{
                              border: "1px solid rgba(214,178,94,0.3)",
                              color: "var(--gold)",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={member.linkedin}
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors duration-200 w-fit"
                      style={{ color: "var(--steel)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--steel)"; }}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={14} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--slate-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Ready to speak with us?
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--steel)" }}>
              Contact us and we'll connect you with the right person for your matter.
            </p>
            <Link href="/contact">
              <button
                className="px-8 py-3.5 text-sm font-sans transition-all duration-300"
                style={{ backgroundColor: "var(--gold)", color: "var(--obsidian)" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#c4a050"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
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
