import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProsesSection } from "@/components/sections/ProsesSection";
import { KeunggulanSection } from "@/components/sections/KeunggulanSection";
import { CtaBanner } from "@/components/site/CtaBanner";

const judul = "Proses Kerja — CV. AN NASR KONSULTAN";
const deskripsi =
  "Tujuh tahap kerja CV. AN NASR KONSULTAN: konsultasi, survey lapangan, perencanaan, penyusunan dokumen, pelaksanaan, pengawasan, dan serah terima.";

export const Route = createFileRoute("/proses-kerja")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/proses-kerja" },
    ],
    links: [{ rel: "canonical", href: "/proses-kerja" }],
  }),
  component: ProsesPage,
});

function ProsesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proses Kerja"
        judul="Alur kerja yang jelas sejak hari pertama"
        teks="Kami menjaga agar Anda selalu mengetahui posisi proyek: apa yang sedang dikerjakan, apa hasilnya, dan apa tahap berikutnya."
      />
      <ProsesSection />
      <KeunggulanSection />
      <CtaBanner />
    </>
  );
}