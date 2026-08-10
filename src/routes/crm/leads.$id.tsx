import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { CrmShell, Lencana } from "@/components/crm/CrmShell";
import { Button } from "@/components/ui/button";
import { useCrm } from "@/lib/crm-store";
import { rupiah, statusLead, tanggalID, type StatusLead } from "@/data/crm";
import { TimelineAktivitas } from "@/components/crm/TimelineAktivitas";

export const Route = createFileRoute("/crm/leads/$id")({ component: DetailLead });

function DetailLead() {
  const { id } = Route.useParams();
  const { leads, ubahLead, konversiLead } = useCrm();
  const navigate = useNavigate();
  const lead = leads.find((l) => l.id === id);

  if (!lead) {
    return (
      <CrmShell judul="Lead tidak ditemukan">
        <Button asChild size="sm">
          <Link to="/crm/leads">Kembali ke Leads</Link>
        </Button>
      </CrmShell>
    );
  }

  const baris = [
    ["Perusahaan", lead.perusahaan],
    ["Jabatan", lead.jabatan],
    ["Email", lead.email],
    ["WhatsApp", lead.whatsapp],
    ["Layanan Diminati", lead.layanan],
    ["Sumber Lead", lead.sumber],
    ["PIC", lead.pic],
    ["Potensi Nilai", rupiah(lead.potensiNilai)],
    ["Tanggal Masuk", tanggalID(lead.tanggalMasuk)],
  ];

  return (
    <CrmShell
      judul={lead.nama}
      deskripsi={`Lead ${lead.id} · ${lead.perusahaan}`}
      aksi={
        <Button asChild variant="outline" size="sm">
          <Link to="/crm/leads">Kembali</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-foreground">Informasi Lead</h2>
              <Lencana status={lead.status} />
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
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Deskripsi Kebutuhan
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/85">{lead.kebutuhan}</p>
            </div>
          </div>

          <TimelineAktivitas leadId={lead.id} />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Ubah Status Pipeline</h2>
            <div className="mt-4 grid gap-2">
              {statusLead.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ubahLead(lead.id, { status: s as StatusLead })}
                  className={`rounded-xl px-3 py-2 text-left text-sm ${
                    lead.status === s
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:bg-surface"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Konversi Menjadi Client</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Lead yang berhasil dapat dikonversi menjadi client dan dilanjutkan ke project.
            </p>
            {lead.clientId ? (
              <Button asChild size="sm" className="mt-4 w-full">
                <Link to="/crm/clients/$id" params={{ id: lead.clientId }}>
                  Lihat Client
                </Link>
              </Button>
            ) : (
              <Button
                size="sm"
                className="mt-4 w-full"
                onClick={() => {
                  const client = konversiLead(lead.id);
                  if (client) {
                    toast.success("Lead dikonversi menjadi client.");
                    navigate({ to: "/crm/clients/$id", params: { id: client.id } });
                  }
                }}
              >
                Konversi ke Client
              </Button>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-xs text-muted-foreground">
            <a
              href={`https://wa.me/${lead.whatsapp.replace(/^0/, "62")}`}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary"
            >
              Hubungi via WhatsApp
            </a>
            <br />
            <a href={`mailto:${lead.email}`} className="font-medium text-primary">
              Kirim Email
            </a>
          </div>
        </div>
      </div>
    </CrmShell>
  );
}