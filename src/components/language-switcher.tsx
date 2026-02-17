"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

const locales = [
  { code: "cs", label: "CZ" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "pl", label: "PL" },
  { code: "sk", label: "SK" },
  { code: "ru", label: "RU" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value });
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-transparent text-sm font-medium text-muted-foreground hover:text-accent cursor-pointer border border-border/50 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-accent"
      aria-label="Změnit jazyk"
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code} className="bg-card text-foreground">
          {l.label}
        </option>
      ))}
    </select>
  );
}
