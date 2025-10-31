import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Android from "./pages/services/Android";
import Web from "./pages/services/Web";
import UIUX from "./pages/services/UIUX";
import CRM from "./pages/services/CRM";
import Cloud from "./pages/services/Cloud";
import Security from "./pages/services/Security";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-b from-slate-50 to-white text-slate-900">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />

        <Routes>
          <Route
            path="/"
            element={<Home onOpenModal={() => setIsModalOpen(true)} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/android" element={<Android />} />
          <Route path="/services/web" element={<Web />} />
          <Route path="/services/ui-ux" element={<UIUX />} />
          <Route path="/services/crm" element={<CRM />} />
          <Route path="/services/cloud" element={<Cloud />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </BrowserRouter>
  );
};

export default App;
