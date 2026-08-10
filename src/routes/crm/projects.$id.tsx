import { createFileRoute, Link } from "@tanstack/react-router";
import { CrmShell, Lencana } from "@/components/crm/CrmShell";
import { Button } from "@/components/ui/button";
import { useCrm } from "@/lib/crm-store";
import { rupiah, statusProyek, tanggalID, type StatusProyek } from "@/data/crm";

export const Route = createFileRoute("/crm/projects/$id")({ component: DetailProject });

function DetailProject() {
  const { id } = Route.useParams();
  const { projects, clients, ubahProject } = useCrm();
  const proyek = projects.find((p) => p.id === id);

  if (!proyek) {
    return (
      <CrmShell judul="Project tidak ditemukan">
        <Button asChild size="sm">
          <Link to="/crm/projects">Kembali ke Projects</Link>
        </Button>
      </CrmShell>
    );
  }

  const client = clients.find((c) => c.id === proyek.clientId);
  const baris = [
    ["Client", client?.perusahaan ?? "-"],
    ["PIC", proyek.pic],
    ["Jenis Layanan", proyek.layanan],
    ["Lokasi", proyek.lokasi],
    ["Nilai Proyek", rupiah(proyek.nilai)],
    ["Tanggal Mulai", tanggalID(proyek.mulai)],
    ["Target Selesai", tanggalID(proyek.target)],
  ];

  return (
    <CrmShell
      judul={proyek.nama}
      deskripsi={`Project ${proyek.id}`}
      aksi={
        <Button asChild variant="outline" size="sm">
          <Link to="/crm/projects">Kembali</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-foreground">Informasi Proyek</h2>
              <Lencana status={proyek.status} />
            </div>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              {baris.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Catatan</p>
              <p className="mt-1 text-sm text-foreground/85">{proyek.catatan}</p>
            </div>
          </div>

          {client ? (
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold text-foreground">Client Terkait</h2>
              <Link
                to="/crm/clients/$id"
                params={{ id: client.id }}
                className="mt-3 block text-sm font-medium text-primary"
              >
                {client.perusahaan}
              </Link>
              <p className="text-xs text-muted-foreground">
                {client.pic} · {client.whatsapp}
              </p>
            </div>
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Progress</h2>
            <div className="mt-4 h-2.5 rounded-full bg-surface">
              <div
                className="h-2.5 rounded-full bg-accent"
                style={{ width: `${proyek.progress}%` }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={proyek.progress}
              onChange={(e) => ubahProject(proyek.id, { progress: Number(e.target.value) })}
              className="mt-4 w-full"
            />
            <p className="text-center text-sm font-semibold text-foreground">{proyek.progress}%</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Status Proyek</h2>
            <div className="mt-4 grid gap-2">
              {statusProyek.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ubahProject(proyek.id, { status: s as StatusProyek })}
                  className={`rounded-xl px-3 py-2 text-left text-sm ${
                    proyek.status === s
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:bg-surface"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CrmShell>
  );
}