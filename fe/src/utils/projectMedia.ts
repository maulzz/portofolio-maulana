const localProjectImages = import.meta.glob("../assets/images/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const localRootAssets = import.meta.glob("../assets/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

/**
 * Resolves an image path from JSON data or a future CMS.
 * - Full URLs (`http://`, `https://`, `/`) are returned as-is.
 * - Bare filenames (e.g. `"laksita1.webp"`, `"profil.webp"`) are resolved against local assets.
 */
export function resolveProjectImage(src: string): string {
  if (!src) return "";
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/")
  ) {
    return src;
  }

  return (
    localProjectImages[`../assets/images/${src}`] ??
    localRootAssets[`../assets/${src}`] ??
    src
  );
}
