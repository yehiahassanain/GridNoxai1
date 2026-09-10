import Navbar from "./components/Navbar/Navbar";
import LandingHero from "./components/LandingHero/LandingHero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "GRC, AI & Cyber Resilience for Regulated Enterprises",
  description:
    "GridNox empowers regulated enterprises with AI-driven GRC automation, cybersecurity consulting, and operational resilience solutions. Transform risk into resilient outcomes.",
  openGraph: {
    title: "GridNox.ai — GRC, AI & Cyber Resilience for Regulated Enterprises",
    description:
      "GridNox empowers regulated enterprises with AI-driven GRC automation, cybersecurity consulting, and operational resilience solutions.",
    url: "https://www.gridnox.ai",
  },
  alternates: {
    canonical: "/",
  },
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
