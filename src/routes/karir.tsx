import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { perusahaan } from "@/data/perusahaan";

const judul = "Karir — CV. AN NASR KONSULTAN";
const deskripsi =
  "Lowongan dan kesempatan berkarir di CV. AN NASR KONSULTAN Jombang untuk tenaga teknik sipil, drafter, dan pengawas lapangan.";

const posisi = [
  {
    nama: "Drafter Teknik Sipil",
    tipe: "Penuh Waktu",
    lokasi: "Jombang",
    teks: "Menyusun gambar kerja bangunan, jalan, dan jembatan menggunakan AutoCAD.",
  },
  {
    nama: "Pengawas Lapangan",
    tipe: "Penuh Waktu",
    lokasi: "Jombang & sekitarnya",
    teks: "Mengawasi mutu, volume, dan progres pekerjaan konstruksi di lokasi proyek.",
  },
  {
    nama: "Estimator / Quantity Surveyor",
    tipe: "Penuh Waktu",
    lokasi: "Jombang",
    teks: "Menyusun rencana anggaran biaya dan analisa harga satuan pekerjaan.",
  },
  {
    nama: "Administrasi Proyek",
    tipe: "Penuh Waktu",
    lokasi: "Jombang",
    teks: "Mengelola dokumen kontrak, laporan, dan administrasi perizinan proyek.",
  },
];

export const Route = createFileRoute("/karir")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/karir" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/karir" }],
  }),
  component: KarirPage,
});

function KarirPage() {
  return (
    <>
      <PageHero
        eyebrow="Karir"
        judul="Tumbuh bersama tim teknik kami"
        teks="Kami mencari orang-orang yang teliti, disiplin, dan senang belajar di dunia perencanaan dan konstruksi."
      />
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {posisi.map((p, i) => (
              <Reveal key={p.nama} delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
                  <span className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Briefcase className="size-5" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-4 text-lg text-foreground">{p.nama}</h2>
                  <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 text-primary" />
                    {p.lokasi} · {p.tipe}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.teks}</p>
                  <Button
                    asChild
                    size="pill"
                    className="mx-auto mt-6 bg-accent text-accent-foreground transition-none hover:bg-accent"
                  >
                    <a
                      href={`https://wa.me/${perusahaan.whatsapp}?text=${encodeURIComponent(
                        `Halo, saya ingin melamar posisi ${p.nama} di CV. AN NASR KONSULTAN.`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lamar Posisi Ini
                    </a>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Kirim CV dan portofolio Anda ke {perusahaan.email} atau hubungi kami melalui WhatsApp.
          </p>
        </div>
      </section>
    </>
  );
}
