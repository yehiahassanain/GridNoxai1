import Navbar from "../components/Navbar/Navbar";
import AboutServices from "../components/AboutServices/AboutServices";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Our Services — GRC Automation, AI & Cybersecurity Consulting",
  description:
    "Specialist expertise and intelligent technology that turn risk, regulation, and complexity into resilient outcomes. Explore GridNox GRC, AI, and cybersecurity services.",
  openGraph: {
    title: "GridNox.ai Services — GRC Automation, AI & Cybersecurity Consulting",
    description:
      "Specialist expertise and intelligent technology that turn risk, regulation and complexity into resilient outcomes.",
    url: "https://www.gridnox.ai/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#000000" }}>
      <Navbar />
      <AboutServices initialTab="services" />
      <Footer />
    </main>
  );
}

