import { Orbit } from "lucide-react";
import { siteContent } from "../data/siteContent";

type BrandProps = { compact?: boolean };

export default function Brand({ compact = false }: BrandProps) {
  return (
    <a className="brand" href="#home" aria-label={`${siteContent.clubName} home`}>
      <span className="brand-mark" aria-hidden="true"><Orbit size={22} strokeWidth={1.7} /></span>
      {!compact && (
        <span className="brand-copy">
          <strong>ORBITER</strong>
          <small>AMU · STUDENT INITIATIVE</small>
        </span>
      )}
    </a>
  );
}
