import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loder";

function AsbestosRemoval() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);
 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  if (loading) {
    return <Loader />;
  }
  

 

 
  const projectImages = [
    "https://i.ibb.co/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg",
    "https://i.ibb.co/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg",
    "https://i.ibb.co/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg",
    "https://i.ibb.co/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg",
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down">
            Professional Asbestos Removal
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Safe and compliant removal of asbestos for industrial, commercial, and residential projects.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Why Asbestos Removal is Essential
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Asbestos is a hazardous material that can pose severe health risks. Our expert team ensures complete removal, adhering to safety regulations and environmental standards. We handle every step—from inspection to disposal—with precision and care.
          </p>
        </div>
      </section>

      {/* Key Hazards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Key Hazards of Asbestos</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Worker Safety", icon: "🦺" },
              { title: "Hazardous Material", icon: "☣️" },
              { title: "Air Contamination", icon: "💨" },
              { title: "Legal Compliance", icon: "📜" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={idx*150}>
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Our Asbestos Removal Process</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "Site Inspection & Risk Assessment", icon: "📍" },
              { step: "Containment & Safety Setup", icon: "🏗️" },
              { step: "Safe Asbestos Extraction", icon: "⚠️" },
              { step: "Disposal & Cleaning", icon: "♻️" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={idx*200}>
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/7dBPGKCr/Whats-App-Image-2025-09-06-at-10-47-25-AM.jpg')" }}>
        <div className="bg-black/70 py-20">
          <div className="container mx-auto px-6 text-center text-white max-w-4xl">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Safety & Compliance</h2>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Our asbestos removal process fully complies with Australian and local safety standards. We ensure the protection of workers and the community through PPE, dust control, and proper disposal methods.
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Our Completed Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg group" data-aos="zoom-in" data-aos-delay={idx*200}>
                <img src={img} alt="Project" className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How long does asbestos removal take?", a: "Depending on the size and location, it may take from a few days to several weeks." },
              { q: "Is it safe to stay in the building during removal?", a: "No, all occupants must vacate the site until the removal is complete and the area is safe." },
              { q: "How is asbestos waste disposed?", a: "We follow strict regulatory procedures to safely package, transport, and dispose of asbestos waste at licensed facilities." },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 border rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={idx*150}>
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
          Need Safe Asbestos Removal?
        </h2>
        <p className="mb-6 text-lg" data-aos="fade-up" data-aos-delay="100">
          Contact our certified professionals for a free consultation.
        </p>
        <a href="/contact" className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg shadow hover:bg-gray-900 transition" data-aos="fade-up" data-aos-delay="200">
          Contact Us
        </a>
      </section>

    </div>
  );
}

export default AsbestosRemoval;
