import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionShell } from "@/components/site/SectionShell";
import { founder } from "@/data/perusahaan";
import fotoFounder from "@/assets/founder.jpg";
import timPerusahaan from "@/assets/tim-perusahaan.jpg";
import timEngineer from "@/assets/tim-engineer.jpg";

export function FounderSection() {
  return (
    <SectionShell
      tone="krem"
      judul={"Tumbuh dari Pengalaman,\nBerkarya dengan Integritas"}
      aksi={
        <Button asChild size="pill">
          <Link to="/tentang">
            Lihat Profil An Nasr
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <Reveal arah="left">
          <img
            src={fotoFounder}
            alt={`${founder.nama}, ${founder.jabatan} CV. AN NASR KONSULTAN`}
            loading="lazy"
            width={900}
            height={1100}
            className="h-full max-h-[26rem] w-full rounded-xl object-cover"
          />
        </Reveal>

        <Reveal arah="right" delay={0.08} className="flex flex-col">
          <h3 className="text-xl font-semibold uppercase tracking-wide text-foreground">
            {founder.nama}
          </h3>
          <p className="mt-1 text-sm font-semibold text-accent">{founder.jabatan}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
            CV. An Nasr Konsultan hadir sebagai mitra independen yang melindungi kepentingan klien,
            memastikan proyek berjalan tepat waktu, tepat mutu, tepat biaya, serta memenuhi seluruh
            standar teknis dan perizinan yang berlaku.
          </p>

          <div className="mt-6 grid flex-1 grid-cols-2 gap-4">
            <img
              src={timPerusahaan}
              alt="Rapat koordinasi tim CV. AN NASR KONSULTAN di kantor"
              loading="lazy"
              width={800}
              height={600}
              className="h-full max-h-56 w-full rounded-xl object-cover"
            />
            <img
              src={timEngineer}
              alt="Tim teknik CV. AN NASR KONSULTAN di lokasi proyek"
              loading="lazy"
              width={800}
              height={600}
              className="h-full max-h-56 w-full rounded-xl object-cover"
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
