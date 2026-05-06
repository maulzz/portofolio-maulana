import { useState } from "react";
import {
  FaXmark,
  FaRegWindowMaximize,
  FaMinus,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string[];
  desc: string;
  techStack: string[];
  linkLive: string | null;
  linkGithub: string | null;
  color: string;
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

  const projectsData: Project[] = [
    {
      id: 1,
      title: "Laksita Kala - Aplikasi pencatatan tugas ",
      category: "To Do List App",
      image: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      desc: "Laksita Kala adalah asisten akademik untuk membantu menata tugas dan kebutuhan akademik mahasiswa. Membantu merencanakan jadwal kelas, mengelola semua tugas, dan melihat progres belajar di satu tempat terpusat.",
      techStack: ["NextJs", "Tailwind CSS", "Supabase", "PostgreSQL"],
      linkLive: "https://laksita-kala.vercel.app/",
      linkGithub: "",
      color: "bg-orange-500",
    },
    {
      id: 2,
      title: "Nyimpeni Arthoku - Aplikasi Pencatat Pengeluaran",
      category: "Management App",
      image: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      desc: "Aplikasi web untuk mencatat dan mengelola pengeluaran keuangan pribadi. Dibangun dengan Laravel dan React.Js, menggunakan Supabase sebagai database.",
      techStack: ["Laravel", "React", "Tailwind CSS", "PostgreSQL"],
      linkLive: "",
      linkGithub: "https://github.com/maulzz/Nyimpeni-Arthoku",
      color: "bg-neo-blue",
    },
    {
      id: 3,
      title: "Sistem Voting Pemilihan Ketua Osis",
      category: "Web App",
      image: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      desc: "Sebuah sistem pemungutan suara berbasis web untuk pemilihan ketua OSIS. Dibangun dengan Laravel dan Blade, menggunakan MySQL sebagai database.",
      techStack: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
      linkLive: "#",
      linkGithub: "https://github.com/maulzz/pilketos",
      color: "bg-neo-pink",
    },
    {
      id: 4,
      title: "Website Ucapan Ulang Tahun",
      category: "Web App",
      image: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      desc: "Proyek belajar untuk membuat aplikasi web yang memungkinkan pengguna mengirimkan ucapan selamat ulang tahun. Dibangun dengan HTML, Tailwind CSS, dan JavaScript..",
      techStack: ["HTML", "Tailwind CSS", "JavaScript"],
      linkLive: "#",
      linkGithub: "#",
      color: "bg-neo-lime",
    },
    {
      id: 5,
      title: "Website Perpustakaan",
      category: "Web App",
      image: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      desc: "Proyek tugas pada saat SMK untuk membuat sebuah aplikasi web untuk mengelola koleksi buku dan peminjaman. Dibangun dengan PHP dengan Tailwind CSS, menggunakan MySQL sebagai database.",
      techStack: ["PHP", "MySQL", "Tailwind CSS"],
      linkLive: "#",
      linkGithub: "https://github.com/maulzz/perpus",
      color: "bg-white",
    },
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);
  return (
    <section
      id="project"
      className="py-24 bg-neo-bg px-6 border-t-4 border-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black font-heading uppercase tracking-tighter inline-block border-b-8 border-black pb-2">
            Selected Project.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group cursor-pointer border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col"
            >
              <div className="h-48 border-b-4 border-black overflow-hidden relative">
                <div
                  className={`absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity z-10 ${project.color}`}
                ></div>
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold px-2 py-1 bg-black text-white mb-3 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-black font-heading uppercase leading-tight mb-2">
                    {project.title}
                  </h3>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="font-mono text-sm font-bold border-2 border-black px-3 py-1 bg-neo-yellow group-hover:bg-neo-lime transition-colors">
                    OPEN
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projectsData.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-neo-yellow border-4 border-black font-black font-heading text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-3"
            >
              {showAll ? (
                <>
                  TUTUP <FaMinus />
                </>
              ) : (
                <>
                  LIHAT {projectsData.length - 4} PROYEK LAINNYA{" "}
                  <FaRegWindowMaximize />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm bg-black/60">
          <div className="w-full max-w-4xl bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh] animate-[popUp_0.2s_ease-out]">
            <div className="h-12 bg-neo-blue border-b-4 border-black flex items-center justify-between px-4 text-white">
              <div className="font-mono font-bold flex items-center gap-2">
                <span className="w-4 h-4 bg-white border-2 border-black inline-block"></span>
                {activeProject.title.toUpperCase()}.EXE
              </div>

              <div className="flex gap-2">
                <button className="w-8 h-8 bg-white text-black border-2 border-black flex items-center justify-center hover:bg-gray-200 active:translate-y-1">
                  <FaMinus />
                </button>
                <button className="w-8 h-8 bg-white text-black border-2 border-black flex items-center justify-center hover:bg-gray-200 active:translate-y-1">
                  <FaRegWindowMaximize />
                </button>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-8 h-8 bg-neo-pink text-black border-2 border-black flex items-center justify-center hover:bg-red-500 hover:text-white active:translate-y-1"
                >
                  <FaXmark />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto bg-neo-bg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col bg-white">
                  <div className="aspect-video relative overflow-hidden bg-gray-200">
                    <img
                      src={activeProject.image[currentImageIndex]}
                      alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {activeProject.image.length > 1 && (
                    <div className="flex border-t-4 border-black h-12 bg-neo-yellow">
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0
                              ? activeProject.image.length - 1
                              : prev - 1,
                          )
                        }
                        className="flex-1 flex items-center justify-center border-r-4 border-black hover:bg-neo-lime transition-colors active:bg-black active:text-white"
                      >
                        <FaArrowLeft />
                      </button>

                      {/* Indikator Angka */}
                      <div className="px-4 flex items-center justify-center font-mono font-bold text-sm md:text-base border-r-4 border-black bg-white">
                        {currentImageIndex + 1} / {activeProject.image.length}
                      </div>
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === activeProject.image.length - 1
                              ? 0
                              : prev + 1,
                          )
                        }
                        className="flex-1 flex items-center justify-center hover:bg-neo-lime transition-colors active:bg-black active:text-white"
                      >
                        <FaArrowRight />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black font-heading uppercase mb-4">
                      {activeProject.title}
                    </h3>
                    <p className="text-lg font-medium mb-6 leading-relaxed">
                      {activeProject.desc}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-mono font-bold mb-3 uppercase border-b-2 border-black inline-block">
                        System Requirements:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-sm border-2 border-black px-2 py-1 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    {activeProject.linkLive &&
                      activeProject.linkLive !== "#" && (
                        <a
                          href={activeProject.linkLive}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-neo-lime border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        >
                          <FaArrowUpRightFromSquare /> Live Preview
                        </a>
                      )}
                    {activeProject.linkGithub &&
                      activeProject.linkGithub !== "#" && (
                        <a
                          href={activeProject.linkGithub}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        >
                          <FaGithub className="text-xl" /> Source Code
                        </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
