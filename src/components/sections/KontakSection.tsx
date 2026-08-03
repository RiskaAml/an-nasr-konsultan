import { useForm } from "react-hook-form";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { layanan, perusahaan } from "@/data/perusahaan";

type FormPesan = {
  nama: string;
  hp: string;
  email: string;
  jenisLayanan: string;
  pesan: string;
};

export function KontakSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormPesan>({ defaultValues: { jenisLayanan: layanan[0].nama } });

  const onSubmit = handleSubmit(async (data) => {
    const teks = `Halo ${perusahaan.nama}, saya ${data.nama}.%0A%0AJenis layanan: ${data.jenisLayanan}%0ANo. HP: ${data.hp}%0AEmail: ${data.email}%0A%0A${data.pesan}`;
    window.open(`https://wa.me/${perusahaan.whatsapp}?text=${teks}`, "_blank");
    toast.success("Pesan Anda siap dikirim melalui WhatsApp.");
    reset();
  });

  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal arah="left">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] lg:p-10">
            <h2 className="text-2xl text-foreground">Kirim Pesan</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Isi formulir berikut, tim kami akan menghubungi Anda pada jam kerja.
            </p>
            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nama">Nama</Label>
                <Input
                  id="nama"
                  placeholder="Nama lengkap Anda"
                  {...register("nama", { required: "Nama wajib diisi" })}
                />
                {errors.nama ? (
                  <p className="text-xs text-destructive">{errors.nama.message}</p>
                ) : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="hp">Nomor HP</Label>
                  <Input
                    id="hp"
                    inputMode="tel"
                    placeholder="08xxxxxxxxxx"
                    {...register("hp", { required: "Nomor HP wajib diisi" })}
                  />
                  {errors.hp ? (
                    <p className="text-xs text-destructive">{errors.hp.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    {...register("email", { required: "Email wajib diisi" })}
                  />
                  {errors.email ? (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="jenisLayanan">Jenis Layanan</Label>
                <select
                  id="jenisLayanan"
                  className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  {...register("jenisLayanan", { required: true })}
                >
                  {layanan.map((l) => (
                    <option key={l.slug} value={l.nama}>
                      {l.nama}
                    </option>
                  ))}
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pesan">Pesan</Label>
                <Textarea
                  id="pesan"
                  rows={5}
                  placeholder="Ceritakan kebutuhan proyek Anda"
                  {...register("pesan", { required: "Pesan wajib diisi" })}
                />
                {errors.pesan ? (
                  <p className="text-xs text-destructive">{errors.pesan.message}</p>
                ) : null}
              </div>

              <Button type="submit" size="pill" className="w-full" disabled={isSubmitting}>
                Kirim Pesan
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </Reveal>

        <Reveal arah="right" className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-surface p-8 lg:p-10">
            <h2 className="text-2xl text-foreground">Informasi Kontak</h2>
            <ul className="mt-8 space-y-7">
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <MapPin className="size-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    Domisili Perusahaan
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {perusahaan.domisili}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <MapPin className="size-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Alamat Kantor</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {perusahaan.kantor}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Phone className="size-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Telepon</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {perusahaan.telepon}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Mail className="size-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Email</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {perusahaan.email}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Clock className="size-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    Jam Operasional
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {perusahaan.jamOperasional}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border">
            <iframe
              title="Peta lokasi kantor CV. AN NASR KONSULTAN"
              src="https://www.google.com/maps?q=Jombang%2C%20Jawa%20Timur&output=embed"
              loading="lazy"
              className="h-72 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}