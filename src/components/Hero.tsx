import profil from "../assets/profil.svg";
import { SiReact, SiLaravel, SiFlutter } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";

export default function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-3xl" />,
      url: "#",
      label: "GitHub",
      color: "bg-white text-black",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-3xl" />,
      url: "#",
      label: "LinkedIn",
      color: "bg-neo-blue text-white",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-3xl" />,
      url: "#",
      label: "Instagram",
      color: "bg-neo-pink text-black",
    },
    {
      name: "Medium",
      icon: <FaMedium className="text-3xl" />,
      url: "#",
      label: "Medium",
      color: "bg-black text-white",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen pt-28 pb-12 px-6 flex items-center justify-center bg-neo-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="font-heading text-4xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-black mb-4">
            WILDAN MAULANA
          </h1>
          <h2 className="font-mono text-xl sm:text-2xl font-bold bg-neo-blue text-white px-2 py-1 mb-6 border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-black inline-block">
            Mahasiswa | Full-Stack & Mobile Developer
          </h2>
          <p className="text-lg sm:text-xl max-w-xl font-medium mb-8 leading-relaxed">
            Saya seorang junior developer dan mahasiswa Teknologi
            Informasi Universitas Tidar yang berfokus membangun inovasi digital
            yang bermanfaat dan menarik secara visual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
            <a
              href="#project"
              className="px-8 py-4 bg-neo-yellow border-2 border-black font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all text-center cursor-pointer"
            >
              Lihat Karya Saya
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white border-2 border-black font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all text-center cursor-pointer"
            >
              CV
            </a>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                title={social.label}
                target="_blank"
                rel="noreferrer"
                className={`w-14 h-14 flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative lg:mt-0 mt-11">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-neo-yellow border-2 border-black translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"></div>
            <div className="absolute inset-0 bg-white border-2 border-black overflow-hidden z-10 flex items-end justify-center">
              <img
                src={profil}
                alt="Wildan Maulana"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-4 lg:-top-8 lg:-right-10 z-20 px-3 py-1 lg:px-4 lg:py-2 bg-neo-green border-2 border-black font-mono font-bold text-xs lg:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white rotate-[12deg] hover:rotate-0 transition-transform cursor-default flex items-center gap-2">
              <IoRocketOutline className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
              AVAILABLE FOR WORK
            </div>
            <div className="absolute top-1/4 -left-8 lg:-left-12 z-20 bg-white border-2 border-black px-3 py-2 font-black font-heading text-sm lg:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-15deg] hover:scale-110 transition-transform cursor-default flex items-center gap-2">
              <SiReact className="w-5 h-5 lg:w-6 lg:h-6 text-[#00D8FF]" />
              REACT
            </div>
            <div className="absolute bottom-1/4 -right-6 lg:-right-10 z-20 bg-white border-2 border-black px-3 py-2 font-black font-heading text-sm lg:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[10deg] hover:scale-110 transition-transform cursor-default flex items-center gap-2">
              <SiLaravel className="w-5 h-5 lg:w-6 lg:h-6 text-[#FF2D20]" />
              LARAVEL
            </div>
            <div className="absolute -bottom-4 left-6 lg:left-10 z-20 bg-white border-2 border-black px-3 py-2 font-black font-heading text-sm lg:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg] hover:scale-110 transition-transform cursor-default flex items-center gap-2">
              <SiFlutter className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              FLUTTER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
