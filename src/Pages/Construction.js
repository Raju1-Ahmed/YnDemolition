import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const portfolioImages = [
  "https://i.ibb.co/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg",
  "https://i.ibb.co/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg",
  "https://i.ibb.co/RpGYk351/Whats-App-Image-2025-09-06-at-10-47-24-AM.jpg",
  "https://i.ibb.co/8Dr2LGFh/Whats-App-Image-2025-09-06-at-10-47-26-AM.jpg",
];

const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/3/37/Metricon_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ausbuild_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/54/Hotondo_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flexem_logo.png",
];

const specializedServices = [
  { title: "Painting Services", desc: "Internal and external painting, warehouse spraying.", icon: "🎨" },
  { title: "Feature Walls", desc: "Special finishes, plastering, oil stain effects.", icon: "🖌️" },
  { title: "Roof Coating", desc: "Protective coatings for roofs and surfaces.", icon: "🏠" },
  { title: "Rust Protection", desc: "Industrial and commercial rust prevention solutions.", icon: "🔧" },
];

function Construction() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="font-sans text-gray-900">

      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://i.ibb.co/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg')",
        }}
      >
        <div className="text-center text-white px-6 md:px-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Building Excellence from Foundations to Finishes
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto drop-shadow-md">
            New homes, renovations, extensions, pools and more.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get Your Construction Project Started
          </a>
        </div>
      </section>

      {/* Construction Overview */}
      <section className="py-24 bg-gray-50 animate-slide-up">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Construction Capabilities</h2>
          <p className="text-lg text-gray-600 mb-6">
            YN Construction provides high-quality construction services for residential, commercial, and industrial projects.
          </p>
          <ul className="list-disc list-inside text-left max-w-3xl mx-auto space-y-2 text-gray-700">
            <li>New Home Builds</li>
            <li>Renovations & Extensions</li>
            <li>Bathrooms & Kitchens</li>
            <li>Driveways & Concreting</li>
            <li>Pools & Outdoor Spaces</li>
            <li>Painting & Finishes</li>
          </ul>
        </div>
      </section>

      {/* Featured Projects / Portfolio Carousel with Lightbox */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">Featured Projects</h2>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            {portfolioImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-80 md:h-96 object-cover rounded-3xl cursor-pointer hover:scale-105 transition transform"
                  onClick={() => {
                    setPhotoIndex(idx);
                    setLightboxOpen(true);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {lightboxOpen && (
            <Lightbox
              mainSrc={portfolioImages[photoIndex]}
              nextSrc={portfolioImages[(photoIndex + 1) % portfolioImages.length]}
              prevSrc={portfolioImages[(photoIndex + portfolioImages.length - 1) % portfolioImages.length]}
              onCloseRequest={() => setLightboxOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + portfolioImages.length - 1) % portfolioImages.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % portfolioImages.length)}
            />
          )}
        </div>
      </section>

      {/* Client Logos / Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">Our Valued Clients</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            {clientLogos.map((logo, idx) => (
              <img key={idx} src={logo} alt={`Client ${idx + 1}`} className="h-16 object-contain hover:scale-110 transition transform" />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <p className="text-gray-700 mb-4">“YN Construction delivered our renovation on time and beyond expectations.”</p>
              <p className="font-semibold text-gray-900">– John Smith</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <p className="text-gray-700 mb-4">“Professional team with attention to every detail.”</p>
              <p className="font-semibold text-gray-900">– Sarah Lee</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <p className="text-gray-700 mb-4">“High-quality workmanship and excellent communication throughout.”</p>
              <p className="font-semibold text-gray-900">– Michael Brown</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services / Painting & Finishes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">Specialized Services</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {specializedServices.map((service, idx) => (
              <div key={idx} className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Ready to Build Your Dream Project?
        </h2>
        <p className="mb-6 text-lg text-black">
          Contact us today and let's bring your vision to life with professional construction services.
        </p>
        <a
          href="/contact"
          className="px-10 py-4 bg-black text-yellow-500 font-bold rounded-full shadow-lg hover:bg-gray-900 transition transform hover:scale-105"
        >
          Get Started Today
        </a>
      </section>
    </div>
  );
}

export default Construction;
