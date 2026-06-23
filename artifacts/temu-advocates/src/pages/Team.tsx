import { useEffect } from "react";
import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import { teamData } from "../data/teamData";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import amaraPhoto from "../assets/advocate-amara.jpg";
import jamesPhoto from "../assets/advocate-james.jpg";
import wanjiruPhoto from "../assets/advocate-wanjiru.jpg";
import dariusPhoto from "../assets/advocate-darius.jpg";

const photoMap: Record<string, string> = {
  "1": amaraPhoto,
  "2": jamesPhoto,
  "3": wanjiruPhoto,
  "4": dariusPhoto,
};

export default function Team() {
  useEffect(() => { document.title = "Our Team — Temu Advocates"; }, []);

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
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(11,16,22,0.88)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "rgba(247,247,245,0.45)" }}>
              <Link href="/"><span className="cursor-pointer transition-colors hover:text-gold" style={{ color: "rgba(247,247,245,0.45)" }}>Home</span></Link>
              {" "}&rsaquo;{" "}
              <span style={{ color: "var(--gold)" }}>Our Team</span>
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-3" style={{ color: "#F7F7F5", fontWeight: 400 }}>
              The people behind the work.
            </h1>
            <div className="gold-rule" />
            <p className="mt-2 text-base max-w-xl" style={{ color: "rgba(247,247,245,0.6)" }}>
              Senior counsel. No hand-offs to juniors without your knowledge.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {teamData.map((member) => (
              <StaggerItem key={member.id}>
                <div
                  className="flex flex-col sm:flex-row overflow-hidden transition-all duration-300 h-full"
                  style={{
                    backgroundColor: "var(--slate-navy)",
                    borderLeft: "3px solid var(--gold)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(214,178,94,0.12)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.3)"; }}
                >
                  {/* Square photo */}
                  <div
                    className="flex-shrink-0 w-full sm:w-44 md:w-48 overflow-hidden"
                    style={{ aspectRatio: "1/1", minHeight: "180px" }}
                  >
                    <img
                      src={photoMap[member.id] || member.photo}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-5 sm:p-6 flex-1 min-w-0">
                    <div>
                      <h3 className="font-serif text-xl mb-0.5 leading-tight" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
                        {member.title}
                      </p>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--steel)" }}>
                        {member.bio}
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specializations.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 text-xs font-mono"
                            style={{ border: "1px solid rgba(214,178,94,0.3)", color: "var(--gold)" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={member.linkedin}
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors duration-200 w-fit min-h-[44px]"
                        style={{ color: "var(--steel)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--steel)"; }}
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={14} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DEEP NAVY CTA BAND */}
      <section className="py-20 lg:py-24" style={{ background: "linear-gradient(135deg, var(--deep-navy) 0%, #1a2744 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
              Direct Access
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-5" style={{ color: "#F7F7F5", fontWeight: 400 }}>
              Ready to speak with us?
            </h2>
            <p className="text-sm mb-8" style={{ color: "rgba(247,247,245,0.6)" }}>
              Contact us and we'll connect you with the right advocate for your matter.
            </p>
            <Link href="/contact">
              <button
                className="px-8 py-3.5 text-sm font-sans transition-all duration-300 min-h-[44px]"
                style={{ backgroundColor: "var(--gold)", color: "#111315" }}
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
