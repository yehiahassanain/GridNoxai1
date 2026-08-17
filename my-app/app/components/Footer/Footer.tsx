"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <style>{`
        .site-footer {
          position: relative;
          width: 100%;
          background: #000000;
          margin-top: 60px;
        }
        // .footer-line-wrap {
        //   max-width: 1240px;
        //   margin: 0 auto;
        //   padding: 0 2rem;
        // }
        // .footer-divider {
        //   width: 100%;
        //   height: 1px;
        //   background: rgba(255, 255, 255, 0.08);
        // }
        .footer-body {
          position: relative;
          width: 100%;
          overflow: hidden;
          min-height: 140px;
          display: flex;
          align-items: center;
        }
        .footer-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        .footer-bg-img {
          object-fit: cover;
          object-position: center top;
          opacity: 0.95;
        }
        .footer-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 90% 80% at 50% 30%,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 60%,
            rgba(0, 0, 0, 0.75) 100%
          );
          pointer-events: none;
        }
        .footer-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 36px 2rem 48px 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-text {
          font-size: 0.875rem;
          color: rgba(240, 240, 245, 0.75);
          font-family: var(--font-sans, "Inter", sans-serif);
          letter-spacing: 0.03em;
        }
      `}</style>
      <footer className="site-footer">
        {/* <div className="footer-line-wrap">
          <div className="footer-divider" />
        </div> */}
        <div className="footer-body">
          <div className="footer-bg">
            <Image
              src="/data/Footer_Waves2.png"
              alt="GridNox Footer Wave Background"
              fill
              priority
              quality={95}
              className="footer-bg-img"
            />
            <div className="footer-overlay" />
          </div>
          <div className="footer-inner">
            <div className="footer-text">
              &copy; 2026 GridNox.ai
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
