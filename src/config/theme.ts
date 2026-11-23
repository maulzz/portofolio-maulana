export interface ThemePalette {
  primary: string;
  accent: string;
  canvas: string;
  surface: string;
  ink: string;
  border: string;
}

/**
 * OOP-style Theme Configuration Manager.
 * Bertindak sebagai antarmuka terpusat untuk token warna dan gradasi CSS.
 * Mengubah `--color-primary` di `src/index.css` atau memanggil `themeManager.applyPrimary(hex)`
 * akan otomatis memperbarui seluruh warna utama, tint, gradasi, dan skala grafik.
 */
export class ThemeManager {
  private palette: ThemePalette;

  constructor(initialPalette: ThemePalette) {
    this.palette = initialPalette;
  }

  get current(): ThemePalette {
    return this.palette;
  }

  /**
   * Mengubah warna utama (dan opsional warna aksen) secara dinamis di runtime.
   */
  applyPrimary(primaryHex: string, accentHex?: string): void {
    this.palette.primary = primaryHex;
    if (accentHex) {
      this.palette.accent = accentHex;
    }

    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.style.setProperty("--color-primary", primaryHex);
      if (accentHex) {
        root.style.setProperty("--color-accent", accentHex);
      }
    }
  }

  /**
   * Mengembalikan 5 tingkat warna untuk GitHub Contribution Calendar
   * yang otomatis mengikuti `--color-primary` dari CSS variables.
   */
  get githubCalendarScale(): [string, string, string, string, string] {
    return [
      "var(--color-surface-muted)",
      "var(--color-primary-tint-1)",
      "var(--color-primary-tint-2)",
      "var(--color-primary)",
      "var(--color-primary-dark)",
    ];
  }
}

export const themeManager = new ThemeManager({
  primary: "#0055ff",
  accent: "#ffd700",
  canvas: "#f5f5f2",
  surface: "#ffffff",
  ink: "#111111",
  border: "#111111",
});
