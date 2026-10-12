import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroKonstruksi from "@/assets/hero-konstruksi.jpg";
import { Batik, BatikDivider } from "@/components/site/Batik";

export function Hero() {
  return (
    <section className="site-hero relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroKonstruksi}
        alt="Proyek konstruksi infrastruktur berskala besar"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="hero-batik-rail hero-batik-left"><Batik motif="parang" /></div>
      <div className="hero-batik-rail hero-batik-right"><Batik motif="kawung" /></div>

      <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-28 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            CV. An Nasr Konsultan
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">
            <MapPin className="size-3.5" />
            Jombang, Jawa Timur
          </p>

          <h1 className="mt-7 max-w-3xl text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            Tepat Merencanakan, Tepat Mengawasi, Tepat Membangun
          </h1>

          <BatikDivider className="hero-divider mt-7" />
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/kontak">
                Konsultasi Sekarang
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href="#layanan">Lihat Layanan</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
