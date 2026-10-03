import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Loader from "../components/Loder";

const civilImages = [
  "https://i.ibb.co/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg",
  "https://i.ibb.co/7th9wDY4/Whats-App-Image-2025-09-06-at-10-47-25-AM-1.jpg",
  "https://i.ibb.co/7dBPGKCr/Whats-App-Image-2025-09-06-at-10-47-25-AM.jpg",
  "https://i.ibb.co/h1myZ7Rw/Whats-App-Image-2025-09-06-at-10-47-26-AM-1.jpg",
];

function CivilWorks() {
   const [loading, setLoading] = useState(true);
  
    // লোডার 1 সেকেন্ড দেখানোর জন্য
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000); // 1 সেকেন্ড
      return () => clearTimeout(timer);
    }, []);
  
  
  
    if (loading) {
      return <Loader />;
    }
    
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Civil Works Expertise
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-2xl mx-auto">
            From earthmoving to subdivision works, YN Civil & Construction delivers
            professional, efficient, and safe civil services across Queensland.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Civil Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              {
                title: "Earthmoving & Excavation",
                desc: "Efficient site cuts, fills, and trenching with modern machinery.",
                icon: "🚜",
              },
              {
                title: "Retaining Walls & Landscaping",
                desc: "Professional retaining walls, pool digs, and site levelling.",
                icon: "🏗️",
              },
              {
                title: "Pipe Laying & Subdivision Works",
                desc: "Complete pipe installation and subdivision services for residential and commercial projects.",
                icon: "💧",
              },
              {
                title: "Driveways & Concreting",
                desc: "High-quality concrete works for driveways, pathways, and slabs.",
                icon: "🛣️",
              },
              {
                title: "Site Preparation & Clearing",
                desc: "Land clearing, tree removal, and preparation for construction projects.",
                icon: "🌳",
              },
              {
                title: "Pool Digs & Special Projects",
                desc: "Custom civil works for pools, landscaping, and complex projects.",
                icon: "🏊",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment / Project Carousel */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Civil Project Gallery
          </h2>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            {civilImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={img}
                    alt={`Civil Work ${idx + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Start Your Civil Project Today
        </h2>
        <p className="mb-6 text-lg text-black">
          Our team ensures safe, timely, and professional delivery for all civil works.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg shadow hover:bg-gray-900 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default CivilWorks;
