export interface SkillItem {
  name: string;
  iconKey: string;
  iconUrl: string;
}

export interface SkillCategory {
  code: string;
  category: string;
  items: SkillItem[];
}
