import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { layanan } from "@/data/perusahaan";

export const Route = createFileRoute("/layanan/$slug")({
  loader: ({ params }) => {
    const item = layanan.find((l) => l.slug === params.slug);
    if (!item) throw notFound();
    return { slug: item.slug };
  },
  head: ({ params }) => {
    const item = layanan.find((l) => l.slug === params.slug);
    const judul = `${item?.nama ?? "Layanan"} — CV. AN NASR KONSULTAN`;
    const deskripsi =
      item?.ringkas ??
      "Layanan teknik sipil dan konstruksi CV. AN NASR KONSULTAN di Kabupaten Jombang.";
    return {
      meta: [
        { title: judul },
        { name: "description", content: deskripsi },
        { property: "og:title", content: judul },
        { property: "og:description", content: deskripsi },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: DetailLayanan,
});

function DetailLayanan() {
  const { slug } = Route.useLoaderData();
  const item = layanan.find((l) => l.slug === slug)!;
  const galeri = [{ src: item.gambar, alt: item.alt }, ...item.galeri];

  return (
    <>
      <section className="px-6 pb-14 pt-32 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Layanan</p>
          <h1 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">{item.nama}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {item.ringkas}
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {galeri.map((g, i) => (
              <Reveal key={g.alt} delay={i * 0.05} className={i === 0 ? "sm:col-span-2" : ""}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1200}
                  height={800}
                  className={`w-full rounded-[1.5rem] border border-border object-cover shadow-[var(--shadow-soft)] ${
                    i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"
                  }`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl text-foreground">Tentang layanan ini</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.deskripsi}</p>

          <h3 className="mt-12 text-xl text-foreground">Manfaat untuk proyek Anda</h3>
          <ul className="mx-auto mt-6 grid gap-3 text-left sm:grid-cols-2">
            {item.manfaat.map((m) => (
              <li
                key={m}
                className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm text-foreground/85"
              >
                <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{m}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl text-foreground">Lingkup pekerjaan</h3>
          <ul className="mx-auto mt-6 grid gap-2.5 text-left sm:grid-cols-2">
            {item.detail.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-foreground/85">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="pill" className="mt-10">
            <Link to="/kontak">
              Konsultasi {item.nama}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
