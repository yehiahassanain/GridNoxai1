"use client";

import { useState } from "react";
import Image from "next/image";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-us">
      {/* ── Background Image Layer with Red Wave Mesh ── */}
      <div className="contact-us__bg">
        <Image
          src="/data/BG-Contactus.jpg"
          alt="GridNox Red Cyber Wave Background"
          fill
          priority
          quality={95}
          className="contact-us__bg-img"
        />
        <div className="contact-us__overlay" />
      </div>

      <div className="contact-us__container">
        {/* Header section */}
        <div className="contact-us__header">
          {/* <span className="contact-us__badge">GET IN TOUCH</span> */}
          <h1 className="contact-us__title">Let&apos;s Break the Ice</h1>
          <p className="contact-us__subtitle">
            Curious about GridNox.AI? Send us a message.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="contact-us__card">
          {submitted ? (
            <div className="contact-us__success">
              <div className="contact-us__success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="contact-us__success-title">Message Sent Successfully!</h3>
              <p className="contact-us__success-desc">
                Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
              </p>
              <button
                className="contact-us__reset-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-us__form">
              <div className="contact-us__grid">
                {/* Full Name Field */}
                <div className="contact-us__group">
                  <label htmlFor="fullName" className="contact-us__label">
                    Full Name <span className="contact-us__required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="contact-us__input"
                  />
                </div>

                {/* Email Address Field */}
                <div className="contact-us__group">
                  <label htmlFor="email" className="contact-us__label">
                    Email Address <span className="contact-us__required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="contact-us__input"
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div className="contact-us__group">
                <label htmlFor="phone" className="contact-us__label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="contact-us__input"
                />
              </div>

              {/* Message Field */}
              <div className="contact-us__group">
                <label htmlFor="message" className="contact-us__label">
                  Message <span className="contact-us__required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can GridNox assist your organization?"
                  className="contact-us__textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-us__submit-btn"
              >
                {isSubmitting ? (
                  <span className="contact-us__spinner" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
              {submitError && (
                <p className="contact-us__error">{submitError}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
