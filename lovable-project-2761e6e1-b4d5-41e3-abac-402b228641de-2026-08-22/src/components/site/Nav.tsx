import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/language";
import { WHATSAPP } from "@/lib/content";
import { LangSwitch } from "./LangSwitch";

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <Link to="/" dir="ltr" className="font-display text-xl font-semibold text-primary">
          Écoute+
        </Link>

        <ul className="ms-auto hidden items-center gap-6 lg:flex">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <LangSwitch />
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            aria-label={t.nav.menu}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface px-5 py-4 lg:hidden">
          <ul className="grid gap-3">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}