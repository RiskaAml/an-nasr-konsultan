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

        {lengkap ? (
          <div className="mt-14 space-y-16 lg:space-y-24">
            {layanan.map((item, i) => {
              const Ikon = item.ikon;
              return (
                <Reveal key={item.slug} delay={0.05}>
                  <article
                    id={item.slug}
                    className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                      <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-lift)]">
                        <img
                          src={item.gambar}
                          alt={item.alt}
                          width={1200}
                          height={800}
                          loading="lazy"
                          className="aspect-[3/2] w-full object-cover"
                        />
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {item.galeri.map((g) => (
                          <img
                            key={g.alt}
                            src={g.src}
                            alt={g.alt}
                            width={400}
                            height={300}
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-xl border border-border object-cover"
                          />
                        ))}
                      </div>
                    </div>

                    <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                        <Ikon className="size-6" strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-6 text-2xl text-foreground lg:text-3xl">{item.nama}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{item.ringkas}</p>
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {item.detail.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-foreground/85"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button asChild size="pill">
                          <Link to="/kontak">
                            Konsultasi {item.nama}
                            <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {layanan.map((item, i) => {
              const Ikon = item.ikon;
              const daftar = item.detail.slice(0, 4);
              return (
                <Reveal key={item.slug} delay={i * 0.08} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.gambar}
                        alt={item.alt}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-2xl bg-card/95 text-primary shadow-[var(--shadow-soft)] backdrop-blur">
                        <Ikon className="size-6" strokeWidth={1.6} />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-8 lg:p-10">
                      <h3 className="text-xl text-foreground">{item.nama}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.ringkas}
                      </p>
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {daftar.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-foreground/85"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      {item.detail.length > 4 ? (
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
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}