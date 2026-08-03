import { Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimoni } from "@/data/perusahaan";

export function TestimoniSection() {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimoni"
          judul="Kepercayaan yang tumbuh dari hasil pekerjaan"
          deskripsi="Tanggapan pemberi tugas dari instansi pemerintah, yayasan, hingga pemilik proyek pribadi."
        />
        <Reveal className="mt-14">
          <Carousel opts={{ align: "start", loop: true }} className="px-2">
            <CarouselContent>
              {testimoni.map((t) => (
                <CarouselItem key={t.nama} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      “{t.ulasan}”
                    </p>
                    <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-[family-name:var(--font-heading)] text-sm font-semibold text-primary">
                        {t.inisial}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">
                          {t.nama}
                        </span>
                        <span className="block text-xs text-muted-foreground">{t.instansi}</span>
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}