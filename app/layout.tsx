import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Awaylable",
    template: "%s | Awaylable",
  },
  description:
    "When you're away, we are available. Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.",
  openGraph: {
    type: "website",
    title: "Awaylable | AI For Your Company",
    description:
      "Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.",
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
