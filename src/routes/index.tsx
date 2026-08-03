import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { TentangSection } from "@/components/sections/TentangSection";
import { LayananSection } from "@/components/sections/LayananSection";
import { KeunggulanSection } from "@/components/sections/KeunggulanSection";
import { ProsesSection } from "@/components/sections/ProsesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimoniSection } from "@/components/sections/TestimoniSection";
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
      <TentangSection />
      <LayananSection />
      <KeunggulanSection />
      <ProsesSection />
      <PortfolioSection />
      <TestimoniSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
