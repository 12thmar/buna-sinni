import { PromoBar } from "../components/PromoBar";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Story } from "../components/Story";
import { Newsletter } from "../components/Newsletter";
import { Offerings } from "../components/Offerings";
import { ContactQuote } from "../components/ContactQuote";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5efe9] text-[#2a2018]">
      <PromoBar />
      <NavBar />
      <Hero />
      <Story />
      <Newsletter />
      <Offerings />
      <ContactQuote />
      <Footer />
    </div>
  );
}
