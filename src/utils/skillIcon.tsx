import type { ReactNode } from "react";
import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiFlutter,
  SiDart,
  SiDocker,
  SiLinux,
  SiNginx,
  SiGit,
  SiGithub,
  SiPostman,
  SiTypescript,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { FaCode } from "react-icons/fa6";

const ICON_REGISTRY: Record<string, ReactNode> = {
  laravel: <SiLaravel />,
  php: <SiPhp />,
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  tailwindcss: <SiTailwindcss />,
  mysql: <SiMysql />,
  postgresql: <SiPostgresql />,
  supabase: <SiSupabase />,
  flutter: <SiFlutter />,
  dart: <SiDart />,
  docker: <SiDocker />,
  linux: <SiLinux />,
  nginx: <SiNginx />,
  git: <SiGit />,
  github: <SiGithub />,
  postman: <SiPostman />,
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  python: <SiPython />,
};

interface SkillIconProps {
  iconKey: string;
  iconUrl?: string;
  name: string;
}

/**
 * Resolves skill icon with CMS-ready priority:
 * 1. `iconUrl` (uploaded SVG/PNG or CDN URL from CMS)
 * 2. `iconKey` (matched against local `react-icons` registry)
 * 3. Generic `<FaCode />` fallback so unknown CMS entries never break UI
 */
export function SkillIcon({ iconKey, iconUrl, name }: SkillIconProps) {
  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={`${name} icon`}
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
    );
  }

  const normalizedKey = iconKey.toLowerCase().trim();
  return ICON_REGISTRY[normalizedKey] ?? <FaCode />;
}
