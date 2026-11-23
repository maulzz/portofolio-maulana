import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import profileFallback from "../data/profile.json";
import type { ProfileData } from "../types/profile";
import type { ProjectItem } from "../types/project";
import type { SkillCategory } from "../types/skill";
import type { ExperienceItem } from "../types/experience";

interface ResourceStatus {
  loading: boolean;
  disconnected: boolean;
}

interface PortfolioContextValue {
  profile: ProfileData;
  projects: ProjectItem[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  status: {
    projects: ResourceStatus;
    skills: ResourceStatus;
    experiences: ResourceStatus;
  };
}

const CMS_BASE_URL = import.meta.env.VITE_CMS_API_URL?.replace(/\/+$/, "");

const defaultValue: PortfolioContextValue = {
  profile: profileFallback as ProfileData,
  projects: [],
  skills: [],
  experiences: [],
  status: {
    projects: { loading: Boolean(CMS_BASE_URL), disconnected: !CMS_BASE_URL },
    skills: { loading: Boolean(CMS_BASE_URL), disconnected: !CMS_BASE_URL },
    experiences: { loading: Boolean(CMS_BASE_URL), disconnected: !CMS_BASE_URL },
  },
};

const PortfolioContext = createContext<PortfolioContextValue>(defaultValue);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioContextValue>(defaultValue);

  useEffect(() => {
    const baseUrl = CMS_BASE_URL;
    if (!baseUrl) return;

    const controller = new AbortController();

    async function fetchJson<T>(
      endpoint: string
    ): Promise<{ ok: boolean; data: T | null }> {
      try {
        const res = await fetch(`${baseUrl}${endpoint}`, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) return { ok: false, data: null };
        return { ok: true, data: (await res.json()) as T };
      } catch {
        return { ok: false, data: null };
      }
    }

    async function loadFromCms() {
      const [profileRes, projectsRes, skillsRes, experiencesRes] =
        await Promise.all([
          fetchJson<ProfileData>("/profile"),
          fetchJson<ProjectItem[]>("/projects"),
          fetchJson<SkillCategory[]>("/skills"),
          fetchJson<ExperienceItem[]>("/experiences"),
        ]);

      if (controller.signal.aborted) return;

      setData((prev) => ({
        profile: profileRes.ok && profileRes.data ? profileRes.data : prev.profile,
        projects: projectsRes.ok && projectsRes.data ? projectsRes.data : [],
        skills: skillsRes.ok && skillsRes.data ? skillsRes.data : [],
        experiences:
          experiencesRes.ok && experiencesRes.data ? experiencesRes.data : [],
        status: {
          projects: { loading: false, disconnected: !projectsRes.ok },
          skills: { loading: false, disconnected: !skillsRes.ok },
          experiences: { loading: false, disconnected: !experiencesRes.ok },
        },
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
