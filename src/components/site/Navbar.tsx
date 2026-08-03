import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigasi, perusahaan } from "@/data/perusahaan";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 py-2 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Compass className="size-5" />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-[family-name:var(--font-heading)] text-sm font-semibold ${
                scrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              AN NASR KONSULTAN
            </span>
            <span className="block text-[11px] tracking-wide text-muted-foreground">
              Konsultan Teknik &amp; Konstruksi
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigasi.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="pill">
            <a href={`https://wa.me/${perusahaan.whatsapp}`} target="_blank" rel="noreferrer">
              Konsultasi Sekarang
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-4 mt-3 rounded-3xl border border-border bg-background p-4 shadow-[var(--shadow-soft)] lg:hidden">
          <ul className="flex flex-col">
            {navigasi.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-2 w-full" size="pill">
            <a href={`https://wa.me/${perusahaan.whatsapp}`} target="_blank" rel="noreferrer">
              Konsultasi Sekarang
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}