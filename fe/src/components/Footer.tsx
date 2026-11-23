import { FaArrowUp } from "react-icons/fa6";
import profileRaw from "../data/profile.json";
import type { ProfileData } from "../types/profile";

const profile = profileRaw as ProfileData;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-surface border-t-2 border-border py-12">
      <div className="swiss-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 mb-8 border-b border-surface/20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-heading uppercase tracking-tight text-surface">
              {profile.fullName}
            </h2>
            <p className="font-mono text-xs sm:text-sm mt-2 text-surface/70 uppercase tracking-wider">
              {profile.roleTitle}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="neo-btn bg-surface text-ink hover:bg-accent hover:text-on-accent"
          >
            Back to Top <FaArrowUp className="text-xs" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-surface/70">
          <p className="uppercase">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <span className="uppercase tracking-wider">
            Built with React, TypeScript &amp; Swiss Precision
          </span>
        </div>
      </div>
    </footer>
  );
}
