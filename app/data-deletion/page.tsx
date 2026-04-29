import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion Policy",
  description:
    "Awaylable Data Deletion Policy — learn how to request deletion of your account and organisation data.",
  alternates: {
    canonical: "/data-deletion",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/data-deletion"),
    title: "Data Deletion Policy | Awaylable",
    description:
      "Awaylable Data Deletion Policy — learn how to request deletion of your account and organisation data.",
  },
};

export const dynamic = "force-static";

export default function DataDeletionPage() {
  return (
    <main
      className="main-content"
      style={{ padding: "120px 20px 80px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1 className="section-h2" style={{ marginBottom: "12px" }}>
        Data Deletion Policy
      </h1>
      <p className="section-desc" style={{ marginBottom: "24px" }}>
        <strong>Effective Date:</strong> April 29, 2026
      </p>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        At Awaylable, we respect your right to control your data. This page
        explains how you can request the deletion of your organisation&apos;s
        data from our platform.
      </p>

      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        What Data Can Be Deleted
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        Upon a verified deletion request we will permanently remove your
        organisation&apos;s account data, including configuration, conversation
        history, and associated personal information stored on our platform,
        subject to any legal or contractual retention obligations.
      </p>

      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        How to Request Data Deletion
      </h2>
      <p className="section-desc" style={{ marginBottom: "10px" }}>
        To submit a data deletion request, please send an email to{" "}
        <a href="mailto:info@atomnik.com">info@atomnik.com</a> from the email
        address associated with your Awaylable account and include the
        following details:
      </p>
      <ol
        className="section-desc"
        style={{ marginBottom: "18px", paddingLeft: "24px" }}
      >
        <li style={{ marginBottom: "8px" }}>
          <strong>Subject line:</strong> Data Deletion Request
        </li>
        <li style={{ marginBottom: "8px" }}>
          <strong>Organisation ID:</strong> Your unique Organisation ID, which
          can be found in your Awaylable dashboard under{" "}
          <em>Profile &rarr; Organisation Settings</em>.
        </li>
        <li style={{ marginBottom: "8px" }}>
          <strong>Reason (optional):</strong> A brief description of why you
          are requesting deletion.
        </li>
      </ol>

      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Finding Your Organisation ID
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        Log in to your Awaylable dashboard and navigate to your{" "}
        <strong>Profile</strong>. Your Organisation ID is displayed in the
        profile section. Copy and include it in your deletion request email so
        we can locate and delete the correct account data.
      </p>

      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Processing Time
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        We will acknowledge your request within 3 business days and complete
        the deletion within 30 days, unless we are required to retain certain
        data for legal, regulatory, or contractual reasons. We will notify you
        once the deletion is complete.
      </p>

      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>
        Retention Exceptions
      </h2>
      <p className="section-desc" style={{ marginBottom: "18px" }}>
        Some data may be retained beyond the deletion period where required by
        applicable law, ongoing contractual obligations, fraud prevention, or
        dispute resolution. Retained data will not be used for any other
        purpose.
      </p>

      <h2 style={{ fontSize: "24px", margin: "30px 0 10px" }}>Contact</h2>
      <p className="section-desc" style={{ marginBottom: "40px" }}>
        If you have questions about data deletion or your privacy rights,
        please contact us at{" "}
        <a href="mailto:info@atomnik.com">info@atomnik.com</a>.
      </p>

      <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="/about">About</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <Link href="/">Back to Home</Link>
      </nav>
    </main>
  );
}
