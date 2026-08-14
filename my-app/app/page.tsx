import Navbar from "./components/Navbar/Navbar";
import LandingHero from "./components/LandingHero/LandingHero";
import AboutServices from "./components/AboutServices/AboutServices";

export const metadata = {
  title: "GridNox.ai | AI, GRC Automation & Cybersecurity Consulting",
  description:
    "GridNox helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, and automation.",
};

export default function Home() {
  return (
    <main style={{ position: "relative", backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <LandingHero />
      <AboutServices />
    </main>
  );
}

