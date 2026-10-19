import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { perusahaan } from "@/data/perusahaan";
import { Reveal } from "./Reveal";
import { Kontainer } from "./SectionShell";
import { BatikCorner } from "./Batik";

export function CtaBanner() {
  return (
    <section className="batik-cta-section relative bg-surface py-16 lg:py-20">
      <Kontainer>
        <Reveal>
          <div className="marble-card cta-batik-frame relative overflow-hidden border border-primary/10 px-8 py-14 shadow-[var(--shadow-lift)] lg:px-14 lg:py-16">
            <BatikCorner className="cta-batik-corner cta-corner-start" />
            <BatikCorner className="cta-batik-corner cta-corner-end" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Konsultasi Gratis
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-5xl">
                  Konsultasikan Kebutuhan Proyek Anda Bersama Kami
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <Button asChild size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/kontak">
                    Hubungi Kami
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <a
                  href={`https://wa.me/${perusahaan.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {perusahaan.telepon}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Kontainer>
    </section>
  );
}
