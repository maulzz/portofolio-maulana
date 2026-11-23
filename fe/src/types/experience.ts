export type ExperienceCategory = "experience" | "education" | "achievement";

export interface ExperienceItem {
  id: number;
  category: ExperienceCategory;
  year: string;
  tag: string;
  title: string;
  institution: string;
  desc: string;
  learnings: string[];
  highlight: boolean;
}
