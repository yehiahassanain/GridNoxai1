import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";

export const metadata = {
  title: "Contact Us | GridNox.ai",
  description:
    "Get in touch with GridNox.ai for GRC Automation, AI, and Cybersecurity Consulting.",
};

export default function ContactPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#000000" }}>
      <Navbar />
      <ContactUs />
    </main>
  );
}
