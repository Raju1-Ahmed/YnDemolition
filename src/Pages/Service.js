import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "residential",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // JSON-LD Schema Markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "YN Demolition",
    "description": "Professional demolition, asbestos removal, and site clearance services in Brisbane and Queensland",
    "url": "https://yndemolition.com.au/service",
    "telephone": "+610431270377",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "postalCode": "4000",
      "addressCountry": "AU"
    },
    "areaServed": ["Brisbane", "Logan", "Ipswich", "Gold Coast", "Queensland"],
    "serviceType": ["Residential Demolition", "Commercial Demolition", "Industrial Demolition", "High-Rise Demolition", "Asbestos Removal"],
    "priceRange": "$$"
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Encode the message for mailto
    const subject = `Quote Request - ${formData.serviceType} Demolition`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceType}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:info@yndemolition.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Show success message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", serviceType: "residential", message: "" });
      setFormSubmitted(false);
    }, 3000);
  };

  const services = [
    {
      title: "Residential Demolition",
      desc: "Safe and efficient demolition of houses and residential units.",
      fullDesc: "Whether you're clearing a single residential property or managing multiple units, our team ensures minimal disruption to surrounding areas while maintaining the highest safety standards.",
      image: "https://i.ibb.co.com/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg",
      timeline: "5-15 days",
      benefits: ["Proper waste management", "Environmental compliance", "Site clearance included", "Fast turnaround"],
      certifications: ["SafeWork NSW", "WorkCover Approved"],
      icon: "🏠"
    },
    {
      title: "Commercial Demolition",
      desc: "Expert demolition services for commercial properties.",
      fullDesc: "From retail spaces to office buildings, we handle complex commercial demolitions with precision planning and minimal business interruption.",
      image: "https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg",
      timeline: "10-30 days",
      benefits: ["Tenant coordination", "Salvage & recycling", "Hazard assessment", "Compliance documentation"],
      certifications: ["Licensed Demolisher", "SafeWork NSW"],
      icon: "🏢"
    },
    {
      title: "Industrial Demolition",
      desc: "Safe removal of large industrial structures.",
      fullDesc: "Complex industrial sites require specialized expertise. We handle machinery removal, structural dismantling, and contamination assessment with expert precision.",
      image: "https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg",
      timeline: "20-60 days",
      benefits: ["Machinery salvage", "Hazmat assessment", "Heavy equipment", "Environmental monitoring"],
      certifications: ["Class A Removalist", "Environmental Certified"],
      icon: "⚙️"
    },
    {
      title: "Bridge Demolition",
      desc: "Demolition of old bridge structures for new construction.",
      fullDesc: "Specialized bridge demolition requires engineering expertise and careful planning to ensure traffic safety and structural integrity during removal.",
      image: "https://i.ibb.co.com/Hf7rxqVP/Whats-App-Image-2025-09-05-at-9-38-08-PM.jpg",
      timeline: "30-90 days",
      benefits: ["Traffic management", "Structural analysis", "Material recycling", "Engineering certified"],
      certifications: ["Structural Engineer Approved", "RMS Certified"],
      icon: "🌉"
    },
    {
      title: "Asbestos Removal",
      desc: "Certified asbestos removal ensuring safety and compliance.",
      fullDesc: "Professional asbestos identification, containment, and removal with full EPA compliance. We ensure your property is safe for occupants and future development.",
      image: "https://i.ibb.co.com/S4YhBTxD/Whats-App-Image-2025-09-05-at-9-38-07-PM.jpg",
      timeline: "3-10 days",
      benefits: ["Full certification", "Safe containment", "Proper disposal", "Health compliance"],
      certifications: ["Class A Removalist", "Class B Removalist", "EPA Licensed"],
      icon: "🔬"
    },
    {
      title: "High-Rise Demolition",
      desc: "Demolition of multi-storey buildings in urban areas.",
      fullDesc: "Urban demolition of tall structures requires careful coordination with local authorities, surrounding properties, and public safety. We're specialists in complex high-rise projects.",
      image: "https://i.ibb.co.com/7dJ7zTwy/Whats-App-Image-2025-09-05-at-9-38-05-PM.jpg",
      timeline: "45-120 days",
      benefits: ["Traffic control", "Dust management", "Neighbour coordination", "Specialist equipment"],
      certifications: ["High-Rise Certified", "Urban Demolition Expert"],
      icon: "🏗️"
    },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Schema Markup in Head */}
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

      {/* Intro Section - Trust & Credibility */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-3 items-center">
            {/* Left - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-right">
                Why Brisbane Trusts YN Demolition
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed" data-aos="fade-right" data-aos-delay="100">
                Since our establishment, YN Demolition has been Queensland's trusted partner for safe, certified demolition and asbestos removal. With over a decade of industry expertise, we've successfully completed hundreds of projects ranging from residential units to complex industrial sites.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
                Our commitment to safety, environmental responsibility, and customer satisfaction has made us the preferred choice for property owners, contractors, and developers across Brisbane, Logan, Ipswich, Gold Coast, and beyond.
              </p>

              {/* Trust Badges */}
              <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-right" data-aos-delay="300">
                {[
                  { icon: "✓", label: "Licensed & Insured", desc: "Full compliance with Queensland regulations" },
                  { icon: "⚙", label: "Certified Asbestos Removal", desc: "Class A & B removalist certified" },
                  { icon: "🛡", label: "Safety Accredited", desc: "WorkCover and SafeWork NSW approved" },
                  { icon: "🌱", label: "Eco-Friendly Practices", desc: "Sustainable waste management & recycling" },
                ].map((badge, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="text-2xl text-amber-400">{badge.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{badge.label}</h4>
                      <p className="text-sm text-gray-400">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="space-y-6" data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition">
                <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition">
                <div className="text-4xl font-bold text-amber-400 mb-2">99.8%</div>
                <p className="text-gray-300">Safety Record</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition">
                <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
                <p className="text-gray-300">Customer Satisfaction</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition">
                <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="font-sans text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/VchScrzt/Whats-App-Image-2025-09-06-at-10-47-17-AM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white text-4xl md:text-5xl font-bold z-10" data-aos="fade-down">
          Our Services
        </h1>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">
            We provide a wide range of demolition and asbestos removal services across Queensland.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-500 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    loading="lazy"
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="text-4xl bg-white/90 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Timeline Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-amber-400 text-black px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                      ⏱️ {service.timeline}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.fullDesc}</p>

                  {/* Benefits List */}
                  <div className="mb-4 space-y-2">
                    {service.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.certifications.map((cert, cidx) => (
                      <span
                        key={cidx}
                        className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-semibold"
                      >
                        🏆 {cert}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className="block w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-xl shadow-md hover:from-amber-500 hover:to-amber-600 transition text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures safe, efficient, and transparent demolition and removal services from start to finish.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid gap-8 md:gap-6 lg:gap-8">
            {[
              {
                step: 1,
                title: "Site Assessment & Planning",
                desc: "We conduct a comprehensive site survey to evaluate structure, hazards, and requirements. Our engineers create a detailed demolition plan and timeline.",
                icon: "📋",
                details: ["Structural analysis", "Hazard identification", "Safety planning", "Quote preparation"],
                timeline: "1-3 days"
              },
              {
                step: 2,
                title: "Permits & Approvals",
                desc: "We handle all necessary permits, council approvals, and documentation. Our team manages asbestos surveys, environmental assessments, and regulatory compliance.",
                icon: "✅",
                details: ["Council permits", "Asbestos survey", "Environmental check", "Neighbor notification"],
                timeline: "1-2 weeks"
              },
              {
                step: 3,
                title: "Preparation & Safety Setup",
                desc: "We establish safety zones, install protective barriers, and arrange utility disconnections. Equipment and machinery are positioned for optimal efficiency and safety.",
                icon: "🛡️",
                details: ["Safety barriers", "Utility disconnection", "Equipment setup", "Traffic management"],
                timeline: "2-5 days"
              },
              {
                step: 4,
                title: "Demolition & Removal",
                desc: "Our skilled team executes the controlled demolition using modern equipment. We manage dust control, waste segregation, and continuous safety monitoring.",
                icon: "⚙️",
                details: ["Controlled demolition", "Dust suppression", "Waste management", "Real-time monitoring"],
                timeline: "5-45 days"
              },
              {
                step: 5,
                title: "Site Inspection & Clearance",
                desc: "Final inspection ensures all debris is removed and the site is safe. Certification of completion is provided, and the site is ready for next phase development.",
                icon: "🎯",
                details: ["Final inspection", "Debris removal", "Site certification", "Project closure"],
                timeline: "2-5 days"
              },
            ].map((process, idx) => (
              <div
                key={idx}
                className="flex gap-8 items-start"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Left - Step Number & Connector */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white font-bold text-2xl shadow-lg">
                    {process.step}
                  </div>
                  {idx < 4 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-amber-400 to-gray-200 mt-4"></div>
                  )}
                </div>

                {/* Right - Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{process.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                        ⏱️ {process.timeline}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{process.desc}</p>

                  {/* Details */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {process.details.map((detail, didx) => (
                      <div key={didx} className="flex items-center gap-2 text-sm">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process CTA */}
          <div
            className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white"
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team for a free site assessment and detailed quote. We'll guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-amber-400 text-black font-bold rounded-xl hover:bg-amber-500 transition shadow-lg"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+610431270377"
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-xl hover:bg-white/10 transition"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped Brisbane properties with professional, safe, and efficient demolition services.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            {[
              {
                title: "Residential Property in Southbank",
                type: "Residential Demolition",
                beforeImg: "https://i.ibb.co.com/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg",
                afterImg: "https://i.ibb.co.com/B2RhSPfq/Whats-App-Image-2025-09-05-at-9-38-12-PM.jpg",
                result: "Complete demolition and site clearance in 12 days",
                client: "John Mitchell",
                rating: 5,
                quote: "YN Demolition was professional, efficient, and transparent throughout the project. Highly recommend!",
                metrics: [
                  { label: "Timeline", value: "12 days" },
                  { label: "Site Size", value: "850 m²" },
                  { label: "Waste Recycled", value: "95%" }
                ]
              },
              {
                title: "Commercial Building in Brisbane CBD",
                type: "Commercial Demolition",
                beforeImg: "https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg",
                afterImg: "https://i.ibb.co.com/8nJrNbRL/Whats-App-Image-2025-09-05-at-9-38-10-PM.jpg",
                result: "Safe urban demolition with zero disruption to surrounding businesses",
                client: "Sarah Chen",
                rating: 5,
                quote: "Exceptional team. They managed the project with minimal impact on our neighboring tenants. Outstanding!",
                metrics: [
                  { label: "Duration", value: "35 days" },
                  { label: "Site Size", value: "2400 m²" },
                  { label: "Safety Record", value: "100%" }
                ]
              },
              {
                title: "Asbestos Removal in Fortitude Valley",
                type: "Asbestos Removal",
                beforeImg: "https://i.ibb.co.com/S4YhBTxD/Whats-App-Image-2025-09-05-at-9-38-07-PM.jpg",
                afterImg: "https://i.ibb.co.com/S4YhBTxD/Whats-App-Image-2025-09-05-at-9-38-07-PM.jpg",
                result: "Complete asbestos survey and certified removal with full compliance",
                client: "Michael Thompson",
                rating: 5,
                quote: "They provided complete peace of mind. Professional, certified, and fully documented. Perfect!",
                metrics: [
                  { label: "Duration", value: "8 days" },
                  { label: "Material Removed", value: "5.2 tons" },
                  { label: "Certifications", value: "Class A & B" }
                ]
              },
              {
                title: "Industrial Site Demolition - Logan",
                type: "Industrial Demolition",
                beforeImg: "https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg",
                afterImg: "https://i.ibb.co.com/9mHFcwZK/Whats-App-Image-2025-09-05-at-9-38-08-PM-1.jpg",
                result: "Complex industrial demolition with specialized equipment and environmental monitoring",
                client: "David Rodriguez",
                rating: 5,
                quote: "Handled a complex industrial site flawlessly. Their expertise and safety protocols are unmatched.",
                metrics: [
                  { label: "Duration", value: "52 days" },
                  { label: "Equipment Salvaged", value: "$180K" },
                  { label: "Site Area", value: "3.5 acres" }
                ]
              },
            ].map((caseStudy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Before/After Images */}
                <div className="relative h-64 bg-gray-200 flex overflow-hidden">
                  <div className="w-1/2 relative">
                    <img
                      src={caseStudy.beforeImg}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src={caseStudy.afterImg}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      After
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      {caseStudy.type}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(caseStudy.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400">★</span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{caseStudy.result}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
                    {caseStudy.metrics.map((metric, midx) => (
                      <div key={midx} className="text-center">
                        <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-amber-400 pl-4 mb-4">
                    <p className="text-gray-700 italic mb-2">"{caseStudy.quote}"</p>
                    <p className="text-sm font-semibold text-gray-900">— {caseStudy.client}</p>
                  </div>

                  <a
                    href="/contact"
                    className="block w-full py-2 text-center bg-amber-100 text-amber-800 font-semibold rounded-lg hover:bg-amber-200 transition"
                  >
                    Get Similar Results
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonials Carousel */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h3>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Emma Wilson",
                  role: "Property Manager",
                  company: "Brisbane Properties Ltd",
                  review: "Best demolition company in Brisbane. Professional, safe, and they always deliver on time.",
                  rating: 5
                },
                {
                  name: "Robert Chen",
                  role: "Developer",
                  company: "Urban Development Corp",
                  review: "Their expertise in complex demolitions is unmatched. They handle everything with precision.",
                  rating: 5
                },
                {
                  name: "Lisa Anderson",
                  role: "Building Owner",
                  company: "Private Client",
                  review: "Transparent communication, excellent safety standards, and fantastic value for money!",
                  rating: 5
                },
                {
                  name: "James Cooper",
                  role: "Site Manager",
                  company: "Construction Company",
                  review: "Reliable, efficient, and truly professional. We've worked with them multiple times.",
                  rating: 5
                },
                {
                  name: "Patricia Brown",
                  role: "Environmental Officer",
                  company: "Council",
                  review: "They maintain highest environmental standards. Perfect compliance record.",
                  rating: 5
                },
                {
                  name: "Mark Johnson",
                  role: "Contractor",
                  company: "Mixed Construction",
                  review: "Their attention to detail and customer service sets them apart from competitors.",
                  rating: 5
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.review}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Stats */}
          <div className="grid gap-6 md:grid-cols-4 mt-16">
            {[
              { icon: "😊", label: "Happy Clients", value: "400+" },
              { icon: "⭐", label: "Avg Rating", value: "4.9/5" },
              { icon: "✓", label: "Projects Completed", value: "500+" },
              { icon: "📍", label: "Service Areas", value: "20+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect demolition solution for your project with our comprehensive service comparison.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto rounded-3xl shadow-lg border border-gray-200" data-aos="fade-up">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="px-6 py-4 text-left font-bold">Service Type</th>
                  <th className="px-6 py-4 text-left font-bold">Timeline</th>
                  <th className="px-6 py-4 text-left font-bold">Complexity</th>
                  <th className="px-6 py-4 text-left font-bold">Cost Range</th>
                  <th className="px-6 py-4 text-left font-bold">Equipment</th>
                  <th className="px-6 py-4 text-left font-bold">Certifications</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    service: "Residential Demolition",
                    timeline: "5-15 days",
                    complexity: "⭐⭐☆☆☆ Low",
                    cost: "$8K - $25K",
                    equipment: "Excavators, Bulldozers",
                    certifications: "SafeWork NSW, WorkCover"
                  },
                  {
                    service: "Commercial Demolition",
                    timeline: "10-30 days",
                    complexity: "⭐⭐⭐☆☆ Medium",
                    cost: "$20K - $80K",
                    equipment: "Heavy machinery, Crane",
                    certifications: "Licensed, SafeWork NSW"
                  },
                  {
                    service: "Industrial Demolition",
                    timeline: "20-60 days",
                    complexity: "⭐⭐⭐⭐☆ High",
                    cost: "$50K - $250K",
                    equipment: "Specialized machinery, Cranes",
                    certifications: "Class A Removalist, Environmental"
                  },
                  {
                    service: "Bridge Demolition",
                    timeline: "30-90 days",
                    complexity: "⭐⭐⭐⭐⭐ Very High",
                    cost: "$100K - $500K+",
                    equipment: "Heavy equipment, Traffic control",
                    certifications: "Structural Engineer, RMS Certified"
                  },
                  {
                    service: "Asbestos Removal",
                    timeline: "3-10 days",
                    complexity: "⭐⭐⭐☆☆ Medium",
                    cost: "$5K - $40K",
                    equipment: "Containment, PPE, Disposal",
                    certifications: "Class A & B Removalist, EPA"
                  },
                  {
                    service: "High-Rise Demolition",
                    timeline: "45-120 days",
                    complexity: "⭐⭐⭐⭐⭐ Very High",
                    cost: "$200K - $800K+",
                    equipment: "Cranes, Rigging, Traffic control",
                    certifications: "High-Rise Specialist, Urban Expert"
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-amber-50 transition`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.service}</td>
                    <td className="px-6 py-4 text-gray-700">{row.timeline}</td>
                    <td className="px-6 py-4 text-gray-700">{row.complexity}</td>
                    <td className="px-6 py-4 text-amber-600 font-semibold">{row.cost}</td>
                    <td className="px-6 py-4 text-gray-700">{row.equipment}</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{row.certifications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden grid gap-6 md:grid-cols-2">
            {[
              {
                service: "Residential",
                timeline: "5-15 days",
                complexity: "Low",
                cost: "$8K - $25K",
                icon: "🏠"
              },
              {
                service: "Commercial",
                timeline: "10-30 days",
                complexity: "Medium",
                cost: "$20K - $80K",
                icon: "🏢"
              },
              {
                service: "Industrial",
                timeline: "20-60 days",
                complexity: "High",
                cost: "$50K - $250K",
                icon: "⚙️"
              },
              {
                service: "Bridge",
                timeline: "30-90 days",
                complexity: "Very High",
                cost: "$100K - $500K+",
                icon: "🌉"
              },
              {
                service: "Asbestos",
                timeline: "3-10 days",
                complexity: "Medium",
                cost: "$5K - $40K",
                icon: "🔬"
              },
              {
                service: "High-Rise",
                timeline: "45-120 days",
                complexity: "Very High",
                cost: "$200K - $800K+",
                icon: "🏗️"
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.service} Demolition</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-700">Timeline:</span> {item.timeline}</p>
                  <p><span className="font-semibold text-gray-700">Complexity:</span> {item.complexity}</p>
                  <p><span className="font-semibold text-amber-600">Cost:</span> {item.cost}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison CTA */}
          <div className="mt-16 bg-amber-50 rounded-3xl p-8 md:p-12 border-2 border-amber-200 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which service fits your needs?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert team will assess your project and recommend the best demolition solution. Contact us for a free consultation.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-xl hover:from-amber-500 hover:to-amber-600 transition shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our demolition and asbestos removal services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            {[
              {
                id: 0,
                question: "How long does a typical demolition project take?",
                answer: "Project timelines vary depending on the scope and complexity. Residential projects typically take 5-15 days, commercial projects 10-30 days, and industrial projects can take 20-60+ days. We provide a detailed timeline during the consultation phase."
              },
              {
                id: 1,
                question: "Do you handle asbestos removal?",
                answer: "Yes! We are Class A and Class B certified asbestos removalists. We conduct professional asbestos surveys, safe containment, and certified disposal in compliance with EPA regulations. Safety and proper handling are our top priorities."
              },
              {
                id: 2,
                question: "What permits do we need for demolition?",
                answer: "Permit requirements depend on your project type and location. We handle all council permits, asbestos surveys, environmental assessments, and neighbor notifications as part of our service. We'll guide you through the entire approval process."
              },
              {
                id: 3,
                question: "How much does demolition cost?",
                answer: "Costs vary based on property size, location, complexity, and hazards present. Residential demolition ranges $8K-$25K, commercial $20K-$80K, and industrial $50K-$250K+. We provide detailed quotes after a free site assessment."
              },
              {
                id: 4,
                question: "Is the site cleared after demolition?",
                answer: "Yes! Our service includes complete site clearance and debris removal. We sort and recycle materials whenever possible, ensuring your site is ready for next-phase development. We typically recycle 85-95% of demolition waste."
              },
              {
                id: 5,
                question: "What areas do you service?",
                answer: "We provide demolition services across Brisbane, Logan, Ipswich, Gold Coast, and surrounding areas in Queensland. Contact us to confirm service availability for your specific location."
              },
              {
                id: 6,
                question: "Are you licensed and insured?",
                answer: "Absolutely! We are fully licensed, insured, and hold all necessary certifications including SafeWork NSW approval, WorkCover coverage, and environmental certifications. Your project is protected under our comprehensive insurance."
              },
              {
                id: 7,
                question: "What is your safety record?",
                answer: "We maintain a 99.8% safety record with zero major incidents. Safety protocols, continuous training, and modern equipment are core to our operations. All staff undergo regular safety certification."
              },
              {
                id: 8,
                question: "Can you salvage valuable materials?",
                answer: "Yes! We work with salvage companies to recover valuable materials like metals, timber, and architectural elements. This reduces disposal costs and supports environmental sustainability."
              },
              {
                id: 9,
                question: "How do you manage dust and noise?",
                answer: "We use dust suppression systems, water spraying, and modern equipment to minimize dust. Demolition is typically scheduled during business hours with noise management practices that respect neighboring properties."
              },
              {
                id: 10,
                question: "Do you offer free consultations?",
                answer: "Yes! We provide free site assessments and detailed quotes. Our engineers will evaluate your project, discuss requirements, and provide transparent pricing with no hidden costs."
              },
              {
                id: 11,
                question: "What's your payment schedule?",
                answer: "We typically work on a milestone-based payment schedule: 30% deposit to confirm booking, 40% upon project commencement, and 30% upon completion. We can discuss flexible payment options for larger projects."
              },
            ].map((faq) => (
              <div
                key={faq.id}
                className="mb-4 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-bold text-gray-900 text-left">{faq.question}</span>
                  <span
                    className={`text-2xl text-amber-400 transition-transform ${
                      expandedFAQ === faq.id ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {expandedFAQ === faq.id && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a typical demolition project take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines vary depending on the scope and complexity. Residential projects typically take 5-15 days, commercial projects 10-30 days, and industrial projects can take 20-60+ days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you handle asbestos removal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We are Class A and Class B certified asbestos removalists. We conduct professional asbestos surveys, safe containment, and certified disposal in compliance with EPA regulations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What permits do we need for demolition?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Permit requirements depend on your project type and location. We handle all council permits, asbestos surveys, environmental assessments, and neighbor notifications as part of our service."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does demolition cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs vary based on property size, location, complexity, and hazards present. Residential demolition ranges $8K-$25K, commercial $20K-$80K, and industrial $50K-$250K+."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the site cleared after demolition?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our service includes complete site clearance and debris removal. We sort and recycle materials whenever possible, ensuring your site is ready for next-phase development."
                  }
                },
              ]
            })}
          </script>

          {/* FAQ CTA */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <p className="text-gray-600 mb-6">
              Still have questions? Our experts are here to help!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-xl hover:from-amber-500 hover:to-amber-600 transition shadow-lg"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Left - Benefits */}
              <div className="text-white" data-aos="fade-right">
                <h2 className="text-4xl font-bold mb-6">Ready for Your Free Quote?</h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Get a detailed, obligation-free quote from our expert demolition specialists. We'll assess your project and provide transparent pricing within 24 hours.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: "✓", text: "Free Site Assessment" },
                    { icon: "✓", text: "Detailed Quote in 24hrs" },
                    { icon: "✓", text: "No Hidden Charges" },
                    { icon: "✓", text: "Expert Consultation" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-amber-400 font-bold text-xl">{item.icon}</span>
                      <span className="text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-white/10 backdrop-blur border border-white/20 rounded-2xl">
                  <p className="text-gray-300 mb-4">
                    <span className="font-bold text-amber-400">📞 Prefer to Call?</span>
                  </p>
                  <a
                    href="tel:+610431270377"
                    className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition"
                  >
                    +61 0431 270 377
                  </a>
                  <p className="text-sm text-gray-400 mt-2">
                    Available Mon-Fri, 7AM-6PM
                  </p>
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl" data-aos="fade-left">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We've received your quote request. Our team will contact you within 24 hours with a detailed quote.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="0431 270 377"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                      >
                        <option value="residential">Residential Demolition</option>
                        <option value="commercial">Commercial Demolition</option>
                        <option value="industrial">Industrial Demolition</option>
                        <option value="bridge">Bridge Demolition</option>
                        <option value="asbestos">Asbestos Removal</option>
                        <option value="highrise">High-Rise Demolition</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        placeholder="Tell us about your project - property type, size, location, timeline, etc."
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-xl hover:from-amber-500 hover:to-amber-600 transition shadow-lg text-lg"
                    >
                      Get My Free Quote
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      🔒 Your information is safe and secure. We never share your details.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/S7Bvzc9G/Whats-App-Image-2025-09-05-at-9-38-01-PM-1.jpg')",
        }}
      >
        <div className="bg-black/60 py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
              Why Choose Us?
            </h2>
            <p className="text-lg mb-12" data-aos="fade-up" data-aos-delay="100">
              We deliver safe, efficient, and certified demolition and asbestos removal services with unmatched expertise.
            </p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[ 
                { title: "Safety First", icon: "⚡" },
                { title: "Certified Experts", icon: "🏆" },
                { title: "Fast & Efficient", icon: "⏱️" },
                { title: "Customer Focused", icon: "🤝" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 p-6 rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-500 text-black text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6" data-aos="fade-up" data-aos-delay="100">
          Contact us today to get a quote or consultation.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg shadow hover:bg-gray-900 transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Contact Us
        </a>
      </section>
      </div>
    </div>
  );
}

export default Service;
