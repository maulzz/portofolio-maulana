import { useState } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
  FaXmark,
} from "react-icons/fa6";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert("Terjadi kesalahan sistem. Coba lagi nanti.");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim pesan. Periksa koneksi internetmu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-neo-yellow px-6 border-t-4 border-black relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 text-9xl opacity-10 font-black font-heading transform rotate-12 select-none pointer-events-none">
        @
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-heading uppercase tracking-tighter mb-6 leading-tight">
              Let's Build <br />
              <span className="bg-white border-4 border-black px-4 py-2 inline-block transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Something.
              </span>
            </h2>

            <p className="text-lg md:text-xl font-medium mb-10 max-w-md leading-relaxed border-l-4 border-black pl-4">
              Punya ide tetapi tidak tau membuatnya, butuh bantuan untuk
              pengembangan sistem informasi, atau sekadar berdiskusi tentang
              teknologi ? Jangan ragu untuk mengirim pesan.
            </p>

            <div className="space-y-6 font-mono font-bold text-lg md:text-xl">
              <div className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                <FaEnvelope className="text-2xl text-neo-blue" />
                <span>wildanmaulana95914@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                <FaLocationDot className="text-2xl text-neo-pink" />
                <span>Magelang, Jawa Tengah, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="bg-neo-bg border-4 border-black p-8 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-6 -left-6 bg-black text-white font-mono font-bold px-4 py-2 text-sm border-2 border-neo-bg">
              STATUS: OPEN FOR WORK
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-mono font-bold uppercase text-sm"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full border-4 border-black p-4 font-medium outline-none focus:bg-neo-lime transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-[4px] focus:translate-y-[4px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono font-bold uppercase text-sm"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full border-4 border-black p-4 font-medium outline-none focus:bg-neo-lime transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-[4px] focus:translate-y-[4px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono font-bold uppercase text-sm"
                >
                  Isi Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Halo, saya ingin mengajak kerja sama..."
                  className="w-full border-4 border-black p-4 font-medium outline-none focus:bg-neo-pink transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-[4px] focus:translate-y-[4px] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-2 border-4 border-black p-4 font-black font-heading text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3
                  ${isSubmitting ? "bg-gray-400 text-black cursor-not-allowed translate-x-[6px] translate-y-[6px] shadow-none" : "bg-neo-blue text-white hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none active:bg-black"}
                `}
              >
                {isSubmitting ? (
                  "MENGIRIM..."
                ) : (
                  <>
                    Kirim Pesan <FaArrowRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed bottom-10 right-10 z-50 bg-neo-lime border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-[popUp_0.2s_ease-out] flex items-start gap-4 max-w-sm">
          <div>
            <h3 className="font-black font-heading text-2xl uppercase mb-1">
              Pesan Meluncur! 🚀
            </h3>
            <p className="font-mono text-sm font-bold">
              Terima kasih. Aku akan segera membalas pesanmu ke email yang kamu
              cantumkan.
            </p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-white border-2 border-black p-1 hover:bg-neo-red transition-colors"
          >
            <FaXmark />
          </button>
        </div>
      )}
    </section>
  );
}
