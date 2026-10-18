import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? {} : { opacity: 0, y: 20 };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-stars" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content">
          <motion.div
            className="eyebrow hero-eyebrow"
            initial={rise}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="status-dot" />
            ALIGARH MUSLIM UNIVERSITY <span className="eyebrow-divider">/</span> TRAINING & PLACEMENT OFFICE
          </motion.div>
          <motion.h1
            id="hero-title"
            initial={rise}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Great ideas
            <span className="headline-second">don’t stay</span>
            <span className="headline-gradient">grounded<span className="headline-period">.</span></span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={rise}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            An ambitious student initiative at Aligarh Muslim University, bringing together
            creativity, communication, media, and professional growth.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={rise}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            <a className="button button-primary" href="#join">Join the Orbit <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="#about">Explore Orbiter <MoveUpRight size={16} /></a>
          </motion.div>
          <div className="hero-footnote">
            <span className="footnote-line" />
            A student-led initiative. A space to make things happen.
          </div>
        </div>

        <motion.div
          className="orbit-visual"
          aria-label="Abstract orbital artwork made of luminous rings"
          role="img"
          initial={reduceMotion ? {} : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
        >
          <div className="visual-aura" />
          <div className="orbit orbit-outer"><span className="orbit-satellite satellite-one" /></div>
          <div className="orbit orbit-middle"><span className="orbit-satellite satellite-two" /></div>
          <div className="orbit orbit-inner" />
          <div className="planet">
            <div className="planet-shine" />
            <div className="planet-outline"><span className="planet-glyph">O</span></div>
          </div>
          <div className="orbit-label orbit-label-top"><span>01</span> CREATIVITY</div>
          <div className="orbit-label orbit-label-bottom"><span>02</span> CONNECTION</div>
          <div className="orbit-chip chip-top">
            <span className="chip-indicator" />
            <span><small>OPEN TO</small><strong>New ideas</strong></span>
          </div>
          <div className="orbit-chip chip-bottom">
            <span className="chip-spark">✳</span>
            <span><small>ALWAYS IN</small><strong>Good company</strong></span>
          </div>
          <div className="visual-index">FIG 01 <span>·</span> A COMMUNITY IN MOTION</div>
        </motion.div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to About Orbiter">
        <span>SCROLL TO EXPLORE</span><ArrowDown size={14} />
      </a>
      <div className="hero-bottomline container">
        <span>{siteContent.institution}</span><span>Uttar Pradesh, India</span>
      </div>
    </section>
  );
}
