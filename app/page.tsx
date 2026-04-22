import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import { absoluteUrl, siteUrl } from "@/lib/seo";

const HOME_DESCRIPTION =
  "When you're away, we are available. Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.";

export const metadata: Metadata = {
  title: "The AI Agent That Knows Your Business",
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: "Awaylable | AI For Your Company",
    description: HOME_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Awaylable | AI For Your Company",
    description: HOME_DESCRIPTION,
  },
};

export const dynamic = "force-static";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "Awaylable",
      url: siteUrl,
      email: "info@atomnik.com",
      logo: absoluteUrl("/images/logo-monogram.svg"),
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: siteUrl,
      name: "Awaylable",
      description: HOME_DESCRIPTION,
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <HomePageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
