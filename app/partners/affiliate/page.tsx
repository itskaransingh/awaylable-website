import type { Metadata } from "next";

import PartnerApplicationPage from "@/components/PartnerApplicationPage";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Affiliate Partner Application",
  description: "Apply to become an Awaylable affiliate partner.",
  alternates: {
    canonical: "/partners/affiliate",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/partners/affiliate"),
    title: "Affiliate Partner Application | Awaylable",
    description: "Apply to become an Awaylable affiliate partner.",
  },
};

export const dynamic = "force-static";

export default function AffiliatePartnerPage() {
  return <PartnerApplicationPage type="affiliate" />;
}
