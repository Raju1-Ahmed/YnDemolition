import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loder";

function Contact() {
   const [loading, setLoading] = useState(true);
  
    // লোডার 1 সেকেন্ড দেখানোর জন্য
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000); // 1 সেকেন্ড
      return () => clearTimeout(timer);
    }, []);
  
    useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
    if (loading) {
      return <Loader />;
    }


  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('https://i.ibb.co.com/v4jVf4Ks/Whats-App-Image-2025-09-06-at-10-47-12-AM-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl">We’d love to hear from you. Send us a message or find us at our office.</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2">

          {/* Contact Form */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <input type="tel" placeholder="Phone" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
              <button type="submit" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">Address:</span> Brisbane QLD 4118
84 brownsplains Rd Brownsplains</p>
              <p><span className="font-semibold">Phone:</span> +61 0431270377</p>
              <p><span className="font-semibold">Email:</span> yn.enterprises.qld@gmail.com</p>
              <p><span className="font-semibold">Working Hours:</span> Mon - Fri, 8:00 AM - 5:00 PM</p>
            </div>
          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="YN Demolition Brisbane service area map"
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.001234!2d153.024!3d-27.467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a3b0!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2s!4v1693920000000!5m2!1sen!2s"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: "url('https://i.ibb.co.com/b5w2WT79/Whats-App-Image-2025-09-06-at-10-47-15-AM.jpg')" }}
        data-aos="zoom-in"
      >
        <div className="bg-black/50 px-6 py-20 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Need a Consultation?</h2>
          <p className="text-lg mb-6">Contact us today and our experts will guide you through your project.</p>
          <a href="/contact" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
            Contact Now
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;


// https://i.ibb.co.com/fdC4jRML/Whats-App-Image-2025-09-06-at-10-47-28-AM.jpg
// https://i.ibb.co.com/HTmdYf6g/Whats-App-Image-2025-09-06-at-10-47-22-AM.jpg
// https://i.ibb.co.com/nsCBXnZn/Whats-App-Image-2025-09-06-at-10-47-23-AM-1.jpg
// https://i.ibb.co.com/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg
// https://i.ibb.co.com/gMdh3qyf/Whats-App-Image-2025-09-06-at-10-47-24-AM-1.jpg
// https://i.ibb.co.com/HfX977yF/Whats-App-Image-2025-09-06-at-10-47-24-AM-2.jpg
// https://i.ibb.co.com/RpGYk351/Whats-App-Image-2025-09-06-at-10-47-24-AM.jpg
// https://i.ibb.co.com/7th9wDY4/Whats-App-Image-2025-09-06-at-10-47-25-AM-1.jpg
// https://i.ibb.co.com/7dBPGKCr/Whats-App-Image-2025-09-06-at-10-47-25-AM.jpg
// https://i.ibb.co.com/h1myZ7Rw/Whats-App-Image-2025-09-06-at-10-47-26-AM-1.jpg
// https://i.ibb.co.com/Vc8HfkBj/Whats-App-Image-2025-09-06-at-10-47-26-AM-2.jpg
// https://i.ibb.co.com/8Dr2LGFh/Whats-App-Image-2025-09-06-at-10-47-26-AM.jpg
// https://i.ibb.co.com/sp2tKNTq/Whats-App-Image-2025-09-06-at-10-47-27-AM-1.jpg
// https://i.ibb.co.com/cSN5T70H/Whats-App-Image-2025-09-06-at-10-47-27-AM.jpg
// https://i.ibb.co.com/g8r6QJn/Whats-App-Image-2025-09-06-at-10-47-28-AM-1.jpg
// https://i.ibb.co.com/kY8D2Nz/Whats-App-Image-2025-09-06-at-10-47-29-AM-1.jpg
// https://i.ibb.co.com/393nYcj9/Whats-App-Image-2025-09-06-at-10-47-29-AM.jpg
// https://i.ibb.co.com/JRn0vrPT/Whats-App-Image-2025-09-06-at-10-47-30-AM-1.jpg
// https://i.ibb.co.com/ksS3TN6N/Whats-App-Image-2025-09-06-at-10-47-34-AM-1.jpg
// https://i.ibb.co.com/DgQdZFtT/Whats-App-Image-2025-09-06-at-10-47-34-AM-2.jpg
// https://i.ibb.co.com/JR1tyQ65/Whats-App-Image-2025-09-06-at-10-47-34-AM.jpg
// https://i.ibb.co.com/C5TMwR9S/Whats-App-Image-2025-09-06-at-10-47-35-AM-1.jpg
// https://i.ibb.co.com/spGd2tFt/Whats-App-Image-2025-09-06-at-10-47-35-AM.jpg
// https://i.ibb.co.com/4wpbPbhq/Whats-App-Image-2025-09-06-at-10-47-31-AM-1.jpg
// https://i.ibb.co.com/4RJynVy0/Whats-App-Image-2025-09-06-at-10-47-31-AM-2.jpg
// https://i.ibb.co.com/SXbzPYCv/Whats-App-Image-2025-09-06-at-10-47-32-AM-1.jpg
// https://i.ibb.co.com/wrpkCR6r/Whats-App-Image-2025-09-06-at-10-47-32-AM.jpg
// https://i.ibb.co.com/8gzbhzWy/Whats-App-Image-2025-09-06-at-10-47-37-AM-1.jpg
// https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg
// https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg
// https://i.ibb.co.com/TM9xccN8/Whats-App-Image-2025-09-06-at-10-47-38-AM-2.jpg
// https://i.ibb.co.com/Q3C2bQFP/Whats-App-Image-2025-09-06-at-10-47-38-AM.jpg
// https://i.ibb.co.com/xQ44J3L/Whats-App-Image-2025-09-06-at-10-47-40-AM-1.jpg
// https://i.ibb.co.com/rfq7KH7N/Whats-App-Image-2025-09-06-at-10-47-41-AM.jpg
// https://i.ibb.co.com/v4jVf4Ks/Whats-App-Image-2025-09-06-at-10-47-12-AM-1.jpg
// https://i.ibb.co.com/zT7PVDS8/Whats-App-Image-2025-09-06-at-10-47-12-AM.jpg
// https://i.ibb.co.com/pjfKPxmC/Whats-App-Image-2025-09-06-at-10-47-13-AM-1.jpg
// https://i.ibb.co.com/qMGzB0zD/Whats-App-Image-2025-09-06-at-10-47-13-AM.jpg
// https://i.ibb.co.com/ycRwyYzN/Whats-App-Image-2025-09-06-at-10-47-14-AM-1.jpg
// https://i.ibb.co.com/VrT5dcf/Whats-App-Image-2025-09-06-at-10-47-14-AM.jpg
// https://i.ibb.co.com/mCm7XM9B/Whats-App-Image-2025-09-06-at-10-47-15-AM-1.jpg
// https://i.ibb.co.com/b5w2WT79/Whats-App-Image-2025-09-06-at-10-47-15-AM.jpg
// https://i.ibb.co.com/B2656zKV/Whats-App-Image-2025-09-06-at-10-47-16-AM.jpg
// https://i.ibb.co.com/v6y4tn8F/Whats-App-Image-2025-09-06-at-10-47-17-AM-1.jpg
// https://i.ibb.co.com/KctwrWyS/Whats-App-Image-2025-09-06-at-10-47-17-AM.jpg
// https://i.ibb.co.com/gFb7qKCJ/Whats-App-Image-2025-09-06-at-10-47-18-AM-1.jpg
// https://i.ibb.co.com/whF5NjGk/Whats-App-Image-2025-09-06-at-10-47-18-AM.jpg
// https://i.ibb.co.com/27M0WpPW/Whats-App-Image-2025-09-06-at-10-47-19-AM-1.jpg
// https://i.ibb.co.com/whsrT2Bm/Whats-App-Image-2025-09-06-at-10-47-19-AM.jpg
// https://i.ibb.co.com/Dgvmt4F2/Whats-App-Image-2025-09-06-at-10-47-20-AM-1.jpg
// https://i.ibb.co.com/bZYdyCP/Whats-App-Image-2025-09-06-at-10-47-20-AM.jpg
