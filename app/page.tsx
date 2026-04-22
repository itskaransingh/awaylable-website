import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Awaylable | The AI Agent That Knows Your Business",
  description:
    "When you're away, we are available. Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.",
  openGraph: {
    type: "website",
    title: "Awaylable | AI For Your Company",
    description:
      "Unified customer support and pre-sales automation for Website, WhatsApp, Instagram, and Voice.",
  },
};

export const dynamic = "force-static";

export default function Home() {
  return (
    <HomePageClient />
  );
}
