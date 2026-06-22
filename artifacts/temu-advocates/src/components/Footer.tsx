import { Link } from "wouter";
import { Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

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
    <footer style={{ backgroundColor: "var(--footer-bg)" }}>
      {/* Pull quote band */}
      <div className="py-12 flex flex-col items-center text-center px-4" style={{ borderTop: "1px solid rgba(214,178,94,0.3)" }}>
        <div style={{ width: "60px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "20px" }} />
        <p className="font-serif text-2xl md:text-3xl italic" style={{ color: "#F7F7F5" }}>
          "Discreet. Precise. Effective."
        </p>
        <div style={{ width: "60px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginTop: "20px" }} />
      </div>

      {/* Columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-semibold mb-1" style={{ color: "var(--gold)", letterSpacing: "0.15em" }}>
              TEMU ADVOCATES
            </p>
            <p className="text-sm italic mt-3 mb-4" style={{ color: "#9CA3AF" }}>Clarity in complex matters.</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
              A Nairobi-based law firm providing strategic legal counsel to businesses and individuals since 2009.
            </p>
            <div className="flex gap-3">
              {[{ icon: Linkedin, label: "LinkedIn" }, { icon: Twitter, label: "Twitter" }].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
                  style={{ borderColor: "rgba(214,178,94,0.3)", color: "#9CA3AF" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(214,178,94,0.3)"; e.currentTarget.style.color = "#9CA3AF"; }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "var(--gold)" }}>Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm cursor-pointer transition-colors duration-200"
                      style={{ color: "#9CA3AF" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#9CA3AF"; }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "var(--gold)" }}>Reach Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  14th Floor, Delta House<br />Chiromo Road, Nairobi, Kenya
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a href="tel:+254700000000" className="text-sm" style={{ color: "#9CA3AF" }}>+254 700 000 000</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a href="mailto:counsel@temuadvocates.co.ke" className="text-sm break-all" style={{ color: "#9CA3AF" }}>
                  counsel@temuadvocates.co.ke
                </a>
              </div>
              <p className="text-sm" style={{ color: "#9CA3AF" }}>Mon – Fri: 8:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(214,178,94,0.2)", color: "#9CA3AF" }}
        >
          <span>© 2025 Temu Advocates. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use"].map((item, i) => (
              <span key={item} className="flex items-center gap-5">
                {i > 0 && <span style={{ color: "rgba(214,178,94,0.3)" }}>·</span>}
                <span
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#9CA3AF"; }}
                >
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
