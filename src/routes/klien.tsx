import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { KlienSection } from "@/components/sections/KlienSection";
import { PetaSection } from "@/components/sections/PetaSection";
import { CtaBanner } from "@/components/site/CtaBanner";

const judul = "Klien Kami — CV. AN NASR KONSULTAN";
const deskripsi =
  "Instansi pemerintah, lembaga pendidikan, dan mitra usaha yang telah bekerja sama dengan CV. AN NASR KONSULTAN di Jombang dan berbagai kota di Indonesia.";

export const Route = createFileRoute("/klien")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/klien" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/klien" }],
  }),
  component: KlienPage,
});

function KlienPage() {
  return (
    <>
      <PageHero
        eyebrow="Klien Kami"
        judul="Kepercayaan yang kami jaga di setiap proyek"
        teks="Dari pemerintah desa hingga perusahaan swasta, setiap pekerjaan kami tangani dengan standar mutu yang sama."
      />
      <KlienSection />
      <PetaSection />
      <CtaBanner />
    </>
  );
}
