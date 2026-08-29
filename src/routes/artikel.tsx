import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { artikel } from "@/data/perusahaan";

const judul = "Artikel — CV. AN NASR KONSULTAN";
const deskripsi =
  "Artikel dan wawasan seputar perencanaan, pengawasan, perizinan PBG & SLF, serta pelaksanaan konstruksi dari CV. AN NASR KONSULTAN Jombang.";

export const Route = createFileRoute("/artikel")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Artikel,
});

function Artikel() {
  return (
    <>
      <PageHero
        eyebrow="Artikel"
        judul="Wawasan Teknik & Konstruksi"
        teks="Catatan praktis dari pengalaman kami menangani pekerjaan perencanaan, pengawasan, perizinan, dan konstruksi."
      />

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {artikel.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
                  <img
                    src={a.gambar}
                    alt={a.judul}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {a.kategori}
                    </span>
                    <h2 className="mt-3 text-lg leading-snug text-foreground">{a.judul}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.ringkas}</p>
                    <p className="mt-auto flex items-center gap-2 pt-6 text-xs text-muted-foreground">
                      <CalendarDays className="size-3.5 text-primary" />
                      {a.tanggal}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
