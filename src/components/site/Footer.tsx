import { Link } from "@tanstack/react-router";
import { Compass, Mail, MapPin, Phone, TrendingUp } from "lucide-react";
import { layanan, navigasi, perusahaan, sesiMingguan } from "@/data/perusahaan";

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
              <Compass className="size-5" />
            </span>
            <span className="font-[family-name:var(--font-heading)] text-sm font-semibold">
              CV. An Nasr Konsultan
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            {perusahaan.singkat}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary-foreground">Menu</h3>
          <ul className="mt-5 space-y-3">
            {navigasi.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary-foreground">Layanan</h3>
          <ul className="mt-5 space-y-3">
            {layanan.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/layanan/$slug"
                  params={{ slug: l.slug }}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {l.nama}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary-foreground">Kontak</h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
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
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-14 lg:px-8">
        <SesiChart />
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-primary-foreground/60 lg:px-8">
          © {new Date().getFullYear()} {perusahaan.nama}. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
function SesiChart() {
  const nilai = sesiMingguan.map((s) => s.sesi);
  const maks = Math.max(...nilai);
  const total = nilai.reduce((a, b) => a + b, 0);

  return (
    <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
            <TrendingUp className="size-4 shrink-0 text-accent" />
            Sesi Pengunjung per Minggu
          </p>
          <p className="mt-1 truncate text-xs text-primary-foreground/55">
            Total {total.toLocaleString("id-ID")} sesi dalam {sesiMingguan.length} minggu terakhir
          </p>
        </div>
        <span className="shrink-0 font-[family-name:var(--font-heading)] text-2xl font-semibold text-accent">
          {nilai[nilai.length - 1]?.toLocaleString("id-ID")}
        </span>
      </div>

      <div className="mt-5 flex h-24 items-end gap-2">
        {sesiMingguan.map((s) => (
          <div key={s.minggu} className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t-md bg-accent/80"
              style={{ height: `${Math.max(8, (s.sesi / maks) * 100)}%` }}
              title={`${s.minggu}: ${s.sesi} sesi`}
            />
            <span className="truncate text-[10px] text-primary-foreground/50">{s.minggu}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
