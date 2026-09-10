import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gridnox.ai"),
  title: {
    default: "GridNox.ai — GRC, AI & Cyber Resilience for Regulated Enterprises",
    template: "%s | GridNox.ai",
  },
  description:
    "GridNox helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, and automation.",
  keywords: [
    "GridNox",
    "GridNox.ai",
    "gridnox",
    "gridnox.ai",
    "gridnox ai",
    "grid nox",
    "grid nox ai",
    "gidenox",
    "gidenox ai",
    "gidnox",
    "gidnox ai",
    "gridnoks",
    "gridnoks ai",
    "gridenox",
    "gridenox ai",
    "gridnoxai",
    "GRC automation",
    "cybersecurity consulting",
    "AI governance",
    "operational resilience",
    "cyber risk management",
    "compliance automation",
    "regulatory compliance",
    "enterprise risk management",
    "information security",
    "digital transformation",
    "GRC platform",
    "cyber resilience",
  ],
  authors: [{ name: "GridNox.ai", url: "https://www.gridnox.ai" }],
  creator: "GridNox.ai",
  publisher: "GridNox.ai",
  applicationName: "GridNox.ai",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/data/Logo.png",
    shortcut: "/data/Logo.png",
    apple: "/data/Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gridnox.ai",
    siteName: "GridNox.ai",
    title: "GridNox.ai — GRC, AI & Cyber Resilience for Regulated Enterprises",
    description:
      "GridNox helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, and automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GridNox.ai — GRC, AI & Cyber Resilience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GridNox.ai — GRC, AI & Cyber Resilience for Regulated Enterprises",
    description:
      "GridNox helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, and automation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "rWGwHMYz2uiY0FHr17Gdj9TM51fTcY4ZxoXynfyBXr4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}


