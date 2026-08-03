import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { perusahaan, statistik } from "@/data/perusahaan";
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

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-sm">
            Konsultan Teknik &amp; Konstruksi — Jombang
          </span>
          <h1 className="mt-7 text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            Membangun Solusi Teknik yang Tepat untuk Setiap Proyek
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 lg:text-lg">
            {perusahaan.nama} menyediakan layanan perencanaan, pengawasan, perizinan, dan konstruksi
            dengan mengutamakan kualitas, profesionalisme, serta ketepatan dalam setiap tahap
            pekerjaan.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

        <motion.dl
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid gap-px overflow-hidden rounded-[1.75rem] border border-primary-foreground/15 bg-primary-foreground/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
        >
          {statistik.map((s) => (
            <div key={s.label} className="bg-primary-foreground/5 px-7 py-8">
              <dt className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-accent">
                <Counter target={s.angka} suffix={s.suffix} />
              </dt>
              <dd className="mt-2 text-sm text-primary-foreground/80">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}