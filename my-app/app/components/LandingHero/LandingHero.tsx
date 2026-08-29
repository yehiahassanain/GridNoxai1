"use client";

import "./LandingHero.css";

export default function LandingHero() {
  return (
    <section id="home" className="landing-hero">
      <div className="landing-hero__video-wrapper">
        <video
          className="landing-hero__video"
          src="/data/BG-landing1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay for readability */}
        <div className="landing-hero__overlay" />
      </div>

      <div className="landing-hero__content">
        <h1 className="landing-hero__headline">
          The <span className="text-[#ef4444]">Grid </span> for Risk &amp; Cyber Resilience
        </h1>
        {/* &amp;  */}
        <p className="landing-hero__tagline">Where enterprise risk, compliance &amp; technology converge into resilient outcomes</p>
      </div>
    </section>
  );
}
