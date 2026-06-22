import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(17,19,21,0.97)" : "#111315",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(214,178,94,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="cursor-pointer flex flex-col">
                <span
                  className="text-xl tracking-[0.15em] font-serif font-semibold"
                  style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
                >
                  TEMU ADVOCATES
                </span>
                <div style={{ height: "1px", backgroundColor: "var(--gold)", marginTop: "3px", opacity: 0.6 }} />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className="relative text-sm font-sans cursor-pointer transition-colors duration-200 group"
                      style={{ color: isActive ? "var(--gold)" : "var(--ivory)", opacity: isActive ? 1 : 0.8 }}
                    >
                      {link.label}
                      <span
                        className="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300"
                        style={{
                          backgroundColor: "var(--gold)",
                          width: isActive ? "100%" : "0%",
                        }}
                      />
                      <span
                        className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                        style={{
                          backgroundColor: "var(--gold)",
                          width: "0%",
                          opacity: 0.5,
                        }}
                      />
                    </span>
                  </Link>
                );
              })}

              <Link href="/contact">
                <button
                  className="ml-4 px-5 py-2 text-sm font-sans border transition-all duration-300 cursor-pointer"
                  style={{
                    borderColor: "var(--gold)",
                    color: "var(--ivory)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--obsidian)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--ivory)";
                  }}
                >
                  Schedule a Consultation
                </button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 transition-colors"
              style={{ color: "var(--ivory)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: "rgba(17,19,21,0.98)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link href={link.href}>
                    <span
                      className="text-3xl font-serif cursor-pointer block text-center transition-colors duration-200"
                      style={{ color: location === link.href ? "var(--gold)" : "var(--ivory)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.4 }}
              >
                <Link href="/contact">
                  <button
                    className="mt-4 px-8 py-3 text-base font-sans border"
                    style={{ borderColor: "var(--gold)", color: "var(--gold)", backgroundColor: "transparent" }}
                  >
                    Schedule a Consultation
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
