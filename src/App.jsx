import React from "react";
import Portfolio from "./components/portoflio/App";
import MainPage from "./components/little-lemon/src/components/Home/MainPage";
import Reservations from "./components/little-lemon/src/components/Reservations/Reservations";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/portoflio/links/contact/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/Little-Lemon" element={<MainPage />} />
        <Route path="/Little-Lemon/Reservations" element={<Reservations />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
