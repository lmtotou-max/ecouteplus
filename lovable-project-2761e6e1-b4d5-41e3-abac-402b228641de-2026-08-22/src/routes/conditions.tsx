import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/language";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — Écoute+" },
      {
        name: "description",
        content:
          "Cadre des séances Écoute+ : écoute et soutien humain, service non médical, non thérapeutique, sans diagnostic ni traitement.",
      },
      { property: "og:title", content: "Conditions d'utilisation — Écoute+" },
      {
        property: "og:description",
        content: "Écoute+ est un service d'écoute non médical : cadre, limites et urgences.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold text-primary">{t.pages.terms.title}</h1>
      <div className="mt-8 grid gap-5">
        {t.pages.terms.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </div>
      <Link
        to="/"
        className="mt-10 inline-block font-medium text-primary underline underline-offset-4"
      >
        {t.back}
      </Link>
    </article>
  );
}