import { ArrowUpRight, Compass, Layers3, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Sparkles,
    number: "01",
    title: "Creativity & innovation",
    description: "A place to try new approaches, share bold ideas and turn curiosity into something real.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Media & communication",
    description: "Learn to tell thoughtful stories, make purposeful work and connect with an audience.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Collaboration & growth",
    description: "Work alongside students with different perspectives. Learn by doing, together.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-intro">
          <SectionHeading
            titleId="about-title"
            eyebrow="A little about us"
            title="More than a club. A community in motion."
            description="Orbiter is a student initiative that makes room to collaborate, create, communicate, learn and contribute to meaningful projects at AMU."
          />
          <div className="about-side-note">
            <div className="side-note-orbit" aria-hidden="true"><span /></div>
            <p>Different paths.<br /><span>One shared orbit.</span></p>
            <a href="#domains" aria-label="Explore our domains"><ArrowUpRight size={17} /></a>
          </div>
        </div>
        <motion.div
          className="pillar-list"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, staggerChildren: 0.12 }}
        >
          {pillars.map(({ icon: Icon, number, title, description }) => (
            <motion.article className="pillar" key={number} variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <div className="pillar-meta"><span>{number}</span><Icon size={19} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="pillar-rule" />
            </motion.article>
          ))}
        </motion.div>
        <div className="about-statement"><span className="statement-mark">“</span><p>Space for every kind of <span>good idea.</span></p><span className="statement-aside">THE ORBITER SPIRIT<br />AMU · EST. AS A STUDENT INITIATIVE</span></div>
      </div>
    </section>
  );
}
