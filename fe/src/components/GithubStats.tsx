import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaBookBookmark, FaUserAstronaut } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiPhp } from "react-icons/si";
import SectionHeader from "./ui/SectionHeader";
import { themeManager } from "../config/theme";
import profileRaw from "../data/profile.json";
import type { ProfileData } from "../types/profile";

const profile = profileRaw as ProfileData;

export default function GithubStats() {
  const githubUsername = profile.githubUsername;

  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((response) => response.json())
      .then((data) => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
        });
      })
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, [githubUsername]);

  const topLanguages = [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "PHP", icon: <SiPhp /> },
  ];

  return (
    <section
      id="github"
      className="py-20 md:py-24 bg-surface-muted/40 border-b-2 border-border"
    >
      <div className="swiss-container">
        <SectionHeader
          index="04"
          title="GitHub Activity"
          subtitle="Open Source & Kontribusi"
          rightMeta={`@${githubUsername}`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="neo-card p-6 md:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-border-subtle">
              <span className="swiss-label">Public Repos</span>
              <FaBookBookmark className="text-lg text-primary" />
            </div>
            <p className="text-5xl lg:text-6xl font-black font-heading tracking-tight text-ink tabular-nums">
              {stats.repos}
            </p>
          </div>

          <div className="neo-card p-6 md:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-border-subtle">
              <span className="swiss-label">Followers</span>
              <FaUserAstronaut className="text-lg text-primary" />
            </div>
            <p className="text-5xl lg:text-6xl font-black font-heading tracking-tight text-ink tabular-nums">
              {stats.followers}
            </p>
          </div>

          <div className="neo-card p-6 md:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-border-subtle">
              <span className="swiss-label">Most Written In</span>
              <span className="font-mono text-[11px] font-bold text-primary">
                TOP 3
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 px-3 py-2 border border-border bg-surface-muted font-mono text-xs font-bold text-ink"
                >
                  <span className="text-base text-primary">{lang.icon}</span>
                  {lang.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="neo-card p-6 md:p-8 overflow-x-auto">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-border-subtle">
            <h3 className="font-heading text-lg md:text-xl font-black uppercase tracking-tight text-ink">
              Contribution Timeline
            </h3>
            <span className="swiss-label">Last 12 Months</span>
          </div>

          <div className="min-w-[760px] font-mono text-xs">
            <GitHubCalendar
              username={githubUsername}
              blockSize={14}
              blockMargin={4}
              colorScheme="light"
              theme={{
                light: themeManager.githubCalendarScale,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
