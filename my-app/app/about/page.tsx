import Navbar from "../components/Navbar/Navbar";
import AboutServices from "../components/AboutServices/AboutServices";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "GridNox.ai",
  description:
    "Built for organizations where risk is not theoretical. GridNox helps regulated enterprises navigate cyber risk, compliance and transformation.",
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

