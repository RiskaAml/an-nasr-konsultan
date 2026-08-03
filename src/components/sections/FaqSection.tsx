import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { faq } from "@/data/perusahaan";

export function FaqSection() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          judul="Pertanyaan yang sering diajukan"
          deskripsi="Belum menemukan jawaban yang Anda cari? Silakan hubungi kami langsung melalui halaman kontak."
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((f, i) => (
              <AccordionItem
                key={f.tanya}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-[var(--shadow-soft)]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {f.tanya}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {f.jawab}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}