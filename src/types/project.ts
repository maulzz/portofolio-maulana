export interface ProjectRole {
  title: string;
  contribution: string;
  responsibilities: string[];
}

export interface ProjectArchitecture {
  summary: string;
  flow: string[];
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface ProjectLinks {
  live: string;
  github: string;
}

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  myRole: ProjectRole;
  techStack: string[];
  keyFeatures: string[];
  architecture: ProjectArchitecture;
  challenges: ProjectChallenge[];
  screenshots: ProjectScreenshot[];
  links: ProjectLinks;
}
