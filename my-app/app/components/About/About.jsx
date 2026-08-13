"use client";

import Image from "next/image";
import "./About.css";

const services = [
  {
    id: "cyber-risk",
    title: "Cyber Risk & GRC",
    description:
      "Turning complex regulatory and risk requirements into practical, resilient operating models.",
    icon: (
      <svg
        className="about-service-icon"
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
    id: "grc-tech",
    title: "GRC Technology & Automation",
    description:
      "Designing, implementing and automating GRC platforms that connect risk, controls, data and decisions.",
    icon: (
      <svg
        className="about-service-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
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
        className="about-service-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* ── Top Hero Area with Dubai Tolerance Bridge Background ── */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <Image
            src="/data/BG-Aboutus.png"
            alt="Dubai Skyline and Tolerance Bridge"
            fill
            priority
            quality={95}
            className="about-hero-img"
          />
          <div className="about-hero-overlay" />
        </div>

        <div className="about-hero-container">
          <span className="about-badge">ABOUT US</span>

          <h1 className="about-headline">
            Built for organizations<br />
            where risk is not theoretical.
          </h1>

          <div className="about-accent-line" />

          <p className="about-description">
            <span className="about-brand-red">GridNox</span> helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, automation, and enterprise technology.<br className="about-br" />
            We help organizations across the Middle East move from traditional compliance to intelligent, continuous risk management.
          </p>
        </div>
      </section>

      {/* ── Bottom Services Section with Cyber Red Wave ── */}
      <section className="about-services-section">
        {/* Red Digital Waveform Mesh Background */}
        <div className="about-wave-container" aria-hidden="true">
          <svg
            className="about-wave-svg"
            viewBox="0 0 1440 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,140 C280,190 520,60 820,130 C1120,200 1320,80 1440,110"
              stroke="#ef4444"
              strokeWidth="1.2"
              strokeOpacity="0.45"
            />
            <path
              d="M0,155 C300,205 540,75 840,145 C1140,215 1340,95 1440,125"
              stroke="#ef4444"
              strokeWidth="1.1"
              strokeOpacity="0.38"
            />
            <path
              d="M0,170 C320,220 560,90 860,160 C1160,230 1360,110 1440,140"
              stroke="#ef4444"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            <path
              d="M0,185 C340,235 580,105 880,175 C1180,245 1380,125 1440,155"
              stroke="#ef4444"
              strokeWidth="0.9"
              strokeOpacity="0.22"
            />
            <path
              d="M0,200 C360,250 600,120 900,190 C1200,260 1400,140 1440,170"
              stroke="#ef4444"
              strokeWidth="0.8"
              strokeOpacity="0.15"
            />
            <path
              d="M0,125 C260,175 500,45 800,115 C1100,185 1300,65 1440,95"
              stroke="#ef4444"
              strokeWidth="0.9"
              strokeOpacity="0.25"
            />
            <path
              d="M0,110 C240,160 480,30 780,100 C1080,170 1280,50 1440,80"
              stroke="#ef4444"
              strokeWidth="0.8"
              strokeOpacity="0.18"
            />
          </svg>
          <div className="about-wave-glow" />
        </div>

        <div className="about-services-container">
          <span className="about-badge">OUR SERVICES</span>
          <h2 className="about-subheadline">Where we create impact.</h2>

          <div className="about-services-grid">
            {services.map((service) => (
              <div key={service.id} className="about-service-card">
                <div className="about-service-icon-box">{service.icon}</div>
                <h3 className="about-service-title">{service.title}</h3>
                <p className="about-service-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
