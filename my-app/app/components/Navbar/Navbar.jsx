"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header className={`raycast-navbar-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      <div className="raycast-navbar">
        {/* Left Side: Logo & Website Name */}
        <Link href="/" className="raycast-navbar__brand">
          <div className="raycast-navbar__logo-box">
            <Image
              src="/data/Logo.png"
              alt="GridNox.ai Logo"
              width={34}
              height={34}
              className="raycast-navbar__logo-img"
              priority
            />
          </div>
          <span className="raycast-navbar__brand-name">GridNox.ai</span>
        </Link>

        {/* Right Side: Nav Links (About, Services) & Contact Us Page Link */}
        <div className="raycast-navbar__actions">
          <nav className="raycast-navbar__menu">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="raycast-navbar__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="raycast-navbar__cta-btn">
            <span>Contact Us</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="raycast-navbar__cta-arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="raycast-navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Dropdown */}
      {mobileMenuOpen && (
        <div className="raycast-navbar__mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="raycast-navbar__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="raycast-navbar__mobile-divider" />
          <Link
            href="/contact"
            className="raycast-navbar__cta-btn raycast-navbar__mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Contact Us</span>
            <svg
              width="14"
              height="14"
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
          </Link>
        </div>
      )}
    </header>
  );
}
