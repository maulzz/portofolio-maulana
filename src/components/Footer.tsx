import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t-8 border-black pt-5 pb-8 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, white 2px, transparent 2px),
            radial-gradient(circle at center, white 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full border-b-4 border-white/50 pb-8 mb-8">
        <div className="text-left">
          <h2 className="text-3xl md:text-6xl font-black font-heading uppercase tracking-tighter text-neo-lime cursor-default">
            Maulana
          </h2>
          <p className="font-mono text-lg md:text-2xl mt-2 text-white font-bold bg-neo-blue inline-block px-3 py-1 border-2 border-white transform -rotate-1">
            Full-Stack & Mobile Developer
          </p>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-white text-black border-4 border-white p-4 font-black font-heading text-xl z-10 uppercase shadow-[6px_6px_0px_0px_rgba(145,255,0,1)] hover:bg-neo-lime hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:bg-neo-pink transition-all flex items-center gap-3"
        >
          UP TO TOP <FaArrowUp />
        </button>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm md:text-base font-bold">
        <p className="uppercase">
          © {new Date().getFullYear()} Maulana. All rights reserved.
        </p>

        <div className="flex gap-4">
          <span className="bg-white text-black border-2 border-white px-3 py-1 uppercase font-black hover:bg-neo-pink transition-colors cursor-default">
            MADE WITH ☕ IN MAGELANG
          </span>
        </div>
      </div>
    </footer>
  );
}
