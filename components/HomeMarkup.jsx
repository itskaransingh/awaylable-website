import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HomeMarkup() {
  return (
    <>
      <SiteHeader anchorBase="" />
      <main className="main-content">
        <div className="sections-wrapper">
          <section className="hero-section">
            <div className="hero-top-fade" />
            <img src="/images/hero-gradient.svg" alt="" className="hero-bg-gradient" />
            <div className="hero-radial-glow" />
            <div className="hero-content-area">
              <div className="hero-inner-wrap">
                <div className="hero-stack">
                  <picture>
                    <source media="(max-width: 767px)" srcSet="/images/motif-blue.svg" />
                    <img data-animate="motif" src="/images/motif.svg" alt="" role="presentation" className="hero-motif-img" />
                  </picture>
                  <div className="hero-pill" data-section-reveal>
                    <span className="pill-shimmer" aria-hidden="true" />
                    <p className="pill-text">
                      AI-Powered Customer Intelligence from India
                    </p>
                  </div>
                  <div className="hero-text-block">
                    <h1 className="hero-h1">
                      When you're away,
                      <br />
                      we are
                      <span className="hero-accent" style={{
                        paddingLeft: "12px"
                      }}>
                        available.
                      </span>
                    </h1>
                    <p className="hero-sub">
                      Unified customer support and pre-sales automation
                      <br className="hide-mobile" />
                      for Website, WhatsApp, Instagram, and Voice.
                    </p>
                  </div>
                  <div className="hero-cta-row">
                    <a href="#cta">
                      <button className="btn-sarvam-primary btn-lg">
                        <span className="btn-gradient-overlay" />
                        <span className="btn-label">
                          Experience Awaylable
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="builds-with-bar">
              <p className="builds-with-label">
                India builds with Awaylable
              </p>
              <div className="logo-scroll-track">
                <div className="logo-scroll-mask">
                  <div className="logo-items">
                    <span className="logo-item">
                      E-Commerce
                    </span>
                    <span className="logo-item">
                      Shopify
                    </span>
                    <span className="logo-item">
                      Education
                    </span>
                    <span className="logo-item">
                      Travel
                    </span>
                    <span className="logo-item">
                      Lean Teams
                    </span>
                    <span className="logo-item">
                      Healthcare
                    </span>
                    <span className="logo-item">
                      SaaS
                    </span>
                    <span className="logo-item">
                      D2C Brands
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
<section className="content-section" data-section-reveal id="features">
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  The Awaylable Platform
                </p>
                <h2 className="section-h2">
                  India's full-stack
                  <br />
                  AI support platform
                </h2>
              </div>
              <div className="three-pillars">
                <div className="pillar-item" data-section-reveal>
                  <div className="pillar-motif-wrap">
                    <img src="/11.png" alt="" className="pillar-motif" />
                  </div>
                  <h3 className="pillar-title">
                    Unified by design
                  </h3>
                  <p className="pillar-desc">
                    One knowledge base powers Website, WhatsApp, Instagram, and Voice. Your business truth, delivered consistently across every channel.
                  </p>
                </div>
                <div className="pillar-item" data-section-reveal>
                  <div className="pillar-motif-wrap">
                    <img src="/10.png" alt="" className="pillar-motif" />
                  </div>
                  <h3 className="pillar-title">
                    Zero-setup intelligence
                  </h3>
                  <p className="pillar-desc">
                    Auto-ingest your website and docs. No scripts, no decision trees. Your existing content becomes the bot's working brain in minutes.
                  </p>
                </div>
                <div className="pillar-item" data-section-reveal>
                  <div className="pillar-motif-wrap">
                    <img src="/12.png" alt="" className="pillar-motif" />
                  </div>
                  <h3 className="pillar-title">
                    Human at the core
                  </h3>
                  <p className="pillar-desc">
                    AI handles the routine; humans handle the nuance. Seamless escalation with full conversation history. Customers never repeat themselves.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="content-section" data-section-reveal id="product">
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  See it in action
                </p>
                <h2 className="section-h2">
                  Zero to live in 3 steps.
                </h2>
                <p className="section-desc">
                  No scripts. No decision trees. Just paste, ingest, and go.
                </p>
              </div>
              <div className="demo-steps-bar">
                <div className="demo-step-pill active" data-step="1">
                  <span className="demo-step-num">
                    1
                  </span>
                  Paste URL
                </div>
                <div className="demo-step-line">
                  <div className="demo-step-line-fill" />
                </div>
                <div className="demo-step-pill" data-step="2">
                  <span className="demo-step-num">
                    2
                  </span>
                  Auto-Ingest
                </div>
                <div className="demo-step-line">
                  <div className="demo-step-line-fill" />
                </div>
                <div className="demo-step-pill" data-step="3">
                  <span className="demo-step-num">
                    3
                  </span>
                  Live Chat
                </div>
              </div>
              <div className="demo-window" id="demoWindow">
                <div className="demo-window-bar">
                  <div className="demo-window-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="demo-window-title">
                    awaylable dashboard
                  </div>
                  <div style={{ width: "52px" }} />
                </div>
                <div className="demo-scene active" id="scene-1">
                  <div className="demo-scene-inner scene-url">
                    <div className="scene-url-label">
                      Add a knowledge source
                    </div>
                    <div className="scene-url-input-wrap">
                      <div className="scene-url-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#999" strokeWidth="1.5" />
                          <path d="M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z" stroke="#999" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <span className="scene-url-text" id="urlTypeTarget" />
                      <span className="scene-url-cursor" />
                    </div>
                    <button className="scene-url-btn" id="scanBtn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Scan
                    </button>
                  </div>
                </div>
                <div className="demo-scene" id="scene-2">
                  <div className="demo-scene-inner scene-ingest">
                    <div className="scene-ingest-header">
                      <div className="scene-ingest-title">
                        Knowledge Sources
                      </div>
                      <div className="scene-ingest-status" id="ingestStatus">
                        Scanning...
                      </div>
                    </div>
                    <div className="scene-ingest-progress">
                      <div className="scene-ingest-bar" id="ingestBar" />
                    </div>
                    <div className="scene-ingest-pages" id="ingestPages" />
                  </div>
                </div>
                <div className="demo-scene" id="scene-3">
                  <div className="demo-scene-inner scene-chat">
                    <div className="scene-chat-sidebar">
                      <div className="scene-chat-brand">
                        <span className="demo-brand-dot" />
                        Awaylable
                      </div>
                      <div className="scene-chat-nav active">
                        Inbox
                        <span className="scene-chat-badge">
                          3
                        </span>
                      </div>
                      <div className="scene-chat-nav">
                        Live
                      </div>
                      <div className="scene-chat-nav">
                        Leads
                      </div>
                      <div className="scene-chat-nav">
                        Knowledge Base
                      </div>
                    </div>
                    <div className="scene-chat-main">
                      <div className="scene-chat-header">
                        <span>
                          Live Chat
                        </span>
                        <span className="demo-live-dot">
                          <span className="dot-pulse" />
                          Live
                        </span>
                      </div>
                      <div className="scene-chat-messages" id="chatMessages" />
                      <div className="scene-chat-input">
                        <span>
                          Type a message...
                        </span>
                        <div className="demo-send-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="demo-replay-wrap" id="replayWrap">
                <button className="demo-replay-btn" id="replayBtn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M1 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.51 15a9 9 0 105.64-8.36L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Replay Demo
                </button>
              </div>
            </div>
          </section>
          <section className="content-section" data-section-reveal id="channels">
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  Omnichannel deployment
                </p>
                <h2 className="section-h2">
                  One brain. Every channel.
                </h2>
                <p className="section-desc">
                  Deploy a single, unified AI across your website, WhatsApp, Instagram, and phone line.
                </p>
              </div>
              <div className="deploy-grid">
                <div className="deploy-card" data-section-reveal>
                  <div className="deploy-card-glow" style={{ background: "#F0F3FA", boxShadow: "inset 0 0 50px #A5BBFC" }} />
                  <div className="deploy-card-content">
                    <div className="deploy-icon-circle" style={{ background: "linear-gradient(135deg,#A5BBFC,#D5E2FF)" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="2" />
                        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="deploy-card-title">
                      Website Widget
                    </h3>
                    <p className="deploy-card-desc">
                      Embeddable chat that matches your brand. Instant support right on your site.
                    </p>
                  </div>
                </div>
                <div className="deploy-card" data-section-reveal>
                  <div className="deploy-card-glow" style={{ background: "#E8F5E9", boxShadow: "inset 0 0 50px #81C784" }} />
                  <div className="deploy-card-content">
                    <div className="deploy-icon-circle" style={{ background: "linear-gradient(135deg,#25D366,#66BB6A)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <h3 className="deploy-card-title">
                      WhatsApp
                    </h3>
                    <p className="deploy-card-desc">
                      Meet customers on their favorite messaging app with rich, contextual conversations.
                    </p>
                  </div>
                </div>
                <div className="deploy-card" data-section-reveal>
                  <div className="deploy-card-glow" style={{ background: "#FCE4EC", boxShadow: "inset 0 0 50px #F48FB1" }} />
                  <div className="deploy-card-content">
                    <div className="deploy-icon-circle" style={{ background: "linear-gradient(135deg,#E1306C,#8134AF)" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" />
                        <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="2" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                      </svg>
                    </div>
                    <h3 className="deploy-card-title">
                      Instagram
                    </h3>
                    <p className="deploy-card-desc">
                      Automate DM responses with the same intelligence that powers your other channels.
                    </p>
                  </div>
                </div>
                <div className="deploy-card" data-section-reveal>
                  <div className="deploy-card-glow" style={{ background: "#EAF2FF", boxShadow: "inset 0 0 50px #93C5FD" }} />
                  <div className="deploy-card-content">
                    <div className="deploy-icon-circle" style={{ background: "linear-gradient(135deg,#2563EB,#60A5FA)" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="white" strokeWidth="2" />
                        <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 19v4M8 23h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="deploy-card-title">
                      Voice AI
                    </h3>
                    <p className="deploy-card-desc">
                      Auto-answer phone calls in English, Hindi, and regional languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content-section" data-section-reveal>
            <div className="section-inner">
              <div className="voice-dark-section">
                <div className="voice-dark-grid">
                  <div className="voice-dark-text">
                    <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
                      The Voice Frontier
                    </p>
                    <h2 className="section-h2" style={{ color: "white" }}>
                      AI That Answers
                      <br />
                      the Phone.
                    </h2>
                    <p className="section-desc" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Bridging the digital & physical. Extending automation beyond text to the actual phone line.
                    </p>
                    <ul className="voice-checklist">
                      <li>
                        <span className="voice-check-dot" />
                        Auto-answers incoming support calls
                      </li>
                      <li>
                        <span className="voice-check-dot" />
                        Fluent in English, Hindi, and Regional Languages
                      </li>
                      <li>
                        <span className="voice-check-dot" />
                        Uses the same knowledge base as the chatbot
                      </li>
                      <li>
                        <span className="voice-check-dot" />
                        Routes complex issues to human agents
                      </li>
                    </ul>
                  </div>
                  <div className="voice-dark-visual">
                    <div className="voice-motif-container">
                      <div className="voice-ring voice-ring-1" />
                      <div className="voice-ring voice-ring-2" />
                      <div className="voice-ring voice-ring-3" />
                      <div className="voice-center-orb">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                          <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                          <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <path d="M12 19v4M8 23h8" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content-section" data-section-reveal>
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  Built for Bharat
                </p>
                <h2 className="section-h2">
                  Fluent, regional, and
                  <br />
                  perfectly on-brand.
                </h2>
                <p className="section-desc">
                  Automatically detects and responds in multiple Indian languages. Broadens reach to Tier 2 and Tier 3 cities.
                </p>
              </div>
              <div className="lang-chips-row">
                <span className="lang-chip-sarvam">
                  English
                </span>
                <span className="lang-chip-sarvam">
                  Hindi
                  <span className="lang-native">
                    हिंदी
                  </span>
                </span>
                <span className="lang-chip-sarvam">
                  Tamil
                  <span className="lang-native">
                    தமிழ்
                  </span>
                </span>
                <span className="lang-chip-sarvam">
                  Telugu
                  <span className="lang-native">
                    తెలుగు
                  </span>
                </span>
                <span className="lang-chip-sarvam">
                  Bengali
                  <span className="lang-native">
                    বাংলা
                  </span>
                </span>
                <span className="lang-chip-sarvam">
                  Marathi
                  <span className="lang-native">
                    मराठी
                  </span>
                </span>
                <span className="lang-chip-sarvam">
                  Kannada
                  <span className="lang-native">
                    ಕನ್ನಡ
                  </span>
                </span>
                <span className="lang-chip-sarvam">
                  Gujarati
                  <span className="lang-native">
                    ગુજરાતી
                  </span>
                </span>
              </div>
            </div>
          </section>
          <section className="content-section" data-section-reveal id="core-awaylable">
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  The Awaylable Advantage
                </p>
                <h2 className="section-h2">
                  Why Awaylable wins.
                </h2>
              </div>
              <div className="advantage-row">
                <div className="advantage-item" data-section-reveal>
                  <span className="advantage-num">
                    01
                  </span>
                  <h3 className="advantage-title">
                    Unified Intelligence
                  </h3>
                  <p className="advantage-desc">
                    One brain serving Website, WhatsApp, Instagram, and Voice. No duplicate training required.
                  </p>
                </div>
                <div className="advantage-item" data-section-reveal>
                  <span className="advantage-num">
                    02
                  </span>
                  <h3 className="advantage-title">
                    Zero-to-Live Speed
                  </h3>
                  <p className="advantage-desc">
                    Auto-ingestion turns websites & docs into a live support engine in minutes, not weeks.
                  </p>
                </div>
                <div className="advantage-item" data-section-reveal>
                  <span className="advantage-num">
                    03
                  </span>
                  <h3 className="advantage-title">
                    The Voice Advantage
                  </h3>
                  <p className="advantage-desc">
                    Native handling of phone calls in English, Hindi, and regional languages.
                  </p>
                </div>
                <div className="advantage-item" data-section-reveal>
                  <span className="advantage-num">
                    04
                  </span>
                  <h3 className="advantage-title">
                    Commercial Focus
                  </h3>
                  <p className="advantage-desc">
                    Combines support automation with revenue-generating lead capture and pre-sales qualification.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="content-section" data-section-reveal id="pricing">
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  Pricing
                </p>
                <h2 className="section-h2">
                  Transparent pricing for
                  <br />
                  growing businesses.
                </h2>
              </div>
              <input className="pricing-billing-input" type="radio" name="pricing-billing" id="pricing-billing-monthly" defaultChecked />
              <input className="pricing-billing-input" type="radio" name="pricing-billing" id="pricing-billing-yearly" />
              <div className="pricing-switcher">
                <div className="pricing-toggle" role="tablist" aria-label="Billing cycle">
                  <label className="pricing-toggle-option" htmlFor="pricing-billing-monthly">
                    Monthly
                  </label>
                  <label className="pricing-toggle-option pricing-toggle-option-yearly" htmlFor="pricing-billing-yearly">
                    <span className="pricing-toggle-option-label">
                      Yearly
                    </span>
                    <span className="pricing-toggle-save">
                      Save upto ₹53,988/year
                    </span>
                  </label>
                </div>
              </div>
              <div className="pricing-row">
                <div className="pricing-card-sarvam" data-section-reveal>
                  <div className="pc-card-head">
                    <div>
                      <div className="pc-title-row">
                        <h3 className="pc-name">
                          Core
                        </h3>
                        <span className="pc-plan-save">
                          Save ₹5,988/year
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pc-price pc-price-monthly">
                    ₹2,499
                    <span className="pc-per">
                      /mo
                    </span>
                  </div>
                  <div className="pc-price pc-price-yearly">
                    ₹1,999
                    <span className="pc-per">
                      /mo
                    </span>
                  </div>
                  <p className="pc-yearly pc-yearly-monthly">
                    or ₹1,999/mo for annual plan
                  </p>
                  <p className="pc-yearly pc-yearly-yearly">
                    or ₹2,499/mo if billed monthly
                  </p>
                  <ul className="pc-features">
                    <li>Up to 500 conversations</li>
                    <li>Website widget included</li>
                    <li>Knowledge base auto-ingestion</li>
                    <li>Human escalation</li>
                    <li>Omnichannel as ₹1,000/mo add-on</li>
                  </ul>
                  <a href="https://cal.com/atomnik/awaylable-24x7-customer-demo?source=get-started" target="_blank" rel="noopener noreferrer">
                    <button className="btn-sarvam-secondary pc-btn">
                      <span className="btn-gradient-overlay-light" />
                      <span className="btn-label">
                        Get Started
                      </span>
                    </button>
                  </a>
                </div>
                <div className="pricing-card-sarvam featured" data-section-reveal>
                  <div className="pc-card-head">
                    <div>
                      <div className="pc-popular">
                        Most Popular
                      </div>
                      <div className="pc-title-row">
                        <h3 className="pc-name">
                          Growth
                        </h3>
                        <span className="pc-plan-save">
                          Save ₹23,988/year
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pc-price pc-price-monthly">
                    ₹7,999
                    <span className="pc-per">
                      /mo
                    </span>
                  </div>
                  <div className="pc-price pc-price-yearly">
                    ₹5,999
                    <span className="pc-per">
                      /mo
                    </span>
                  </div>
                  <p className="pc-yearly pc-yearly-monthly">
                    or ₹5,999/mo for annual plan
                  </p>
                  <p className="pc-yearly pc-yearly-yearly">
                    or ₹7,999/mo if billed monthly
                  </p>
                  <ul className="pc-features">
                    <li>Up to 3,000 conversations</li>
                    <li>Omnichannel included</li>
                    <li>Advanced lead capture</li>
                    <li>KPI & KG Engine analytics</li>
                    <li>Priority support</li>
                  </ul>
                  <a href="https://cal.com/atomnik/awaylable-24x7-customer-demo?source=get-started" target="_blank" rel="noopener noreferrer">
                    <button className="btn-sarvam-primary pc-btn">
                      <span className="btn-gradient-overlay" />
                      <span className="btn-label">
                        Get Started
                      </span>
                    </button>
                  </a>
                </div>
                <div className="pricing-card-sarvam" data-section-reveal>
                  <div className="pc-card-head">
                    <div>
                      <div className="pc-title-row">
                        <h3 className="pc-name">
                          Pro
                        </h3>
                        <span className="pc-plan-save">
                          Save ₹53,988/year
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pc-price pc-price-monthly">
                    ₹14,999
                    <span className="pc-per">
                      /mo
                    </span>
                  </div>
                  <div className="pc-price pc-price-yearly">
                    ₹10,499
                    <span className="pc-per">
                      /mo
                    </span>
                  </div>
                  <p className="pc-yearly pc-yearly-monthly">
                    or ₹10,499/mo for annual plan
                  </p>
                  <p className="pc-yearly pc-yearly-yearly">
                    or ₹14,999/mo if billed monthly
                  </p>
                  <ul className="pc-features">
                    <li>Up to 10,000 conversations</li>
                    <li>Omnichannel included</li>
                    <li>Voice AI agent</li>
                    <li>Custom integrations</li>
                    <li>Dedicated account manager</li>
                  </ul>
                  <a href="https://cal.com/atomnik/awaylable-24x7-customer-demo?source=get-started" target="_blank" rel="noopener noreferrer">
                    <button className="btn-sarvam-secondary pc-btn">
                      <span className="btn-gradient-overlay-light" />
                      <span className="btn-label">
                        Get Started
                      </span>
                    </button>
                  </a>
                </div>
                <div className="pricing-card-sarvam" data-section-reveal>
                  <div className="pc-card-head">
                    <div>
                      <h3 className="pc-name">
                        Enterprise
                      </h3>
                    </div>
                  </div>
                  <div className="pc-price">
                    Custom
                  </div>
                  <p className="pc-yearly" style={{
                    marginBottom: "24px"
                  }}>
                    Tailored pricing for high-volume teams, custom SLAs, and security reviews.
                  </p>
                  <ul className="pc-features">
                    <li>Dedicated solutions architect</li>
                    <li>Custom SLAs and onboarding</li>
                    <li>Advanced security review</li>
                    <li>Custom integrations</li>
                    <li>Priority implementation support</li>
                  </ul>
                  <a href="#cta">
                    <button className="btn-sarvam-secondary pc-btn">
                      <span className="btn-gradient-overlay-light" />
                      <span className="btn-label">
                        Talk to Sales
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <p className="pricing-footnote">
                Unlimited Dashboard Users included on ALL plans.
              </p>
            </div>
          </section>
          <section className="content-section" data-section-reveal id="use-cases">
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  Use Cases
                </p>
                <h2 className="section-h2">
                  Built for businesses
                  <br />
                  that never stop serving.
                </h2>
                <p className="section-desc">
                  See how Awaylable works across industries.
                </p>
              </div>
              <div className="uc-tabs" id="ucTabs">
                <button className="uc-tab active" data-tab="ecommerce" id="use-case-ecommerce">
                  E-Commerce
                </button>
                <button className="uc-tab" data-tab="education" id="use-case-education">
                  Education
                </button>
                <button className="uc-tab" data-tab="travel" id="use-case-travel">
                  Travel
                </button>
                <button className="uc-tab" data-tab="teams" id="use-case-teams">
                  Lean Teams
                </button>
              </div>
              <div className="uc-panels">
                <div className="uc-panel active" id="panel-ecommerce">
                  <div className="uc-panel-grid">
                    <div className="uc-info">
                      <h3 className="uc-title">
                        E-Commerce & Shopify
                      </h3>
                      <p className="uc-desc">
                        Turn your store into a 24/7 sales machine. The AI pulls live answers directly from your catalogue.
                      </p>
                      <ul className="uc-benefits">
                        <li>
                          <span className="uc-dot" style={{ background: "#2563EB" }} />
                          Live Catalogue Sync
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#2563EB" }} />
                          Instant Order Status
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#2563EB" }} />
                          In-Chat "Add to Cart"
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#2563EB" }} />
                          Automated Lead Capture
                        </li>
                      </ul>
                    </div>
                    <div className="uc-chat-demo">
                      <div className="uc-chat-window" style={{ borderColor: "rgba(37,99,235,0.15)" }}>
                        <div className="uc-chat-header" style={{ background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)" }}>
                          <span className="uc-chat-brand">
                            Store Support
                          </span>
                          <span className="uc-chat-online">
                            Online
                          </span>
                        </div>
                        <div className="uc-chat-body">
                          <div className="uc-msg uc-msg-user">
                            Do you have the wireless earbuds in blue?
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            Yes! The SoundPro X3 in Ocean Blue is in stock at ₹2,499. Would you like me to add it to your cart?
                          </div>
                          <div className="uc-msg uc-msg-user">
                            Yes please! And what's my order #8834 status?
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            Added to cart! Your Order #8834 shipped yesterday and will arrive by Thursday. Here's your tracking link.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uc-panel" id="panel-education">
                  <div className="uc-panel-grid">
                    <div className="uc-info">
                      <h3 className="uc-title">
                        Educational Institutions
                      </h3>
                      <p className="uc-desc">
                        Tame scattered information and guide students to the right programs, 24/7 during admission season.
                      </p>
                      <ul className="uc-benefits">
                        <li>
                          <span className="uc-dot" style={{ background: "#A5BBFC" }} />
                          Admission FAQ Automation
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#A5BBFC" }} />
                          Course & Fee Information
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#A5BBFC" }} />
                          Document Requirement Guide
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#A5BBFC" }} />
                          Multi-language Student Support
                        </li>
                      </ul>
                    </div>
                    <div className="uc-chat-demo">
                      <div className="uc-chat-window" style={{ borderColor: "rgba(165,187,252,0.2)" }}>
                        <div className="uc-chat-header" style={{ background: "linear-gradient(135deg,#F0F3FA,#D5E2FF)" }}>
                          <span className="uc-chat-brand">
                            Admissions Desk
                          </span>
                          <span className="uc-chat-online">
                            Online
                          </span>
                        </div>
                        <div className="uc-chat-body">
                          <div className="uc-msg uc-msg-user">
                            What's the last date for MBA admissions?
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            The last date for MBA 2025 applications is June 30th. You'll need your CAT/XAT score, transcripts, and 2 recommendation letters.
                          </div>
                          <div className="uc-msg uc-msg-user">
                            What are the fees for the 2-year program?
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            The total program fee is ₹12,50,000 payable in 4 installments. Scholarships are available for top 10 percentile scores. Shall I share the brochure?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uc-panel" id="panel-travel">
                  <div className="uc-panel-grid">
                    <div className="uc-info">
                      <h3 className="uc-title">
                        Travel Agencies
                      </h3>
                      <p className="uc-desc">
                        Capture leads around the clock from research-heavy visitors and answer trip queries instantly.
                      </p>
                      <ul className="uc-benefits">
                        <li>
                          <span className="uc-dot" style={{ background: "#6EA335" }} />
                          24/7 Trip Inquiry Handling
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#6EA335" }} />
                          Package Comparison
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#6EA335" }} />
                          Instant Itinerary Sharing
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#6EA335" }} />
                          WhatsApp Booking Follow-up
                        </li>
                      </ul>
                    </div>
                    <div className="uc-chat-demo">
                      <div className="uc-chat-window" style={{ borderColor: "rgba(110,163,53,0.15)" }}>
                        <div className="uc-chat-header" style={{ background: "linear-gradient(135deg,#F0FAE8,#E3F1D8)" }}>
                          <span className="uc-chat-brand">
                            Travel Desk
                          </span>
                          <span className="uc-chat-online">
                            Online
                          </span>
                        </div>
                        <div className="uc-chat-body">
                          <div className="uc-msg uc-msg-user">
                            Looking for a 5-day Ladakh trip for 4 people in August
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            Great choice! We have 3 Ladakh packages for August. The "Royal Ladakh" at ₹28,999/person includes Pangong Lake, Nubra Valley, and all meals. Want me to share the full itinerary?
                          </div>
                          <div className="uc-msg uc-msg-user">
                            Yes, and can you send it on WhatsApp too?
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            Absolutely! I'll send the detailed PDF itinerary to your WhatsApp right now. What's the best number to reach you?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uc-panel" id="panel-teams">
                  <div className="uc-panel-grid">
                    <div className="uc-info">
                      <h3 className="uc-title">
                        Lean Teams
                      </h3>
                      <p className="uc-desc">
                        Launch enterprise-grade AI support with zero technical resources. Punch above your weight.
                      </p>
                      <ul className="uc-benefits">
                        <li>
                          <span className="uc-dot" style={{ background: "#8134AF" }} />
                          Zero-Code Deployment
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#8134AF" }} />
                          No Technical Team Required
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#8134AF" }} />
                          Auto-Learning Knowledge Base
                        </li>
                        <li>
                          <span className="uc-dot" style={{ background: "#8134AF" }} />
                          Scales Without Hiring
                        </li>
                      </ul>
                    </div>
                    <div className="uc-chat-demo">
                      <div className="uc-chat-window" style={{ borderColor: "rgba(129,52,175,0.15)" }}>
                        <div className="uc-chat-header" style={{ background: "linear-gradient(135deg,#F3E8FA,#E8D5F5)" }}>
                          <span className="uc-chat-brand">
                            Support
                          </span>
                          <span className="uc-chat-online">
                            Online
                          </span>
                        </div>
                        <div className="uc-chat-body">
                          <div className="uc-msg uc-msg-user">
                            How does your API rate limiting work?
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            Based on our docs, the free tier allows 1,000 requests/day. Pro tier is unlimited. You can monitor usage in your dashboard under Settings &gt; API.
                          </div>
                          <div className="uc-msg uc-msg-user">
                            I need to talk to someone about enterprise pricing
                          </div>
                          <div className="uc-msg uc-msg-bot">
                            Of course! Let me connect you with our sales team. To schedule a call, what's the best email to reach you at?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content-section" data-section-reveal id="faq">
            <div className="section-inner">
              <div className="section-header-center">
                <p className="section-eyebrow">
                  Questions?
                </p>
                <h2 className="section-h2">
                  We've got answers.
                </h2>
              </div>
              <div className="faq-conversation" id="faqConvo">
                <div className="faq-q" data-answer="Under 5 minutes. Paste your website URL, upload any docs, and your AI agent goes live. No coding, no decision trees, no manual flows.">
                  <span className="faq-q-text">
                    How long does setup take?
                  </span>
                  <span className="faq-q-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="faq-q" data-answer="English, Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati, and more. The bot automatically detects the customer's language and responds accordingly — no configuration needed.">
                  <span className="faq-q-text">
                    What languages do you support?
                  </span>
                  <span className="faq-q-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="faq-q" data-answer="Website chat widget, WhatsApp Business, Instagram DMs, and Voice AI (phone calls). One unified knowledge base powers all channels — context follows the customer across them.">
                  <span className="faq-q-text">
                    Which channels does Awaylable work on?
                  </span>
                  <span className="faq-q-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="faq-q" data-answer="Absolutely. When the AI detects complex intent or the customer asks for a human, it routes the conversation to a live agent with full chat history attached. No context is lost.">
                  <span className="faq-q-text">
                    Can customers talk to a real human?
                  </span>
                  <span className="faq-q-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="faq-q" data-answer="Yes! Awaylable has a native Shopify integration. It syncs your product catalogue, handles order status queries, and even lets customers add items to cart directly from the chat.">
                  <span className="faq-q-text">
                    Do you integrate with Shopify?
                  </span>
                  <span className="faq-q-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="faq-q" data-answer="Plans start at ₹2,499/mo for 500 conversations. Growth at ₹7,999/mo includes omnichannel. Pro at ₹14,999/mo gives you unlimited conversations, Voice AI, and a dedicated account manager. All plans include unlimited dashboard users.">
                  <span className="faq-q-text">
                    What does it cost?
                  </span>
                  <span className="faq-q-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="faq-q" data-answer="No. Awaylable is completely no-code. You paste a URL, upload documents if needed, and the AI handles everything. Your existing website content becomes the bot's intelligence automatically.">
                  <span className="faq-q-text">
                    Do I need technical skills?
                  </span>
                  <span className="faq-q-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="cta-full" id="cta">
        <div className="cta-full-inner">
          <img src="/images/motif.svg" alt="" style={{ height: "36px", opacity: "0.15", marginBottom: "24px" }} />
          <h2 className="section-h2" style={{ maxWidth: "600px", margin: "0 auto 12px" }}>
            Ready to automate your customer experience?
          </h2>
          <p className="section-desc" style={{ margin: "0 auto 32px" }}>
            Deploy your AI Agent today. No coding required.
          </p>
          <div className="cta-btns">
            <a href="https://cal.com/atomnik/awaylable-24x7-customer-demo?source=free-trial" target="_blank" rel="noopener noreferrer">
              <button className="cta-white-btn">
                Start Free Trial
              </button>
            </a>
            <a href="https://cal.com/atomnik/awaylable-24x7-customer-demo?source=book-a-demo" target="_blank" rel="noopener noreferrer">
              <button className="cta-outline-btn">
                Book a Demo
              </button>
            </a>
          </div>
          <div className="cta-contact-links">
            <a href="mailto:info@atomnik.com">
              info@atomnik.com
            </a>
            <a href="tel:+918451850296">
              +91 84518 50296
            </a>
          </div>
        </div>
      </section>
      <SiteFooter anchorBase="" />
    </>
  );
}
