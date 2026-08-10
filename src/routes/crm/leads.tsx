import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { CrmShell, Lencana } from "@/components/crm/CrmShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCrm } from "@/lib/crm-store";
import { daftarPic, rupiah, statusLead, sumberLead, tanggalID, type StatusLead } from "@/data/crm";
import { layanan } from "@/data/perusahaan";

export const Route = createFileRoute("/crm/leads")({ component: HalamanLeads });

const kolomKanban = statusLead;

function HalamanLeads() {
  const { leads, tambahLead, ubahLead } = useCrm();
  const [tampilan, setTampilan] = useState<"kanban" | "tabel">("kanban");
  const [formBuka, setFormBuka] = useState(false);
  const [cari, setCari] = useState("");

  const hasil = leads.filter((l) =>
    `${l.nama} ${l.perusahaan} ${l.layanan}`.toLowerCase().includes(cari.toLowerCase()),
  );

  return (
    <CrmShell
      judul="Leads"
      deskripsi="Pipeline calon klien dari form website dan input manual"
      aksi={
        <Button size="sm" onClick={() => setFormBuka((v) => !v)}>
          <Plus className="size-4" /> Lead Baru
        </Button>
      }
    >
      {formBuka ? <FormLead onSimpan={tambahLead} onTutup={() => setFormBuka(false)} /> : null}

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Cari nama, perusahaan, layanan…"
          className="max-w-xs"
        />
        <div className="flex rounded-full border border-border bg-card p-1 text-xs">
          {(["kanban", "tabel"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTampilan(t)}
              className={`rounded-full px-4 py-1.5 font-medium capitalize ${
                tampilan === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {tampilan === "kanban" ? (
        <div className="grid grid-flow-col auto-cols-[16rem] gap-4 overflow-x-auto pb-4">
          {kolomKanban.map((kolom) => {
            const isi = hasil.filter((l) => l.status === kolom);
            return (
              <div key={kolom} className="rounded-2xl border border-border bg-card p-3">
                <div className="flex items-center justify-between px-1 pb-3">
                  <Lencana status={kolom} />
                  <span className="text-xs text-muted-foreground">{isi.length}</span>
                </div>
                <div className="space-y-3">
                  {isi.map((l) => (
                    <div key={l.id} className="rounded-xl border border-border bg-surface p-3">
                      <Link
                        to="/crm/leads/$id"
                        params={{ id: l.id }}
                        className="text-sm font-semibold text-foreground hover:text-primary"
                      >
                        {l.nama}
                      </Link>
                      <p className="mt-0.5 text-xs text-muted-foreground">{l.perusahaan}</p>
                      <p className="mt-2 text-xs text-foreground/80">{l.layanan}</p>
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {rupiah(l.potensiNilai)}
                      </p>
                      <select
                        value={l.status}
                        onChange={(e) => ubahLead(l.id, { status: e.target.value as StatusLead })}
                        className="mt-3 w-full rounded-lg border border-border bg-background px-2 py-1.5 text-xs"
                      >
                        {statusLead.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                  {isi.length === 0 ? (
                    <p className="px-1 py-4 text-xs text-muted-foreground">Kosong</p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[860px] text-sm">
            <thead className="bg-surface text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Perusahaan</th>
                <th className="px-4 py-3">Layanan</th>
                <th className="px-4 py-3">Sumber</th>
                <th className="px-4 py-3">PIC</th>
                <th className="px-4 py-3">Potensi</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Masuk</th>
              </tr>
            </thead>
            <tbody>
              {hasil.map((l) => (
                <tr key={l.id} className="border-t border-border">
                  <td className="px-4 py-3">
                    <Link
                      to="/crm/leads/$id"
                      params={{ id: l.id }}
                      className="font-medium text-foreground hover:text-primary"
                    >
                      {l.nama}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{l.perusahaan}</td>
                  <td className="px-4 py-3 text-muted-foreground">{l.layanan}</td>
                  <td className="px-4 py-3 text-muted-foreground">{l.sumber}</td>
                  <td className="px-4 py-3 text-muted-foreground">{l.pic}</td>
                  <td className="px-4 py-3">{rupiah(l.potensiNilai)}</td>
                  <td className="px-4 py-3">
                    <Lencana status={l.status} />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{tanggalID(l.tanggalMasuk)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </CrmShell>
  );
}

function FormLead({
  onSimpan,
  onTutup,
}: {
  onSimpan: ReturnType<typeof useCrm>["tambahLead"];
  onTutup: () => void;
}) {
  return (
    <form
      className="mb-6 grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        onSimpan({
          nama: String(f.get("nama")),
          perusahaan: String(f.get("perusahaan")),
          jabatan: String(f.get("jabatan")),
          email: String(f.get("email")),
          whatsapp: String(f.get("whatsapp")),
          layanan: String(f.get("layanan")),
          sumber: String(f.get("sumber")),
          kebutuhan: String(f.get("kebutuhan")),
          pic: String(f.get("pic")),
          potensiNilai: Number(f.get("potensiNilai") || 0),
        });
        onTutup();
      }}
    >
      <h2 className="text-sm font-semibold text-foreground sm:col-span-2">Tambah Lead Manual</h2>
      {[
        { name: "nama", label: "Nama" },
        { name: "perusahaan", label: "Perusahaan" },
        { name: "jabatan", label: "Jabatan" },
        { name: "email", label: "Email", type: "email" },
        { name: "whatsapp", label: "WhatsApp" },
        { name: "potensiNilai", label: "Potensi Nilai Proyek (Rp)", type: "number" },
      ].map((f) => (
        <div key={f.name} className="space-y-2">
          <Label htmlFor={f.name}>{f.label}</Label>
          <Input id={f.name} name={f.name} type={f.type ?? "text"} required={f.name === "nama"} />
        </div>
      ))}
      <div className="space-y-2">
        <Label htmlFor="layanan">Layanan Diminati</Label>
        <select
          id="layanan"
          name="layanan"
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
        >
          {layanan.map((l) => (
            <option key={l.slug}>{l.nama}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="sumber">Sumber Lead</Label>
        <select
          id="sumber"
          name="sumber"
          defaultValue="Input Manual"
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
        >
          {sumberLead.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
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
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="kebutuhan">Deskripsi Kebutuhan</Label>
        <Textarea id="kebutuhan" name="kebutuhan" rows={3} />
      </div>
      <div className="flex gap-3 sm:col-span-2">
        <Button type="submit" size="sm">
          Simpan Lead
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onTutup}>
          Batal
        </Button>
      </div>
    </form>
  );
}