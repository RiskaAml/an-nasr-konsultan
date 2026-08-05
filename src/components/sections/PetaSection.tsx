import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { kotaProyek } from "@/data/perusahaan";
import petaIndonesia from "@/assets/peta-indonesia.jpg";

export function PetaSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Jangkauan Proyek"
          judul="Kota dan daerah yang pernah kami tangani"
          deskripsi="Berbasis di Jombang, pekerjaan kami tersebar di berbagai kota di Indonesia."
        />

        <Reveal className="relative mx-auto mt-12 w-full overflow-hidden rounded-[1.5rem] border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
          <div className="relative">
            <img
              src={petaIndonesia}
              alt="Ilustrasi peta Indonesia dengan sebaran lokasi proyek"
              loading="lazy"
              width={1600}
              height={700}
              className="w-full rounded-[1.25rem] object-cover"
            />
            {kotaProyek.map((k) => (
              <span
                key={k.nama}
                style={{ top: k.atas, left: k.kiri }}
                className="absolute hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-primary px-2 py-1 text-[10px] font-medium text-primary-foreground shadow-[var(--shadow-soft)] sm:inline-flex"
              >
                <MapPin className="size-3 text-accent" />
                {k.nama}
              </span>
            ))}
          </div>
        </Reveal>

        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {kotaProyek.map((k) => (
            <li
              key={k.nama}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80"
            >
              <MapPin className="size-3.5 text-primary" />
              {k.nama}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
