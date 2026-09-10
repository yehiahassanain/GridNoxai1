import Navbar from "../components/Navbar/Navbar";
import AboutServices from "../components/AboutServices/AboutServices";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "About Us — Navigating Cyber Risk & Compliance",
  description:
    "Built for organizations where risk is not theoretical. Learn how GridNox helps regulated enterprises navigate cyber risk, compliance, and digital transformation.",
  openGraph: {
    title: "About GridNox.ai — Navigating Cyber Risk & Compliance",
    description:
      "Built for organizations where risk is not theoretical. GridNox helps regulated enterprises navigate cyber risk, compliance and transformation.",
    url: "https://www.gridnox.ai/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#000000" }}>
      <Navbar />
      <AboutServices initialTab="about" />
      <Footer />
    </main>
  );
}

