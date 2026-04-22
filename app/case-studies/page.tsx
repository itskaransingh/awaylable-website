import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SiteInteractions from "@/components/SiteInteractions";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how Awaylable helps brands answer faster, capture more leads, and keep support running after hours.",
};

export const dynamic = "force-static";

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader anchorBase="/" caseStudiesHref="/case-studies" />
      <SiteInteractions />
      <main className="case-studies-index">
        <section className="case-studies-index-inner" data-section-reveal>
          <div className="section-header-center">
            <p className="section-eyebrow">Case Studies</p>
            <h1 className="section-h2">
              Real businesses,
              <br />
              real conversations.
            </h1>
            <p className="section-desc">
              Explore how Awaylable helps brands answer faster, capture more
              leads, and keep support running after hours.
            </p>
          </div>

          <Link
            href="/case-studies/visha-world"
            target="_blank"
            rel="noreferrer"
            className="simple-case-card"
          >
            <div className="simple-case-logo-wrap">
              <img
                src="/assets/visha-world-logo.png"
                alt="Visha World logo"
                className="simple-case-logo"
              />
            </div>
            <div className="simple-case-body">
              <p className="simple-case-kicker">Live case study</p>
              <h2>Visha World</h2>
              <p>
                How a 5,000+ SKU IoT and robotics catalogue moved from a single
                overflowing inbox to 24/7 automated support.
              </p>
              <span>Read full story</span>
            </div>
          </Link>
        </section>
      </main>
      <SiteFooter anchorBase="/" />
    </>
  );
}
