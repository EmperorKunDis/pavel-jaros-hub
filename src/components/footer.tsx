"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/images/PJ_Group_symbol.svg"
              alt="PJ Group"
              width={32}
              height={32}
              className="h-6 w-auto brightness-0 invert opacity-60"
            />
            <span className="text-sm text-muted-foreground">
              &copy; {currentYear} PJ Group. {t("rights")}
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button
              type="button"
              className="hover:text-accent transition-colors"
            >
              {t("privacy")}
            </button>
            <button
              type="button"
              className="hover:text-accent transition-colors"
            >
              {t("cookies")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
