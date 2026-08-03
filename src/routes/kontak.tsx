import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { KontakSection } from "@/components/sections/KontakSection";

const judul = "Kontak — CV. AN NASR KONSULTAN Jombang";
const deskripsi =
  "Hubungi CV. AN NASR KONSULTAN untuk konsultasi proyek perencanaan, pengawasan, perizinan, dan konstruksi di Kabupaten Jombang, Jawa Timur.";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: judul },
      { name: "description", content: deskripsi },
      { property: "og:title", content: judul },
      { property: "og:description", content: deskripsi },
      { property: "og:url", content: "/kontak" },
    ],
    links: [{ rel: "canonical", href: "/kontak" }],
  }),
  component: KontakPage,
});

function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        judul="Mari bicarakan rencana proyek Anda"
        teks="Tim kami siap membantu menghitung kebutuhan teknis, dokumen perizinan, hingga estimasi biaya pekerjaan."
      />
      <KontakSection />
    </>
  );
}