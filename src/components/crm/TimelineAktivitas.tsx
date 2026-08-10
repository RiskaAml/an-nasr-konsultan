import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lencana } from "@/components/crm/CrmShell";
import { useCrm } from "@/lib/crm-store";
import { daftarPic, jenisAktivitas, tanggalID, type JenisAktivitas } from "@/data/crm";

export function TimelineAktivitas({ leadId, clientId }: { leadId?: string; clientId?: string }) {
  const { activities, tambahActivity, ubahActivity } = useCrm();
  const [buka, setBuka] = useState(false);

  const daftar = activities
    .filter((a) => (leadId ? a.leadId === leadId : a.clientId === clientId))
    .sort((a, b) => (a.tanggal < b.tanggal ? 1 : -1));

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Timeline Aktivitas & Follow Up</h2>
        <Button size="sm" variant="outline" onClick={() => setBuka((v) => !v)}>
          {buka ? "Tutup" : "Tambah Aktivitas"}
        </Button>
      </div>

      {buka ? (
        <form
          className="mt-5 grid gap-4 rounded-xl border border-border bg-surface p-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            tambahActivity({
              jenis: String(f.get("jenis")) as JenisAktivitas,
              tanggal: String(f.get("tanggal")),
              pic: String(f.get("pic")),
              status: String(f.get("status")) as "Terjadwal" | "Selesai" | "Batal",
              catatan: String(f.get("catatan")),
              ...(leadId ? { leadId } : {}),
              ...(clientId ? { clientId } : {}),
            });
            setBuka(false);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="jenis">Jenis</Label>
            <select
              id="jenis"
              name="jenis"
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {jenisAktivitas.map((j) => (
                <option key={j}>{j}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tanggal">Tanggal</Label>
            <Input
              id="tanggal"
              name="tanggal"
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pic">PIC</Label>
            <select
              id="pic"
              name="pic"
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {daftarPic.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option>Terjadwal</option>
              <option>Selesai</option>
              <option>Batal</option>
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="catatan">Catatan</Label>
            <Textarea id="catatan" name="catatan" rows={2} />
          </div>
          <Button type="submit" size="sm" className="sm:col-span-2">
            Simpan Aktivitas
          </Button>
        </form>
      ) : null}

      <ol className="mt-6 space-y-4 border-l border-border pl-5">
        {daftar.map((a) => (
          <li key={a.id} className="relative">
            <span className="absolute -left-[27px] top-1.5 size-3 rounded-full border-2 border-background bg-primary" />
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-foreground">{a.jenis}</span>
              <Lencana status={a.status} />
              <span className="text-xs text-muted-foreground">
                {tanggalID(a.tanggal)} · {a.pic}
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground/80">{a.catatan}</p>
            {a.status === "Terjadwal" ? (
              <button
                type="button"
                onClick={() => ubahActivity(a.id, { status: "Selesai" })}
                className="mt-1 text-xs font-medium text-primary"
              >
                Tandai selesai
              </button>
            ) : null}
          </li>
        ))}
        {daftar.length === 0 ? (
          <li className="text-xs text-muted-foreground">Belum ada aktivitas tercatat.</li>
        ) : null}
      </ol>
    </div>
  );
}