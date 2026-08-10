import { createFileRoute, Link } from "@tanstack/react-router";
import { CrmShell, Lencana } from "@/components/crm/CrmShell";
import { Button } from "@/components/ui/button";
import { TimelineAktivitas } from "@/components/crm/TimelineAktivitas";
import { useCrm } from "@/lib/crm-store";
import { rupiah, tanggalID } from "@/data/crm";

export const Route = createFileRoute("/crm/clients/$id")({ component: DetailClient });

function DetailClient() {
  const { id } = Route.useParams();
  const { clients, projects } = useCrm();
  const client = clients.find((c) => c.id === id);

  if (!client) {
    return (
      <CrmShell judul="Client tidak ditemukan">
        <Button asChild size="sm">
          <Link to="/crm/clients">Kembali ke Clients</Link>
        </Button>
      </CrmShell>
    );
  }

  const riwayat = projects.filter((p) => p.clientId === client.id);
  const baris = [
    ["Nama PIC", client.pic],
    ["Jabatan", client.jabatan],
    ["Email", client.email],
    ["WhatsApp", client.whatsapp],
    ["Industri", client.industri],
    ["Klien Sejak", tanggalID(client.tanggalGabung)],
    ["Alamat", client.alamat],
  ];

  return (
    <CrmShell
      judul={client.perusahaan}
      deskripsi={`Client ${client.id}`}
      aksi={
        <Button asChild variant="outline" size="sm">
          <Link to="/crm/clients">Kembali</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Informasi Client</h2>
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
              <p className="mt-1 text-sm text-foreground/85">{client.catatan}</p>
            </div>
          </div>

          <TimelineAktivitas clientId={client.id} />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Riwayat Proyek</h2>
            <Link to="/crm/projects" className="text-xs font-medium text-primary">
              Kelola
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {riwayat.map((p) => (
              <Link
                key={p.id}
                to="/crm/projects/$id"
                params={{ id: p.id }}
                className="block rounded-xl border border-border p-3 hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-medium text-foreground">{p.nama}</span>
                  <Lencana status={p.status} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.layanan} · {rupiah(p.nilai)}
                </p>
              </Link>
            ))}
            {riwayat.length === 0 ? (
              <p className="text-xs text-muted-foreground">Belum ada proyek.</p>
            ) : null}
          </div>
        </div>
      </div>
    </CrmShell>
  );
}