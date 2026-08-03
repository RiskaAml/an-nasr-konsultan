export function PageHero({ eyebrow, judul, teks }: { eyebrow: string; judul: string; teks: string }) {
  return (
    <section className="cta-gradient relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
      <div className="blueprint-grid absolute inset-0 opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 text-4xl leading-tight text-primary-foreground sm:text-5xl">{judul}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
          {teks}
        </p>
      </div>
    </section>
  );
}