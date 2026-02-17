import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "PJ Group — Vše pro vaše bydlení pod jednou střechou",
  description:
    "Realitní služby, interiérový design, rekonstrukce a správa nemovitostí v Karlovarském kraji.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
