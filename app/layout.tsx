import type { Metadata } from "next";
import "./globals.css";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Awaylable",
    template: "%s | Awaylable",
  },
  description:
    "When you're away, we are available. Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Awaylable",
    title: "Awaylable | AI For Your Company",
    description:
      "Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.",
    images: [
      {
        url: absoluteUrl("/images/logo-wordmark.svg"),
        alt: "Awaylable",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Awaylable | AI For Your Company",
    description:
      "Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.",
    images: [absoluteUrl("/images/logo-wordmark.svg")],
  },
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/MatterRegular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MatterMedium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SeasonMix-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SeasonMix-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className="flex flex-col mx-auto min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
