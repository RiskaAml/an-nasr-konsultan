import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { KlienSection } from "@/components/sections/KlienSection";
import { PetaSection } from "@/components/sections/PetaSection";
import { CtaBanner } from "@/components/site/CtaBanner";

const judul = "Portfolio Proyek — CV. AN NASR KONSULTAN";
const deskripsi =
  "Dokumentasi proyek bangunan, jalan, jembatan, irigasi, gedung, dan renovasi yang ditangani CV. AN NASR KONSULTAN di Jombang dan sekitarnya.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        judul="Pekerjaan yang berbicara melalui hasilnya"
        teks="Setiap proyek kami dokumentasikan sebagai bukti komitmen terhadap mutu pekerjaan dan ketepatan pelaksanaan di lapangan."
      />
      <PortfolioSection />
      <KlienSection />
      <PetaSection />
      <CtaBanner />
    </>
  );
}