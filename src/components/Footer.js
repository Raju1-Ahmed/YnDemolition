import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">YN Demolition</h2>
          <p className="text-sm leading-6">
            Trusted provider of professional demolition, civil, and construction
            services across residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/residential-demolition" className="hover:text-yellow-400">Residential Demolition</Link></li>
            <li><Link to="/commercial-demolition" className="hover:text-yellow-400">Commercial Demolition</Link></li>
            <li><Link to="/high-rise-demolition" className="hover:text-yellow-400">High-Rise Demolition</Link></li>
            <li><Link to="/industrial-demolition" className="hover:text-yellow-400">Industrial & Infrastructure</Link></li>
            <li><Link to="/asbestos-removal" className="hover:text-yellow-400">Asbestos Removal</Link></li>
            <li><Link to="/recycling-remediation" className="hover:text-yellow-400">Recycling & Remediation</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about-us" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link to="/sectors" className="hover:text-yellow-400">Sectors</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
            <li><Link to="/contact-us" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 84 Browns Plains Rd, Browns Plains, Brisbane QLD 4118</li>
            <li>📞 +61 0431270377</li>
            <li>✉️ yn.enterprises.qld@gmail.com</li>
          </ul>

          {/* Quick Actions */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <a
              href="https://www.instagram.com/yn_demolition?psln=aTVnMDRoN2VweWNr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-400"
              aria-label="YN Demolition on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1CQiRsrvme/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
              aria-label="YN Demolition on Facebook"
            >
              <FaFacebookF />
            </a>
            <a href="mailto:yn.enterprises.qld@gmail.com" className="hover:text-yellow-400" aria-label="Email YN Demolition">
              <FaEnvelope />
            </a>
            <a href="tel:+610431270377" className="hover:text-yellow-400" aria-label="Call YN Demolition">
              <FaPhoneAlt />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=84+Browns+Plains+Rd+Browns+Plains+Brisbane+QLD+4118"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="Open YN Demolition location in Google Maps"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 pb-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-300">YN Demolition</span>. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-yellow-400 transition">
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/terms" className="hover:text-yellow-400 transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
