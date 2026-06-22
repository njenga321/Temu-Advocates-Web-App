import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import { articles } from "../data/insightsData";
import AnimatedSection from "../components/AnimatedSection";

export default function InsightArticle() {
  const params = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === params.slug);
  const related = articles.filter((a) => a.slug !== params.slug).slice(0, 2);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — Temu Advocates`;
    }
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <h1 className="font-serif text-4xl mb-4" style={{ color: "var(--ivory)" }}>Article not found</h1>
        <Link href="/insights">
          <button
            className="px-6 py-3 text-sm border transition-all duration-300"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Back to Insights
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: "var(--obsidian)" }}>
      {/* HERO IMAGE */}
      <section className="relative h-80 md:h-[480px] mt-0">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(17,19,21,1) 0%, rgba(17,19,21,0.5) 40%, transparent 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 lg:px-8 pb-10">
          <span className="text-xs font-mono uppercase tracking-widest mb-3 block" style={{ color: "var(--gold)" }}>
            {article.category}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight" style={{ color: "var(--ivory)", fontWeight: 400 }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <AnimatedSection>
          {/* Meta */}
          <div
            className="flex items-center gap-6 mb-10 pb-8"
            style={{ borderBottom: "1px solid rgba(214,178,94,0.15)" }}
          >
            <div>
              <p className="text-sm font-sans" style={{ color: "var(--ivory)" }}>{article.author}</p>
              <p className="text-xs font-mono mt-0.5" style={{ color: "var(--steel)" }}>{article.date}</p>
            </div>
            <div className="h-8 w-px" style={{ backgroundColor: "rgba(214,178,94,0.2)" }} />
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              {article.category}
            </span>
          </div>

          {/* Body */}
          <div className="space-y-6">
            {article.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: para.startsWith('"') ? "var(--ivory)" : "var(--steel)" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(214,178,94,0.15)" }}>
            <Link href="/insights">
              <button
                className="flex items-center gap-2 text-sm font-sans transition-colors duration-200"
                style={{ color: "var(--gold)" }}
              >
                <ArrowLeft size={16} />
                Back to Insights
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </article>

      {/* RELATED ARTICLES */}
      <section className="py-16" style={{ backgroundColor: "var(--slate-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-widest mb-8" style={{ color: "var(--gold)" }}>
            Related Insights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link href={`/insights/${rel.slug}`} key={rel.id}>
                <article
                  className="flex gap-5 group cursor-pointer p-6 transition-all duration-300"
                  style={{ backgroundColor: "var(--obsidian)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(214,178,94,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                    <img
                      src={`${rel.image.split("?")[0]}?w=160&q=70&fit=crop`}
                      alt={rel.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest block mb-2" style={{ color: "var(--gold)" }}>
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-lg leading-snug group-hover:text-gold transition-colors duration-200" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                      {rel.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
