import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Emergency } from "@/components/site/Emergency";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/language";
import { WHATSAPP } from "@/lib/content";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Écoute+ — parler, être écouté, avancer" },
      {
        name: "description",
        content:
          "Un espace d'écoute et de soutien humain à distance au Maroc, sans jugement. Service non médical et non thérapeutique. Réservation par WhatsApp.",
      },
      {
        property: "og:title",
        content: "Écoute+ — parler, être écouté, avancer",
      },
      {
        property: "og:description",
        content:
          "Un espace d'écoute et de soutien humain à distance au Maroc. Service non médical, réservation par WhatsApp.",
      },
    ],
    scripts: [
      {
        children: `!function (w, d, t) {
          w.TiktokAnalyticsObject = t;
          var ttq = w[t] = w[t] || [];
          ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
          ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          };
          for (var i = 0; i < ttq.methods.length; i++) {
            ttq.setAndDefer(ttq, ttq.methods[i]);
          }
          ttq.instance = function (t) {
            for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
              ttq.setAndDefer(e, ttq.methods[n]);
            }
            return e;
          };
          ttq.load = function (e, n) {
            var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
            ttq._i = ttq._i || {};
            ttq._i[e] = [];
            ttq._i[e]._u = r;
            ttq._t = ttq._t || {};
            ttq._t[e] = +new Date;
            ttq._o = ttq._o || {};
            ttq._o[e] = n || {};
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = r + "?sdkid=" + e + "&lib=" + t;
            var first = d.getElementsByTagName("script")[0];
            first.parentNode.insertBefore(s, first);
          };
          ttq.load('DB4IJORC77U5NEMP0K90');
          ttq.page();
        }(window, document, 'ttq');`,
      },
    ],
  }),
  component: Index,
});
      { title: "Écoute+ — parler, être écouté, avancer" },
      {
        name: "description",
        content:
          "Un espace d'écoute et de soutien humain à distance au Maroc, sans jugement. Service non médical et non thérapeutique. Réservation par WhatsApp.",
      },
      { property: "og:title", content: "Écoute+ — parler, être écouté, avancer" },
      {
        property: "og:description",
        content:
          "Un espace d'écoute et de soutien humain à distance au Maroc. Service non médical, réservation par WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function HeroShape() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 420"
      className="pointer-events-none absolute -top-10 end-0 h-[420px] w-[600px] max-w-none opacity-70"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M120 210c0-92 74-160 172-160s164 62 164 150-70 152-168 152c-38 0-64 14-96 38 8-38 4-56-14-74-34-30-58-64-58-106Z"
        fill="url(#g1)"
      />
      <path
        d="M250 250c0-70 56-122 130-122s118 48 118 116-52 118-126 118c-30 0-50 12-76 32 8-32 4-46-10-58-24-24-36-52-36-86Z"
        fill="url(#g2)"
      />
    </svg>
  );
}

function Index() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-16 pb-20 sm:pt-24">
        <HeroShape />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display mt-5 text-4xl leading-tight font-semibold text-primary sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t.hero.primary}
            </a>
            <a
              href="#deroulement"
              className="rounded-xl border border-border bg-surface px-6 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t.hero.secondary}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{t.hero.note}</p>
        </div>
      </section>

      {/* Is / is not */}
      <section className="px-5 py-14">
        <Reveal className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-surface p-7 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-primary">{t.isIsNot.isTitle}</h2>
            <ul className="mt-5 grid gap-3">
              {t.isIsNot.is.map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-7">
            <h2 className="font-display text-xl font-semibold text-primary">
              {t.isIsNot.isNotTitle}
            </h2>
            <ul className="mt-5 grid gap-3">
              {t.isIsNot.isNot.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <X className="mt-1 size-4 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Steps */}
      <section id="deroulement" className="scroll-mt-24 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-primary">{t.steps.title}</h2>
          <ol className="mt-8 grid gap-4">
            {t.steps.items.map((s) => (
              <Reveal key={s.n}>
                <li className="flex gap-5 rounded-2xl bg-surface p-6 shadow-sm">
                  <span className="font-display text-2xl text-accent" dir="ltr">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {s.name}{" "}
                      <span className="text-sm font-normal text-muted-foreground">({s.time})</span>
                    </p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="tarifs" className="scroll-mt-24 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-semibold text-primary">{t.pricing.title}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.pricing.items.map((p, i) => (
              <Reveal key={p.name}>
                <div
                  className={`flex h-full flex-col rounded-2xl p-7 ${
                    i === 1
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-surface text-foreground shadow-sm"
                  }`}
                >
                  {i === 1 && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {t.pricing.badge}
                    </span>
                  )}
                  <p className="font-display text-xl font-semibold">{p.name}</p>
                  <p className={`mt-1 text-sm ${i === 1 ? "opacity-80" : "text-muted-foreground"}`}>
                    {p.duration}
                  </p>
                  <p className="font-display mt-5 text-3xl font-semibold">{p.price}</p>
                  <p
                    className={`mt-4 leading-relaxed ${i === 1 ? "opacity-90" : "text-muted-foreground"}`}
                  >
                    {p.text}
                  </p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                      i === 1
                        ? "bg-surface text-primary hover:bg-secondary"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {t.pricing.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{t.pricing.note}</p>
        </div>
      </section>

      {/* For who */}
      <section className="px-5 py-14">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-primary">{t.forWho.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground">{t.forWho.text}</p>
          <p className="mt-8 rounded-2xl border-s-4 border-urgent-text/40 bg-urgent-bg p-6 leading-relaxed text-urgent-text">
            {t.forWho.transition}
          </p>
        </Reveal>
      </section>

      <Emergency />

      {/* Privacy summary */}
      <section className="px-5 py-14">
        <Reveal className="mx-auto max-w-3xl rounded-2xl bg-surface p-7 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-primary">{t.privacy.title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t.privacy.text}</p>
          <Link
            to="/confidentialite"
            className="mt-5 inline-block font-medium text-primary underline underline-offset-4"
          >
            {t.privacy.link}
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-primary">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="mt-6">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`i${i}`}>
                <AccordionTrigger className="text-start text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About */}
      <section id="a-propos" className="scroll-mt-24 px-5 py-14">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-primary">{t.about.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.about.text}</p>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-5 py-16">
        <Reveal className="mx-auto max-w-3xl rounded-2xl bg-primary p-9 text-primary-foreground">
          <h2 className="font-display text-3xl font-semibold">{t.contact.title}</h2>
          <p className="mt-4 leading-relaxed opacity-90">{t.contact.text}</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-xl bg-accent px-6 py-4 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {t.contact.cta}
          </a>
        </Reveal>
      </section>
    </>
  );
}
