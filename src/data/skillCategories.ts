// skillCategories.ts - skill category cards linking to subpages in the Professional section.
// Codex task: "Update skillCategories.ts teaser for [category]"

export type SkillCategory = {
  id: string;
  title: string;
  teaser: string;
  href: string;
  accent: string;
};

export const skillCategories: SkillCategory[] = [
  {
    id: "technical",
    title: "Technical & Analytical",
    teaser: "Models, apps, SQL, and full-stack builds.",
    href: "/professional/skills/technical",
    accent: "blue",
  },
  {
    id: "consulting",
    title: "Consulting & Strategy",
    teaser: "Live engagements and executive-level deliverables.",
    href: "/professional/skills/consulting",
    accent: "violet",
  },
  {
    id: "industry",
    title: "Industry Knowledge",
    teaser: "Four domains. All grounded in real experience.",
    href: "/professional/skills/industry",
    accent: "emerald",
  },
  {
    id: "leadership",
    title: "Leadership & Communication",
    teaser: "Sideline to boardroom. Complexity into action.",
    href: "/professional/skills/leadership",
    accent: "amber",
  },
];
