import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GridNox.ai — GRC, AI & Cyber Resilience",
    short_name: "GridNox.ai",
    description:
      "GridNox helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, and automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/data/Logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/data/Logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
