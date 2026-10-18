import { ArrowUpRight, ArrowUp } from "lucide-react";
import { navLinks, siteContent } from "../data/siteContent";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>Creativity, community and room to grow.<br />A student initiative at AMU.</p>
          </div>
          <div className="footer-nav">
            <span className="meta-label">EXPLORE</span>
            <div>{navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}<ArrowUpRight size={12} /></a>)}</div>
          </div>
          <a className="back-top" href="#home">Back to top <ArrowUp size={15} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteContent.clubName}. All rights reserved.</span>
          <span>{siteContent.institution} <i>·</i> {siteContent.affiliation}</span>
        </div>
      </div>
    </footer>
  );
}
