import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "GridNox.ai",
  description:
    "Get in touch with GridNox.ai for GRC Automation, AI, and Cybersecurity Consulting.",
};

export default function ContactPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", width: "100%", overflowX: "hidden", backgroundColor: "#000000" }}>
      <Navbar />
      <ContactUs />
      <Footer />
    </main>
  );
}


