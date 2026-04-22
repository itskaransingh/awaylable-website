import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Awaylable Terms of Service for platform usage, responsibilities, limitations, and termination policies.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/terms-of-service"),
    title: "Terms of Service | Awaylable",
    description:
      "Awaylable Terms of Service for platform usage, responsibilities, limitations, and termination policies.",
  },
};


export const dynamic = "force-static";

export default function TermsOfServicePage() {
  return (
    <main
      className="main-content"
      style={{ padding: "120px 20px 80px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1 className="section-h2" style={{ marginBottom: "12px" }}>
        Terms of Service
      </h1>
      <p className="section-desc" style={{ marginBottom: "24px" }}>
        <strong>Effective Date:</strong> April 8, 2026
      </p>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        These Terms govern use of Awaylable&apos;s 24x7 AI customer support
        platform. By using our website or services, you agree to these Terms.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Service Scope
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        Awaylable offers AI-driven support automation for customer conversations
        across supported channels. Features and limits depend on your selected
        plan.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Customer Responsibilities
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        You are responsible for the accuracy and legality of content, data
        sources, and workflows configured in your account. You must not use the
        platform for unlawful, abusive, or harmful activity.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Availability &amp; Support
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        We aim to provide reliable 24x7 platform availability, but uninterrupted
        service cannot be guaranteed. Maintenance windows, third-party outages,
        or force majeure events may impact uptime.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Limitation of Liability
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        To the maximum extent permitted by law, Awaylable is not liable for
        indirect, incidental, or consequential damages arising from service use.
        Total liability is limited to fees paid for the applicable service
        period.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>Termination</h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        Either party may terminate service per contract terms. We may suspend
        access for violations of these Terms or legal requirements.
      </p>
      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>Contact</h2>
      <p className="section-desc" style={{ marginBottom: "40px" }}>
        For legal or service questions, contact us at{" "}
        <a href="mailto:info@atomnik.com">info@atomnik.com</a>.
      </p>
      <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="/about">About</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/">Back to Home</a>
      </nav>
    </main>
  );
}