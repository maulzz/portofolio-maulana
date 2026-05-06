export default function Education() {
  const educationData = [
    {
      year: "2025 - Sekarang",
      title: "Mahasiswa Teknologi Informasi",
      institution: "Universitas Tidar",
      desc: "Aktif menulis esai tentang dokumentasi pemrograman melalui medium. Membawa pemahaman teknis ke tingkat yang lebih advanced dan terstruktur. Berfokus pada perancangan arsitektur database, optimalisasi struktur algoritma, serta full-stack web & mobile development. Secara aktif membedah berbagai paradigma sistem untuk membangun perangkat lunak yang kokoh, terukur (scalable), dan relevan dengan industri.",
      learnings: [
        "Struktur Algoritma",
        "Basis Data",
        "Web & Mobile Development",
        "Paradigma Sistem",
      ],
      color: "bg-white",
      tag: "🎓 ACADEMIC",
    },
    {
      year: "Lulusan Tahun 2025",
      title: "Siswa Rekayasa Perangkat Lunak",
      institution: "SMKN 2 Magelang",
      desc: "Membangun fondasi software engineering dari nol. Belajar untuk menguasai struktur data, manajemen database, hingga pengembangan aplikasi web & mobile. Tidak hanya itu, saya juga mengeksplorasi sisi kreatif digital secara intensif, mencakup 3D modeling, animasi, hingga 2D & 3D game development.",
      learnings: [
        "Data Structures & Algorithms",
        "Database Management",
        "Web & Mobile App Development",
        "2D & 3D Game Development",
        "3D Modeling",
        "3D Animation",
        "Software Engineering",
      ],
      color: "bg-neo-lime",
      tag: "🎓 ACADEMIC",
    },
    {
      year: "2024-2025",
      title: "Internship sebagai Game Development",
      institution: "PT teknoreka",
      desc: "Terlibat penuh dalam siklus pengembangan game, mulai dari merancang aset 2D & 3D hingga penulisan logika permainan (scripting). Mengasah kemampuan memecahkan masalah secara teknis sekaligus mempertahankan manajemen waktu yang ketat untuk mencapai target rilis dalam lingkungan kerja profesional.",
      learnings: [
        "Unity",
        "C#",
        "2D & 3D Game Development",
        "2D & 3D Design",
        "Manajemen Waktu",
      ],
      color: "bg-white",
      tag: "💼 INTERNSHIP",
    },
    {
      year: "2023-2024",
      title: "Internship sebagai 3D Designer",
      institution: "Jivaloka Digital",
      desc: "Memproduksi dan mengembangkan aset 3D berkualitas untuk berbagai proyek game. Terlibat langsung dalam ekosistem kerja tim, mengaplikasikan alur manajemen proyek, serta mulai mengeksplorasi fondasi pengembangan lingkungan permainan menggunakan Unreal Engine 5 (UE5).",
      learnings: [
        "Pembuatan Aset 3D",
        "UE5 Basic",
        "Pengembangan 3D model",
        "Kolaborasi Tim",
        "Manajemen Proyek",
      ],
      color: "bg-neo-yellow",
      tag: "💼 INTERNSHIP",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-neo-bg px-6 border-t-4 border-black"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter inline-block bg-neo-blue text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            Education & Experience.
          </h2>
        </div>
        <div className="relative border-l-8 border-black ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute w-8 h-8 bg-white border-4 border-black -left-[52px] md:-left-[68px] top-2 group-hover:bg-neo-pink group-hover:rotate-45 transition-all duration-300 z-10"></div>
              <div
                className={`border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${item.color}`}
              >
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  <span className="font-mono font-bold text-sm md:text-base bg-black text-white px-3 py-1">
                    {item.year}
                  </span>
                  <span className="font-mono font-bold text-xs border-2 border-black px-2 py-1 bg-white">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black font-heading leading-tight mb-1">
                  {item.title}
                </h3>
                <h4 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-black inline-block pb-1">
                  {item.institution}
                </h4>
                <p className="text-base md:text-lg font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
                {item.learnings && (
                  <div className="flex flex-wrap gap-2 mt-auto border-t-2 border-black pt-4">
                    {item.learnings.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`font-mono text-xs md:text-sm font-bold border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                          item.color.includes("text-white")
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
