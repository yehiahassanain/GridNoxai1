import Navbar from "./components/Navbar/Navbar";
import LandingHero from "./components/LandingHero/LandingHero";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <LandingHero />
    </main>
  );
}
