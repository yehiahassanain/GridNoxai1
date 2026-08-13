import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";

export const metadata = {
  title: "About Us | GridNox.ai",
  description:
    "Built for organizations where risk is not theoretical. GridNox helps regulated enterprises navigate cyber risk, compliance and transformation.",
};

export default function AboutPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#000000" }}>
      <Navbar />
      <About />
    </main>
  );
}
