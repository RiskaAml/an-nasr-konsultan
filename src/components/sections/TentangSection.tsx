import { Compass, Flag, Gem } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import timEngineer from "@/assets/tim-engineer.jpg";

const kartu = [
  {
    ikon: Compass,
    judul: "Visi",
    teks: "Menjadi mitra konsultan teknik dan konstruksi yang terpercaya di Jawa Timur melalui kualitas pekerjaan dan integritas layanan.",
  },
  {
    ikon: Flag,
    judul: "Misi",
    teks: "Menghadirkan perencanaan yang akurat, pengawasan yang disiplin, serta pelaksanaan konstruksi yang tepat mutu, biaya, dan waktu.",
  },
  {
    ikon: Gem,
    judul: "Nilai Perusahaan",
    teks: "Amanah, profesional, transparan, dan bertanggung jawab penuh terhadap setiap pekerjaan yang dipercayakan kepada kami.",
  },
];

export function TentangSection() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal arah="left">
          <div className="relative">
            <img
              src={timEngineer}
              alt="Tim engineer CV. AN NASR KONSULTAN berdiskusi di lokasi proyek"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-border bg-background/90 px-6 py-5 shadow-[var(--shadow-soft)] backdrop-blur-md sm:block">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-primary">
                Jombang
              </p>
              <p className="text-xs text-muted-foreground">Basis operasional kami</p>
            </div>
          </div>
        </Reveal>

        <Reveal arah="right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Tentang Kami
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
            Tentang CV. AN NASR KONSULTAN
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            CV. AN NASR KONSULTAN adalah penyedia jasa konsultansi teknik sipil dan arsitektur yang
            berkedudukan di Kabupaten Jombang, Jawa Timur. Kami menangani pekerjaan perencanaan,
            pengawasan, pengurusan perizinan bangunan, serta pelaksanaan konstruksi untuk kebutuhan
            instansi pemerintah, lembaga, maupun perorangan.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Dengan dukungan tenaga ahli yang berpengalaman di bidang struktur, jalan, jembatan, dan
            sumber daya air, kami berkomitmen menghadirkan solusi pembangunan yang profesional,
            efisien, dan sesuai standar teknis yang berlaku pada setiap tahap pekerjaan.
          </p>

          <div className="mt-10 grid gap-4">
            {kartu.map((k, i) => {
              const Ikon = k.ikon;
              return (
                <Reveal key={k.judul} delay={0.1 + i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Ikon className="size-5" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                        {k.judul}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                        {k.teks}
                      </span>
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}