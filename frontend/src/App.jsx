import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Offerings from "./components/Offerings.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Coffees from "./components/Coffees";
import Shop from "./pages/Shop";

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
            <Route path="/products" element={<Coffees />} />
            <Route path="/shop" element={<Shop />} />
            {/* Contact page */}
            <Route path="/contactus" element={<ContactUs />} />
            <Route
              path="/shop"
              element={
                <div className="mx-auto max-w-6xl px-4 py-12">
                  <h1 className="text-3xl font-semibold">Shop</h1>
                  <p className="mt-2 text-slate-600">
                    Coming soon — shopping cart and checkout will be added here.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
