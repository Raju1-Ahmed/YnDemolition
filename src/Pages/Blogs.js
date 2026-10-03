import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loder";

function Blog() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);
 useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  if (loading) {
    return <Loader />;
  }
  

 

  const posts = [
    {
      title: "Top 5 Safety Tips for Asbestos Removal",
      desc: "Learn essential safety measures before starting any asbestos removal project.",
      image: "https://i.ibb.co.com/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg",
      // link: "/blog/asbestos-safety-tips",
      category: "Safety",
    },
    {
      title: "The Future of Demolition in Australia",
      desc: "Explore how innovation and new technology are shaping the future of demolitions.",
      image: "https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg",
      // link: "/blog/future-of-demolition",
      category: "Technology",
    },
    {
      title: "Why Choose Licensed Contractors?",
      desc: "Understand the risks of hiring unlicensed contractors and why certified experts matter.",
      image: "https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg",
      // link: "/blog/licensed-contractors",
      category: "Guidelines",
    },
    {
      title: "Demolition Equipment Innovations",
      desc: "Check out the latest machinery making demolition safer and faster.",
      image: "https://i.ibb.co.com/Hf7rxqVP/Whats-App-Image-2025-09-05-at-9-38-08-PM.jpg",
      // link: "/blog/demolition-equipment",
      category: "Technology",
    },
  ];

  const categories = ["All", "Safety", "Technology", "Guidelines"];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/27M0WpPW/Whats-App-Image-2025-09-06-at-10-47-19-AM-1.jpg')",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">
            Our Blog
          </h1>
          <p className="text-xl" data-aos="fade-up" data-aos-delay="100">
            Latest updates, insights, and industry news
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex space-x-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-yellow-500 hover:text-white transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Latest Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                loading="lazy"
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
                <a
                  href={post.link}
                  className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / Subscription CTA */}
      <section
        className="py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/tpHj62r0/Whats-App-Image-2025-09-06-at-10-47-09-AM.jpg')",
        }}
      >
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6" data-aos="fade-up" data-aos-delay="100">
            Get the latest news and updates delivered straight to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded w-full sm:w-auto"
            />
            <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-10 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <button className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-yellow-500 hover:text-white transition">
            1
          </button>
          <button className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-yellow-500 hover:text-white transition">
            2
          </button>
          <button className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-yellow-500 hover:text-white transition">
            3
          </button>
        </div>
      </section>
    </div>
  );
}

export default Blog;

