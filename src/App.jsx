import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Offerings from "./components/Offerings.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <Newsletter />
        <Offerings />
      </main>
      <Footer />
    </div>
  );
}