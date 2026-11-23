import profileRaw from "../data/profile.json";
import type { ProfileData } from "../types/profile";

const profile = profileRaw as ProfileData;

export default function AboutStrip() {
  if (!profile.aboutPillars.length) return null;

  return (
    <section
      id="about-me"
      aria-label="About Me"
      className="bg-surface border-b-2 border-border"
    >
      <div className="swiss-container">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-border border-x-2 border-border">
          {profile.aboutPillars.map((pillar) => (
            <div key={pillar.code} className="p-6 md:p-7">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 bg-primary text-on-primary">
                  {pillar.code}
                </span>
                <h2 className="font-heading text-sm font-black uppercase tracking-wider text-ink">
                  {pillar.title}
                </h2>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
