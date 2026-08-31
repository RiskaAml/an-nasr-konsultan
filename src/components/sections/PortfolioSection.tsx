import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionShell } from "@/components/site/SectionShell";
import { kategoriPortfolio, portfolio } from "@/data/perusahaan";

const PER_HALAMAN = 9;

export function PortfolioSection({ filterAktif = true }: { filterAktif?: boolean }) {
  const [kategori, setKategori] = useState("Semua");
  const [halaman, setHalaman] = useState(1);

  const data = useMemo(
    () => (kategori === "Semua" ? portfolio : portfolio.filter((p) => p.kategori === kategori)),
    [kategori],
  );

  const totalHalaman = Math.max(1, Math.ceil(data.length / PER_HALAMAN));
  const halamanAman = Math.min(halaman, totalHalaman);
  const tampil = data.slice((halamanAman - 1) * PER_HALAMAN, halamanAman * PER_HALAMAN);

  const gantiKategori = (k: string) => {
    setKategori(k);
    setHalaman(1);
  };

  return (
    <SectionShell
      id="proyek"
      tone="gelap"
      judul={"Ratusan Proyek yang\nTelah Kami Kawal"}
      aksi={
        <Button asChild size="pill" variant="hero">
          <Link to="/portfolio">
            Lihat Semua Proyek
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      }
    >
      {filterAktif ? (
        <Reveal className="mb-8 flex flex-wrap gap-2.5">
          {kategoriPortfolio.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => gantiKategori(k)}
              className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                kategori === k
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/70 hover:border-accent/50 hover:text-primary-foreground"
              }`}
            >
              {k}
            </button>
          ))}
        </Reveal>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tampil.map((p, i) => (
          <Reveal key={`${p.nama}-${i}`} delay={i * 0.04}>
            <article className="group relative overflow-hidden rounded-lg border border-primary-foreground/10">
              <img
                src={p.gambar}
                alt={`${p.nama} — ${p.lokasi}`}
                loading="lazy"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary via-secondary/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {p.kategori}
                </span>
                <h3 className="mt-1.5 text-base leading-snug text-primary-foreground">{p.nama}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-primary-foreground/70">
                  <MapPin className="size-3.5" />
                  {p.lokasi}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <nav
        aria-label="Navigasi halaman proyek"
        className="mt-8 flex items-center justify-center gap-2"
      >
        <PagBtn
          label="Halaman sebelumnya"
          disabled={halamanAman === 1}
          onClick={() => setHalaman(halamanAman - 1)}
        >
          <ChevronLeft className="size-4" />
        </PagBtn>

        {Array.from({ length: totalHalaman }).map((_, i) => {
          const n = i + 1;
          const aktif = n === halamanAman;
          return (
            <button
              key={n}
              type="button"
              aria-current={aktif ? "page" : undefined}
              onClick={() => setHalaman(n)}
              className={`size-9 rounded-md border text-sm font-medium transition-colors ${
                aktif
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/70 hover:border-accent/50 hover:text-primary-foreground"
              }`}
            >
              {n}
            </button>
          );
        })}

        <PagBtn
          label="Halaman berikutnya"
          disabled={halamanAman === totalHalaman}
          onClick={() => setHalaman(halamanAman + 1)}
        >
          <ChevronRight className="size-4" />
        </PagBtn>
      </nav>
    </SectionShell>
  );
}

function PagBtn({
  children,
  label,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-9 items-center justify-center rounded-md border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/70 transition-colors hover:border-accent/50 hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-35"
    >
      {children}
    </button>
  );
}
