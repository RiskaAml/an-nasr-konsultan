import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { FounderSection } from "@/components/sections/FounderSection";
import { LayananSection } from "@/components/sections/LayananSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { KlienSection } from "@/components/sections/KlienSection";
import { PetaSection } from "@/components/sections/PetaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";

const judul = "CV. AN NASR KONSULTAN — Konsultan Teknik Sipil & Konstruksi Jombang";
const deskripsi =
  "Jasa perencanaan, pengawasan, perizinan (PBG & SLF), dan konstruksi bangunan, jalan, jembatan, serta irigasi di Kabupaten Jombang, Jawa Timur.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FounderSection />
      <LayananSection />
      <PortfolioSection />
      <KlienSection />
      <PetaSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
