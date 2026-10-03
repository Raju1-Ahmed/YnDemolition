import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loder";

function About() {
  const [loading, setLoading] = useState(true);

  // লোডার 1 সেকেন্ড দেখানোর জন্য
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 সেকেন্ড
    return () => clearTimeout(timer);
  }, []);

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  const team = [
    { 
      name: "John Doe", 
      role: "CEO & Founder", 
      img: "https://i.ibb.co.com/v4jVf4Ks/Whats-App-Image-2025-09-06-at-10-47-12-AM-1.jpg", 
      linkedin: "#" 
    },
    { 
      name: "Jane Smith", 
      role: "Project Manager", 
      img: "https://i.ibb.co.com/pjfKPxmC/Whats-App-Image-2025-09-06-at-10-47-13-AM-1.jpg", 
      linkedin: "#" 
    },
    { 
      name: "Michael Brown", 
      role: "Lead Engineer", 
      img: "https://i.ibb.co.com/ycRwyYzN/Whats-App-Image-2025-09-06-at-10-47-14-AM-1.jpg", 
      linkedin: "#" 
    },
  ];

  const testimonials = [
    { 
      name: "Alice Johnson", 
      role: "Client", 
      comment: "YN Demolition provided excellent service, safe and efficient!", 
      img: "https://i.ibb.co.com/mCm7XM9B/Whats-App-Image-2025-09-06-at-10-47-15-AM-1.jpg" 
    },
    { 
      name: "Robert Lee", 
      role: "Client", 
      comment: "Highly professional team with top-notch safety standards.", 
      img: "https://i.ibb.co.com/v6y4tn8F/Whats-App-Image-2025-09-06-at-10-47-17-AM-1.jpg" 
    },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32" 
        style={{backgroundImage: "url('https://i.ibb.co.com/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg')"}}
      >
        <div className="bg-black/50 py-32 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            About YN Demolition
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Queensland’s leading demolition and asbestos removal experts since 2002.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        className="py-20 bg-fixed bg-cover bg-center" 
        style={{backgroundImage: "url('https://i.ibb.co.com/j9dHZX8N/Whats-App-Image-2025-09-06-at-10-47-11-AM.jpg')"}}
      >
        <div className="bg-black/40 py-20">
          <div className="container mx-auto px-6 max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Our Story</h2>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Established in 2002, YN Demolition has grown to be Queensland’s premier provider of demolition and asbestos removal services. Our expert team delivers safe, efficient, and innovative solutions across residential, commercial, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Mission, Vision & Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-600 text-sm">To provide safe, efficient, and innovative demolition and asbestos removal services across Queensland.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-600 text-sm">To be the most trusted demolition company in Australia, known for safety, innovation, and customer satisfaction.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">Values</h3>
              <p className="text-gray-600 text-sm">Safety, Integrity, Innovation, Sustainability, and Client Satisfaction in every project we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className="py-20 bg-fixed bg-cover bg-center" 
        style={{backgroundImage: "url('https://i.ibb.co.com/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg')"}}
      >
        <div className="bg-black/50 py-20">
          <div className="container mx-auto px-6 text-center max-w-6xl text-white">
            <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Meet Our Team</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} className="bg-black/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                  <img loading="lazy" src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-500" />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-200 mb-2">{member.role}</p>
                  <a href={member.linkedin} className="text-yellow-500 hover:underline">LinkedIn</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((item, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <img loading="lazy" src={item.img} alt={item.name} className="w-20 h-20 mx-auto rounded-full mb-4 object-cover" />
                <p className="text-gray-600 mb-2">"{item.comment}"</p>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-500 text-black text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Ready to Work With Us?</h2>
        <p className="mb-6" data-aos="fade-up" data-aos-delay="100">Contact our team today and get a free consultation for your next project.</p>
        <a href="/contact" data-aos="fade-up" data-aos-delay="200" className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg hover:bg-gray-900 transition">Contact Us</a>
      </section>

    </div>

  );
}

export default About;
