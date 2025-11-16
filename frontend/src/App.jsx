import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Offerings from "./components/Offerings.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Home (your original one-page sections) */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Story />
                  <Newsletter />
                  <Offerings />
                </>
              }
            />
            {/* Contact page */}
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
