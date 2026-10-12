import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Batik, BatikDivider } from "./Batik";

export function Kontainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>{children}</div>;
}

export function SectionShell({
  id,
  judul,
  aksi,
  children,
  tone = "terang",
  className = "",
}: {
  id?: string;
  judul: string;
  aksi?: ReactNode;
  children: ReactNode;
  tone?: "terang" | "krem" | "gelap";
  className?: string;
}) {
  const bg =
    tone === "gelap"
      ? "bg-secondary text-primary-foreground"
      : tone === "krem"
        ? "bg-surface text-foreground"
        : "bg-background text-foreground";

  return (
    <section
      id={id}
      className={`batik-section relative isolate flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden py-20 lg:py-24 ${bg} ${className}`}
    >
      <div className="section-batik-field" aria-hidden="true"><Batik motif={tone === "gelap" ? "parang" : "kawung"} /></div>
      <div className="section-batik-border" aria-hidden="true"><Batik motif="parang" /></div>
      <Kontainer>
        <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div><h2
            className={`max-w-2xl whitespace-pre-line text-3xl leading-[1.12] sm:text-4xl lg:text-5xl ${
              tone === "gelap" ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {judul}
          </h2><BatikDivider className="mt-5" /></div>
          {aksi ? <div className="shrink-0">{aksi}</div> : null}
        </Reveal>

        <div className="mt-12">{children}</div>
      </Kontainer>
    </section>
  );
}
