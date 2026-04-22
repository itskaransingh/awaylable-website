import Link from "next/link";

export default function SiteFooter({ anchorBase = "" }) {
  const href = (id) => `${anchorBase}#${id}`;

  return (
    <footer className="footer-sarvam">
      <div className="footer-motif-bg">
        <img src="/images/motif.svg" alt="" className="footer-motif-svg" />
      </div>
      <div className="footer-inner-sarvam">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <span className="logo-text" style={{ fontSize: "28px" }}>
              awaylable
              <span className="logo-dot">.</span>
            </span>
            <p className="footer-tagline-text">
              Automated Intelligence. Human Reliability.
            </p>
            <p className="footer-tagline-callout">
              When you&apos;re away, we are available.
            </p>
            <p className="footer-byline">
              A solution by
              <span style={{ color: "#2563EB", fontWeight: "600" }}>
                atomnik
              </span>
            </p>
          </div>
          <div className="footer-col-sarvam">
            <h4>Product</h4>
            <Link href={href("features")}>Platform</Link>
            <Link href={href("channels")}>Channels</Link>
            <Link href={href("pricing")}>Pricing</Link>
            <Link href={href("product")}>Demo</Link>
          </div>
          <div className="footer-col-sarvam">
            <h4>Use Cases</h4>
            <Link href={href("use-case-ecommerce")}>E-commerce</Link>
            <Link href={href("use-case-education")}>Education</Link>
            <Link href={href("use-case-travel")}>Travel</Link>
            <Link href={href("use-case-teams")}>Lean Teams</Link>
          </div>
          <div className="footer-col-sarvam">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <a href="mailto:info@atomnik.com">Contact Us</a>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-bottom-sarvam">
          <p>© 2026 Atomnik. All rights reserved.</p>
          <div className="footer-india-badge">
            <img src="/images/flag-india.svg" alt="Indian Flag" className="india-flag-img" />
            Made in India
          </div>
        </div>
      </div>
    </footer>
  );
}
