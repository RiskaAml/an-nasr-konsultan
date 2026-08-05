import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export function RekrutmenSection() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <Reveal className="mx-auto max-w-3xl rounded-[1.5rem] border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
        <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Briefcase className="size-5" strokeWidth={1.6} />
        </span>
        <h2 className="mt-4 text-xl text-foreground sm:text-2xl">Bergabung Bersama Tim Kami</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Kami membuka kesempatan bagi tenaga teknik, drafter, dan pengawas lapangan untuk
          berkembang bersama CV. AN NASR KONSULTAN.
        </p>
        <Button asChild size="pill" className="mt-6">
          <Link to="/karir">
            Recruitment
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
