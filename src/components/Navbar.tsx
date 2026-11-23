import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function Navbar() {
  const { profile } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { index: "01", name: "Projects", href: "#project" },
    { index: "02", name: "Skills", href: "#skills" },
    { index: "03", name: "Experience", href: "#education" },
    { index: "04", name: "GitHub", href: "#github" },
    { index: "05", name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-canvas/95 backdrop-blur-sm border-b-2 border-border">
        <div className="swiss-container">
          <div className="flex justify-between items-center h-16">
            <a
              href="#about"
              className="font-mono text-base sm:text-lg font-bold tracking-tight bg-gradient-primary text-on-primary px-3 py-1.5 border-2 border-border shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo transition-all"
            >
              {profile.brandName}
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-2 border-2 border-transparent hover:border-border hover:bg-accent hover:text-on-accent transition-all flex items-center gap-1.5"
                >
                  <span className="text-ink-muted">{link.index}.</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="bg-surface p-2 border-2 border-border shadow-neo-sm active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-ink/50 flex justify-end md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-72 h-full bg-canvas border-l-2 border-border p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-border pb-4 mb-6">
              <span className="swiss-label">Navigation</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="bg-surface p-2 border-2 border-border shadow-neo-sm active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-sm font-bold uppercase tracking-wider border-2 border-border bg-surface px-4 py-3 shadow-neo-sm hover:bg-accent hover:text-on-accent transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-ink-muted">{link.index}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
