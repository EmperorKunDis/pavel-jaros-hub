"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="px-6 py-24 bg-card/50">
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

        <div className="space-y-6">
          {(["text1", "text2", "text3"] as const).map((key, index) => (
            <motion.p
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t(key)}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
