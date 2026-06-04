"use client";

import Link from "next/link";
import { useState } from "react";
import NavbarDropdown from "@/components/NavbarDropdown";

export default function SiteHeader({ anchorBase = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const href = (id) => `${anchorBase}#${id}`;
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
                <Link href="/partners" className="nav-link">
                  <span>Partners</span>
                </Link>
                <Link href={href("channels")} className="nav-link">
                  <span>Channels</span>
                </Link>
                
                <div className="nav-more">
                  <NavbarDropdown
  title="More"
  items={[
    { label: "Platform", href: "/#features" },
    { label: "Use Cases", href: "/#use-cases" },
    { label: "Pricing", href: "/#pricing" },
  ]}
/>
                </div>

                <div className="nav-more">
                  <NavbarDropdown
                    title="Resources"
                    items={[
                      { label: "Articles", href: "/articles" },
                      { label: "Case Studies", href: "/case-studies" },
                      { label: "Comparison Board", href: "/comparison-board" },
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
              <Link href="/partners" onClick={closeMobileMenu}>Partners</Link>
              <Link href={href("channels")} onClick={closeMobileMenu}>Channels</Link>
              <Link href="/articles" onClick={closeMobileMenu}>Articles</Link>
              <Link href="/case-studies" onClick={closeMobileMenu}>Case Studies</Link>
              <Link href="/comparison-board" onClick={closeMobileMenu}>Comparison Board</Link>
              <Link href="#features" onClick={closeMobileMenu}>Platform</Link>
              <Link href="#features" onClick={closeMobileMenu}>Use Cases</Link>
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