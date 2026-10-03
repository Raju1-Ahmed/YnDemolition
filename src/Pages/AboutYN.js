import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Loader from "../components/Loder";

const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/3/35/Metricon_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Ausbuild_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Hotondo_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/15/Flexem_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/Leisuretex_logo.png",
];

const equipmentImages = [
  "https://i.ibb.co/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg",
  "https://i.ibb.co/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg",
  "https://i.ibb.co/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg",
  "https://i.ibb.co/RpGYk351/Whats-App-Image-2025-09-06-at-10-47-24-AM.jpg",
];

function AboutYN() {
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
        className="relative h-[70vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            YN Demolition, Civil & Construction
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-2xl mx-auto">
            Trusted across Queensland for over 15 years, delivering safe,
            professional, and high-quality demolition, civil works, and
            construction services.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition"
          >
            Contact Our Experts
          </a>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            YN Demolition, Civil & Construction is a multi-disciplined contractor
            with over 15 years of experience across demolition, civil works, and
            construction. We have built a strong reputation for quality, safety,
            and professionalism, delivering reliable outcomes for builders,
            developers, body corporate clients, and commercial property managers
            throughout Queensland.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From demolition and earthmoving to painting and construction, we
            offer a full suite of capabilities, backed by licensed operators,
            experienced crews, and modern equipment.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Capabilities
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Demolition",
                desc: "Full-site demolition, tree removal, land clearing, driveway, slab, concrete and asbestos removal.",
                icon: "🏗️",
              },
              {
                title: "Civil Works",
                desc: "Earthmoving, site cuts & fills, trenching, retaining walls, pool digs, pipe laying, and subdivision work.",
                icon: "🚜",
              },
              {
                title: "Construction",
                desc: "New home builds, renovations, bathrooms, kitchens, driveways, concreting, extensions, and pools.",
                icon: "🏠",
              },
              {
                title: "Painting Services",
                desc: "Internal & external painting, roof painting, warehouse spraying, high-rise interiors, rust protection, feature finishes.",
                icon: "🎨",
              },
            ].map((cap, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Carousel */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Equipment & Certifications
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
            {equipmentImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={img}
                    alt={`Equipment ${idx + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Clients Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {clientLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Client ${idx + 1}`}
                className="h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6 text-lg text-black">
          Contact our team of experts for a free consultation and quote.
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

export default AboutYN;
