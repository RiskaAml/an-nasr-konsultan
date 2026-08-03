import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LayananSection } from "@/components/sections/LayananSection";
import { ProsesSection } from "@/components/sections/ProsesSection";
import { CtaBanner } from "@/components/site/CtaBanner";

const judul = "Layanan — Perencanaan, Pengawasan, Perizinan & Konstruksi";
const deskripsi =
  "Lingkup layanan CV. AN NASR KONSULTAN: perencanaan gedung, jalan, jembatan, irigasi, pengawasan proyek, PBG, SLF, hingga pelaksanaan konstruksi.";

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/layanan" },
    ],
    links: [{ rel: "canonical", href: "/layanan" }],
  }),
  component: LayananPage,
});

function LayananPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        judul="Layanan teknik yang lengkap dan terintegrasi"
        teks="Dari studi awal hingga serah terima pekerjaan, seluruh kebutuhan teknis proyek Anda dapat kami tangani dalam satu koordinasi."
      />
      <LayananSection lengkap />
      <ProsesSection />
      <CtaBanner />
    </>
  );
}