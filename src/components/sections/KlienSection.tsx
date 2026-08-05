import { SectionHeading } from "@/components/site/SectionHeading";
import { klien } from "@/data/perusahaan";

export function KlienSection() {
  const baris = [...klien, ...klien];

  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Klien Kami"
          judul="Dipercaya instansi, lembaga, dan mitra usaha"
          deskripsi="Sebagian pemberi tugas yang pernah bekerja sama dengan CV. AN NASR KONSULTAN."
        />
      </div>

      <div className="marquee-mask mt-10 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-3">
          {baris.map((nama, i) => (
            <li
              key={`${nama}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 shadow-[var(--shadow-soft)]"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-[10px] font-semibold text-primary">
                {nama
                  .replace(/[^A-Za-z ]/g, "")
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <span className="whitespace-nowrap text-xs font-medium text-foreground/80">
                {nama}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
