export const siteContent = {
  clubName: "AMU Orbiter Club",
  tagline: "Join the Orbit.",
  institution: "Aligarh Muslim University",
  affiliation: "Training & Placement Office · General",
  applicationEndpoint: import.meta.env.VITE_APPLICATION_ENDPOINT ?? "",
  contact: {
    email: "",
    instagram: "",
    linkedin: "",
    tpoWebsite: "",
    address: "Aligarh Muslim University, Aligarh, Uttar Pradesh, India",
  },
};

export const domains = [
  {
    number: "01",
    icon: "pen",
    title: "Media & Content",
    description: "Shape stories through social posts, thoughtful copywriting and digital content.",
    color: "violet",
  },
  {
    number: "02",
    icon: "palette",
    title: "Graphic Design",
    description: "Bring ideas to life with posters, visual identities and creative campaigns.",
    color: "blue",
  },
  {
    number: "03",
    icon: "megaphone",
    title: "Public Relations",
    description: "Build genuine connections through outreach, communication and community.",
    color: "pink",
  },
  {
    number: "04",
    icon: "clapperboard",
    title: "Video & Motion",
    description: "Tell moving stories with edits, reels, promotional videos and motion graphics.",
    color: "cyan",
  },
  {
    number: "05",
    icon: "cpu",
    title: "Technology & AI",
    description: "Explore digital tools and AI-assisted creativity to make better things together.",
    color: "violet",
  },
  {
    number: "06",
    icon: "calendar",
    title: "Events & Coordination",
    description: "Help plan student activities and bring collaborative initiatives to life.",
    color: "blue",
  },
] as const;

export type ProjectCategory =
  | "All"
  | "Campaigns"
  | "Social"
  | "Campus"
  | "Design"
  | "Workshops";

export const projectCategories: ProjectCategory[] = [
  "All",
  "Campaigns",
  "Social",
  "Campus",
  "Design",
  "Workshops",
];

export const projects = [
  { title: "A story worth sharing", category: "Campaigns", index: "01", tone: "project-orbit" },
  { title: "Ideas in the feed", category: "Social", index: "02", tone: "project-feed" },
  { title: "Made together, on campus", category: "Campus", index: "03", tone: "project-campus" },
  { title: "A new visual language", category: "Design", index: "04", tone: "project-design" },
  { title: "Room to learn something new", category: "Workshops", index: "05", tone: "project-workshop" },
  { title: "From sketch to screen", category: "Design", index: "06", tone: "project-screen" },
] as const;

export const teamMembers = [
  { name: "", role: "Faculty / TPO coordinator", bio: "", photoUrl: "", profileUrl: "" },
  { name: "", role: "Club leadership", bio: "", photoUrl: "", profileUrl: "" },
  { name: "", role: "Domain leads", bio: "", photoUrl: "", profileUrl: "" },
  { name: "", role: "Team members", bio: "", photoUrl: "", profileUrl: "" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Activities", href: "#activities" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;
