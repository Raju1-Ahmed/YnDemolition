import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function IndustrialDemolition() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down">
            Industrial & Infrastructure Demolition
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experts in safe dismantling of factories, warehouses, bridges, and industrial infrastructure with modern technology.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Trusted Industrial Demolition Experts
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Industrial demolition requires precision, specialized machinery, and highly skilled professionals. We deliver safe, efficient, and environmentally responsible demolition solutions across Queensland.
          </p>
        </div>
      </section>

      {/* Key Challenges */}
      <section
        className="py-20 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg')",
        }}
      >
        <div className="bg-black/70 py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
              Key Challenges in Industrial Demolition
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Hazardous Materials", icon: "☣️" },
                { title: "Heavy Machinery", icon: "🏗️" },
                { title: "Urban & Logistics Issues", icon: "🏭" },
                { title: "Environmental Compliance", icon: "🌿" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Our Professional Approach
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Site Inspection", icon: "📍" },
              { title: "Engineering & Planning", icon: "📐" },
              { title: "Controlled Demolition", icon: "🏗️" },
              { title: "Waste Management", icon: "♻️" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <div className="text-4xl mb-2">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg')",
        }}
      >
        <div className="bg-black/70 py-20">
          <div className="container mx-auto px-6 text-center text-white max-w-4xl">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
              Safety & Compliance
            </h2>
            <p
              className="text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We strictly follow Australian safety and environmental standards, using dust suppression, protective barriers, and continuous monitoring to ensure zero risks for workers and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Featured Industrial Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "https://i.ibb.co/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg",
              "https://i.ibb.co/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg",
              "https://i.ibb.co/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg",
              "https://i.ibb.co/7th9wDY4/Whats-App-Image-2025-09-06-at-10-47-25-AM-1.jpg",
              "https://i.ibb.co/7dBPGKCr/Whats-App-Image-2025-09-06-at-10-47-25-AM.jpg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg group"
                data-aos="zoom-in"
                data-aos-delay={idx * 200}
              >
                <img
                  src={img}
                  alt="Industrial project"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does an industrial demolition take?",
                a: "Depending on the size of the facility, it may take weeks to months with thorough planning and safety checks.",
              },
              {
                q: "Do you recycle construction waste?",
                a: "Yes, concrete, steel, and other materials are recycled to promote sustainability.",
              },
              {
                q: "Is industrial demolition safe in urban areas?",
                a: "Absolutely. We use controlled techniques, safety protocols, and environmental monitoring.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-2xl shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-500 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          Planning an Industrial Demolition?
        </h2>
        <p className="mb-6 text-lg" data-aos="fade-up" data-aos-delay="100">
          Get in touch with our expert engineers for a free consultation.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg shadow hover:bg-gray-900 transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default IndustrialDemolition;
