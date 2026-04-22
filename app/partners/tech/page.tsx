import type { Metadata } from "next";

import PartnerApplicationPage from "@/components/PartnerApplicationPage";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tech Partner Application",
  description: "Apply to become an Awaylable technology partner.",
  alternates: {
    canonical: "/partners/tech",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/partners/tech"),
    title: "Tech Partner Application | Awaylable",
    description: "Apply to become an Awaylable technology partner.",
  },
};

export const dynamic = "force-static";

export default function TechPartnerPage() {
  return <PartnerApplicationPage type="tech" />;
}
