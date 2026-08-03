import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { prosesKerja } from "@/data/perusahaan";

export function ProsesSection() {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Proses Kerja"
          judul="Tujuh tahap kerja yang terukur dan transparan"
          deskripsi="Setiap proyek berjalan mengikuti alur kerja yang sama, sehingga progres mudah dipantau dari awal hingga serah terima."
        />

        <ol className="relative mt-16 space-y-10 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-border md:before:left-1/2">
          {prosesKerja.map((tahap, i) => (
            <li key={tahap.judul} className="relative">
              <Reveal
                arah={i % 2 === 0 ? "left" : "right"}
                delay={0.05}
                className={`md:flex md:items-center md:gap-10 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex items-start gap-5 md:w-1/2 md:items-center">
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-[family-name:var(--font-heading)] text-lg font-semibold text-primary-foreground shadow-[var(--shadow-lift)] md:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:w-full ${
                      i % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Tahap {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg text-foreground">{tahap.judul}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tahap.teks}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex md:w-1/2 md:justify-center">
                  <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-surface bg-primary font-[family-name:var(--font-heading)] text-sm font-semibold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}