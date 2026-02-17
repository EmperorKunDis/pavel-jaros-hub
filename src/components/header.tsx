"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/PJ_Group_logo.svg"
            alt="PJ Group"
            width={140}
            height={46}
            className="h-8 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors tracking-wide uppercase"
          >
            {t("about")}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors tracking-wide uppercase"
          >
            {t("contact")}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
