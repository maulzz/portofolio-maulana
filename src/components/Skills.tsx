import SectionHeader from "./ui/SectionHeader";
import { usePortfolio } from "../context/PortfolioContext";
import { SkillIcon } from "../utils/skillIcon";

function SkillsSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-busy="true"
    >
      {[0, 1, 2].map((col) => (
        <div key={col} className="neo-card flex flex-col animate-pulse">
          <div className="px-6 py-4 border-b-2 border-border bg-surface-muted flex items-center justify-between">
            <div className="h-4 w-28 bg-border-subtle" />
            <div className="h-4 w-8 bg-border-subtle" />
          </div>
          <div className="divide-y divide-border-subtle">
            {[0, 1, 2].map((row) => (
              <div key={row} className="px-6 py-4 flex items-center gap-3.5">
                <div className="w-6 h-6 bg-surface-muted" />
                <div className="h-4 w-32 bg-surface-muted" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const { skills: skillGroups, status } = usePortfolio();
  const showSkeleton = status.skills.loading || status.skills.disconnected;

  return (
    <section
      id="skills"
      className="py-20 md:py-24 bg-surface-muted/40 border-b-2 border-border"
    >
      <div className="swiss-container">
        <SectionHeader
          index="02"
          title="Technical Stack"
          subtitle="Kapabilitas & Ekosistem"
          rightMeta={
            showSkeleton
              ? "SYNCING..."
              : `${skillGroups.length} CORE DOMAINS`
          }
        />

        {showSkeleton ? (
          <SkillsSkeleton />
        ) : skillGroups.length === 0 ? (
          <div className="neo-card p-8 text-center">
            <p className="font-mono text-sm text-ink-muted">
              Belum ada data technical stack.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.code} className="neo-card flex flex-col">
                <div className="px-6 py-4 border-b-2 border-border bg-surface-muted flex items-center justify-between">
                  <h3 className="font-heading text-base font-black uppercase tracking-tight text-ink">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs font-bold text-primary">
                    [{group.code}]
                  </span>
                </div>

                <ul className="divide-y divide-border-subtle flex-grow">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="px-6 py-4 flex items-center justify-between hover:bg-primary-soft transition-colors group"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xl text-ink group-hover:text-primary transition-colors flex items-center justify-center w-6 h-6">
                          <SkillIcon
                            iconKey={skill.iconKey}
                            iconUrl={skill.iconUrl}
                            name={skill.name}
                          />
                        </span>
                        <span className="font-mono text-sm font-bold text-ink">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        Ready
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
