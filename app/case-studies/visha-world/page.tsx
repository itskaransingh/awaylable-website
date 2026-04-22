import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SiteInteractions from "@/components/SiteInteractions";

export const metadata: Metadata = {
  title: "Visha World Case Study",
  description:
    "How Visha World used Awaylable to automate routine support and answer customers 24/7.",
};

export const dynamic = "force-static";

const facts = [
  ["Industry", "Electronics - IoT & Robotics"],
  ["Monthly Visitors", "3,000 - 5,000"],
  ["Daily Queries (Before)", "50+ per day"],
  ["Product Catalogue", "5,000+ SKUs"],
];

const painCards = [
  [
    "Time",
    "3+ hours of productive time lost every day",
    "Manually handling 50+ queries daily, including repeat questions that required identical answers every time.",
  ],
  [
    "Leads",
    "20-30 leads lost every month",
    "Visitors with genuine purchase intent who did not get a reply before their interest faded.",
  ],
  [
    "Hours",
    "Zero coverage after business hours",
    "Evening and weekend queries sat unanswered until the next working day.",
  ],
  [
    "Repeat",
    "80% of queries were generic and repetitive",
    "Stock availability, order status, and product specs were answered by hand every single day.",
  ],
];

const solutionCards = [
  [
    "Fast",
    "Instant Query Resolution",
    "Stock, specs, orders, and returns answered immediately, 24/7, with zero queue.",
  ],
  [
    "Cart",
    "Cart & Checkout Assist",
    "Customers browse, ask questions, and complete their purchase in one chat.",
  ],
  [
    "Route",
    "Smart Human Escalation",
    "Complex queries reach the team with full context already captured.",
  ],
  [
    "Train",
    "Brand-Trained Intelligence",
    "Trained on Visha World's own catalogue and policies, not a generic template.",
  ],
];

const metrics = [
  ["90", "%", "of incoming queries resolved by Awaylable without a human"],
  ["20", "min", "daily time on support, down from 3+ hours every day"],
  ["0", "", "unanswered after-hours queries in the first month"],
  ["10", "%", "escalation rate, only genuinely complex cases reach the team"],
];

function InfoCard({
  tone,
  title,
  rows,
}: {
  tone: "red" | "blue" | "green";
  title: string;
  rows: Array<[string, string]>;
}) {
  return (
    <aside className="vw-info-card">
      <div className={`vw-info-head ${tone}`}>{title}</div>
      {rows.map(([label, value]) => (
        <div className="vw-info-row" key={label}>
          <span>{label}</span>
          <strong className={tone === "red" ? "bad" : tone === "green" ? "good" : ""}>
            {value}
          </strong>
        </div>
      ))}
    </aside>
  );
}

export default function VishaWorldCaseStudyPage() {
  return (
    <>
      <SiteHeader anchorBase="/" caseStudiesHref="/case-studies" />
      <SiteInteractions />
      <main className="vw-case-study">
        <section className="vw-hook">
          <p className="vw-eyebrow">Visha World x Awaylable</p>
          <div className="vw-hook-story">
            <span className="vw-imagine">Imagine this</span>
            <h1>
              You run one of the biggest IoT and robotics stores in the country.
              <br />
              <em>And you are drowning in unanswered messages.</em>
            </h1>

            <div className="vw-story-paragraphs">
              <p>
                Your website carries <strong>5,000+ SKUs</strong>: sensors,
                microcontrollers, development boards, and components. Engineers
                and makers find you every day. They browse, compare, shortlist,
                and then ask a question right at the point of purchase.
              </p>
              <p>
                They tap the chat icon, type their message, and then{" "}
                <span className="vw-pain">they wait.</span>
              </p>
              <p>
                On the other side is one inbox and one human being trying to
                respond to <span className="vw-hi">50+ queries every day</span>:
                stock, compatibility, delivery dates, returns, mornings,
                midnight, and Sunday afternoons.
              </p>
              <p>
                That person spends <span className="vw-pain">3+ hours a day</span>{" "}
                just reading and typing. Some messages do not get answered
                because there is only so much one person can do.
              </p>
            </div>

            <div className="vw-reveal">
              This was the daily reality at <strong>Visha World</strong> until
              they found Awaylable.
            </div>
          </div>
        </section>

        <section className="vw-facts" aria-label="Case study facts">
          {facts.map(([label, value]) => (
            <div className="vw-fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>

        <section className="vw-section">
          <div className="vw-section-label">
            <span />
            The Problem
          </div>
          <div className="vw-two-col">
            <div>
              <h2>One inbox. One person. Thousands of customers, waiting.</h2>
              <p>
                Visha World had built something genuinely valuable: a destination
                for engineers, hobbyists, and builders looking for quality
                components. The traffic was real. The intent to buy was real.
                The problem was structural.
              </p>
              <p>
                Every customer query landed in the same chat window, managed by
                one team member. Order status sat next to spec questions. Stock
                inquiries sat next to return requests.
              </p>
              <p>
                An estimated <strong>80% of queries were routine</strong>, but
                they consumed the same time as complex ones because every message
                had to be read and typed out by hand.
              </p>

              <div className="vw-pain-cards">
                {painCards.map(([tag, title, text]) => (
                  <article className="vw-pain-card" key={title}>
                    <div>{tag}</div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <InfoCard
              tone="red"
              title="Visha World - Before"
              rows={[
                ["Daily support time", "3+ hours"],
                ["Queries automated", "0%"],
                ["After-hours coverage", "None"],
                ["Monthly leads lost", "20-30"],
                ["Concurrent capacity", "1 query at a time"],
                ["Cart & checkout assist", "Not available"],
              ]}
            />
          </div>
        </section>

        <section className="vw-section vw-section-alt">
          <div className="vw-section-label">
            <span />
            The Solution
          </div>
          <div className="vw-two-col">
            <div>
              <h2>Awaylable works every hour Visha World does not.</h2>
              <p>
                Atomnik deployed Awaylable directly into Visha World&apos;s website,
                turning a static chat icon into an intelligent assistant that
                handles routine queries the moment they arrive.
              </p>
              <p>
                Awaylable was trained on Visha World&apos;s product catalogue, stock
                data, shipping timelines, and return policies. Customers get
                answers in seconds, and the team only handles what needs human
                judgment.
              </p>
              <p>
                Beyond answering questions, Awaylable also supports cart and
                checkout, helping customers move from discovery to purchase in a
                single conversation.
              </p>

              <div className="vw-solution-grid">
                {solutionCards.map(([tag, title, text]) => (
                  <article className="vw-solution-card" key={title}>
                    <div>{tag}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="vw-side-stack">
              <InfoCard
                tone="blue"
                title="Deployed On"
                rows={[
                  ["Website Chat", "Active"],
                  ["WhatsApp", "Coming soon"],
                ]}
              />
              <InfoCard
                tone="green"
                title="Visha World - After"
                rows={[
                  ["Daily support time", "~20 minutes"],
                  ["Queries automated", "90%"],
                  ["After-hours coverage", "24 / 7"],
                  ["Human escalation rate", "Only 10%"],
                  ["Concurrent capacity", "Unlimited"],
                  ["Cart & checkout assist", "Fully live"],
                ]}
              />
            </div>
          </div>
        </section>

        <section className="vw-metrics">
          <div className="vw-metrics-inner">
            <div className="vw-metrics-top">
              <h2>
                The numbers,
                <br />
                within the first month.
              </h2>
              <p>
                Results that arrived immediately, with a foundation built to
                compound over time.
              </p>
            </div>

            <div className="vw-metrics-grid">
              {metrics.map(([value, unit, text]) => (
                <article className="vw-metric" key={text}>
                  <div>
                    {value}
                    {unit && <span>{unit}</span>}
                  </div>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="vw-compare">
              <div>
                <h3>Before Awaylable</h3>
                <p>
                  <strong>3+ hrs</strong> Daily support time
                </p>
                <p>
                  <strong>0%</strong> Queries automated
                </p>
                <p>
                  <strong>20-30</strong> Leads lost per month
                </p>
                <p>
                  <strong>None</strong> After-hours coverage
                </p>
              </div>
              <div>
                <h3>After Awaylable</h3>
                <p>
                  <strong>20 min</strong> Daily support time
                </p>
                <p>
                  <strong>90%</strong> Queries automated
                </p>
                <p>
                  <strong>Recovered</strong> Leads no longer lost
                </p>
                <p>
                  <strong>24/7</strong> Always-on coverage
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="vw-testimonial">
          <span>&ldquo;</span>
          <p>
            The queries that used to pile up overnight simply stopped being a
            problem. Every customer gets an answer now, and the ones that
            genuinely need us are the only ones reaching us.
          </p>
          <div>
            <strong>Visha World Team</strong>
            <small>Electronics retailer - IoT & robotics components</small>
          </div>
        </section>

        <section className="vw-cta" id="cta">
          <p>Ready to get started?</p>
          <h2>Your customers are asking questions right now. Is anyone answering?</h2>
          <span>
            See how Awaylable turns your website traffic into conversations and
            conversations into customers.
          </span>
          <div>
            <a
              href="https://cal.com/atomnik/awaylable-24x7-customer-demo?source=book-a-demo"
              target="_blank"
              rel="noreferrer"
            >
              Book a Free Demo
            </a>
            <Link href="/case-studies">Back to Case Studies</Link>
          </div>
        </section>
      </main>
      <SiteFooter anchorBase="/" />
    </>
  );
}
