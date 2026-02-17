"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

export function CookieConsent() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-2xl shadow-black/30">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("message")}
              </p>
              <button
                type="button"
                onClick={reject}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                aria-label="Zavřít"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                type="button"
                onClick={accept}
                className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                {t("accept")}
              </button>
              <button
                type="button"
                onClick={reject}
                className="px-4 py-2 border border-border text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
              >
                {t("reject")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
