import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { layanan } from "@/data/perusahaan";

export function LayananSection({ lengkap = false }: { lengkap?: boolean }) {
  return (
    <section className="bg-surface px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Layanan Kami"
          judul="Solusi lengkap dari perencanaan hingga pelaksanaan"
          deskripsi="Empat lini layanan utama yang saling terhubung, sehingga setiap tahap proyek Anda tetap terkendali dalam satu standar mutu."
        />

        {lengkap ? (
          <div className="mt-14 space-y-16">
            {layanan.map((item, i) => {
              const Ikon = item.ikon;
              return (
                <Reveal key={item.slug} delay={0.05}>
                  <article
                    id={item.slug}
                    className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-12"
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                      <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-[var(--shadow-lift)]">
                        <img
                          src={item.gambar}
                          alt={item.alt}
                          width={1200}
                          height={800}
                          loading="lazy"
                          className="aspect-[3/2] w-full object-cover"
                        />
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-3">
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

                    <div className={`text-center lg:text-left ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary lg:mx-0">
                        <Ikon className="size-6" strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-5 text-2xl text-foreground">{item.nama}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{item.ringkas}</p>
                      <ul className="mt-6 grid gap-2.5 text-left sm:grid-cols-2">
                        {item.detail.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-foreground/85">
                            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button asChild size="pill">
                          <Link to="/layanan/$slug" params={{ slug: item.slug }}>
                            Lihat Detail {item.nama}
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
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {layanan.map((item, i) => {
              const Ikon = item.ikon;
              const daftar = item.detail.slice(0, 3);
              return (
                <Reveal key={item.slug} delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card text-center shadow-[var(--shadow-soft)]">
                    <div className="relative">
                      <img
                        src={item.gambar}
                        alt={item.alt}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover"
                      />
                      <span className="absolute bottom-3 left-1/2 flex size-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-xl bg-card text-primary shadow-[var(--shadow-soft)]">
                        <Ikon className="size-5" strokeWidth={1.6} />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col items-center p-6 pt-9">
                      <h3 className="text-lg text-foreground">{item.nama}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {item.ringkas}
                      </p>
                      <ul className="mt-4 flex flex-wrap justify-center gap-2">
                        {daftar.map((d) => (
                          <li
                            key={d}
                            className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-6">
                        <Button
                          asChild
                          size="pill"
                          className="bg-accent text-accent-foreground transition-none hover:bg-accent"
                        >
                          <Link to="/layanan/$slug" params={{ slug: item.slug }}>
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
