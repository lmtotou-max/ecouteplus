import { useLang } from "@/lib/language";

export function LanguageModal() {
  const { setLang, chosen, ready } = useLang();
  if (!ready || chosen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-primary/95 px-6 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-surface p-8 text-center shadow-2xl">
        <p className="font-display text-3xl text-primary">Écoute+</p>
        <p className="mt-6 text-lg font-medium text-foreground">
          Bienvenue / <span style={{ fontFamily: "Tajawal, sans-serif" }}>مرحبًا</span>
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Choisissez votre langue /{" "}
          <span style={{ fontFamily: "Tajawal, sans-serif" }}>اختر لغتك</span>
        </p>
        <div className="mt-8 grid gap-3">
          <button
            onClick={() => setLang("fr")}
            className="rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Français
          </button>
          <button
            onClick={() => setLang("ar")}
            className="rounded-xl border border-border bg-secondary px-6 py-4 text-base font-semibold text-secondary-foreground transition-colors hover:bg-accent/20"
            style={{ fontFamily: "Tajawal, sans-serif" }}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}