import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteContent } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

const socialLinks = [
  { label: "Instagram", url: siteContent.contact.instagram },
  { label: "LinkedIn", url: siteContent.contact.linkedin },
  { label: "TPO website", url: siteContent.contact.tpoWebsite },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-copy">
            <SectionHeading
              titleId="contact-title"
              eyebrow="Let's make something"
              title="Good things start with hello."
              description="Want to ask a question, share an idea or learn more about the initiative? We’d love to hear from you."
            />
            {siteContent.contact.email ? (
              <a className="contact-email" href={`mailto:${siteContent.contact.email}`}><Mail size={17} />{siteContent.contact.email}<ArrowUpRight size={15} /></a>
            ) : (
              <span className="contact-email unavailable"><Mail size={17} /> Official contact details to be confirmed</span>
            )}
          </div>
          <div className="contact-meta">
            <div className="contact-meta-group">
              <span className="meta-label">FIND US AT</span>
              <p><MapPin size={16} />{siteContent.contact.address}</p>
            </div>
            <div className="contact-meta-group">
              <span className="meta-label">AROUND THE WEB</span>
              <div className="social-links">
                {socialLinks.filter((link) => link.url).map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14} /></a>
                ))}
                {socialLinks.every((link) => !link.url) && <span className="social-unavailable">Social links will appear once verified.</span>}
              </div>
            </div>
            <div className="contact-affiliation"><span>✳</span> A student initiative associated with<br />Training & Placement Office · General<br />Aligarh Muslim University</div>
          </div>
        </div>
      </div>
    </section>
  );
}
