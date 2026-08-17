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
          At GridNox.AI,<br /> we excel in
        </h1>
        <p className="landing-hero__tagline">GRC Automation &amp; Cybersecurity Consulting</p>
      </div>
    </section>
  );
}
