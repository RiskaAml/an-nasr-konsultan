import { Link } from "@tanstack/react-router";
import { Compass, Mail, MapPin, Phone, TrendingUp } from "lucide-react";
import { layanan, navigasi, perusahaan, sesiMingguan } from "@/data/perusahaan";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-primary-foreground">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-10" aria-hidden />
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Compass className="size-5" />
              </span>
              <span className="font-[family-name:var(--font-heading)] text-sm font-semibold">
                CV. An Nasr Konsultan
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              {perusahaan.singkat}
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-primary-foreground/45">
              {perusahaan.jamOperasional}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Menu</h3>
            <ul className="mt-5 space-y-3">
              {navigasi.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Layanan
            </h3>
            <ul className="mt-5 space-y-3">
              {layanan.map((l) => (
                <li key={l.slug}>
                  <Link
                    to="/layanan/$slug"
                    params={{ slug: l.slug }}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-accent"
                  >
                    {l.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Kontak</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{perusahaan.kantor}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{perusahaan.telepon}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{perusahaan.email}</span>
              </li>
            </ul>

            <div className="mt-8">
              <SesiChart />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>
            © {new Date().getFullYear()} {perusahaan.nama}. Seluruh hak cipta dilindungi.
          </span>
          <span>Jombang, Jawa Timur — Indonesia</span>
        </div>
      </div>
    </footer>
  );
}

function SesiChart() {
  const nilai = sesiMingguan.map((s) => s.sesi);
  const maks = Math.max(...nilai);

  return (
    <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="flex min-w-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
          <TrendingUp className="size-3.5 shrink-0 text-accent" />
          <span className="truncate">Sesi / Minggu</span>
        </p>
        <span className="shrink-0 font-[family-name:var(--font-heading)] text-lg font-semibold text-accent">
          {nilai[nilai.length - 1]?.toLocaleString("id-ID")}
        </span>
      </div>

      <div className="mt-4 flex h-14 items-end gap-1.5">
        {sesiMingguan.map((s) => (
          <div
            key={s.minggu}
            title={`${s.minggu}: ${s.sesi} sesi`}
            className="flex-1 rounded-t bg-accent/70"
            style={{ height: `${Math.max(10, (s.sesi / maks) * 100)}%` }}
          />
        ))}
      </div>
    </div>
  );
}
