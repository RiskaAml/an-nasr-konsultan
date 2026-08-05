import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { prosesKerja } from "@/data/perusahaan";

export function ProsesSection() {
  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Proses Kerja"
          judul="Tujuh tahap kerja yang terukur"
          deskripsi="Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima."
        />

        <ol className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {prosesKerja.map((tahap, i) => (
            <Reveal key={tahap.judul} delay={i * 0.04} className="h-full">
              <li className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-4 text-center">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm text-foreground">{tahap.judul}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{tahap.teks}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
