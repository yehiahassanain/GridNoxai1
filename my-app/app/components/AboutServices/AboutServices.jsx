"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "./AboutServices.css";

const servicesList = [
  {
    id: "cyber-risk",
    title: "Cyber Risk & GRC",
    description:
      "Turning complex regulatory and risk requirements into practical, resilient operating models.",
    icon: (
      <svg
        className="services-card-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "grc-automation",
    title: "GRC Technology & Automation",
    description:
      "Designing, implementing and automating GRC platforms that connect risk, controls, data and decisions.",
    icon: (
      <svg
        className="services-card-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "cyber-expertise",
    title: "Cyber Expertise on Demand",
    description:
      "Specialist cyber, GRC and technology expertise when and where your organization needs it.",
    icon: (
      <svg
        className="services-card-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7.5" r="4" />
        <path d="M5.5 20.5a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
];

export default function AboutServices({ initialTab = "about" }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const switchTab = useCallback((tab, updateUrl = true) => {
    setActiveTab(tab);
    if (updateUrl && typeof window !== "undefined") {
      window.history.pushState(null, "", `#${tab}`);
      window.dispatchEvent(new CustomEvent("gridnox-tab-active", { detail: tab }));
    }
  }, []);

  // Listen for hash change or custom events from Navbar
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "about" || hash === "services") {
        setActiveTab(hash);
      }
    };

    const handleSetTab = (e) => {
      if (e.detail === "about" || e.detail === "services") {
        setActiveTab(e.detail);
      }
    };

    handleHash();

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("gridnox-set-tab", handleSetTab);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("gridnox-set-tab", handleSetTab);
    };
  }, []);

  return (
    <section id="about-services" className="about-services-section">
      {/* Invisible anchor points for smooth navigation from anywhere */}
      <div id="about" className="about-services-anchor-point" />
      <div id="services" className="about-services-anchor-point" />

      {/* ── Persistent Shared Background Layer ── */}
      <div className="about-services-bg">
        <Image
          src="/data/BG-Aboutus.png"
          alt="GridNox Dubai Skyline and Cyber Wave Background"
          fill
          priority
          quality={95}
          className="about-services-bg-img"
        />
        <div className="about-services-overlay" />
      </div>

      {/* ── Foreground Interactive Layout ── */}
      <div className="about-services-container">
        {/* Sleek Segment Switcher Pill */}
        <div className="about-services-switcher-wrap">
          <div className="about-services-switcher" role="tablist" aria-label="Section Selector">
            {/* this is two button in section */}
            {/* <button
              type="button"
              role="tab"
              aria-selected={activeTab === "about"}
              className={`about-services-switcher-btn ${activeTab === "about" ? "is-active" : ""}`}
              onClick={() => switchTab("about")}
            >
              <span className="switcher-dot" />
              <span>About Us</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "services"}
              className={`about-services-switcher-btn ${activeTab === "services" ? "is-active" : ""}`}
              onClick={() => switchTab("services")}
            >
              <span className="switcher-dot" />
              <span>Our Services</span>
            </button> */}
          </div>
        </div>

        {/* Dynamic Content Views */}
        <div className="about-services-content-frame">
          {activeTab === "about" ? (
            <div className="about-view-wrapper" key="about-view">
              <div className="about-view-content">
                <span className="about-services-badge">ABOUT US</span>

                <h2 className="about-services-headline">
                  Built for organizations<br />
                  where risk is not theoretical.
                </h2>

                <div className="about-services-accent-line" />

                <p className="about-services-description">
                  <span className="about-services-brand-red">GridNox</span> helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, automation, and enterprise technology.<br className="about-services-br" />
                  We help organizations across the Middle East move from traditional compliance to intelligent, continuous risk management.
                </p>
              </div>
            </div>
          ) : (
            <div className="services-view-wrapper" key="services-view">
              {/* Header */}
              <div className="services-view-header">
                <span className="about-services-badge">OUR SERVICES</span>
                <h2 className="about-services-headline services-headline-center">
                  Where we create impact.
                </h2>
                <p className="services-view-subheadline">
                  Specialist expertise and intelligent technology that turn risk, regulation and complexity into resilient outcomes.
                </p>
              </div>

              {/* 3 Pillars Grid */}
              <div className="services-view-grid">
                {servicesList.map((service, index) => (
                  <div
                    key={service.id}
                    className={`services-view-column ${
                      index !== servicesList.length - 1 ? "services-view-column--bordered" : ""
                    }`}
                  >
                    <div className="services-card-icon-wrap">{service.icon}</div>
                    <h3 className="services-card-title">{service.title}</h3>
                    <div className="services-card-accent" />
                    <p className="services-card-desc">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
