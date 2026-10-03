import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loder";

function CommercialDemolition() {
   const [loading, setLoading] = useState(true);
  
    // লোডার 1 সেকেন্ড দেখানোর জন্য
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000); // 1 সেকেন্ড
      return () => clearTimeout(timer);
    }, []);
  
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
    if (loading) {
      return <Loader />;
    }
 

  const types = [
    { title: "Office Buildings", img: "https://i.ibb.co.com/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg" },
    { title: "Shopping Centers", img: "https://i.ibb.co.com/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg" },
    { title: "Warehouses", img: "https://i.ibb.co.com/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg" },
    { title: "Schools & Hospitals", img: "https://i.ibb.co.com/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg" },
  ];

  const process = [
    { step: "Site Assessment", desc: "Thorough inspection of the site to plan safe demolition." },
    { step: "Permits & Compliance", desc: "Handling all council approvals and legal compliance." },
    { step: "Safe Demolition", desc: "Using modern equipment and certified techniques." },
    { step: "Waste Removal & Recycling", desc: "Eco-friendly disposal of materials and recycling." },
    { step: "Final Handover", desc: "Delivering a cleared, safe site ready for next construction." },
  ];

  const projects = [
    { name: "Brisbane Office Tower", img: "https://i.ibb.co.com/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg" },
    { name: "Gold Coast Shopping Center", img: "https://i.ibb.co.com/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg" },
  ];

  const faqs = [
    { q: "How long does a commercial demolition take?", a: "Depending on size, most projects take between 2–6 weeks." },
    { q: "Do you handle asbestos?", a: "Yes, we are certified for asbestos removal with safety compliance." },
    { q: "Do I need permits?", a: "We arrange all required permits and council approvals for you." },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://i.ibb.co.com/RpGYk351/Whats-App-Image-2025-09-06-at-10-47-24-AM.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white text-4xl md:text-5xl font-bold z-10" data-aos="fade-down">
          Commercial Demolition
        </h1>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Safe & Efficient Commercial Demolition</h2>
          <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
            We specialize in demolishing office buildings, shopping centers, warehouses, and more with safety, speed, and minimal disruption.
          </p>
        </div>
      </section>

      {/* Types of Commercial Demolition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Types of Commercial Demolition</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {types.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay={idx * 150}>
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/7th9wDY4/Whats-App-Image-2025-09-06-at-10-47-25-AM-1.jpg')" }}>
        <div className="bg-black/60 py-16">
          <div className="container mx-auto px-6 text-center text-white max-w-5xl">
            <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Our Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {process.map((item, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} className="bg-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Our Key Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img src={project.img} alt={project.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm">Successfully demolished with full safety compliance and efficiency.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-yellow-500 text-black text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Why Choose Us?</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6 mt-8">
          {[
            { title: "Safety First", icon: "⚡" },
            { title: "Certified Experts", icon: "🏆" },
            { title: "Fast & Efficient", icon: "⏱️" },
            { title: "Customer Focused", icon: "🤝" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={idx * 150}>
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-yellow-500 text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Need a Commercial Demolition Service?</h2>
        <p className="mb-6 text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Contact us today and get a free consultation for your next project.
        </p>
        <a href="/contact" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition" data-aos="fade-up" data-aos-delay="200">
          Contact Us
        </a>
      </section>

    </div>
  );
}

export default CommercialDemolition;
