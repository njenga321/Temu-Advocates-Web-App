import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, CheckCircle } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  matterType: string;
  description: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    document.title = "Contact — Temu Advocates";
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const description = watch("description", "");

  useEffect(() => {
    setCharCount(description?.length || 0);
  }, [description]);

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: "rgba(31,41,55,0.8)",
    border: "1px solid rgba(214,178,94,0.2)",
    color: "var(--ivory)",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    fontFamily: "'DM Sans', sans-serif",
  };

  const inputFocusStyle = {
    border: "1px solid rgba(214,178,94,0.6)",
  };

  return (
    <main style={{ backgroundColor: "var(--obsidian)" }}>
      {/* PAGE HERO */}
      <section className="pt-36 pb-16" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--steel)" }}>
              <Link href="/">
                <span className="cursor-pointer" style={{ color: "var(--steel)" }}>Home</span>
              </Link>
              {" "}&rsaquo;{" "}
              <span style={{ color: "var(--gold)" }}>Contact</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mb-3" style={{ color: "var(--ivory)", fontWeight: 400 }}>
              Let's talk.
            </h1>
            <div className="w-16 h-0.5 mt-4" style={{ backgroundColor: "var(--gold)" }} />
            <p className="mt-6 text-base" style={{ color: "var(--steel)" }}>
              Tell us about your matter. We'll respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT SPLIT */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* LEFT — FORM */}
            <AnimatedSection direction="left">
              {submitted ? (
                <div
                  className="flex flex-col items-start justify-center p-10 h-full min-h-80"
                  style={{ backgroundColor: "var(--slate-navy)", border: "1px solid rgba(214,178,94,0.3)" }}
                >
                  <CheckCircle size={40} className="mb-6" style={{ color: "var(--gold)" }} />
                  <h2 className="font-serif text-3xl mb-4" style={{ color: "var(--ivory)", fontWeight: 400 }}>
                    Message received.
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>
                    Thank you for reaching out. A member of our team will review your matter and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                      Full Name <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <input
                      {...register("fullName", { required: "Full name is required" })}
                      type="text"
                      placeholder="Your full name"
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={(e) => { e.target.style.border = inputStyle.border; }}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs" style={{ color: "#e07070" }}>{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                      Email Address <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
                      })}
                      type="email"
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={(e) => { e.target.style.border = inputStyle.border; }}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs" style={{ color: "#e07070" }}>{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+254 700 000 000"
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={(e) => { e.target.style.border = inputStyle.border; }}
                    />
                  </div>

                  {/* Matter Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                      Matter Type
                    </label>
                    <select
                      {...register("matterType")}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={(e) => { e.target.style.border = inputStyle.border; }}
                    >
                      <option value="" style={{ backgroundColor: "#1F2937" }}>Select an area</option>
                      {["Corporate", "Dispute Resolution", "Real Estate", "Employment", "Banking", "IP", "Family", "Regulatory", "Other"].map((opt) => (
                        <option key={opt} value={opt} style={{ backgroundColor: "#1F2937" }}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                      Brief Description
                    </label>
                    <textarea
                      {...register("description", {
                        maxLength: { value: 500, message: "Maximum 500 characters" },
                      })}
                      rows={5}
                      placeholder="Briefly describe your matter..."
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={(e) => { e.target.style.border = inputStyle.border; }}
                    />
                    <div className="mt-1.5 flex justify-between">
                      {errors.description ? (
                        <p className="text-xs" style={{ color: "#e07070" }}>{errors.description.message}</p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs font-mono" style={{ color: charCount > 450 ? "#e07070" : "var(--steel)" }}>
                        {charCount}/500
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-sm font-sans font-medium transition-all duration-300 mt-2"
                    style={{
                      backgroundColor: isSubmitting ? "rgba(214,178,94,0.5)" : "var(--gold)",
                      color: "var(--obsidian)",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                    onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = "#c4a050"; }}
                    onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = "var(--gold)"; }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* RIGHT — CONTACT DETAILS */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "var(--gold)" }}>
                    Our Office
                  </p>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <div>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--ivory)" }}>
                          14th Floor, Delta House
                          <br />
                          Chiromo Road, Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <a href="tel:+254700000000" className="text-sm transition-colors duration-200" style={{ color: "var(--ivory)" }}>
                        +254 700 000 000
                      </a>
                    </div>
                    <div className="flex gap-4">
                      <Mail size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <a href="mailto:counsel@temuadvocates.co.ke" className="text-sm transition-colors duration-200" style={{ color: "var(--ivory)" }}>
                        counsel@temuadvocates.co.ke
                      </a>
                    </div>
                    <div className="flex gap-4">
                      <Clock size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <p className="text-sm" style={{ color: "var(--ivory)" }}>
                        Monday – Friday: 8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 border text-xs font-mono uppercase tracking-widest transition-all duration-200"
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
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 border text-xs font-mono uppercase tracking-widest transition-all duration-200"
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
                    <Twitter size={14} />
                    Twitter
                  </a>
                </div>

                {/* Google Maps */}
                <div className="overflow-hidden" style={{ border: "1px solid rgba(214,178,94,0.2)" }}>
                  <iframe
                    title="Temu Advocates Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818623956576!2d36.79977!3d-1.270584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17e5f8b7e1a7%3A0x5c7d9f8f9e8e8e8e!2sChiromo%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                    width="100%"
                    height="240"
                    style={{ border: 0, filter: "grayscale(80%) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
