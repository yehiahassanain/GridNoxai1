"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isContactPage = pathname === "/contact";

  useEffect(() => {
    if (pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    // Sync initial hash if present
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash === "about" || hash === "services") {
        setActiveSection(hash);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/contact") {
        setActiveSection("contact");
        return;
      }

      // Scroll spy for active section highlight on landing page
      const scrollPosition = window.scrollY + 350;
      const aboutServicesEl = document.getElementById("about-services");
      const homeEl = document.getElementById("home");

      if (homeEl && scrollPosition < (aboutServicesEl ? aboutServicesEl.offsetTop : 500)) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Listen for tab changes from inside the section
  useEffect(() => {
    if (pathname === "/contact") return;

    const handleTabActive = (e) => {
      if (e.detail === "about" || e.detail === "services") {
        setActiveSection(e.detail);
      }
    };
    window.addEventListener("gridnox-tab-active", handleTabActive);
    return () => window.removeEventListener("gridnox-tab-active", handleTabActive);
  }, [pathname]);

  const navLinks = [
    // { label: "Home", href: "/#home", id: "home" },
    { label: "Our Impact", href: "/#services", id: "services" },
    { label: "The Grid", href: "/#about", id: "about" },
  ];

  const handleNavClick = (e, href) => {
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      if (targetId === "about" || targetId === "services") {
        window.dispatchEvent(new CustomEvent("gridnox-set-tab", { detail: targetId }));
      }

      if (pathname === "/") {
        const el = document.getElementById(targetId) || document.getElementById("about-services");
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${targetId}`);
          setActiveSection(targetId);
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`raycast-navbar-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      <div className="raycast-navbar">
        {/* Left Side: Logo & Website Name */}
        <Link
          href="/#home"
          className="raycast-navbar__brand"
          onClick={(e) => handleNavClick(e, "/#home")}
        >
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

        {/* Right Side: Nav Links (Home, About, Services) & Contact Us CTA */}
        <div className="raycast-navbar__actions">
          <nav className="raycast-navbar__menu">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`raycast-navbar__link ${isActive ? "is-active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className={`raycast-navbar__cta-btn ${isContactPage ? "is-active" : ""}`}
          >
            <span>Let&apos;s talk</span>
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`raycast-navbar__mobile-link ${isActive ? "is-active" : ""}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="raycast-navbar__mobile-divider" />
          <Link
            href="/contact"
            className={`raycast-navbar__cta-btn raycast-navbar__mobile-cta ${isContactPage ? "is-active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Let&apos;s talk.</span>
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
