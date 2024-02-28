import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Homepage from "./pages/home/homepage";
import TestimonialsPage from "./pages/testimonials/testimonialspage";
import SchedulePage from "./pages/schedule/schedulepage";
import AboutFAQPage from "./pages/about/about";
import PricingPage from "./pages/pricing/pricingpage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/aboutFAQ" element={<AboutFAQPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
