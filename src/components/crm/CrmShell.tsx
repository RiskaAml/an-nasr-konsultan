import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Activity as ActivityIcon,
  BarChart3,
  Briefcase,
  Building2,
  Compass,
  LayoutDashboard,
  LogOut,
  Menu,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCrm } from "@/lib/crm-store";

const menu = [
  { to: "/crm", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/crm/leads", label: "Leads", icon: Users, exact: false },
  { to: "/crm/clients", label: "Clients", icon: Building2, exact: false },
  { to: "/crm/projects", label: "Projects", icon: Briefcase, exact: false },
  { to: "/crm/activities", label: "Follow Up", icon: ActivityIcon, exact: false },
  { to: "/crm/reports", label: "Reports", icon: BarChart3, exact: false },
] as const;

export function CrmShell({
  judul,
  deskripsi,
  aksi,
  children,
}: {
  judul: string;
  deskripsi?: string;
  aksi?: ReactNode;
  children: ReactNode;
}) {
  const { user, siap, logout } = useCrm();
  const navigate = useNavigate();
  const [buka, setBuka] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (siap && !user) navigate({ to: "/crm/login", replace: true });
  }, [siap, user, navigate]);

  if (!siap || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface text-sm text-muted-foreground">
        Memuat area internal…
      </div>
    );
  }

  const aktif = (to: string, exact: boolean) => (exact ? path === to : path.startsWith(to));

  return (
    <div className="min-h-screen bg-surface">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 -translate-x-full border-r border-border bg-secondary text-primary-foreground transition-transform lg:translate-x-0 ${
          buka ? "translate-x-0" : ""
        }`}
      >
        <div className="flex items-center gap-3 px-5 py-5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary-foreground/10">
            <Compass className="size-4" />
          </span>
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-heading)] text-sm font-semibold">
              CRM Internal
            </span>
            <span className="block text-[11px] text-primary-foreground/60">
              CV. An Nasr Konsultan
            </span>
          </span>
        </div>

        <nav className="mt-2 space-y-1 px-3">
          {menu.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              onClick={() => setBuka(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                aktif(m.to, m.exact)
                  ? "bg-primary text-primary-foreground"
                  : "text-primary-foreground/70 hover:bg-primary-foreground/10"
              }`}
            >
              <m.icon className="size-4" />
              {m.label}
            </Link>
          ))}
        </nav>

        <div className="absolute inset-x-0 bottom-0 space-y-3 border-t border-primary-foreground/10 p-4">
          <div className="text-xs text-primary-foreground/70">
            <p className="font-semibold text-primary-foreground">{user.nama}</p>
            <p>{user.peran}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="rounded-lg border border-primary-foreground/20 px-3 py-2 text-center text-xs text-primary-foreground/80"
            >
              Lihat Company Profile
            </Link>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate({ to: "/crm/login", replace: true });
              }}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-2 text-xs font-medium"
            >
              <LogOut className="size-3.5" /> Keluar
            </button>
          </div>
        </div>
      </aside>

      {buka ? (
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={() => setBuka(false)}
          className="fixed inset-0 z-40 bg-foreground/40 lg:hidden"
        />
      ) : null}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
          <div className="flex items-center gap-4 px-5 py-4 lg:px-8">
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setBuka((v) => !v)}
              className="flex size-9 items-center justify-center rounded-lg border border-border lg:hidden"
            >
              {buka ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
            <div className="min-w-0 flex-1">
              <h1 className="truncate font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                {judul}
              </h1>
              {deskripsi ? (
                <p className="truncate text-xs text-muted-foreground">{deskripsi}</p>
              ) : null}
            </div>
            {aksi}
          </div>
        </header>
        <main className="px-5 py-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}

export function KartuStat({
  label,
  nilai,
  keterangan,
  ikon: Ikon,
}: {
  label: string;
  nilai: string | number;
  keterangan?: string;
  ikon?: typeof Users;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        {Ikon ? <Ikon className="size-4 text-primary" /> : null}
      </div>
      <p className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-foreground">
        {nilai}
      </p>
      {keterangan ? <p className="mt-1 text-xs text-muted-foreground">{keterangan}</p> : null}
    </div>
  );
}

const warnaStatus: Record<string, string> = {
  New: "bg-primary/10 text-primary",
  Contacted: "bg-sky-500/10 text-sky-700",
  Qualified: "bg-violet-500/10 text-violet-700",
  Proposal: "bg-amber-500/10 text-amber-700",
  Negotiation: "bg-orange-500/10 text-orange-700",
  Won: "bg-accent/20 text-accent-foreground",
  Lost: "bg-destructive/10 text-destructive",
  Planning: "bg-primary/10 text-primary",
  "On Going": "bg-amber-500/10 text-amber-700",
  Completed: "bg-accent/20 text-accent-foreground",
  Terjadwal: "bg-amber-500/10 text-amber-700",
  Selesai: "bg-accent/20 text-accent-foreground",
  Batal: "bg-destructive/10 text-destructive",
};

export function Lencana({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        warnaStatus[status] ?? "bg-muted text-muted-foreground"
      }`}
    >
      {status}
    </span>
  );
}

export function TombolKembali({ to, label }: { to: string; label: string }) {
  return (
    <Button asChild variant="outline" size="sm">
      <Link to={to}>{label}</Link>
    </Button>
  );
}