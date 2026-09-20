export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GridNox.ai",
    alternateName: [
      "GridNox",
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
      "gridenox",
      "gridnoxai",
    ],
    url: "https://www.gridnox.ai",
    logo: "https://www.gridnox.ai/data/Logo.png",
    description:
      "GridNox helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, and automation.",
    sameAs: [
      "https://www.linkedin.com/company/gridnox",
      "https://www.gridnox.ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      url: "https://www.gridnox.ai/contact",
      contactType: "customer service",
      availableLanguage: "English",
    },
    knowsAbout: [
      "GRC Automation",
      "Cybersecurity Consulting",
      "AI Governance",
      "Operational Resilience",
      "Cyber Risk Management",
      "Regulatory Compliance",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GridNox.ai",
    alternateName: [
      "GridNox",
      "gridnox",
      "gridnox.ai",
      "gidenox",
      "gidnox",
      "gridnoks",
      "gridenox",
      "gridnoxai",
    ],
    url: "https://www.gridnox.ai",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.gridnox.ai/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

