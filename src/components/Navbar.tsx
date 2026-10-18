import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../data/siteContent";
import Brand from "./Brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Brand />
        <div className={`nav-links${open ? " is-open" : ""}`} id="mobile-navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="button button-small nav-mobile-cta" href="#join" onClick={() => setOpen(false)}>
            Join the Orbit <ArrowUpRight size={15} />
          </a>
        </div>
        <a className="button button-small nav-cta" href="#join">
          Join the Orbit <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  );
}
