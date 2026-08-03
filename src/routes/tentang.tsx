import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TentangSection } from "@/components/sections/TentangSection";
import { KeunggulanSection } from "@/components/sections/KeunggulanSection";
import { CtaBanner } from "@/components/site/CtaBanner";

const judul = "Tentang Kami — CV. AN NASR KONSULTAN";
const deskripsi =
  "Profil, visi, misi, dan nilai perusahaan CV. AN NASR KONSULTAN, konsultan teknik sipil dan konstruksi di Kabupaten Jombang.";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/tentang" },
    ],
    links: [{ rel: "canonical", href: "/tentang" }],
  }),
  component: TentangPage,
});

function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        judul="Mitra teknik yang tumbuh bersama pembangunan daerah"
        teks="Kami hadir untuk memastikan setiap rencana pembangunan berjalan dengan perhitungan yang matang dan pelaksanaan yang bertanggung jawab."
      />
      <TentangSection />
      <KeunggulanSection />
      <CtaBanner />
    </>
  );
}