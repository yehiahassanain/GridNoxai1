import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

export const metadata = {
  title: "Services - GridNox.ai",
  description: "Explore services offered by GridNox.ai.",
};

export default function ServicesPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#08080c" }}>
      <Navbar />
      <Services />
    </main>
  );
}
