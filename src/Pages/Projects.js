import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import demolitionMachine from "../Assets/IMG-20260519-WA0018.jpg.jpeg";
import stripOut from "../Assets/IMG-20260519-WA0022.jpg.jpeg";
import demolitionProgress from "../Assets/IMG-20260523-WA0006.jpg.jpeg";
import clearedSite from "../Assets/IMG-20260725-WA0008.jpg.jpeg";

const PROJECT_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "High-Rise",
  "Infrastructure",
  "Asbestos",
];

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  const projects = [
    {
      title: "Residential Site Clearing",
      category: "Residential",
      image: "https://i.ibb.co.com/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg",
      link: "/projects/residential-site-clearing",
    },
    {
      title: "Commercial Demolition",
      category: "Commercial",
      image: "https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg",
      link: "/projects/commercial-demolition",
    },
    {
      title: "Industrial Warehouse Removal",
      category: "Industrial",
      image: "https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg",
      link: "/projects/industrial-warehouse-removal",
    },
    {
      title: "Bridge Demolition",
      category: "Infrastructure",
      image: "https://i.ibb.co.com/Hf7rxqVP/Whats-App-Image-2025-09-05-at-9-38-08-PM.jpg",
      link: "/projects/bridge-demolition",
    },
    {
      title: "Residential Machine Demolition",
      category: "Residential",
      image: demolitionMachine,
      link: "/residential",
    },
    {
      title: "House Strip-Out & Removal",
      category: "Residential",
      image: stripOut,
      link: "/residential",
    },
    {
      title: "Controlled Demolition Progress",
      category: "Commercial",
      image: demolitionProgress,
      link: "/commercial",
    },
    {
      title: "Cleared Site Handover",
      category: "Infrastructure",
      image: clearedSite,
      link: "/civil-works",
    },
  ];

  const requestedCategory = searchParams.get("category");
  const initialCategory = PROJECT_CATEGORIES.includes(requestedCategory)
    ? requestedCategory
    : "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const nextCategory = PROJECT_CATEGORIES.includes(requestedCategory)
      ? requestedCategory
      : "All";
    setActiveCategory(nextCategory);
  }, [requestedCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setSearchParams({});
      return;
    }

    setSearchParams({ category });
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section with Background Image */}
      <section
        className="relative text-center py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co.com/RpmhV3Ys/Whats-App-Image-2025-09-05-at-9-38-01-PM.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10" data-aos="fade-down">
          <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg text-gray-200" data-aos="fade-up" data-aos-delay="200">
            See our completed and ongoing projects across sectors.
          </p>
        </div>
      </section>

      {/* Categories Section (Plain Background) */}
      <section className="py-12 text-center bg-gray-50">
        <div className="inline-block p-6 rounded-lg">
          <div className="flex flex-wrap justify-center gap-4">
            {PROJECT_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-200 text-gray-700 hover:bg-yellow-400 hover:text-black"
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section (Background Image) */}
      <section
        className="py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co.com/CKMPF4Wy/Whats-App-Image-2025-09-06-at-10-47-10-AM.jpg')" }}
      >
        <div className="container mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500"
            >
              <img
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <a
                  href={project.link}
                  className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition inline-block"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section (Plain Background) */}
      <section className="py-20 text-center bg-gray-100 text-gray-800">
        <div className="p-12 rounded-lg container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="mt-2">Projects Completed</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="mt-2">Clients Served</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold">0</h2>
            <p className="mt-2">Safety Incidents</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="mt-2">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section (Background Image) */}
      <section
        className="relative py-32 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/tpHj62r0/Whats-App-Image-2025-09-06-at-10-47-09-AM.jpg')",
        }}
      >
        <div className="bg-black/50 p-12 rounded-lg inline-block" data-aos="zoom-in">
          <h2 className="text-4xl font-bold mb-4">Start Your Project Today</h2>
          <p className="mb-6">Contact us for a free consultation and project estimate.</p>
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
