import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HighRiseDemolition() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Updated images from your links
  const galleryImages = [
    "https://i.ibb.co/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg",
    "https://i.ibb.co/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg",
    "https://i.ibb.co/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg",
    "https://i.ibb.co/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg",
    "https://i.ibb.co/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg",
    "https://i.ibb.co/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg",
    "https://i.ibb.co/RpGYk351/Whats-App-Image-2025-09-06-at-10-47-24-AM.jpg",
    "https://i.ibb.co/7th9wDY4/Whats-App-Image-2025-09-06-at-10-47-25-AM-1.jpg",
    "https://i.ibb.co/7dBPGKCr/Whats-App-Image-2025-09-06-at-10-47-25-AM.jpg",
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
            High-Rise Demolition
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experts in controlled and safe dismantling of multi-storey buildings with modern technology and strict safety protocols.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Trusted High-Rise Demolition Experts
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            High-rise demolitions demand precision planning, cutting-edge machinery, and highly skilled professionals. We have delivered numerous successful high-rise projects with uncompromising focus on safety, efficiency, and environmental sustainability.
          </p>
        </div>
      </section>

      {/* Key Challenges */}
      <section
        className="py-20 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg')",
        }}
      >
        <div className="bg-black/70 py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
              Key Challenges in High-Rise Demolition
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[{ title: "Urban Space Limitation", icon: "🏙️" },
                { title: "Worker & Public Safety", icon: "🦺" },
                { title: "Dust & Noise Control", icon: "🌫️" },
                { title: "Strict Legal Compliance", icon: "📜" }].map((item, idx) => (
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

      {/* Project Showcase / Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Featured High-Rise Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg group"
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <img
                  src={img}
                  alt={`High-rise Project ${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
          Planning a High-Rise Demolition?
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

export default HighRiseDemolition;
