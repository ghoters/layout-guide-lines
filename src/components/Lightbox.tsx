import { useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import type { Project } from "@/lib/projects";

export function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-background shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-muted"
          aria-label="Zamknij"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex max-h-[80vh] items-center justify-center overflow-hidden bg-black/5">
          <img
            src={project.fullImage.url}
            alt={`${project.title} — ${project.tag}`}
            className="max-h-[80vh] w-full object-contain"
          />
        </div>
        <div className="flex items-start justify-between border-t border-border p-6">
          <div>
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{project.tag}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
