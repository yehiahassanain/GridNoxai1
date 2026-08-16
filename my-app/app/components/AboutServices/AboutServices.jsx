"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

export default function AboutServices({ initialTab = "services" }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const activeTabRef = useRef("services");

  // Scroll calculation
  const updateScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalDist = rect.height - windowHeight;

    if (totalDist <= 0) return;

    // rect.top <= 0 means sticky section has reached the top of viewport
    const scrolled = -rect.top;
    const progress = Math.min(Math.max(scrolled / totalDist, 0), 1);
    setScrollProgress(progress);

    // Sync active tab state for navbar
    const currentTab = progress < 0.5 ? "services" : "about";
    if (activeTabRef.current !== currentTab) {
      activeTabRef.current = currentTab;
      window.dispatchEvent(new CustomEvent("gridnox-tab-active", { detail: currentTab }));
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateScroll]);

  // Programmatic smooth scroll to specific sub-section
  const scrollToTarget = useCallback((target) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalDist = rect.height - window.innerHeight;

    if (target === "services") {
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#services");
    } else if (target === "about") {
      window.scrollTo({
        top: sectionTop + totalDist * 0.82,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#about");
    }
  }, []);

  // Listen for navigation events from Navbar or URL hash on load
  useEffect(() => {
    const handleSetTab = (e) => {
      if (e.detail === "about" || e.detail === "services") {
        scrollToTarget(e.detail);
      }
    };

    const handleInitialHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "about" || initialTab === "about") {
        setTimeout(() => scrollToTarget("about"), 150);
      } else if (hash === "services" || initialTab === "services") {
        setTimeout(() => scrollToTarget("services"), 150);
      }
    };

    window.addEventListener("gridnox-set-tab", handleSetTab);
    handleInitialHash();

    return () => {
      window.removeEventListener("gridnox-set-tab", handleSetTab);
    };
  }, [scrollToTarget, initialTab]);

  // Smooth ease calculation for fluid storytelling transition
  // 0.00 to 0.32: Services is 100% visible
  // 0.32 to 0.68: Cross-fade transition between Services and About
  // 0.68 to 1.00: About is 100% visible
  let servicesOpacity = 1;
  let servicesY = 0;
  let servicesBlur = 0;
  let aboutOpacity = 0;
  let aboutY = 32;
  let aboutBlur = 6;

  if (scrollProgress <= 0.32) {
    servicesOpacity = 1;
    servicesY = 0;
    servicesBlur = 0;
    aboutOpacity = 0;
    aboutY = 32;
    aboutBlur = 6;
  } else if (scrollProgress >= 0.68) {
    servicesOpacity = 0;
    servicesY = -32;
    servicesBlur = 6;
    aboutOpacity = 1;
    aboutY = 0;
    aboutBlur = 0;
  } else {
    const t = (scrollProgress - 0.32) / 0.36; // 0 to 1
    // Smooth sinusoidal easing
    const easeT = 0.5 * (1 - Math.cos(Math.PI * t));

    servicesOpacity = Math.max(0, 1 - easeT * 1.15);
    servicesY = -32 * easeT;
    servicesBlur = easeT * 6;

    aboutOpacity = Math.min(1, easeT * 1.15);
    aboutY = 32 * (1 - easeT);
    aboutBlur = (1 - easeT) * 6;
  }

  const isServicesActive = scrollProgress < 0.5;

  return (
    <section id="about-services" ref={sectionRef} className="about-services-section">
      {/* Invisible anchor points for smooth navigation from anywhere */}
      <div id="services" className="about-services-anchor-point services-anchor-pos" />
      <div id="about" className="about-services-anchor-point about-anchor-pos" />

      {/* ── Sticky Pinned Viewport Frame ── */}
      <div className="about-services-sticky-viewport">
        {/* ── Persistent Shared Fixed Background Layer ── */}
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
          {/* Sleek Segment Switcher Pill Indicator */}
          <div className="about-services-switcher-wrap">
            <div className="about-services-switcher" role="tablist" aria-label="Section Indicator">
              {/* <button
                type="button"
                role="tab"
                aria-selected={isServicesActive}
                className={`about-services-switcher-btn ${isServicesActive ? "is-active" : ""}`}
                onClick={() => scrollToTarget("services")}
              >
                <span className="switcher-dot" />
                <span>How We Help</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={!isServicesActive}
                className={`about-services-switcher-btn ${!isServicesActive ? "is-active" : ""}`}
                onClick={() => scrollToTarget("about")}
              >
                <span className="switcher-dot" />
                <span>Why Us</span>
              </button> */}
            </div>
          </div>

          {/* Dynamic Dual-Stage Content Area */}
          <div className="about-services-content-stage">
            {/* Stage 1: Services Content */}
            <div
              className="services-stage"
              style={{
                opacity: servicesOpacity,
                transform: `translate3d(0, ${servicesY}px, 0)`,
                filter: `blur(${servicesBlur}px)`,
                pointerEvents: servicesOpacity > 0.3 ? "auto" : "none",
                visibility: servicesOpacity <= 0.01 ? "hidden" : "visible",
              }}
            >
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

            {/* Stage 2: About Content */}
            <div
              className="about-stage"
              style={{
                opacity: aboutOpacity,
                transform: `translate3d(0, ${aboutY}px, 0)`,
                filter: `blur(${aboutBlur}px)`,
                pointerEvents: aboutOpacity > 0.3 ? "auto" : "none",
                visibility: aboutOpacity <= 0.01 ? "hidden" : "visible",
              }}
            >
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
          </div>
        </div>
      </div>
    </section>
  );
}
