import Link from "next/link";
import NavMoreMenu from "@/components/NavMoreMenu";

export default function SiteHeader({ anchorBase = "", caseStudiesHref = "/case-studies" }) {
  const href = (id) => `${anchorBase}#${id}`;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-glass">
          <nav className="nav-desktop">
            <div className="nav-inner">
              <Link href="/" className="nav-logo">
                <span className="logo-text">
                  awaylable
                  <span className="logo-dot">.</span>
                </span>
              </Link>
              <div className="nav-links">
                <Link href={caseStudiesHref} className="nav-link">
                  <span>Case Studies</span>
                </Link>
                <Link href="/partners" className="nav-link">
                  <span>Partners</span>
                </Link>
                <Link href={href("channels")} className="nav-link">
                  <span>Channels</span>
                </Link>
                <div className="nav-more">
                  <NavMoreMenu
                    items={[
                      { href: href("features"), label: "Platform" },
                      { href: href("use-cases"), label: "Use Cases" },
                      { href: href("pricing"), label: "Pricing" },
                    ]}
                  />
                </div>
              </div>
              <div className="nav-ctas">
                <Link href={href("cta")} className="btn-sarvam-primary">
                  <span className="btn-gradient-overlay" />
                  <span className="btn-label">Experience Awaylable</span>
                </Link>
                <Link href={href("pricing")} className="btn-sarvam-secondary">
                  <span className="btn-gradient-overlay-light" />
                  <span className="btn-label">Talk to Sales</span>
                </Link>
              </div>
            </div>
          </nav>
          <div className="nav-mobile">
            <div className="nav-mobile-bar">
              <Link href="/" className="nav-logo">
                <span className="logo-text" style={{ fontSize: "18px" }}>
                  awaylable
                  <span className="logo-dot">.</span>
                </span>
              </Link>
              <button className="hamburger" id="hamburgerBtn" aria-label="Toggle menu">
                <span />
                <span />
                <span />
              </button>
            </div>
            <div className="mobile-menu" id="mobileMenu">
              <Link href={caseStudiesHref}>Case Studies</Link>
              <Link href="/partners">Partners</Link>
              <Link href={href("channels")}>Channels</Link>
              <Link href={href("features")}>Platform</Link>
              <Link href={href("use-cases")}>Use Cases</Link>
              <Link href={href("pricing")}>Pricing</Link>
              <Link
                href={href("cta")}
                className="btn-sarvam-primary"
                style={{
                  textAlign: "center",
                  marginTop: "12px",
                  justifyContent: "center",
                }}
              >
                <span className="btn-label">Experience Awaylable</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
