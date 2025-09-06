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
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
