export interface SocialLinkItem {
  name: string;
  url: string;
  iconKey: "github" | "linkedin" | "instagram" | "medium" | string;
}

export interface AboutPillar {
  code: string;
  title: string;
  description: string;
}

export interface ProfileData {
  brandName: string;
  fullName: string;
  roleTitle: string;
  availabilityText: string;
  shortBio: string;
  avatarUrl: string;
  cvUrl: string;
  focusLabel: string;
  localeBadge: string;
  email: string;
  location: string;
  githubUsername: string;
  socialLinks: SocialLinkItem[];
  aboutPillars: AboutPillar[];
}
