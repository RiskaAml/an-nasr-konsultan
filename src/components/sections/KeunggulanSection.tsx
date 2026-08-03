import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { keunggulan } from "@/data/perusahaan";

export function KeunggulanSection() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mengapa Memilih Kami"
          judul="Alasan klien mempercayakan proyeknya kepada kami"
          deskripsi="Kami menjaga kepercayaan melalui cara kerja yang tertib, komunikatif, dan konsisten pada setiap pekerjaan."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keunggulan.map((item, i) => {
            const Ikon = item.ikon;
            return (
              <Reveal key={item.judul} delay={i * 0.06} className="h-full">
                <div className="h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/12 text-accent-foreground">
                    <Ikon className="size-5 text-primary" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg text-foreground">{item.judul}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.teks}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}