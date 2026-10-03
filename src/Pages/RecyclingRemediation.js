import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function RecyclingRemediation() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down">
            Recycling & Remediation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Innovative and sustainable solutions for waste recycling and environmental remediation.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Sustainable Solutions for a Cleaner Planet
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Our Recycling & Remediation services focus on reducing environmental impact, managing waste responsibly, and restoring contaminated sites to safe conditions.
          </p>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Our Core Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Waste Sorting & Recycling", img: "https://i.ibb.co/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg" },
              { title: "Soil & Water Remediation", img: "https://i.ibb.co/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg" },
              { title: "Hazardous Material Handling", img: "https://i.ibb.co/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg" },
              { title: "Site Decontamination", img: "https://i.ibb.co/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg" },
            ].map((service, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition" data-aos="zoom-in" data-aos-delay={idx * 200}>
                <img src={service.img} alt={service.title} className="w-full h-64 object-cover" />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Our Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "Inspection & Assessment", img: "https://i.ibb.co/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg" },
              { step: "Planning & Strategy", img: "https://i.ibb.co/RpGYk351/Whats-App-Image-2025-09-06-at-10-47-24-AM.jpg" },
              { step: "Recycling Execution", img: "https://i.ibb.co/7th9wDY4/Whats-App-Image-2025-09-06-at-10-47-25-AM-1.jpg" },
              { step: "Site Remediation & Monitoring", img: "https://i.ibb.co/7dBPGKCr/Whats-App-Image-2025-09-06-at-10-47-25-AM.jpg" },
              { step: "Reporting & Certification", img: "https://i.ibb.co/h1myZ7Rw/Whats-App-Image-2025-09-06-at-10-47-26-AM-1.jpg" },
            ].map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={idx * 150}>
                <img src={item.img} alt={item.step} className="w-full h-64 object-cover" />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold">{item.step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental & Safety Compliance */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/cSN5T70H/Whats-App-Image-2025-09-06-at-10-47-27-AM.jpg')" }}>
        <div className="bg-black/70 py-20">
          <div className="container mx-auto px-6 text-center text-white max-w-4xl">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Environmental & Safety Compliance</h2>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              We strictly adhere to environmental regulations, safety standards, and sustainable practices to minimize risks and protect the community.
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "https://i.ibb.co/Vc8HfkBj/Whats-App-Image-2025-09-06-at-10-47-26-AM-2.jpg",
              "https://i.ibb.co/8Dr2LGFh/Whats-App-Image-2025-09-06-at-10-47-26-AM.jpg",
              "https://i.ibb.co/sp2tKNTq/Whats-App-Image-2025-09-06-at-10-47-27-AM-1.jpg",
            ].map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg group" data-aos="zoom-in" data-aos-delay={idx * 200}>
                <img src={img} alt="Project" className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How long does remediation take?", a: "The duration varies depending on contamination levels and site size. Detailed assessments provide accurate timelines." },
              { q: "Do you recycle materials?", a: "Yes, we ensure all recyclable materials are processed according to sustainability standards." },
              { q: "Is the process safe for the surrounding community?", a: "Absolutely. Strict safety protocols and environmental monitoring are always in place." },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 border rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={idx * 150}>
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up">Need Recycling & Remediation Services?</h2>
        <p className="mb-6 text-lg text-white" data-aos="fade-up" data-aos-delay="100">Get in touch with our environmental experts today for a sustainable solution.</p>
        <a href="/contact" className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition" data-aos="fade-up" data-aos-delay="200">Contact Us</a>
      </section>

    </div>
  );
}

export default RecyclingRemediation;
