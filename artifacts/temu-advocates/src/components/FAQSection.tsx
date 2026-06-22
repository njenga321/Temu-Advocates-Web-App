import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const faqs = [
  { q: "How do I know if I need a lawyer?", a: "If a decision has legal consequences — financial, personal, or regulatory — getting an early opinion is cheaper than fixing a problem later. One conversation can clarify your exposure." },
  { q: "How quickly can you take on a new matter?", a: "For most matters, we can schedule an initial consultation within 48 hours. Urgent matters — injunctions, time-sensitive transactions — are assessed same-day." },
  { q: "Do you handle matters outside Nairobi?", a: "Yes. We handle matters across Kenya and have experience with cross-border issues in East Africa. For matters requiring local representation elsewhere, we coordinate with trusted correspondent firms." },
  { q: "What does an initial consultation involve?", a: "We listen to the facts of your matter, identify the legal issues at stake, and give you a direct assessment. We tell you what we can do, what we cannot, and what it would cost. No obligations." },
  { q: "How are your fees structured?", a: "Depending on the matter — fixed fees, hourly rates, or retainer arrangements. We discuss fees before any work begins. No surprises." },
  { q: "Can you help if a matter is already in court?", a: "Yes. We can take over conduct of ongoing litigation at any stage, review work done by previous counsel, or provide a second opinion on strategy." },
  { q: "Is everything I tell you confidential?", a: "Yes. Advocate-client privilege applies from your first communication with us. We do not disclose client information without consent." },
  { q: "Do you represent individuals or only businesses?", a: "Both. Our client base includes corporations, SMEs, and private individuals. The matter determines whether we are the right fit — not the client type." },
  { q: "What should I bring to a first consultation?", a: "Any documents relevant to the matter — contracts, correspondence, notices, court papers. A clear timeline of events also helps. Come prepared to be direct about the facts." },
  { q: "How do I formally instruct Temu Advocates?", a: "After the initial consultation, we issue a client care letter and engagement agreement. Signing that formally instructs us. Work begins once the initial deposit is confirmed." },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left min-h-[44px]"
      >
        <h3 className="font-serif text-lg md:text-xl" style={{ color: "var(--text)", fontWeight: 400 }}>
          {q}
        </h3>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xl font-light transition-transform duration-300"
          style={{ color: "var(--gold)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-sm leading-relaxed pb-5 pt-1" style={{ color: "var(--text-muted)" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faqs" className="py-20 lg:py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "var(--text)", fontWeight: 400 }}>
            Answers to questions we hear often.
          </h2>
        </AnimatedSection>
        <StaggerContainer staggerDelay={0.05}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <FAQItem q={faq.q} a={faq.a} isOpen={openIndex === i} onToggle={() => toggle(i)} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
