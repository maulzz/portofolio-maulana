import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiFlutter,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiMysql,
} from "react-icons/si";
import { BsRobot } from "react-icons/bs"; // Untuk AI Prompting
import { MdDesignServices } from "react-icons/md"; // Untuk UI/UX

export default function Skills() {
  // Baris 1: Frontend & Design (Jalan ke Kiri)
  const row1 = [
    { name: "React JS", icon: <SiReact />, color: "bg-white" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "bg-neo-yellow" },
    { name: "TypeScript", icon: <SiTypescript />, color: "bg-white" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-neo-pink" },
    { name: "UI/UX Design", icon: <MdDesignServices />, color: "bg-white" },
    { name: "Figma", icon: <SiFigma />, color: "bg-neo-green" },
  ];

  // Baris 2: Backend, Mobile & Tools (Jalan ke Kanan)
  const row2 = [
    { name: "Laravel", icon: <SiLaravel />, color: "bg-white" },
    { name: "Flutter", icon: <SiFlutter />, color: "bg-neo-blue text-white" },
    { name: "MySQL", icon: <SiMysql />, color: "bg-white" },
    { name: "AI Prompting", icon: <BsRobot />, color: "bg-neo-yellow" },
    {
      name: "Layouting & Branding",
      icon: <MdDesignServices />,
      color: "bg-white",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-neo-bg overflow-hidden border-t-4 border-black"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter inline-block border-b-8 border-neo-blue pb-2">
          Skills
        </h2>
      </div>

      <div className="flex flex-col gap-6 transform -rotate-2 scale-105">
        <div className="flex w-full overflow-hidden border-y-4 border-black bg-neo-blue py-4 shadow-brutal">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...row1, ...row1].map((skill, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-3 mx-3 border-2 border-black font-mono font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${skill.color}`}
              >
                <span className="text-2xl">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full overflow-hidden border-y-4 border-black bg-neo-lime py-4 shadow-brutal">
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {[...row2, ...row2].map((skill, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-3 mx-3 border-2 border-black font-mono font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${skill.color}`}
              >
                <span className="text-2xl">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
