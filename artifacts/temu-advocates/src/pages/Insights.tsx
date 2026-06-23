import { useEffect } from "react";
import { Link } from "wouter";
import { articles } from "../data/insightsData";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";

export default function Insights() {
  useEffect(() => { document.title = "Insights — Temu Advocates"; }, []);

  return (
    <main style={{ backgroundColor: "var(--obsidian)" }}>
      {/* PAGE HERO */}
      <section
        className="pt-36 pb-20 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,16,22,0.92) 0%, rgba(17,19,21,0.88) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "rgba(247,247,245,0.4)" }}>
              <Link href="/"><span className="cursor-pointer" style={{ color: "rgba(247,247,245,0.4)" }}>Home</span></Link>
              {" "}&rsaquo;{" "}
              <span style={{ color: "var(--gold)" }}>Insights</span>
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4" style={{ color: "#F7F7F5", fontWeight: 400 }}>
              Insights
            </h1>
            <div className="gold-rule" />
            <p className="mt-2 text-base max-w-xl" style={{ color: "rgba(247,247,245,0.6)" }}>
              Practical thinking on legal matters that affect your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 pb-24" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {articles.map((article) => (
              <StaggerItem key={article.id}>
                <Link href={`/insights/${article.slug}`}>
                  <article
                    className="group cursor-pointer flex flex-col h-full overflow-hidden transition-all duration-300"
                    style={{ backgroundColor: "var(--slate-navy)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(214,178,94,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    <div className="h-44 overflow-hidden">
                      <img
                        src={`${article.image.split("?")[0]}?w=600&q=75&fit=crop`}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1" style={{ borderTop: "2px solid var(--gold)" }}>
                      <span className="text-xs font-mono uppercase tracking-widest mb-3 block" style={{ color: "var(--gold)" }}>
                        {article.category}
                      </span>
                      <h2 className="font-serif text-xl mb-3 leading-snug" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                        {article.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--steel)" }}>
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <p className="text-xs font-sans" style={{ color: "rgba(247,247,245,0.65)" }}>
                            {article.author.replace("Advocate ", "")}
                          </p>
                          <p className="text-xs font-mono" style={{ color: "var(--steel)" }}>{article.date}</p>
                        </div>
                        <span className="text-xs font-sans" style={{ color: "var(--gold)" }}>Read →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, var(--deep-navy) 0%, #1a2744 100%)", borderTop: "1px solid rgba(214,178,94,0.15)" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: "#F7F7F5", fontWeight: 400 }}>
              Have a legal question?
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(247,247,245,0.55)" }}>
              Our team is happy to discuss how these matters may affect your specific situation.
            </p>
            <Link href="/contact">
              <button
                className="px-8 py-3 text-sm font-sans transition-all duration-300 min-h-[44px]"
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
