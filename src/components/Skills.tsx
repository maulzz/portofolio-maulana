import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiFlutter,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiMysql,
  SiPhp,
  SiJavascript,
} from "react-icons/si";

export default function Skills() {
  const row1 = [
    { name: "React JS", icon: <SiReact />, color: "bg-blue-300" },
    { name: "Javascript", icon: <SiJavascript />, color: "bg-neo-yellow" },
    { name: "TypeScript", icon: <SiTypescript />, color: "bg-neo-blue" },
    { name: "Next.JS", icon: <SiNextdotjs />, color: "bg-green-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-blue-300" },
    { name: "Python", icon: <SiPython />, color: "bg-neo-yellow" },
    { name: "Flutter", icon: <SiFlutter />, color: "bg-neo-blue text-white" },
    { name: "MySQL", icon: <SiMysql />, color: "bg-white" },
    { name: "PHP", icon: <SiPhp />, color: "bg-neo-blue" },
    { name: "Laravel", icon: <SiLaravel />, color: "bg-neo-red" },
  ];

  const row2 = [
    { name: "React JS", icon: <SiReact />, color: "bg-blue-300" },
    { name: "Javascript", icon: <SiJavascript />, color: "bg-neo-yellow" },
    { name: "TypeScript", icon: <SiTypescript />, color: "bg-neo-blue" },
    { name: "Next.JS", icon: <SiNextdotjs />, color: "bg-green-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-blue-300" },
    { name: "Python", icon: <SiPython />, color: "bg-neo-yellow" },
    { name: "Flutter", icon: <SiFlutter />, color: "bg-neo-blue text-white" },
    { name: "MySQL", icon: <SiMysql />, color: "bg-white" },
    { name: "PHP", icon: <SiPhp />, color: "bg-neo-blue" },
    { name: "Laravel", icon: <SiLaravel />, color: "bg-neo-red" },
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
            {[...row1].map((skill, index) => (
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
            {[...row2].reverse().map((skill, index) => (
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
