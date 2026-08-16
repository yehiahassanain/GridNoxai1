import Navbar from "./components/Navbar/Navbar";
import LandingHero from "./components/LandingHero/LandingHero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "GridNox.ai",
  description:
    "GridNox helps regulated and critical enterprises improve governance, cybersecurity, and operational resilience through GRC, AI, and automation.",
};

export default function Home() {
  return (
    <main style={{ position: "relative", backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <LandingHero />
      {/* <About /> */}
      <Services />
      <Footer />
    </main>
  );
}
