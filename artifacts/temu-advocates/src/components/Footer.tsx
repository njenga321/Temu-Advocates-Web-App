import { Link } from "wouter";
import { Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ backgroundColor: "var(--obsidian)", borderTop: "1px solid var(--gold)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 */}
          <div>
            <div className="mb-4">
              <span
                className="text-lg tracking-widest font-serif font-semibold"
                style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
              >
                TEMU ADVOCATES
              </span>
              <div style={{ height: "1px", backgroundColor: "var(--gold)", marginTop: "4px", opacity: 0.5, width: "80%" }} />
            </div>
            <p className="text-sm font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)", opacity: 0.7, fontSize: "0.65rem" }}>
              Clarity in complex matters.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>
              A Nairobi-based law firm providing strategic legal counsel to businesses and individuals since 2009.
              We work across corporate, commercial, and private client matters throughout East Africa.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "var(--gold)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm cursor-pointer transition-colors duration-200"
                      style={{ color: "var(--steel)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ivory)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--steel)"; }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "var(--gold)" }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "var(--steel)" }}>
              <p className="leading-relaxed">
                14th Floor, Delta House<br />
                Chiromo Road, Nairobi, Kenya
              </p>
              <p>
                <a
                  href="tel:+254700000000"
                  className="transition-colors duration-200"
                  style={{ color: "var(--steel)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ivory)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--steel)"; }}
                >
                  +254 700 000 000
                </a>
              </p>
              <p>
                <a
                  href="mailto:counsel@temuadvocates.co.ke"
                  className="transition-colors duration-200"
                  style={{ color: "var(--steel)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--steel)"; }}
                >
                  counsel@temuadvocates.co.ke
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
                style={{ borderColor: "rgba(214,178,94,0.3)", color: "var(--steel)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(214,178,94,0.3)";
                  e.currentTarget.style.color = "var(--steel)";
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
                style={{ borderColor: "rgba(214,178,94,0.3)", color: "var(--steel)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(214,178,94,0.3)";
                  e.currentTarget.style.color = "var(--steel)";
                }}
                aria-label="X / Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(214,178,94,0.1)", color: "var(--steel)" }}
        >
          <span>© 2025 Temu Advocates. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy">
              <span
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ivory)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--steel)"; }}
              >
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ivory)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--steel)"; }}
              >
                Terms of Use
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
