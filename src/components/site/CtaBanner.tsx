import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-5xl">
        <div className="cta-gradient relative overflow-hidden rounded-[2rem] px-8 py-16 text-center lg:px-16 lg:py-20">
          <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl leading-tight text-primary-foreground sm:text-4xl">
              Konsultasikan Kebutuhan Proyek Anda Bersama Kami
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80">
              Sampaikan rencana pembangunan Anda, tim kami akan membantu menyusun solusi teknis yang
              tepat sasaran dan sesuai anggaran.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/kontak">
                Hubungi Kami
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}