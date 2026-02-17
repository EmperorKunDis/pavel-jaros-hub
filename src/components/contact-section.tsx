"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold mb-12 text-center"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-1">{t("name")}</h3>
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-8">
            {t("role")}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
            <a
              href={`tel:${t("phone").replace(/\s/g, "")}`}
              className="flex items-center gap-3 hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <Phone className="w-4 h-4 group-hover:text-accent-foreground transition-colors" />
              </div>
              <span>{t("phone")}</span>
            </a>

            <a
              href={`mailto:${t("email")}`}
              className="flex items-center gap-3 hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <Mail className="w-4 h-4 group-hover:text-accent-foreground transition-colors" />
              </div>
              <span>{t("email")}</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span>{t("region")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
