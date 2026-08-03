import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { perusahaan } from "@/data/perusahaan";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${perusahaan.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="fixed bottom-6 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)]"
    >
      <MessageCircle className="size-6" />
    </motion.a>
  );
}