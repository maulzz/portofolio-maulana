import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import profileFallback from "../data/profile.json";
import projectsFallback from "../data/projects.json";
import skillsFallback from "../data/skills.json";
import experiencesFallback from "../data/experiences.json";
import type { ProfileData } from "../types/profile";
import type { ProjectItem } from "../types/project";
import type { SkillCategory } from "../types/skill";
import type { ExperienceItem } from "../types/experience";

interface PortfolioContextValue {
  profile: ProfileData;
  projects: ProjectItem[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  isFromCms: boolean;
}

const defaultData: PortfolioContextValue = {
  profile: profileFallback as ProfileData,
  projects: projectsFallback as ProjectItem[],
  skills: skillsFallback as SkillCategory[],
  experiences: experiencesFallback as ExperienceItem[],
  isFromCms: false,
};

const PortfolioContext = createContext<PortfolioContextValue>(defaultData);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioContextValue>(defaultData);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_CMS_API_URL?.replace(/\/+$/, "");
    if (!baseUrl) return;

    const controller = new AbortController();

    async function fetchJson<T>(endpoint: string): Promise<T | null> {
      try {
        const res = await fetch(`${baseUrl}${endpoint}`, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) return null;
        return (await res.json()) as T;
      } catch {
        return null;
      }
    }

    async function loadFromCms() {
      const [profile, projects, skills, experiences] = await Promise.all([
        fetchJson<ProfileData>("/profile"),
        fetchJson<ProjectItem[]>("/projects"),
        fetchJson<SkillCategory[]>("/skills"),
        fetchJson<ExperienceItem[]>("/experiences"),
      ]);

      setData((prev) => ({
        profile: profile ?? prev.profile,
        projects: projects && projects.length > 0 ? projects : prev.projects,
        skills: skills && skills.length > 0 ? skills : prev.skills,
        experiences:
          experiences && experiences.length > 0
            ? experiences
            : prev.experiences,
        isFromCms: Boolean(profile || projects || skills || experiences),
      }));
    }

    loadFromCms();

    return () => controller.abort();
  }, []);

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortfolio(): PortfolioContextValue {
  return useContext(PortfolioContext);
}
