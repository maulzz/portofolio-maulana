import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaXmark,
} from "react-icons/fa6";
import { resolveProjectImage } from "../utils/projectMedia";
import Footer from "../components/Footer";
import { usePortfolio } from "../context/PortfolioContext";

function EmptyPlaceholder({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs text-ink-muted italic border border-dashed border-border-subtle bg-surface-muted/50 px-4 py-3">
      {label} — belum diisi (siap dihubungkan ke CMS).
    </p>
  );
}

export default function ProjectDetailPage() {
  const { projects } = usePortfolio();
  const { slug } = useParams<{ slug: string }>();
  const [lightbox, setLightbox] = useState<{
    slug: string;
    index: number;
  } | null>(null);
  const lightboxIndex =
    lightbox && lightbox.slug === slug ? lightbox.index : null;
  const openLightbox = (index: number) => {
    if (slug) setLightbox({ slug, index });
  };
  const closeLightbox = () => setLightbox(null);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = currentIndex >= 0 ? projects[currentIndex] : null;
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  if (!project) {
    return (
      <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between">
        <div className="swiss-container py-24">
          <div className="neo-card p-8 md:p-12 max-w-xl">
            <span className="font-mono text-xs font-bold px-2 py-1 bg-accent text-on-accent border border-border inline-block mb-4">
              404 — NOT FOUND
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-black uppercase mb-4">
              Proyek Tidak Ditemukan
            </h1>
            <p className="text-ink-muted mb-8">
              Halaman proyek dengan slug <code className="font-mono">{slug}</code>{" "}
              tidak tersedia.
            </p>
            <Link to="/" className="neo-btn bg-gradient-primary text-on-primary">
              <FaArrowLeft className="text-xs" /> Kembali ke Beranda
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const coverImage = project.screenshots[0]
    ? resolveProjectImage(project.screenshots[0].src)
    : "";

  const hasRoleData =
    Boolean(project.myRole.title) ||
    Boolean(project.myRole.contribution) ||
    project.myRole.responsibilities.length > 0;

  const hasArchitectureData =
    Boolean(project.architecture.summary) ||
    project.architecture.flow.length > 0;

  return (
    <div className="min-h-screen bg-canvas text-ink selection:bg-primary selection:text-on-primary flex flex-col">
      {/* Sticky Minimalist Top Bar */}
      <header className="sticky top-0 z-40 bg-canvas/95 backdrop-blur-sm border-b-2 border-border">
        <div className="swiss-container h-16 flex items-center justify-between gap-4">
          <Link
            to="/#project"
            className="font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 px-3 py-1.5 border-2 border-border bg-surface shadow-neo-sm hover:bg-accent hover:text-on-accent transition-colors"
          >
            <FaArrowLeft className="text-[11px]" /> Back to Projects
          </Link>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span>PROJECTS</span>
            <span>/</span>
            <span className="font-bold text-ink uppercase">{project.slug}</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero / Overview & Links */}
        <section className="py-12 md:py-16 border-b-2 border-border bg-surface">
          <div className="swiss-container">
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="font-mono text-xs font-bold px-2.5 py-1 bg-primary text-on-primary border border-border">
                {String(project.id).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs font-bold uppercase px-2.5 py-1 bg-primary-soft text-primary-dark border border-primary/30">
                {project.category}
              </span>
              {project.year && (
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-surface-muted border border-border-subtle text-ink">
                  {project.year}
                </span>
              )}
              {project.featured && (
                <span className="font-mono text-xs font-bold uppercase px-2.5 py-1 bg-accent text-on-accent border border-border">
                  Featured
                </span>
              )}
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-[1.05] text-ink mb-6 max-w-4xl">
              {project.title}
            </h1>

            {/* 01. Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-8">
                <p className="swiss-label mb-2">01 / Overview</p>
                {project.overview ? (
                  <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
                    {project.overview}
                  </p>
                ) : (
                  <EmptyPlaceholder label="Overview" />
                )}
              </div>

              {/* 10. Links */}
              <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn bg-gradient-primary text-on-primary"
                  >
                    <FaArrowUpRightFromSquare className="text-xs" /> Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn bg-surface text-ink"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>
                )}
                {!project.links.live && !project.links.github && (
                  <span className="font-mono text-xs text-ink-muted border border-dashed border-border-subtle px-3 py-2">
                    Live Demo &amp; GitHub belum ditautkan
                  </span>
                )}
              </div>
            </div>

            {/* Cover Screenshot */}
            {coverImage && (
              <div className="border-2 border-border shadow-neo-lg bg-surface-muted overflow-hidden aspect-[16/9] max-h-[540px] w-full">
                <img
                  src={coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* 12-Column Swiss Case Study Body */}
        <section className="py-16 md:py-20 border-b-2 border-border">
          <div className="swiss-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Sticky Sidebar: My Role, Tech Stack, Links */}
              <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                {/* 04. My Role & Personal Contribution */}
                <div className="neo-card p-6 border-l-4 border-l-primary">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-border-subtle">
                    <span className="swiss-label text-ink">
                      04 / My Role &amp; Contribution
                    </span>
                  </div>

                  {hasRoleData ? (
                    <div className="space-y-4">
                      {project.myRole.title && (
                        <div>
                          <p className="swiss-label text-[10px] mb-1">Role</p>
                          <p className="font-heading font-bold text-lg text-ink">
                            {project.myRole.title}
                          </p>
                        </div>
                      )}
                      {project.myRole.contribution && (
                        <div>
                          <p className="swiss-label text-[10px] mb-1">
                            Kontribusi Pribadi
                          </p>
                          <p className="text-sm text-ink-muted leading-relaxed">
                            {project.myRole.contribution}
                          </p>
                        </div>
                      )}
                      {project.myRole.responsibilities.length > 0 && (
                        <div>
                          <p className="swiss-label text-[10px] mb-2">
                            Tanggung Jawab
                          </p>
                          <ul className="space-y-1.5">
                            {project.myRole.responsibilities.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-ink flex items-start gap-2"
                              >
                                <span className="font-mono text-xs text-primary font-bold mt-0.5">
                                  →
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <EmptyPlaceholder label="My Role & Kontribusi Pribadi" />
                  )}
                </div>

                {/* 05. Tech Stack */}
                <div className="neo-card p-6">
                  <div className="mb-4 pb-2 border-b border-border-subtle">
                    <span className="swiss-label text-ink">05 / Tech Stack</span>
                  </div>
                  {project.techStack.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs font-bold px-2.5 py-1 bg-surface-muted border border-border text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <EmptyPlaceholder label="Tech Stack" />
                  )}
                </div>

                {/* 10. Links Summary */}
                <div className="neo-card p-6">
                  <div className="mb-4 pb-2 border-b border-border-subtle">
                    <span className="swiss-label text-ink">10 / Links</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-btn bg-gradient-primary text-on-primary w-full"
                      >
                        <FaArrowUpRightFromSquare className="text-xs" /> Live
                        Demo
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-ink-muted">
                        Live Demo: —
                      </span>
                    )}
                    {project.links.github ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-btn bg-surface text-ink w-full"
                      >
                        <FaGithub className="text-base" /> Source Code
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-ink-muted">
                        GitHub: —
                      </span>
                    )}
                  </div>
                </div>
              </aside>

              {/* Right Column: Narrative Case Study */}
              <div className="lg:col-span-8 space-y-10">
                {/* 02. Problem & 03. Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="neo-card p-6">
                    <span className="swiss-label text-ink block mb-3 pb-2 border-b border-border-subtle">
                      02 / Problem
                    </span>
                    {project.problem ? (
                      <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                        {project.problem}
                      </p>
                    ) : (
                      <EmptyPlaceholder label="Problem" />
                    )}
                  </div>

                  <div className="neo-card p-6 bg-primary-soft">
                    <span className="swiss-label text-primary-dark block mb-3 pb-2 border-b border-primary/25">
                      03 / Solution
                    </span>
                    {project.solution ? (
                      <p className="text-sm sm:text-base text-ink leading-relaxed">
                        {project.solution}
                      </p>
                    ) : (
                      <EmptyPlaceholder label="Solution" />
                    )}
                  </div>
                </div>

                {/* 06. Key Features */}
                <div className="neo-card p-6 md:p-8">
                  <span className="swiss-label text-ink block mb-5 pb-2 border-b border-border-subtle">
                    06 / Key Features
                  </span>
                  {project.keyFeatures.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          className="border border-border-subtle bg-canvas p-4 flex items-start gap-3"
                        >
                          <span className="font-mono text-xs font-bold px-2 py-0.5 bg-primary text-on-primary flex-shrink-0">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-medium text-ink leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <EmptyPlaceholder label="Key Features" />
                  )}
                </div>

                {/* 07. Architecture */}
                <div className="neo-card p-6 md:p-8">
                  <span className="swiss-label text-ink block mb-5 pb-2 border-b border-border-subtle">
                    07 / Architecture
                  </span>
                  {hasArchitectureData ? (
                    <div className="space-y-5">
                      {project.architecture.summary && (
                        <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                          {project.architecture.summary}
                        </p>
                      )}
                      {project.architecture.flow.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          {project.architecture.flow.map((node, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold px-3 py-2 bg-surface-muted border-2 border-border text-ink">
                                {node}
                              </span>
                              {idx < project.architecture.flow.length - 1 && (
                                <span className="font-mono text-sm font-bold text-primary">
                                  →
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <EmptyPlaceholder label="Architecture" />
                  )}
                </div>

                {/* 08. Challenges */}
                <div className="neo-card p-6 md:p-8">
                  <span className="swiss-label text-ink block mb-5 pb-2 border-b border-border-subtle">
                    08 / Technical Challenges
                  </span>
                  {project.challenges.length > 0 ? (
                    <div className="space-y-4">
                      {project.challenges.map((item, idx) => (
                        <div
                          key={idx}
                          className="border border-border bg-canvas p-5 grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          <div>
                            <span className="font-mono text-[10px] font-bold uppercase text-ink-muted block mb-1">
                              Masalah
                            </span>
                            <p className="text-sm font-medium text-ink leading-relaxed">
                              {item.problem}
                            </p>
                          </div>
                          <div className="md:border-l md:border-border-subtle md:pl-4">
                            <span className="font-mono text-[10px] font-bold uppercase text-primary block mb-1">
                              Penyelesaian
                            </span>
                            <p className="text-sm text-ink-muted leading-relaxed">
                              {item.solution}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <EmptyPlaceholder label="Technical Challenges" />
                  )}
                </div>

                {/* 09. Screenshots */}
                <div className="neo-card p-6 md:p-8">
                  <div className="flex items-center justify-between mb-5 pb-2 border-b border-border-subtle">
                    <span className="swiss-label text-ink">
                      09 / Screenshots
                    </span>
                    <span className="font-mono text-xs text-ink-muted">
                      {project.screenshots.length} images
                    </span>
                  </div>

                  {project.screenshots.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {project.screenshots.map((shot, idx) => (
                        <figure
                          key={idx}
                          onClick={() => openLightbox(idx)}
                          className="cursor-pointer group border-2 border-border bg-surface-muted overflow-hidden shadow-neo-sm hover:shadow-neo transition-all"
                        >
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={resolveProjectImage(shot.src)}
                              alt={
                                shot.caption ||
                                `${project.title} screenshot ${idx + 1}`
                              }
                              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          {shot.caption && (
                            <figcaption className="px-3 py-2 border-t border-border bg-surface font-mono text-xs text-ink-muted">
                              {shot.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  ) : (
                    <EmptyPlaceholder label="Screenshots" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <section className="py-12 bg-surface-muted/40">
          <div className="swiss-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to={`/projects/${prevProject.slug}`}
                className="neo-card-interactive p-6 flex items-center justify-between gap-4"
              >
                <div>
                  <span className="swiss-label block mb-1">
                    ← Previous Project
                  </span>
                  <p className="font-heading font-bold text-lg text-ink">
                    {prevProject.title}
                  </p>
                </div>
                <FaArrowLeft className="text-primary flex-shrink-0" />
              </Link>

              <Link
                to={`/projects/${nextProject.slug}`}
                className="neo-card-interactive p-6 flex items-center justify-between gap-4 text-right"
              >
                <FaArrowRight className="text-primary flex-shrink-0" />
                <div>
                  <span className="swiss-label block mb-1">Next Project →</span>
                  <p className="font-heading font-bold text-lg text-ink">
                    {nextProject.title}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Screenshot Lightbox */}
      {lightboxIndex !== null && project.screenshots[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          <div
            className="w-full max-w-5xl bg-surface border-2 border-border shadow-neo-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-11 bg-gradient-primary text-on-primary border-b-2 border-border px-4 flex items-center justify-between">
              <span className="font-mono text-xs font-bold">
                SCREENSHOT {lightboxIndex + 1} / {project.screenshots.length}
              </span>
              <button
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="w-7 h-7 bg-surface text-ink border border-border flex items-center justify-center hover:bg-accent"
              >
                <FaXmark className="text-sm" />
              </button>
            </div>
            <div className="bg-surface-muted max-h-[75vh] overflow-hidden flex items-center justify-center">
              <img
                src={resolveProjectImage(
                  project.screenshots[lightboxIndex].src
                )}
                alt={
                  project.screenshots[lightboxIndex].caption ||
                  `${project.title} screenshot ${lightboxIndex + 1}`
                }
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            {project.screenshots.length > 1 && (
              <div className="flex border-t-2 border-border h-11 bg-surface">
                <button
                  onClick={() =>
                    openLightbox(
                      lightboxIndex === 0
                        ? project.screenshots.length - 1
                        : lightboxIndex - 1
                    )
                  }
                  className="flex-1 flex items-center justify-center border-r-2 border-border hover:bg-accent"
                >
                  <FaArrowLeft className="text-sm" />
                </button>
                <button
                  onClick={() =>
                    openLightbox(
                      lightboxIndex === project.screenshots.length - 1
                        ? 0
                        : lightboxIndex + 1
                    )
                  }
                  className="flex-1 flex items-center justify-center hover:bg-accent"
                >
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
