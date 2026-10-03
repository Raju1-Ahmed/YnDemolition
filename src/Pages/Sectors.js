import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

function Sectors() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sectors = [
    {
      title: "Residential Demolition",
      desc: "Safe and efficient demolition for houses and residential buildings.",
      image: "https://i.ibb.co.com/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg",
      // link: "/services/residential"
    },
    {
      title: "Commercial Projects",
      desc: "Expert handling of commercial and multi-storey demolitions.",
      image: "https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg",
      // link: "/services/commercial"
    },
    {
      title: "Industrial Infrastructure",
      desc: "Specialized solutions for large-scale industrial demolitions.",
      image: "https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg",
      // link: "/services/industrial"
    },
    {
      title: "High-Rise Demolition",
      desc: "Safe demolition of high-rise and urban structures.",
      image: "https://i.ibb.co.com/Hf7rxqVP/Whats-App-Image-2025-09-05-at-9-38-08-PM.jpg",
      // link: "/services/highrise"
    },
    {
      title: "Asbestos & Hazardous Removal",
      desc: "Certified asbestos and hazardous material removal.",
      image: "https://i.ibb.co.com/S4YhBTxD/Whats-App-Image-2025-09-05-at-9-38-07-PM.jpg",
      // link: "/services/asbestos"
    },
    {
      title: "Recycling & Remediation",
      desc: "Responsible recycling and remediation solutions.",
      image: "https://i.ibb.co.com/7dJ7zTwy/Whats-App-Image-2025-09-05-at-9-38-05-PM.jpg",
      // link: "/services/recycling"
    },
  ];

  const featuredProjects = [
    {
      title: "Bridge Demolition",
      desc: "Safe demolition of old bridge structures.",
      image: "https://i.ibb.co.com/Hf7rxqVP/Whats-App-Image-2025-09-05-at-9-38-08-PM.jpg",
    },
    {
      title: "High-Rise Building",
      desc: "Demolition in dense urban areas.",
      image: "https://i.ibb.co.com/7dJ7zTwy/Whats-App-Image-2025-09-05-at-9-38-05-PM.jpg",
    },
    {
      title: "Industrial Warehouse",
      desc: "Clearing and preparing industrial sites.",
      image: "https://i.ibb.co.com/gLpCbYJ4/Whats-App-Image-2025-09-05-at-9-38-04-PM.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section 
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: "url('https://i.ibb.co.com/27M0WpPW/Whats-App-Image-2025-09-06-at-10-47-19-AM-1.jpg')"}}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white" data-aos="fade-down">Our Sectors</h1>
          <p className="text-lg text-gray-200 mt-4" data-aos="fade-up" data-aos-delay="200">Explore the areas we excel in across Queensland</p>
        </div>
      </section>

      {/* Sector Overview Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Sectors We Serve</h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx*150}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500"
              >
                <img loading="lazy" src={sector.image} alt={sector.title} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-2xl text-white font-bold">{sector.title}</h3>
                  <p className="text-gray-200 mt-2">{sector.desc}</p>
                  <a href={sector.link} className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Featured Projects</h2>
          <Slider {...sliderSettings}>
            {featuredProjects.map((project, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx*150} className="px-3">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500">
                  <img loading="lazy" src={project.image} alt={project.title} className="w-full h-64 object-cover"/>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Stats / Achievements */}
      <section className="py-20 bg-yellow-500 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-5xl font-bold">500+</h3>
              <p>Projects Completed</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-5xl font-bold">20+</h3>
              <p>Years Experience</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-5xl font-bold">100+</h3>
              <p>Clients Served</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-5xl font-bold">0</h3>
              <p>Safety Incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="h-80 bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: "url('https://i.ibb.co.com/CKMPF4Wy/Whats-App-Image-2025-09-06-at-10-47-10-AM.jpg')"}}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-aos="fade-down">Discuss Your Project</h2>
          <a href="/contact" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition" data-aos="fade-up" data-aos-delay="200">Get a Quote</a>
        </div>
      </section>

    </div>
  );
}

export default Sectors;
