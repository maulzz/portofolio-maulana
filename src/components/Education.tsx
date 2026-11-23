import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import SectionHeader from "./ui/SectionHeader";
import { usePortfolio } from "../context/PortfolioContext";
import type { ExperienceCategory } from "../types/experience";

const INITIAL_LIMIT = 5;

type FilterTab = "all" | ExperienceCategory;

export default function Education() {
  const { experiences: experiencesData } = usePortfolio();
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [showAll, setShowAll] = useState(false);

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: "all", label: "All", count: experiencesData.length },
    {
      key: "experience",
      label: "Experience",
      count: experiencesData.filter((i) => i.category === "experience").length,
    },
    {
      key: "education",
      label: "Education",
      count: experiencesData.filter((i) => i.category === "education").length,
    },
    {
      key: "achievement",
      label: "Achievements",
      count: experiencesData.filter((i) => i.category === "achievement").length,
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? experiencesData
      : experiencesData.filter((item) => item.category === activeTab);

  const displayedItems = showAll
    ? filteredItems
    : filteredItems.slice(0, INITIAL_LIMIT);

  const remainingCount = filteredItems.length - INITIAL_LIMIT;

  const handleTabChange = (tab: FilterTab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section
      id="education"
      className="py-20 md:py-24 bg-canvas border-b-2 border-border"
    >
      <div className="swiss-container">
        <SectionHeader
          index="03"
          title="Experience & Milestones"
          subtitle="Pengalaman, Akademik & Pencapaian"
          rightMeta="2023 — PRESENT"
        />

        {/* Swiss Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter experience, education, and achievements"
          className="flex flex-wrap gap-2.5 mb-8"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabChange(tab.key)}
                className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 border-2 border-border transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-on-primary shadow-neo-sm"
                    : "bg-surface text-ink hover:bg-accent hover:text-on-accent"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 text-[10px] border ${
                    isActive
                      ? "bg-surface text-ink border-border"
                      : "bg-surface-muted text-ink-muted border-border-subtle"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline Rows */}
        <div className="space-y-5">
          {displayedItems.map((item) => (
            <article
              key={item.id}
              className="bg-surface border-2 border-border shadow-neo-sm hover:shadow-neo transition-shadow grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Metadata Column */}
              <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r-2 border-border bg-surface-muted/50 flex flex-col justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 bg-ink text-surface">
                    {item.year}
                  </span>
                  <span
                    className={`font-mono text-[11px] font-bold px-2 py-1 border border-border ${
                      item.highlight
                        ? "bg-accent text-on-accent"
                        : "bg-surface text-ink"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div>
                  <p className="swiss-label text-[10px] mb-1">Institution</p>
                  <p className="font-mono text-sm font-bold text-ink">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-9 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-black text-ink mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                {item.learnings.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                    {item.learnings.map((skill, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs font-medium px-2.5 py-1 bg-surface-muted border border-border-subtle text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Show More / Collapse Button */}
        {filteredItems.length > INITIAL_LIMIT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="neo-btn bg-surface text-ink hover:bg-accent hover:text-on-accent"
            >
              {showAll ? (
                <>
                  Tampilkan Lebih Sedikit <FaChevronUp className="text-xs" />
                </>
              ) : (
                <>
                  Lihat {remainingCount} Data Lainnya{" "}
                  <FaChevronDown className="text-xs" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
