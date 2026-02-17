"use client";

import { useTranslations } from "next-intl";
import { DivisionCard } from "./division-card";

const divisions = [
  {
    id: "reality",
    image: "/images/pavel-reality.png",
    href: "https://pjreality.cz",
  },
  {
    id: "reko",
    image: "/images/pavel-rekonstrukce.png",
    href: "https://pjreko.cz",
  },
  {
    id: "design",
    image: "/images/pavel-design.png",
    href: "https://pjdesign.cz",
  },
  {
    id: "sprava",
    image: "/images/pavel-sprava.png",
    href: "https://pjsprava.cz",
  },
];

export function BentoGrid() {
  const t = useTranslations("divisions");

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Bento Grid: 2 tall + 2 shorter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Top row: Reality (large) + Reko (large) */}
          <DivisionCard
            title={t("reality.title")}
            subtitle={t("reality.subtitle")}
            description={t("reality.description")}
            image={divisions[0].image}
            href={divisions[0].href}
            index={0}
            className="min-h-[400px] md:min-h-[500px]"
          />
          <DivisionCard
            title={t("reko.title")}
            subtitle={t("reko.subtitle")}
            description={t("reko.description")}
            image={divisions[1].image}
            href={divisions[1].href}
            index={1}
            className="min-h-[400px] md:min-h-[500px]"
          />
          {/* Bottom row: Design (wide) + Správa */}
          <DivisionCard
            title={t("design.title")}
            subtitle={t("design.subtitle")}
            description={t("design.description")}
            image={divisions[2].image}
            href={divisions[2].href}
            index={2}
            className="min-h-[350px] md:min-h-[400px]"
          />
          <DivisionCard
            title={t("sprava.title")}
            subtitle={t("sprava.subtitle")}
            description={t("sprava.description")}
            image={divisions[3].image}
            href={divisions[3].href}
            index={3}
            className="min-h-[350px] md:min-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
