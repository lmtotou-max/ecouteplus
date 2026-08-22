import { useLang } from "@/lib/language";

type Line = { before: string; tel: string | null; label: string; after: string };

function TelLine({ line }: { line: Line }) {
  return (
    <li className="leading-relaxed">
      <span>{line.before}</span>
      {line.tel && (
        <a
          href={`tel:${line.tel}`}
          dir="ltr"
          className="inline-block font-semibold underline underline-offset-4"
        >
          {line.label}
        </a>
      )}
      <span>{line.after}</span>
    </li>
  );
}

export function Emergency() {
  const { t } = useLang();
  return (
    <section id="urgences" className="scroll-mt-24 px-5 py-16">
      <div className="mx-auto max-w-4xl rounded-2xl bg-urgent-bg p-7 text-urgent-text sm:p-10">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t.urgent.title}</h2>
        <p className="mt-4 leading-relaxed">{t.urgent.intro}</p>
        <ul className="mt-4 grid gap-2 ps-5 [list-style:disc]">
          {t.urgent.lines.map((l, i) => (
            <TelLine key={i} line={l as Line} />
          ))}
        </ul>
        <p className="mt-6 leading-relaxed">{t.urgent.servicesIntro}</p>
        <ul className="mt-3 grid gap-2 ps-5 [list-style:disc]">
          {t.urgent.services.map((l, i) => (
            <TelLine key={i} line={l as Line} />
          ))}
        </ul>
        <p className="mt-6 leading-relaxed">{t.urgent.entourage}</p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">{t.urgent.noLine}</p>
      </div>
    </section>
  );
}