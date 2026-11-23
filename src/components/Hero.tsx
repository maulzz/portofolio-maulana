import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import profileRaw from "../data/profile.json";
import type { ProfileData } from "../types/profile";
import { resolveProjectImage } from "../utils/projectMedia";

const profile = profileRaw as ProfileData;

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  github: <FaGithub className="text-xl" />,
  linkedin: <FaLinkedin className="text-xl" />,
  instagram: <FaInstagram className="text-xl" />,
  medium: <FaMedium className="text-xl" />,
};

export default function Hero() {
  const avatarSrc = resolveProjectImage(profile.avatarUrl);
  const nameParts = profile.fullName.split(" ");
  const firstName = nameParts[0] ?? profile.fullName;
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section
      id="about"
      className="pt-24 pb-16 lg:pt-16 lg:pb-0 lg:min-h-screen flex items-center bg-canvas border-b-2 border-border"
    >
      <div className="swiss-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Swiss Typographic Hierarchy */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 border border-border bg-surface px-3 py-1.5 mb-6 shadow-neo-sm">
              <span className="w-2 h-2 bg-primary inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                {profile.availabilityText}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-ink mb-5">
              {firstName}
              {lastName && (
                <>
                  <br className="hidden sm:block" /> {lastName}
                </>
              )}
            </h1>

            <div className="inline-block bg-primary-soft border-l-4 border-primary px-4 py-2 mb-6">
              <p className="font-mono text-sm sm:text-base font-bold text-primary-dark uppercase tracking-wide">
                {profile.roleTitle}
              </p>
            </div>

            <p className="text-base sm:text-lg text-ink-muted max-w-xl font-medium mb-8 leading-relaxed">
              {profile.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#project"
                className="neo-btn bg-gradient-primary text-on-primary"
              >
                Lihat Proyek <FaArrowRight className="text-xs" />
              </a>

              <a
                href={profile.cvUrl || "#contact"}
                download={profile.cvUrl ? true : undefined}
                target={profile.cvUrl ? "_blank" : undefined}
                rel={profile.cvUrl ? "noreferrer" : undefined}
                title={
                  profile.cvUrl
                    ? "Unduh CV"
                    : "CV belum ditautkan — hubungi untuk meminta CV"
                }
                className="neo-btn bg-accent text-on-accent"
              >
                <FaDownload className="text-xs" /> Unduh CV
              </a>

              <a href="#contact" className="neo-btn bg-surface text-ink">
                Hubungi Saya
              </a>
            </div>

            <div className="flex items-center gap-3 pt-5 border-t border-border-subtle">
              <span className="swiss-label mr-2">Connect</span>
              {profile.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  title={social.name}
                  aria-label={social.name}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center border-2 border-border bg-surface text-ink shadow-neo-sm hover:bg-accent hover:text-on-accent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo transition-all"
                >
                  {SOCIAL_ICON_MAP[social.iconKey] ?? <FaGithub />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Swiss Portrait Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm border-2 border-border bg-surface shadow-neo-lg">
              <div className="aspect-[4/4.2] overflow-hidden border-b-2 border-border bg-surface-muted">
                {avatarSrc && (
                  <img
                    src={avatarSrc}
                    alt={profile.fullName}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-surface">
                <div>
                  <p className="swiss-label text-[10px]">Focus</p>
                  <p className="font-mono text-xs font-bold text-ink">
                    {profile.focusLabel}
                  </p>
                </div>
                <span className="font-mono text-xs font-bold px-2 py-1 bg-accent text-on-accent border border-border">
                  {profile.localeBadge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
