import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Contact Us — Let's Talk GRC & Cybersecurity",
  description:
    "Get in touch with GridNox.ai to discuss GRC automation, AI-driven governance, and cybersecurity consulting for your enterprise. Let's build resilience together.",
  openGraph: {
    title: "Contact GridNox.ai — Let's Talk GRC & Cybersecurity",
    description:
      "Get in touch with GridNox.ai for GRC Automation, AI, and Cybersecurity Consulting.",
    url: "https://www.gridnox.ai/contact",
  },
  alternates: {
    canonical: "/contact",
  },
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


