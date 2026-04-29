import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Awaylable Privacy Policy covering data collection, usage, security, retention, and your rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/privacy-policy"),
    title: "Privacy Policy | Awaylable",
    description:
      "Awaylable Privacy Policy covering data collection, usage, security, retention, and your rights.",
  },
};

export const dynamic = "force-static";

export default function PrivacyPolicyPage() {
  return (
    <main
      className="main-content"
      style={{ padding: "120px 20px 80px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1 className="section-h2" style={{ marginBottom: "12px" }}>
        Privacy Policy
      </h1>
      <p className="section-desc" style={{ marginBottom: "24px" }}>
        <strong>Effective Date:</strong> April 8, 2026
      </p>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        Awaylable provides AI-powered 24x7 customer support services across
        website chat, WhatsApp, Instagram, and voice channels. This policy
        explains how we collect, use, and protect personal information when you
        use our website and platform.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Information We Collect
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        We may collect contact details (name, email, phone), business
        information, support conversation data, usage analytics, and technical
        logs required to operate and secure the platform.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        How We Use Information
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        We use data to deliver customer support automation, improve AI response
        quality, monitor service reliability, provide onboarding and support,
        and comply with legal obligations.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Data Security &amp; Retention
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        We apply reasonable administrative and technical safeguards to protect
        information from unauthorized access. Data is retained only as long as
        needed for service delivery, legal compliance, and contractual
        obligations.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Your Rights
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        You may request access, correction, or deletion of personal data by
        contacting us at <a href="mailto:info@atomnik.com">info@atomnik.com</a>.
        We will respond within a reasonable time under applicable law.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>Contact</h2>
      <p className="section-desc" style={{ marginBottom: "40px" }}>
        If you have privacy questions, please contact us at{" "}
        <a href="mailto:info@atomnik.com">info@atomnik.com</a>.
      </p>
      <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="/about">About</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/data-deletion">Data Deletion Policy</a>
        <Link href="/">Back to Home</Link>
      </nav>
    </main>
  );
}