// https://i.ibb.co.com/Dg5vnzDy/Whats-App-Image-2025-09-12-at-4-46-14-PM-removebg-preview.png
// https://i.ibb.co.com/VchScrzt/Whats-App-Image-2025-09-06-at-10-47-17-AM.jpg
// https://i.ibb.co.com/8nV5v1WW/Whats-App-Image-2025-09-06-at-10-47-26-AM-1.jpg
// https://i.ibb.co.com/GQXsHgjM/Whats-App-Image-2025-09-06-at-10-47-08-AM.jpg
// https://i.ibb.co.com/S7753VX8/Whats-App-Image-2025-09-06-at-10-47-08-AM-1.jpg
// https://i.ibb.co.com/tpHj62r0/Whats-App-Image-2025-09-06-at-10-47-09-AM.jpg
// https://i.ibb.co.com/j9dHZX8N/Whats-App-Image-2025-09-06-at-10-47-11-AM.jpg
// https://i.ibb.co.com/CKMPF4Wy/Whats-App-Image-2025-09-06-at-10-47-10-AM.jpg
// https://i.ibb.co.com/bZYdyCP/Whats-App-Image-2025-09-06-at-10-47-20-AM.jpg
// https://i.ibb.co.com/Dgvmt4F2/Whats-App-Image-2025-09-06-at-10-47-20-AM-1.jpg
// https://i.ibb.co.com/27M0WpPW/Whats-App-Image-2025-09-06-at-10-47-19-AM-1.jpg
// https://i.ibb.co.com/whsrT2Bm/Whats-App-Image-2025-09-06-at-10-47-19-AM.jpg
// https://i.ibb.co.com/whF5NjGk/Whats-App-Image-2025-09-06-at-10-47-18-AM.jpg
// https://i.ibb.co.com/KctwrWyS/Whats-App-Image-2025-09-06-at-10-47-17-AM.jpg
// https://i.ibb.co.com/gFb7qKCJ/Whats-App-Image-2025-09-06-at-10-47-18-AM-1.jpg
// https://i.ibb.co.com/v6y4tn8F/Whats-App-Image-2025-09-06-at-10-47-17-AM-1.jpg
// https://i.ibb.co.com/B2656zKV/Whats-App-Image-2025-09-06-at-10-47-16-AM.jpg
// https://i.ibb.co.com/b5w2WT79/Whats-App-Image-2025-09-06-at-10-47-15-AM.jpg
// https://i.ibb.co.com/mCm7XM9B/Whats-App-Image-2025-09-06-at-10-47-15-AM-1.jpg
// https://i.ibb.co.com/VrT5dcf/Whats-App-Image-2025-09-06-at-10-47-14-AM.jpg
// https://i.ibb.co.com/ycRwyYzN/Whats-App-Image-2025-09-06-at-10-47-14-AM-1.jpg
// https://i.ibb.co.com/pjfKPxmC/Whats-App-Image-2025-09-06-at-10-47-13-AM-1.jpg
// https://i.ibb.co.com/qMGzB0zD/Whats-App-Image-2025-09-06-at-10-47-13-AM.jpg
// https://i.ibb.co.com/v4jVf4Ks/Whats-App-Image-2025-09-06-at-10-47-12-AM-1.jpg
// https://i.ibb.co.com/zT7PVDS8/Whats-App-Image-2025-09-06-at-10-47-12-AM.jpg
// https://i.ibb.co.com/rfq7KH7N/Whats-App-Image-2025-09-06-at-10-47-41-AM.jpg
// https://i.ibb.co.com/xQ44J3L/Whats-App-Image-2025-09-06-at-10-47-40-AM-1.jpg
// https://i.ibb.co.com/Q3C2bQFP/Whats-App-Image-2025-09-06-at-10-47-38-AM.jpg
// https://i.ibb.co.com/TM9xccN8/Whats-App-Image-2025-09-06-at-10-47-38-AM-2.jpg
// https://i.ibb.co.com/wrpkCR6r/Whats-App-Image-2025-09-06-at-10-47-32-AM.jpg
// https://i.ibb.co.com/8gzbhzWy/Whats-App-Image-2025-09-06-at-10-47-37-AM-1.jpg
// https://i.ibb.co.com/SXbzPYCv/Whats-App-Image-2025-09-06-at-10-47-32-AM-1.jpg
// https://i.ibb.co.com/4RJynVy0/Whats-App-Image-2025-09-06-at-10-47-31-AM-2.jpg
// https://i.ibb.co.com/4wpbPbhq/Whats-App-Image-2025-09-06-at-10-47-31-AM-1.jpg
// https://i.ibb.co.com/spGd2tFt/Whats-App-Image-2025-09-06-at-10-47-35-AM.jpg
// https://i.ibb.co.com/C5TMwR9S/Whats-App-Image-2025-09-06-at-10-47-35-AM-1.jpg
// https://i.ibb.co.com/JR1tyQ65/Whats-App-Image-2025-09-06-at-10-47-34-AM.jpg
// https://i.ibb.co.com/DgQdZFtT/Whats-App-Image-2025-09-06-at-10-47-34-AM-2.jpg
// https://i.ibb.co.com/ksS3TN6N/Whats-App-Image-2025-09-06-at-10-47-34-AM-1.jpg
// https://i.ibb.co.com/JRn0vrPT/Whats-App-Image-2025-09-06-at-10-47-30-AM-1.jpg
// https://i.ibb.co.com/393nYcj9/Whats-App-Image-2025-09-06-at-10-47-29-AM.jpg
// https://i.ibb.co.com/g8r6QJn/Whats-App-Image-2025-09-06-at-10-47-28-AM-1.jpg
// https://i.ibb.co.com/kY8D2Nz/Whats-App-Image-2025-09-06-at-10-47-29-AM-1.jpg
// https://i.ibb.co.com/cSN5T70H/Whats-App-Image-2025-09-06-at-10-47-27-AM.jpg
// https://i.ibb.co.com/sp2tKNTq/Whats-App-Image-2025-09-06-at-10-47-27-AM-1.jpg
// https://i.ibb.co.com/8Dr2LGFh/Whats-App-Image-2025-09-06-at-10-47-26-AM.jpg
// https://i.ibb.co.com/Vc8HfkBj/Whats-App-Image-2025-09-06-at-10-47-26-AM-2.jpg
// https://i.ibb.co.com/h1myZ7Rw/Whats-App-Image-2025-09-06-at-10-47-26-AM-1.jpg
// https://i.ibb.co.com/7dBPGKCr/Whats-App-Image-2025-09-06-at-10-47-25-AM.jpg
// https://i.ibb.co.com/7th9wDY4/Whats-App-Image-2025-09-06-at-10-47-25-AM-1.jpg
// https://i.ibb.co.com/RpGYk351/Whats-App-Image-2025-09-06-at-10-47-24-AM.jpg
// https://i.ibb.co.com/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg
// https://i.ibb.co.com/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg
// https://i.ibb.co.com/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg
// https://i.ibb.co.com/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg
// https://i.ibb.co.com/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg
// https://i.ibb.co.com/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg
// https://i.ibb.co.com/RpmhV3Ys/Whats-App-Image-2025-09-05-at-9-38-01-PM.jpg
// https://i.ibb.co.com/S7Bvzc9G/Whats-App-Image-2025-09-05-at-9-38-01-PM-1.jpg
// https://i.ibb.co.com/gLpCbYJ4/Whats-App-Image-2025-09-05-at-9-38-04-PM.jpg
// https://i.ibb.co.com/S4YhBTxD/Whats-App-Image-2025-09-05-at-9-38-07-PM.jpg
// https://i.ibb.co.com/7dJ7zTwy/Whats-App-Image-2025-09-05-at-9-38-05-PM.jpg
// https://i.ibb.co.com/Hf7rxqVP/Whats-App-Image-2025-09-05-at-9-38-08-PM.jpg
// https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg
// https://i.ibb.co.com/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg
// https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg