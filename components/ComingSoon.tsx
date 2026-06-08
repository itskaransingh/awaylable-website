import React from 'react';

export default function ComingSoon() {
  return (
    <section className="coming-soon">
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="coming-soon-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" opacity="0.2" />
        <path d="M12 8v4l3 3" />
      </svg>
      <h2 className="coming-soon-title">Coming Soon</h2>
      <p className="coming-soon-text">
        This section is under construction. Stay tuned for exciting new content!
      </p>
      <button className="coming-soon-cta">Notify Me</button>
    </section>
  );
}
