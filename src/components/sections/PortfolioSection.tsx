import { useState } from "react";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { kategoriPortfolio, portfolio } from "@/data/perusahaan";

export function PortfolioSection({ filterAktif = true }: { filterAktif?: boolean }) {
  const [kategori, setKategori] = useState("Semua");
  const data = kategori === "Semua" ? portfolio : portfolio.filter((p) => p.kategori === kategori);

  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          judul="Dokumentasi pekerjaan yang telah kami tangani"
          deskripsi="Bangunan gedung, jalan, jembatan, hingga jaringan irigasi — dikerjakan dengan standar teknis yang sama."
        />

        {filterAktif ? (
          <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
            {kategoriPortfolio.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKategori(k)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  kategori === k
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {k}
              </button>
            ))}
          </Reveal>
        ) : null}

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {data.map((p, i) => (
            <Reveal key={p.nama} delay={i * 0.05} className="break-inside-avoid">
              <article className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={p.gambar}
                  alt={`${p.nama} — ${p.lokasi}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    p.tinggi === "tall" ? "h-[26rem]" : "h-64"
                  }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/25 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                    {p.kategori}
                  </span>
                  <h3 className="mt-3 text-lg leading-snug text-primary-foreground">{p.nama}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-primary-foreground/80">
                    <MapPin className="size-3.5" />
                    {p.lokasi}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}