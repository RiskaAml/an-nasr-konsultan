import { Reveal } from "@/components/site/Reveal";
import { SectionShell } from "@/components/site/SectionShell";
import { kotaProyek } from "@/data/perusahaan";
import petaIndonesia from "@/assets/peta-indonesia.jpg";

export function PetaSection() {
  return (
    <SectionShell tone="terang" judul={"Jejak An Nasr di\nBerbagai Wilayah"}>
      <Reveal className="relative w-full">
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
          <img
            src={petaIndonesia}
            alt="Peta Indonesia dengan sebaran lokasi proyek CV. AN NASR KONSULTAN"
            loading="lazy"
            width={1920}
            height={848}
            className="w-full object-cover"
          />
          {kotaProyek.map((k) => (
            <span
              key={k.nama}
              title={k.nama}
              style={{ top: k.atas, left: k.kiri }}
              className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-accent/25 sm:size-3"
            />
          ))}
        </div>
      </Reveal>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        {kotaProyek.map((k) => (
          <li key={k.nama} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            {k.nama}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
