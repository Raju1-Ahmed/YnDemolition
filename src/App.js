import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";

// Pages imports
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Sectors from "./Pages/Sectors";
import Blog from "./Pages/Blogs";
import Residentialdemolition from "./Pages/Residentialdemolition";
import CommercialDemolition from "./Pages/CommercialDemolition";
import HighRiseDemolition from "./Pages/HighRiseDemolition";
import IndustrialDemolition from "./Pages/IndustrialDemolition";
import IndustrialInfrastructure from "./Pages/IndustrialInfrastructure";
import AsbestosRemoval from "./Pages/AsbestosRemoval";
import RecyclingRemediation from "./Pages/RecyclingRemediation";
import AboutYN from "./Pages/AboutYN";
import CivilWorks from "./Pages/CivilWorks";
import Construction from "./Pages/Construction";
import Loader from "./components/Loder";
import NotFound from "./Pages/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // প্রতিবার 1 সেকেন্ড লোডার দেখাবে
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <Home />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/residential" element={<Residentialdemolition />} />
        <Route path="/commercial" element={<CommercialDemolition />} />
        <Route path="/highrise" element={<HighRiseDemolition />} />
        <Route path="/industrial" element={<IndustrialDemolition />} />
        <Route path="/industrial-infra" element={<IndustrialInfrastructure />} />
        <Route path="/asbestos" element={<AsbestosRemoval />} />
        <Route path="/recycling" element={<RecyclingRemediation />} />
        <Route path="/AboutYN" element={<AboutYN />} />
        <Route path="/CivilWorks" element={<CivilWorks />} />
        <Route path="/Construction" element={<Construction />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
