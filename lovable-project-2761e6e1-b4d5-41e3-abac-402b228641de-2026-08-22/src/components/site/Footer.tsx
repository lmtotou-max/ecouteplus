import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/language";
import { LangSwitch } from "./LangSwitch";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12">
        <div className="flex flex-wrap items-center gap-4">
          <span dir="ltr" className="font-display text-lg text-primary">Écoute+</span>
          <span className="text-sm text-muted-foreground">{t.tagline}</span>
          <LangSwitch className="ms-auto" />
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {t.footer.links.map((l) =>
            l.href.startsWith("/#") ? (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ) : (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <p className="max-w-3xl border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}