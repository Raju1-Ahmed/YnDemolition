import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ResidentialDemolition() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://i.ibb.co/7dJ7zTwy/Whats-App-Image-2025-09-05-at-9-38-05-PM.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
            Residential Demolition
          </h1>
          <p className="text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Safe, Efficient & Affordable Demolition Solutions for Homes
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            We specialize in safe and efficient residential demolition, whether it’s a single-family home,
            duplex, or small unit. Our expert team ensures compliance with all regulations and prioritizes
            safety at every stage of the project.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Our Process</h2>
          <div className="grid gap-8 md:grid-cols-5 text-center">
            {[
              { step: "1", title: "Site Inspection", img: "https://i.ibb.co/S7Bvzc9G/Whats-App-Image-2025-09-05-at-9-38-01-PM-1.jpg" },
              { step: "2", title: "Permits & Approvals", img: "https://i.ibb.co/gLpCbYJ4/Whats-App-Image-2025-09-05-at-9-38-04-PM.jpg" },
              { step: "3", title: "Utility Disconnection", img: "https://i.ibb.co/Hf7rxqVP/Whats-App-Image-2025-09-05-at-9-38-08-PM.jpg" },
              { step: "4", title: "Demolition", img: "https://i.ibb.co/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg" },
              { step: "5", title: "Site Clearance", img: "https://i.ibb.co/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg" },
            ].map((item, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}
                className="bg-gray-50 rounded-2xl shadow-lg p-4 hover:shadow-2xl transition transform hover:-translate-y-2">
                <img src={item.img} alt={item.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{item.step}. {item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg')" }}>
        <div className="bg-black/70 py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">Why Choose Us?</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { title: "Safety First", icon: "🦺" },
                { title: "Licensed Experts", icon: "🏆" },
                { title: "Fast & Efficient", icon: "⚡" },
                { title: "Affordable Pricing", icon: "💰" },
              ].map((item, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}
                  className="bg-white/10 p-6 rounded-2xl">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-up">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "How long does residential demolition take?", a: "Most projects take between 1 to 5 days depending on size." },
              { q: "Do I need council approval?", a: "Yes, council approval and permits are required before demolition." },
              { q: "Can you remove asbestos?", a: "Yes, we are certified in safe asbestos removal and disposal." },
            ].map((item, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-black text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Ready to Demolish Your Home?
        </h2>
        <p className="mb-6" data-aos="fade-up" data-aos-delay="100">
          Contact us today for a free consultation and quote.
        </p>
        <a href="/contact"
          className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg shadow hover:bg-gray-900 transition"
          data-aos="fade-up" data-aos-delay="200">
          Get a Free Quote
        </a>
      </section>
    </div>
  );
}

export default ResidentialDemolition;
