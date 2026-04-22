"use client";

import { useState } from "react";

export default function PartnerApplicationForm({ partnerLabel }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/partner-application", {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Could not submit the form.");
      }

      form.reset();
      setStatus("success");
      setMessage("Application submitted. We will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not submit the form. Please try again.",
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form className="partner-form-card" onSubmit={handleSubmit}>
      <input type="hidden" name="partner_type" value={partnerLabel} />
      <fieldset disabled={isSubmitting}>
        <label>
          Name
          <input name="name" type="text" placeholder="Enter your name" />
        </label>
        <label>
          Business email <span>*</span>
          <input
            name="email"
            type="email"
            placeholder="Enter email id"
            required
          />
        </label>
        <label>
          Phone number [optional]
          <div className="partner-phone-row">
            <select name="country_code" defaultValue="+91">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+971">+971</option>
            </select>
            <input name="phone" type="tel" placeholder="Enter phone number" />
          </div>
        </label>
        <label>
          Company / Store URL [optional]
          <input name="url" type="url" placeholder="Enter store url" />
        </label>
        <label>
          Tell us about your partnership fit
          <textarea
            name="message"
            placeholder="Share your audience, client base, or integration idea"
            rows={4}
          />
        </label>
      </fieldset>
      <button
        className="btn-sarvam-primary partner-submit"
        type="submit"
        disabled={isSubmitting}
      >
        <span className="btn-gradient-overlay" />
        <span className="btn-label">
          {isSubmitting ? "Submitting..." : "Submit"}
        </span>
      </button>
      <p
        className={`partner-form-note ${
          status === "success" ? "is-success" : ""
        } ${status === "error" ? "is-error" : ""}`}
        aria-live="polite"
      >
        {message || "Your application will be submitted securely."}
      </p>
    </form>
  );
}
