import Link from "next/link";

import PartnerApplicationForm from "@/components/PartnerApplicationForm";
import SiteHeader from "@/components/SiteHeader";

const partnerCopy = {
  agency: {
    label: "Agency partner",
    title: "Apply to become an agency partner",
    intro:
      "Build recurring revenue by bringing Awaylable to clients who need reliable AI support across website, WhatsApp, Instagram, and voice.",
    points: [
      "A partner lead reviews your service model and ideal customer profile.",
      "We align on client onboarding, demos, and enablement resources.",
      "Approved partners get co-selling support and a partner dashboard.",
    ],
  },
  tech: {
    label: "Tech partner",
    title: "Apply to become a tech partner",
    intro:
      "Integrate with Awaylable and help customers connect their stack, knowledge sources, and customer support workflows faster.",
    points: [
      "An AI expert studies your product integration and customer use cases.",
      "We map technical requirements, launch support, and shared success goals.",
      "Approved partners get integration guidance and partner resources.",
    ],
  },
  affiliate: {
    label: "Affiliate partner",
    title: "Apply to become an affiliate partner",
    intro:
      "Share Awaylable with your audience and earn on qualified customers who use AI to stay available around the clock.",
    points: [
      "We review your audience, channel fit, and referral approach.",
      "You receive campaign assets and a unique referral link after approval.",
      "Track qualified referrals and commissions from your partner dashboard.",
    ],
  },
};

export default function PartnerApplicationPage({ type }) {
  const partner = partnerCopy[type] ?? partnerCopy.agency;

  return (
    <>
      <SiteHeader anchorBase="/" />
      <main className="partner-form-page">
        <section className="partner-form-shell">
          <div className="partner-form-copy">
            <p className="section-eyebrow">Partner application</p>
            <h1 className="partner-form-title">{partner.title}</h1>
            <p className="partner-form-intro">{partner.intro}</p>

            <div className="partner-expectations">
              <h2>What to expect:</h2>
              <ul>
                {partner.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <PartnerApplicationForm partnerLabel={partner.label} />
        </section>
        <Link className="partner-back-link" href="/partners">
          Back to partners
        </Link>
      </main>
    </>
  );
}
