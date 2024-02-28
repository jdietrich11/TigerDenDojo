import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Homepage from "./pages/home/homepage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
