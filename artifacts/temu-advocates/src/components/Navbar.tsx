import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logoImg from "../assets/logo.png";

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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? (theme === "dark" ? "rgba(17,19,21,0.97)" : "rgba(255,255,255,0.97)")
    : "var(--nav-bg)";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: navBg,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `1px solid var(--nav-border)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="cursor-pointer">
                <img src={logoImg} alt="Temu Advocates" style={{ height: "40px", width: "auto" }} />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className="relative text-sm font-sans cursor-pointer transition-colors duration-200"
                      style={{ color: isActive ? "var(--gold)" : "var(--text)", opacity: isActive ? 1 : 0.8 }}
                    >
                      {link.label}
                      <span
                        className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                        style={{ backgroundColor: "var(--gold)", width: isActive ? "100%" : "0%" }}
                      />
                    </span>
                  </Link>
                );
              })}

              <button
                onClick={toggleTheme}
                className="p-2 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{ color: "var(--gold)" }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link href="/contact">
                <button
                  className="ml-1 px-5 py-2.5 text-sm font-sans border transition-all duration-300 cursor-pointer min-h-[44px]"
                  style={{ borderColor: "var(--gold)", color: "var(--text)", backgroundColor: "transparent" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; e.currentTarget.style.color = "#111315"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--text)"; }}
                >
                  Schedule a Consultation
                </button>
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-1">
              <button
                onClick={toggleTheme}
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{ color: "var(--gold)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{ color: "var(--text)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
            style={{ backgroundColor: theme === "dark" ? "rgba(17,19,21,0.98)" : "rgba(247,247,245,0.98)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
              <img src={logoImg} alt="Temu Advocates" style={{ height: "44px", width: "auto", marginBottom: "8px" }} />
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link href={link.href}>
                    <span
                      className="text-3xl font-serif cursor-pointer block text-center"
                      style={{ color: location === link.href ? "var(--gold)" : "var(--text)" }}
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
                    className="mt-4 px-8 py-3 text-base font-sans border min-h-[44px]"
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
