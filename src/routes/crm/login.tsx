import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Compass, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCrm } from "@/lib/crm-store";

export const Route = createFileRoute("/crm/login")({ component: LoginCrm });

function LoginCrm() {
  const { login, user, siap } = useCrm();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@annasrkonsultan.id");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (siap && user) navigate({ to: "/crm", replace: true });
  }, [siap, user, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-5 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Compass className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
              CRM Internal
            </p>
            <p className="text-xs text-muted-foreground">CV. An Nasr Konsultan</p>
          </div>
        </div>

        <h1 className="mt-8 text-2xl text-foreground">Masuk Area Internal</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman ini hanya untuk tim internal perusahaan.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const hasil = login(email, password);
            if (!hasil.ok) {
              setError(hasil.pesan ?? "Gagal masuk.");
              return;
            }
            setError(null);
            navigate({ to: "/crm", replace: true });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Kata Sandi</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error ? <p className="text-xs text-destructive">{error}</p> : null}
          <Button type="submit" size="pill" className="w-full">
            <Lock className="size-4" /> Masuk
          </Button>
        </form>

        <div className="mt-6 rounded-2xl bg-surface p-4 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Akun demo</p>
          <p className="mt-1">admin@annasrkonsultan.id / annasr123</p>
          <p>marketing@annasrkonsultan.id / annasr123</p>
        </div>

        <Link to="/" className="mt-6 block text-center text-xs text-muted-foreground underline">
          Kembali ke Company Profile
        </Link>
      </div>
    </div>
  );
}