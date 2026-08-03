import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { faq } from "@/data/perusahaan";

const judul = "FAQ — Pertanyaan Seputar Layanan Konsultan";
const deskripsi =
  "Jawaban atas pertanyaan umum mengenai layanan, proyek pemerintah dan swasta, proses konsultasi, serta jangkauan wilayah CV. AN NASR KONSULTAN.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.tanya,
            acceptedAnswer: { "@type": "Answer", text: f.jawab },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        judul="Pertanyaan yang sering ditanyakan klien"
        teks="Kami rangkum hal-hal yang paling sering ditanyakan sebelum memulai kerja sama proyek."
      />
      <FaqSection />
      <CtaBanner />
    </>
  );
}