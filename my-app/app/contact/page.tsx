import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";

export const metadata = {
  title: "Contact Us - GridNox.ai",
  description: "Get in touch with GridNox.ai for GRC Automation and Cybersecurity Consulting.",
};

export default function ContactPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#08080c", paddingTop: "5rem" }}>
      <Navbar />
      <ContactUs />
    </main>
  );
}
