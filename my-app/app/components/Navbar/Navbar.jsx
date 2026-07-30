"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Left side: Logo + Brand Name */}
        <Link href="/" className="navbar__brand">
          <Image
            src="/data/Logo.png"
            alt="GridNox.ai Logo"
            width={40}
            height={40}
            className="navbar__logo"
            priority
          />
          <span className="navbar__title">GridNox.ai</span>
        </Link>

        {/* Right side: Navigation Buttons */}
        <nav className="navbar__nav">
          <Link href="#about" className="navbar__link">
            About
          </Link>
          <Link href="#services" className="navbar__link">
            Services
          </Link>
          <Link href="#contact" className="navbar__link navbar__link--btn">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
