import {
  ArrowDownRight,
  CalendarDays,
  Clapperboard,
  Cpu,
  Megaphone,
  PenLine,
  Palette,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { domains } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  pen: PenLine,
  palette: Palette,
  megaphone: Megaphone,
  clapperboard: Clapperboard,
  cpu: Cpu,
  calendar: CalendarDays,
};

export default function Domains() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section domains-section" id="domains" aria-labelledby="domains-title">
      <div className="container">
        <div className="domains-heading-row">
          <SectionHeading
            titleId="domains-title"
            eyebrow="Find your frequency"
            title="Many ways to make a mark."
            description="Bring a skill you have. Discover one you don't. There's room for both."
          />
          <span className="domains-aside">SIX AREAS<br />ONE SHARED ORBIT</span>
        </div>
        <div className="domains-grid">
          {domains.map((domain, index) => {
            const Icon = icons[domain.icon];
            return (
              <motion.a
                className={`domain-item domain-${domain.color}`}
                href="#join"
                key={domain.number}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.055 }}
              >
                <span className="domain-top"><span className="domain-number">{domain.number} / 06</span><ArrowDownRight size={18} className="domain-arrow" /></span>
                <span className="domain-icon"><Icon size={22} strokeWidth={1.5} /></span>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <span className="domain-accent" />
              </motion.a>
            );
          })}
        </div>
        <p className="domains-footnote"><span>+</span> Your interests don’t need to fit neatly in one box.</p>
      </div>
    </section>
  );
}
