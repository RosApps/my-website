// siteConfig.ts - site-wide configuration: person details, navigation, section headings.
// v5: Three-persona multi-page site. Navigation links to /professional, /student, /coach.

export const person = {
  name: "Ronak Panchmatia",
  tagline: "A student to the game of life",
  subtitleLine2: "MBA Candidate. Consultant. Teammate. Leader.",
  drivingPhilosophy: "Driven by making people smile while making a difference alongside my team.",
  email: "ronakpanch66@gmail.com",
  linkedin: "https://www.linkedin.com/in/ronakpanchmatia",
};

export const navigation = {
  links: [
    { label: "Professional", href: "/professional" },
    { label: "Student", href: "/student" },
    { label: "Coach", href: "/coach" },
  ],
  cta: {
    resume: { label: "Resume", action: "modal" as const },
    connect: {
      label: "Connect",
      href: "https://www.linkedin.com/in/ronakpanchmatia",
      icon: "linkedin" as const,
    },
  },
};

export const stats: { value: string; label: string }[] = [
  { value: "11th", label: "Season coaching" },
  { value: "4", label: "Designations earned during Co-op #1" },
  { value: "4", label: "Concurrent roles at peak" },
  { value: "3", label: "Production apps shipped" },
];

export const sections = {
  professional: {
    eyebrow: "The Professional",
    title: "Ronak Panchmatia",
    intro: "MBA candidate, business transformation consultant, and builder. Recruiter-ready.",
  },
  student: {
    eyebrow: "The Student",
    title: "Meet Ro",
    intro: "The person behind the resume. The MBA journey, the game, the team.",
  },
  coach: {
    eyebrow: "The Coach",
    title: "Coach Ro",
    intro: "Currently in his 11th season. Four programmes. One constant.",
    record: "93-10-1",
  },
  bento: {
    eyebrow: "Skills",
    title: "The work, the range, and the proof.",
    intro: "A direct view of the technical range, consulting relevance, shipped builds, and leadership work.",
    columns: {
      technical: "Technical & Analytical",
      consulting: "Consulting & Industry",
      projects: "Projects & Builds",
      leadership: "Leadership & Community",
    },
  },
  caseForRo: {
    title: "The ShipNoble Case Study",
    subtitle: "Situation. Complication. Resolution.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Connect",
    linkedinLabel: "Connect on LinkedIn",
  },
  footer: {
    copyright: "Ronak Panchmatia © 2026",
    linkedinLabel: "LinkedIn",
  },
};

export const coachingPhilosophy =
  "Diagnose on film. Remedy in practice. Execute on gameday.";
