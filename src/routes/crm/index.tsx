import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";
import { CrmShell, KartuStat, Lencana } from "@/components/crm/CrmShell";
import { useCrm } from "@/lib/crm-store";
import { rupiah, statusLead, tanggalID } from "@/data/crm";

export const Route = createFileRoute("/crm/")({ component: Dashboard });

function Dashboard() {
  const { leads, clients, projects, activities } = useCrm();
  const hariIni = new Date().toISOString().slice(0, 10);

  const pipeline = leads
    .filter((l) => l.status !== "Won" && l.status !== "Lost")
    .reduce((a, l) => a + l.potensiNilai, 0);
  const won = leads.filter((l) => l.status === "Won");
  const proyekAktif = projects.filter((p) => p.status !== "Completed");
  const fuHariIni = activities.filter((a) => a.tanggal === hariIni && a.status === "Terjadwal");
  const fuTerlambat = activities.filter((a) => a.tanggal < hariIni && a.status === "Terjadwal");

  const perStatus = statusLead.map((s) => ({
    status: s,
    jumlah: leads.filter((l) => l.status === s).length,
  }));
  const maks = Math.max(1, ...perStatus.map((p) => p.jumlah));

  return (
    <CrmShell judul="Dashboard" deskripsi="Ringkasan performa lead, klien, dan proyek">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KartuStat label="Total Leads" nilai={leads.length} ikon={Users} />
        <KartuStat
          label="New Leads"
          nilai={leads.filter((l) => l.status === "New").length}
          ikon={UserPlus}
        />
        <KartuStat label="Active Clients" nilai={clients.length} ikon={Building2} />
        <KartuStat label="Active Projects" nilai={proyekAktif.length} ikon={Briefcase} />
        <KartuStat
          label="Pipeline Value"
          nilai={rupiah(pipeline)}
          keterangan="Lead yang masih berjalan"
          ikon={TrendingUp}
        />
        <KartuStat
          label="Won Projects"
          nilai={won.length}
          keterangan={rupiah(won.reduce((a, l) => a + l.potensiNilai, 0))}
          ikon={CheckCircle2}
        />
        <KartuStat label="Follow-up Hari Ini" nilai={fuHariIni.length} ikon={CalendarClock} />
        <KartuStat label="Follow-up Terlambat" nilai={fuTerlambat.length} ikon={AlertTriangle} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-sm font-semibold text-foreground">Perkembangan Pipeline Lead</h2>
          <div className="mt-5 space-y-3">
            {perStatus.map((p) => (
              <div key={p.status} className="flex items-center gap-3">
                <span className="w-24 shrink-0 text-xs text-muted-foreground">{p.status}</span>
                <div className="h-2.5 flex-1 rounded-full bg-surface">
                  <div
                    className="h-2.5 rounded-full bg-primary"
                    style={{ width: `${(p.jumlah / maks) * 100}%` }}
                  />
                </div>
                <span className="w-6 text-right text-xs font-semibold text-foreground">
                  {p.jumlah}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-sm font-semibold text-foreground">Progres Proyek</h2>
          <div className="mt-5 space-y-4">
            {projects.slice(0, 5).map((p) => (
              <div key={p.id}>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <Link
                    to="/crm/projects/$id"
                    params={{ id: p.id }}
                    className="truncate font-medium text-foreground hover:text-primary"
                  >
                    {p.nama}
                  </Link>
                  <Lencana status={p.status} />
                </div>
                <div className="mt-2 h-2 rounded-full bg-surface">
                  <div
                    className="h-2 rounded-full bg-accent"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Follow-up Terdekat</h2>
          <Link to="/crm/activities" className="text-xs font-medium text-primary">
            Lihat semua
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {[...fuTerlambat, ...fuHariIni].slice(0, 6).map((a) => (
            <div
              key={a.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border p-3 text-xs"
            >
              <div>
                <p className="font-medium text-foreground">
                  {a.jenis} — {a.catatan}
                </p>
                <p className="text-muted-foreground">
                  {tanggalID(a.tanggal)} · PIC {a.pic}
                </p>
              </div>
              <Lencana status={a.tanggal < hariIni ? "Batal" : "Terjadwal"} />
            </div>
          ))}
          {fuTerlambat.length + fuHariIni.length === 0 ? (
            <p className="text-xs text-muted-foreground">Tidak ada follow-up jatuh tempo.</p>
          ) : null}
        </div>
      </div>
    </CrmShell>
  );
}