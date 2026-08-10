import { createFileRoute, Link } from "@tanstack/react-router";
import { CrmShell, Lencana } from "@/components/crm/CrmShell";
import { useCrm } from "@/lib/crm-store";
import { tanggalID } from "@/data/crm";

export const Route = createFileRoute("/crm/activities")({ component: HalamanActivities });

function HalamanActivities() {
  const { activities, leads, clients, ubahActivity } = useCrm();
  const urut = [...activities].sort((a, b) => (a.tanggal < b.tanggal ? 1 : -1));

  const terkait = (leadId?: string, clientId?: string) => {
    if (leadId) {
      const l = leads.find((x) => x.id === leadId);
      return l ? { label: `${l.nama} · ${l.perusahaan}`, to: `/crm/leads/${l.id}` } : null;
    }
    if (clientId) {
      const c = clients.find((x) => x.id === clientId);
      return c ? { label: c.perusahaan, to: `/crm/clients/${c.id}` } : null;
    }
    return null;
  };

  return (
    <CrmShell judul="Activities" deskripsi="Seluruh catatan follow-up tim internal">
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[860px] text-sm">
          <thead className="bg-surface text-left text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Jenis</th>
              <th className="px-4 py-3">Terkait</th>
              <th className="px-4 py-3">Catatan</th>
              <th className="px-4 py-3">PIC</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {urut.map((a) => {
              const rel = terkait(a.leadId, a.clientId);
              return (
                <tr key={a.id} className="border-t border-border align-top">
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {tanggalID(a.tanggal)}
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">{a.jenis}</td>
                  <td className="px-4 py-3">
                    {rel ? (
                      <Link to={rel.to} className="text-primary hover:underline">
                        {rel.label}
                      </Link>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{a.catatan}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.pic}</td>
                  <td className="px-4 py-3">
                    <button type="button" onClick={() => ubahActivity(a.id, { status: "Selesai" })}>
                      <Lencana status={a.status} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </CrmShell>
  );
}