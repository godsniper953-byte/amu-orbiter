import { ArrowUpRight, CircleUserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { teamMembers } from "../data/siteContent";

export default function Team() {
  return (
    <section className="section team-section" id="team" aria-labelledby="team-title">
      <div className="container">
        <div className="team-intro">
          <SectionHeading
            titleId="team-title"
            eyebrow="The people behind it"
            title="A good idea takes a good team."
            description="Meet the people who make this community. Profiles will be added once names and details are confirmed."
          />
          <span className="team-index">OUR PEOPLE<br />AMU · ORBITER</span>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article className="team-card" key={member.role}>
              <div className={`team-portrait portrait-${index + 1}`}>
                <span className="portrait-grid" aria-hidden="true" />
                {member.photoUrl ? (
                  <img className="team-photo" src={member.photoUrl} alt={`Portrait of ${member.name || member.role}`} loading="lazy" />
                ) : (
                  <>
                    <CircleUserRound size={64} strokeWidth={0.85} aria-hidden="true" />
                    <span className="portrait-label">PROFILE<br />PHOTO</span>
                  </>
                )}
              </div>
              <div className="team-details">
                <div><span className="team-role">0{index + 1} / ORBITER</span><h3>{member.name || member.role}</h3><p>{member.bio || "Profile details to be added"}</p></div>
                {member.profileUrl && (
                  <a className="team-arrow" href={member.profileUrl} target="_blank" rel="noreferrer" aria-label={`${member.name || member.role} profile`}>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="team-note">No names, titles or profile links are shown until details are verified.</p>
      </div>
    </section>
  );
}
