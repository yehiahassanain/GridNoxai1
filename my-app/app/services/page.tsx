import Navbar from "../components/Navbar/Navbar";
import AboutServices from "../components/AboutServices/AboutServices";

export const metadata = {
  title: "Our Services | GridNox.ai",
  description:
    "Where we create impact. Specialist expertise and intelligent technology that turn risk, regulation and complexity into resilient outcomes.",
};

export default function ServicesPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#000000" }}>
      <Navbar />
      <AboutServices initialTab="services" />
    </main>
  );
}

