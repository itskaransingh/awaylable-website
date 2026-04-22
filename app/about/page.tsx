import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Awaylable, a 24x7 AI customer support platform.",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <main
      className="main-content"
      style={{ padding: "120px 20px 80px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1 className="section-h2" style={{ marginBottom: "12px" }}>
        About Awaylable
      </h1>
      <p className="section-desc" style={{ marginBottom: "24px" }}>
        Awaylable is a 24x7 AI customer support platform built for businesses
        that cannot afford to miss a customer conversation. We help teams
        automate responses, qualify leads, and route complex issues to humans
        with full context.
      </p>
      <p className="section-desc" style={{ marginBottom: "24px" }}>
        Our platform unifies website chat, WhatsApp, Instagram, and voice
        support into one AI-powered experience. From product questions and order
        tracking to admissions and bookings, Awaylable keeps support available
        when your team is offline.
      </p>
      <p className="section-desc" style={{ marginBottom: "40px" }}>
        Awaylable is designed for speed and simplicity: no-code setup, fast
        deployment, multilingual conversations, and support experiences that
        feel reliable and human-friendly at scale.
      </p>
      <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="/#cta">Book a Demo</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/">Back to Home</a>
      </nav>
    </main>
  );
}