import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Awaylable as an agency, technology, or affiliate partner.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/partners"),
    title: "Partners | Awaylable",
    description:
      "Partner with Awaylable as an agency, technology, or affiliate partner.",
  },
};

export const dynamic = "force-static";

const benefits = [
  {
    icon: "path",
    title: "No limits on earnings",
    body: "Earn as your referrals and client accounts grow. We keep the program simple, transparent, and built for repeatable revenue.",
  },
  {
    icon: "bolt",
    title: "Trending AI support platform",
    body: "Awaylable helps businesses automate support and pre-sales across website, WhatsApp, Instagram, and voice from one knowledge base.",
  },
  {
    icon: "spark",
    title: "Superior product",
    body: "Give customers a practical AI agent for instant answers, lead capture, multilingual support, escalation, and channel automation.",
  },
];

const partnerTypes = [
  {
    title: "Agency partnership",
    body: "Become part of our agency partner program to enhance your services. Gain access to resources and support tailored to help you grow.",
    cta: "Become an agency partner",
    href: "/partners/agency",
  },
  {
    title: "Tech partnership",
    body: "Become a technology partner and deliver more value to your customers by integrating your software with Awaylable.",
    cta: "Become a tech partner",
    href: "/partners/tech",
  },
  {
    title: "Affiliate partnership",
    body: "Earn revenue through referrals. Market Awaylable as an affiliate and get commission for every converted customer.",
    cta: "Become an affiliate partner",
    href: "/partners/affiliate",
  },
];

function BenefitIcon({ type }: { type: string }) {
  if (type === "bolt") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 5 14h6l-1 8 9-13h-6l1-7Z" />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 14.2 9l5.8 2-5.8 2L12 18.5 9.8 13 4 11l5.8-2L12 3.5Z" />
        <path d="M19 15.5 20 18l2.5 1L20 20l-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 13.5 9 18.5 20 7.5" />
      <path d="M5 6h6" />
      <path d="M5 10h3" />
    </svg>
  );
}

export default function PartnersPage() {
  return (
    <>
      <SiteHeader anchorBase="/" />
      <main className="partners-page">
        <section className="partners-hero">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            width={1200}
            height={640}
            className="partners-hero-gradient"
            style={{ height: "auto" }}
            priority
          />
          <div className="partner-hero-inner">
            <p className="hero-pill partners-pill">
              <span className="pill-shimmer" aria-hidden="true" />
              <span className="pill-text">Awaylable partner program</span>
            </p>
            <h1 className="hero-h1">
              Partner with{" "}
              <span className="partner-hero-logo">
                awaylable
                <span className="partner-hero-dot" aria-hidden="true" />
              </span>
            </h1>
            <p className="hero-sub">
              Grow with India&apos;s AI customer support platform for teams that
              need to stay available across every customer channel.
            </p>
          </div>
        </section>

        <section className="partner-band">
          <div className="section-inner">
            <div className="partner-soft-heading">
              <h2>Why partner with Awaylable?</h2>
            </div>
            <div className="partner-benefit-grid">
              {benefits.map((benefit) => (
                <article className="partner-benefit-card" key={benefit.title}>
                  <span className="partner-icon">
                    <BenefitIcon type={benefit.icon} />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partner-options-section">
          <div className="section-inner">
            <div className="section-header-center">
              <p className="section-eyebrow">Partner paths</p>
              <h2 className="section-h2">
                How would you like to partner with us?
              </h2>
            </div>
            <div className="partner-card-grid">
              {partnerTypes.map((partner) => (
                <article className="partner-type-card" key={partner.title}>
                  <div className="partner-card-body">
                    <h3>{partner.title}</h3>
                    <p>{partner.body}</p>
                    <Link
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner-card-cta"
                    >
                      {partner.cta}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partner-steps-section">
          <div className="partner-steps-inner">
            <div className="partner-steps-callout">
              <h2>Get started in just 3 steps</h2>
              <div className="partner-commission-card">
                <p>Earn recurring commission as an Awaylable partner</p>
                <Link href="/partners/affiliate" target="_blank" rel="noopener noreferrer">
                  Join now
                </Link>
              </div>
            </div>
            <ol className="partner-timeline">
              <li>
                <span>1</span>
                <div>
                  <h3>Join now</h3>
                  <p>Fill in your details and submit your partner application.</p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h3>Get your partner dashboard and referral link</h3>
                  <p>
                    Once approved, get access to resources, support, and a unique
                    referral link.
                  </p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h3>Share and earn</h3>
                  <p>
                    Share Awaylable with your audience and track qualified
                    referrals from your dashboard.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter anchorBase="/" />
    </>
  );
}
