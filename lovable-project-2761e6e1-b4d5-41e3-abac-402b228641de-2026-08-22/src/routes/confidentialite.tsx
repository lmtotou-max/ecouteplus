import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/language";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Confidentialité — Écoute+" },
      {
        name: "description",
        content:
          "Comment Écoute+ traite vos données : collecte minimale, aucun enregistrement des séances, conservation la plus courte possible.",
      },
      { property: "og:title", content: "Confidentialité — Écoute+" },
      {
        property: "og:description",
        content: "Collecte minimale, aucun enregistrement des séances, confidentialité des échanges.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold text-primary">{t.pages.privacy.title}</h1>
      <div className="mt-8 grid gap-5">
        {t.pages.privacy.paragraphs.map((p, i) => (
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