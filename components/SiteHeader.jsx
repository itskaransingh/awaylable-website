"use client";

import Link from "next/link";
import { useState } from "react";
import NavMoreMenu from "@/components/NavMoreMenu";

export default function SiteHeader({ anchorBase = "", caseStudiesHref = "/case-studies" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const href = (id) => `${anchorBase}#${id}`;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
              <button
                className={`hamburger${isMobileMenuOpen ? " active" : ""}`}
                type="button"
                aria-label="Toggle menu"
                aria-controls="mobileMenu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
            <div
              className={`mobile-menu${isMobileMenuOpen ? " active" : ""}`}
              id="mobileMenu"
            >
              <Link href={caseStudiesHref} onClick={closeMobileMenu}>Case Studies</Link>
              <Link href="/partners" onClick={closeMobileMenu}>Partners</Link>
              <Link href={href("channels")} onClick={closeMobileMenu}>Channels</Link>
              <Link href={href("features")} onClick={closeMobileMenu}>Platform</Link>
              <Link href={href("use-cases")} onClick={closeMobileMenu}>Use Cases</Link>
              <Link href={href("pricing")} onClick={closeMobileMenu}>Pricing</Link>
              <Link
                href={href("cta")}
                className="btn-sarvam-primary"
                onClick={closeMobileMenu}
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
