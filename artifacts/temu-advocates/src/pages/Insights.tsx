import { useEffect } from "react";
import { Link } from "wouter";
import { articles } from "../data/insightsData";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";

export default function Insights() {
  useEffect(() => {
    document.title = "Insights — Temu Advocates";
  }, []);

  return (
    <main style={{ backgroundColor: "var(--obsidian)" }}>
      {/* PAGE HERO */}
      <section className="pt-36 pb-20" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--steel)" }}>
              <Link href="/">
                <span className="cursor-pointer" style={{ color: "var(--steel)" }}>Home</span>
              </Link>
              {" "}&rsaquo;{" "}
              <span style={{ color: "var(--gold)" }}>Insights</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Insights
            </h1>
            <div className="w-16 h-0.5 mt-4" style={{ backgroundColor: "var(--gold)" }} />
            <p className="mt-6 text-base max-w-xl" style={{ color: "var(--steel)" }}>
              Practical thinking on legal matters that affect your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {articles.map((article) => (
              <StaggerItem key={article.id}>
                <Link href={`/insights/${article.slug}`}>
                  <article
                    className="group cursor-pointer flex flex-col h-full overflow-hidden transition-all duration-300"
                    style={{ backgroundColor: "var(--slate-navy)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(214,178,94,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="h-44 overflow-hidden">
                      <img
                        src={`${article.image.split("?")[0]}?w=600&q=75&fit=crop`}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
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
                          <p className="text-xs font-sans" style={{ color: "var(--ivory)", opacity: 0.7 }}>
                            {article.author.replace("Advocate ", "")}
                          </p>
                          <p className="text-xs font-mono" style={{ color: "var(--steel)" }}>
                            {article.date}
                          </p>
                        </div>
                        <span
                          className="text-xs font-sans transition-colors duration-200"
                          style={{ color: "var(--gold)" }}
                        >
                          Read →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
