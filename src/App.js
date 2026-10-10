import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Terms from "./Pages/Terms";
import QuotePage from "./Pages/QuotePage";
import SEO, { businessSchema } from "./components/SEO";

const pageSEO = {
  home: { title: "Demolition Services Brisbane | YN Demolition", description: "Licensed residential, commercial demolition, asbestos removal and site clearance services across Brisbane, Logan, Ipswich and nearby Queensland areas.", path: "/" },
  about: { title: "About YN Demolition | Brisbane Demolition Specialists", description: "Learn about YN Demolition, our safety-first approach, experience and commitment to reliable demolition and site-clearance services.", path: "/about-us" },
  projects: { title: "Demolition Projects Brisbane | YN Demolition", description: "Explore residential, commercial, industrial and asbestos-related demolition projects delivered by YN Demolition.", path: "/projects" },
  contact: { title: "Contact YN Demolition Brisbane", description: "Contact YN Demolition for demolition, asbestos removal, site clearance and project enquiries across Brisbane and nearby areas.", path: "/contact-us" },
  quote: { title: "Request a Demolition Quote Brisbane | YN Demolition", description: "Request a clear, obligation-free demolition quote from YN Demolition for residential, commercial and site-clearance work.", path: "/get-a-quote" },
  services: { title: "Demolition Services Brisbane | YN Demolition", description: "Residential, commercial, industrial, high-rise demolition, asbestos removal and site-clearance services from YN Demolition.", path: "/services" },
  sectors: { title: "Industries We Serve | YN Demolition Brisbane", description: "Demolition and site-preparation support for homeowners, builders, developers, commercial and industrial clients.", path: "/sectors" },
  blog: { title: "Demolition Advice and News | YN Demolition", description: "Practical demolition, asbestos, safety and site-preparation insights from YN Demolition.", path: "/blog" },
};

function SEOPage({ seo, schema, children }) {
  return <><SEO {...seo} schema={schema} />{children}</>;
}

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
              <SEOPage seo={pageSEO.home} schema={businessSchema}>
                <HeroBanner />
                <Home />
              </SEOPage>
            </>
          }
        />
        <Route path="/about-us" element={<SEOPage seo={pageSEO.about}><About /></SEOPage>} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/projects" element={<SEOPage seo={pageSEO.projects}><Projects /></SEOPage>} />
        <Route path="/contact-us" element={<SEOPage seo={pageSEO.contact}><Contact /></SEOPage>} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="/get-a-quote" element={<SEOPage seo={pageSEO.quote}><QuotePage /></SEOPage>} />
        <Route path="/quote" element={<Navigate to="/get-a-quote" replace />} />
        <Route path="/services" element={<SEOPage seo={pageSEO.services}><Service /></SEOPage>} />
        <Route path="/service" element={<Navigate to="/services" replace />} />
        <Route path="/sectors" element={<SEOPage seo={pageSEO.sectors}><Sectors /></SEOPage>} />
        <Route path="/blog" element={<SEOPage seo={pageSEO.blog}><Blog /></SEOPage>} />
        <Route path="/residential-demolition" element={<SEOPage seo={{ title: "Residential Demolition Brisbane | YN Demolition", description: "Safe, planned house and residential demolition services for Brisbane property owners and knockdown rebuild projects.", path: "/residential-demolition" }}><Residentialdemolition /></SEOPage>} />
        <Route path="/residential" element={<Navigate to="/residential-demolition" replace />} />
        <Route path="/commercial-demolition" element={<SEOPage seo={{ title: "Commercial Demolition Brisbane | YN Demolition", description: "Controlled commercial demolition, strip-out and site preparation for builders, developers and commercial property owners.", path: "/commercial-demolition" }}><CommercialDemolition /></SEOPage>} />
        <Route path="/commercial" element={<Navigate to="/commercial-demolition" replace />} />
        <Route path="/high-rise-demolition" element={<SEOPage seo={{ title: "High-Rise Demolition Brisbane | YN Demolition", description: "Planned high-rise and complex structural demolition with safety, access and project coordination in Brisbane.", path: "/high-rise-demolition" }}><HighRiseDemolition /></SEOPage>} />
        <Route path="/highrise" element={<Navigate to="/high-rise-demolition" replace />} />
        <Route path="/industrial-demolition" element={<SEOPage seo={{ title: "Industrial Demolition Brisbane | YN Demolition", description: "Industrial demolition, structural removal and site-clearance support for complex Queensland projects.", path: "/industrial-demolition" }}><IndustrialDemolition /></SEOPage>} />
        <Route path="/industrial" element={<Navigate to="/industrial-demolition" replace />} />
        <Route path="/industrial-infrastructure" element={<SEOPage seo={{ title: "Industrial Infrastructure Demolition | YN Demolition", description: "Industrial infrastructure demolition and enabling works with practical planning, safety controls and site coordination.", path: "/industrial-infrastructure" }}><IndustrialInfrastructure /></SEOPage>} />
        <Route path="/industrial-infra" element={<Navigate to="/industrial-infrastructure" replace />} />
        <Route path="/asbestos-removal" element={<SEOPage seo={{ title: "Asbestos Removal Brisbane | YN Demolition", description: "Compliance-focused asbestos removal support for residential, commercial and redevelopment projects across Brisbane.", path: "/asbestos-removal" }}><AsbestosRemoval /></SEOPage>} />
        <Route path="/asbestos" element={<Navigate to="/asbestos-removal" replace />} />
        <Route path="/recycling-remediation" element={<SEOPage seo={{ title: "Recycling and Remediation Brisbane | YN Demolition", description: "Responsible demolition recycling, remediation and site recovery support for Queensland projects.", path: "/recycling-remediation" }}><RecyclingRemediation /></SEOPage>} />
        <Route path="/recycling" element={<Navigate to="/recycling-remediation" replace />} />
        <Route path="/our-story" element={<SEOPage seo={{ title: "Our Story | YN Demolition Brisbane", description: "Discover the values, experience and project approach behind YN Demolition and YN Enterprise.", path: "/our-story" }}><AboutYN /></SEOPage>} />
        <Route path="/AboutYN" element={<Navigate to="/our-story" replace />} />
        <Route path="/civil-works" element={<SEOPage seo={{ title: "Civil Works Brisbane | YN Demolition", description: "Civil works, site preparation and land-clearing support for Brisbane builders, developers and property owners.", path: "/civil-works" }}><CivilWorks /></SEOPage>} />
        <Route path="/CivilWorks" element={<Navigate to="/civil-works" replace />} />
        <Route path="/construction" element={<SEOPage seo={{ title: "Construction Support Brisbane | YN Demolition", description: "Construction transition and site-readiness support following demolition and clearance projects.", path: "/construction" }}><Construction /></SEOPage>} />
        <Route path="/Construction" element={<Navigate to="/construction" replace />} />
        <Route path="/privacy" element={<SEOPage seo={{ title: "Privacy Policy | YN Demolition", description: "Read the YN Demolition privacy policy covering enquiries, quote forms, cookies, analytics and personal information.", path: "/privacy" }}><PrivacyPolicy /></SEOPage>} />
        <Route path="/terms" element={<SEOPage seo={{ title: "Terms and Conditions | YN Demolition", description: "Read the terms and conditions for using the YN Demolition website and requesting service information.", path: "/terms" }}><Terms /></SEOPage>} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
