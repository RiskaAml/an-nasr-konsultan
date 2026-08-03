import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { layanan } from "@/data/perusahaan";

export function LayananSection({ lengkap = false }: { lengkap?: boolean }) {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Layanan Kami"
          judul="Solusi lengkap dari perencanaan hingga pelaksanaan"
          deskripsi="Empat lini layanan utama yang saling terhubung, sehingga setiap tahap proyek Anda tetap terkendali dalam satu standar mutu."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {layanan.map((item, i) => {
            const Ikon = item.ikon;
            const daftar = lengkap ? item.detail : item.detail.slice(0, 4);
            return (
              <Reveal key={item.slug} delay={i * 0.08} className="h-full">
                <article
                  id={item.slug}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] lg:p-10"
                >
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Ikon className="size-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 text-xl text-foreground">{item.nama}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.ringkas}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {daftar.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {!lengkap && item.detail.length > 4 ? (
                    <p className="mt-3 text-xs text-muted-foreground">
                      dan {item.detail.length - 4} lingkup pekerjaan lainnya
                    </p>
                  ) : null}
                  <div className="mt-8 pt-2">
                    <Button asChild variant="outline" size="pill">
                      <Link to="/layanan" hash={item.slug}>
                        Lihat Detail
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}