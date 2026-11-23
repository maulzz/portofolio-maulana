import { useState } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
  FaXmark,
} from "react-icons/fa6";
import SectionHeader from "./ui/SectionHeader";
import { usePortfolio } from "../context/PortfolioContext";

export default function Contact() {
  const { profile } = usePortfolio();
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
    <section id="contact" className="py-20 md:py-24 bg-canvas">
      <div className="swiss-container">
        <SectionHeader
          index="05"
          title="Let's Build Something"
          subtitle="Kontak & Kolaborasi"
          rightMeta="OPEN: FREELANCE & REMOTE FULL-TIME"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base md:text-lg text-ink-muted leading-relaxed border-l-4 border-primary pl-4">
              Punya ide produk digital, membutuhkan pengembangan sistem
              informasi, atau sekadar berdiskusi tentang teknologi? Jangan ragu
              untuk mengirim pesan.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="neo-card-interactive p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary-soft border border-border flex items-center justify-center text-primary flex-shrink-0">
                  <FaEnvelope className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="swiss-label text-[10px]">Email</p>
                  <p className="font-mono text-xs sm:text-sm font-bold text-ink truncate group-hover:text-primary transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <div className="neo-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-accent-soft border border-border flex items-center justify-center text-ink flex-shrink-0">
                  <FaLocationDot className="text-base" />
                </div>
                <div>
                  <p className="swiss-label text-[10px]">Location</p>
                  <p className="font-mono text-xs sm:text-sm font-bold text-ink">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Form Card */}
          <div className="lg:col-span-7 bg-surface border-2 border-border p-6 md:p-8 shadow-neo-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="swiss-label text-ink">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Nama lengkap"
                    className="w-full border-2 border-border bg-canvas px-4 py-3 text-sm font-medium outline-none focus:bg-surface focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="swiss-label text-ink">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="email@domain.com"
                    className="w-full border-2 border-border bg-canvas px-4 py-3 text-sm font-medium outline-none focus:bg-surface focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="swiss-label text-ink">
                  Isi Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  placeholder="Halo, saya ingin mengajak kerja sama..."
                  className="w-full border-2 border-border bg-canvas px-4 py-3 text-sm font-medium outline-none focus:bg-surface focus:border-primary transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`neo-btn w-full py-4 text-sm ${
                  isSubmitting
                    ? "bg-surface-muted text-ink-muted cursor-not-allowed shadow-none translate-x-0.5 translate-y-0.5"
                    : "bg-gradient-primary text-on-primary"
                }`}
              >
                {isSubmitting ? (
                  "Mengirim Pesan..."
                ) : (
                  <>
                    Kirim Pesan <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-accent text-on-accent border-2 border-border p-5 shadow-neo-lg animate-popUp flex items-start gap-4 max-w-sm">
          <div>
            <h3 className="font-heading font-black text-lg uppercase mb-1">
              Pesan Terkirim
            </h3>
            <p className="font-mono text-xs font-medium leading-relaxed">
              Terima kasih. Aku akan segera membalas pesanmu melalui email yang
              kamu cantumkan.
            </p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            aria-label="Close notification"
            className="bg-surface border border-border p-1 hover:bg-ink hover:text-surface transition-colors"
          >
            <FaXmark className="text-xs" />
          </button>
        </div>
      )}
    </section>
  );
}
