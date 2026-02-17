import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "../../../i18n/routing";
import { notFound } from "next/navigation";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import ClientBody from "../ClientBody";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    authors: [{ name: "Pavel Jaroš" }],
    creator: "PJ Group",
    publisher: "PJ Group",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://pjgroup.cz"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        cs: "/cs",
        en: "/en",
        de: "/de",
        pl: "/pl",
        sk: "/sk",
        ru: "/ru",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://pjgroup.cz/${locale}`,
      siteName: "PJ Group",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons: {
      icon: "/images/PJ_Group_symbol.svg",
      apple: "/images/PJ_Group_symbol.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PJ Group",
    url: `https://pjgroup.cz/${locale}`,
    logo: "https://pjgroup.cz/images/PJ_Group_logo.svg",
    description:
      "Skupina firem Pavla Jaroše — realitní služby, interiérový design, rekonstrukce a správa nemovitostí v Karlovarském kraji.",
    founder: {
      "@type": "Person",
      name: "Pavel Jaroš",
      telephone: "+420777558730",
      email: "pavel.jaros@kwcz.cz",
    },
    taxID: "CZ10846671",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaprova 52/6",
      addressLocality: "Praha 1",
      addressCountry: "CZ",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Karlovarský kraj",
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "PJ Reality",
        url: "https://pjreality.cz",
        description: "Realitní služby — prodej, pronájem a investice.",
      },
      {
        "@type": "Organization",
        name: "PJ Rekonstrukce",
        url: "https://pjreko.cz",
        description: "Stavby a rekonstrukce na klíč.",
      },
      {
        "@type": "Organization",
        name: "PJ Design",
        url: "https://pjdesign.cz",
        description: "Interiérový design a návrhy.",
      },
      {
        "@type": "Organization",
        name: "PJ Správa",
        url: "https://pjsprava.cz",
        description: "Správa a údržba nemovitostí.",
      },
    ],
  };

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ErrorBoundary>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <ClientBody>{children}</ClientBody>
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
