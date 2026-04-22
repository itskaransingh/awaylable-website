import type { Metadata } from "next";

import PartnerApplicationPage from "@/components/PartnerApplicationPage";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agency Partner Application",
  description: "Apply to become an Awaylable agency partner.",
  alternates: {
    canonical: "/partners/agency",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/partners/agency"),
    title: "Agency Partner Application | Awaylable",
    description: "Apply to become an Awaylable agency partner.",
  },
};

export const dynamic = "force-static";

export default function AgencyPartnerPage() {
  return <PartnerApplicationPage type="agency" />;
}
