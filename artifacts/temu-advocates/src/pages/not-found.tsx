import { Link } from "wouter";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: "var(--obsidian)" }}
    >
      <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
        404
      </p>
      <h1 className="font-serif text-5xl md:text-6xl mb-6" style={{ color: "var(--ivory)", fontWeight: 400 }}>
        Page not found.
      </h1>
      <p className="text-base mb-10 max-w-md" style={{ color: "var(--steel)" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <button
          className="px-8 py-3.5 text-sm font-sans transition-all duration-300"
          style={{ backgroundColor: "var(--gold)", color: "var(--obsidian)" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#c4a050"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
        >
          Return Home
        </button>
      </Link>
    </main>
  );
}
