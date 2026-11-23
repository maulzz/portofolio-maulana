import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegWindowMaximize, FaMinus, FaArrowRight } from "react-icons/fa6";
import SectionHeader from "./ui/SectionHeader";
import { usePortfolio } from "../context/PortfolioContext";
import { resolveProjectImage } from "../utils/projectMedia";

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-busy="true">
      {/* Featured Skeleton */}
      <div className="neo-card md:col-span-2 md:grid md:grid-cols-12 overflow-hidden animate-pulse">
        <div className="md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[340px] bg-surface-muted border-b-2 md:border-b-0 md:border-r-2 border-border" />
        <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-5 w-28 bg-surface-muted" />
              <div className="h-5 w-20 bg-surface-muted" />
            </div>
            <div className="h-8 w-4/5 bg-surface-muted" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-surface-muted" />
              <div className="h-4 w-5/6 bg-surface-muted" />
              <div className="h-4 w-2/3 bg-surface-muted" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-surface-muted" />
              <div className="h-6 w-20 bg-surface-muted" />
              <div className="h-6 w-16 bg-surface-muted" />
            </div>
            <div className="pt-4 border-t border-border-subtle flex justify-between">
              <div className="h-4 w-32 bg-surface-muted" />
              <div className="h-4 w-16 bg-surface-muted" />
            </div>
          </div>
        </div>
      </div>

      {/* Regular Card Skeletons */}
      {[0, 1].map((item) => (
        <div key={item} className="neo-card overflow-hidden animate-pulse">
          <div className="aspect-[16/10] bg-surface-muted border-b-2 border-border" />
          <div className="p-6 md:p-8 space-y-4">
            <div className="h-5 w-24 bg-surface-muted" />
            <div className="h-7 w-3/4 bg-surface-muted" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-surface-muted" />
              <div className="h-4 w-4/5 bg-surface-muted" />
            </div>
            <div className="pt-4 border-t border-border-subtle flex justify-between">
              <div className="h-4 w-28 bg-surface-muted" />
              <div className="h-4 w-14 bg-surface-muted" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const { projects: projectsData, status } = usePortfolio();
  const [showAll, setShowAll] = useState(false);

  const showSkeleton =
    status.projects.loading || status.projects.disconnected;
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section
      id="project"
      className="py-20 md:py-24 bg-canvas border-b-2 border-border relative"
    >
      <div className="swiss-container">
        <SectionHeader
          index="01"
          title="Selected Projects"
          subtitle="Karya & Arsitektur Sistem"
          rightMeta={
            showSkeleton
              ? "SYNCING..."
              : `${projectsData.length} WORKS ARCHIVED`
          }
        />

        {showSkeleton ? (
          <ProjectsSkeleton />
        ) : projectsData.length === 0 ? (
          <div className="neo-card p-8 text-center">
            <p className="font-mono text-sm text-ink-muted">
              Belum ada proyek yang dipublikasikan.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayedProjects.map((project, idx) => {
                const isFeatured = idx === 0;
                const projectNumber = String(idx + 1).padStart(2, "0");
                const coverImage = project.screenshots[0]
                  ? resolveProjectImage(project.screenshots[0].src)
                  : "";

                return (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className={`group neo-card-interactive flex flex-col overflow-hidden ${
                      isFeatured ? "md:col-span-2 md:grid md:grid-cols-12" : ""
                    }`}
                  >
                    {/* Thumbnail */}
                    <div
                      className={`overflow-hidden bg-surface-muted relative ${
                        isFeatured
                          ? "md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[340px] border-b-2 md:border-b-0 md:border-r-2 border-border"
                          : "aspect-[16/10] border-b-2 border-border"
                      }`}
                    >
                      {coverImage && (
                        <img
                          src={coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute top-3 left-3 font-mono text-xs font-bold px-2.5 py-1 bg-surface border border-border text-ink">
                        {projectNumber}
                      </div>
                    </div>

                    {/* Details */}
                    <div
                      className={`p-6 md:p-8 flex flex-col justify-between ${
                        isFeatured ? "md:col-span-5" : "flex-grow"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary-soft text-primary-dark border border-primary/30">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="font-mono text-[11px] font-bold uppercase px-2 py-0.5 bg-accent text-on-accent border border-border">
                              Featured
                            </span>
                          )}
                        </div>

                        <h3
                          className={`font-heading font-black tracking-tight leading-snug text-ink mb-3 group-hover:text-primary transition-colors ${
                            isFeatured
                              ? "text-2xl md:text-3xl"
                              : "text-xl md:text-2xl"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-ink-muted leading-relaxed line-clamp-3 mb-5">
                          {project.overview}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] font-medium px-2 py-0.5 bg-surface-muted border border-border-subtle text-ink"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink group-hover:text-primary flex items-center gap-1.5">
                            View Case Study{" "}
                            <FaArrowRight className="text-[11px]" />
                          </span>
                          <span className="font-mono text-xs text-ink-muted">
                            {project.screenshots.length} screens
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {projectsData.length > 4 && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="neo-btn bg-surface text-ink hover:bg-accent hover:text-on-accent"
                >
                  {showAll ? (
                    <>
                      Tutup Arsip <FaMinus className="text-xs" />
                    </>
                  ) : (
                    <>
                      Lihat {projectsData.length - 4} Proyek Lainnya{" "}
                      <FaRegWindowMaximize className="text-xs" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
