import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { perusahaan } from "@/data/perusahaan";
import heroKonstruksi from "@/assets/hero-konstruksi.jpg";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroKonstruksi}
        alt="Proyek konstruksi infrastruktur berskala besar"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-25" aria-hidden />

      <div className="mx-auto w-full max-w-4xl px-6 pb-20 pt-32 text-center lg:px-8 lg:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex flex-col items-center"
        >
          <h1 className="text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            CV. An Nasr Konsultan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 lg:text-lg">
            {perusahaan.nama} menyediakan layanan perencanaan, pengawasan, perizinan, dan konstruksi
            dengan mengutamakan kualitas, profesionalisme, serta ketepatan dalam setiap tahap
            pekerjaan.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/kontak">
                Konsultasi Sekarang
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <Link to="/layanan">Lihat Layanan</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}