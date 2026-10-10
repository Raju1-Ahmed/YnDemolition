import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrisbaneLandingSection from "../components/BrisbaneLandingSection";
import demolitionPromo from "../Assets/Demolation Promo R4.mp4";
import demolitionPromoTwo from "../Assets/VID-20260808-WA0009.mp4";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  const expertise = [
    {
      kicker: "Core Demolition Support",
      title: "Demolition Planning & Delivery",
      description:
        "Brisbane demolition support for homes, builders and commercial sites that need clearer planning, safer removal pathways and a more dependable project start.",
      image:
        "https://i.ibb.co.com/6M5RQJZ/Whats-App-Image-2025-09-06-at-10-47-23-AM.jpg",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      link: "/services",
      label: "Explore Demolition Services",
    },
    {
      kicker: "Site Preparation",
      title: "Civil Works Support",
      description:
        "Civil works support for site preparation, clearance coordination and early-stage project readiness where timing, access and ground conditions matter.",
      image:
        "https://i.ibb.co.com/qMGzB0zD/Whats-App-Image-2025-09-06-at-10-47-13-AM.jpg",
      buttonClass: "bg-green-600 hover:bg-green-700",
      link: "/civil-works",
      label: "View Civil Works",
    },
    {
      kicker: "Next-Stage Readiness",
      title: "Construction Transition",
      description:
        "Construction-focused support for clients moving from demolition into rebuild, redevelopment or staged site works with less confusion between project phases.",
      image:
        "https://i.ibb.co.com/B2656zKV/Whats-App-Image-2025-09-06-at-10-47-16-AM.jpg",
      buttonClass: "bg-red-600 hover:bg-red-700",
      link: "/construction",
      label: "View Construction Support",
    },
  ];

  const services = [
    {
      kicker: "For Homeowners",
      title: "Residential Demolition",
      desc: "House demolition support for knockdown rebuilds, redevelopment preparation and property owners who need a safer, cleaner start before construction begins.",
      image:
        "https://i.ibb.co.com/JR1tyQ65/Whats-App-Image-2025-09-06-at-10-47-34-AM.jpg",
      slogan: "Knockdown Rebuild Ready",
      cta: "View Residential Service",
      tags: ["House Demolition", "Site Preparation"],
      link: "/residential",
    },
    {
      kicker: "For Builders & Developers",
      title: "Commercial Demolition",
      desc: "Commercial demolition for offices, mixed-use sites and redevelopment projects that require controlled staging, clearer communication and reliable turnaround.",
      image:
        "https://i.ibb.co.com/S7Bvzc9G/Whats-App-Image-2025-09-05-at-9-38-01-PM-1.jpg",
      slogan: "Built for Project Timelines",
      cta: "View Commercial Service",
      tags: ["Commercial Sites", "Builder Coordination"],
      link: "/commercial",
    },
    {
      kicker: "For Safer Compliance",
      title: "Asbestos Removal",
      desc: "Asbestos removal support with compliance-first planning for projects that need safer decision-making before demolition, renovation or site clearance can move ahead.",
      image:
        "https://i.ibb.co.com/gLpCbYJ4/Whats-App-Image-2025-09-05-at-9-38-04-PM.jpg",
      slogan: "Compliance Before Next Steps",
      cta: "View Asbestos Service",
      tags: ["Compliance Support", "Safer Planning"],
      link: "/asbestos",
    },
  ];

  const whyChooseItems = [
    {
      title: "Brisbane-First Response and Local Service Coverage",
      text: "We prioritise Brisbane enquiries while supporting nearby service areas, helping property owners and builders get clearer direction from the start.",
      image: "https://img.icons8.com/color/96/worldwide-location.png",
      tag: "Local Priority",
    },
    {
      title: "Licensed, Safer and Compliance-Focused Delivery",
      text: "Our demolition and asbestos-related support is guided by safer planning, responsible communication and compliance-first decision making.",
      image: "https://img.icons8.com/color/96/certificate.png",
      tag: "Licensed Team",
    },
    {
      title: "Practical Planning for Faster Project Movement",
      text: "We focus on clearer scope, site readiness and dependable turnaround so clients can move from demolition into the next stage with less friction.",
      image: "https://img.icons8.com/color/96/safety-hat.png",
      tag: "Project Flow",
    },
    {
      title: "Clear Communication for Owners, Builders and Developers",
      text: "From early enquiries to active project planning, we keep communication straightforward so clients understand options, timing and likely next steps.",
      image: "https://img.icons8.com/color/96/handshake.png",
      tag: "Client Clarity",
    },
  ];

  const certifications = [
    {
      src: "https://abyssdemolition.com.au/wp-content/uploads/2024/07/Compass-ISO-9001-Stacked-Icon-V1.jpg.webp",
      title: "ISO 9001",
      label: "Quality Management",
      description:
        "Supports a more consistent approach to service quality, project communication and operational control.",
    },
    {
      src: "https://abyssdemolition.com.au/wp-content/uploads/2024/07/Compass-ISO-45001-Stacked-Icon-V1.jpg.webp",
      title: "ISO 45001",
      label: "Safety Management",
      description:
        "Reinforces a stronger focus on safer work practices, site planning and risk-aware project delivery.",
    },
    {
      src: "https://abyssdemolition.com.au/wp-content/uploads/2024/07/Compass-ISO-14001-Stacked-Icon-V1.jpg.webp",
      title: "ISO 14001",
      label: "Environmental Management",
      description:
        "Reflects a more responsible approach to environmental considerations, waste handling and site impact.",
    },
    {
      src: "https://abyssdemolition.com.au/wp-content/uploads/2024/05/DAIA-Logo-Short.jpg.webp",
      title: "DAIA",
      label: "Industry Association",
      description:
        "Demonstrates alignment with recognised demolition industry standards and sector-based professional expectations.",
    },
  ];

  const projects = [
    {
      kicker: "Residential Demolition",
      title: "Brisbane House Demolition Project",
      desc: "A residential demolition scope planned for safer removal, cleaner site presentation and smoother transition into the rebuild stage.",
      outcome: "Cleaner handover for next-stage construction planning.",
      tags: ["Brisbane", "House Demolition"],
      image: "https://assets.architectureanddesign.com.au/4_demo_fad4dda37a.jpg",
      link: "/projects?category=Residential",
    },
    {
      kicker: "Commercial Demolition",
      title: "Commercial Building Demolition",
      desc: "Commercial demolition work coordinated around site control, clearer staging and the safety expectations required for larger redevelopment environments.",
      outcome: "Structured removal approach for builder and developer teams.",
      tags: ["Commercial", "Redevelopment"],
      image:
        "https://images.squarespace-cdn.com/content/v1/58af97f5440243fe3d552306/67128abd-6627-4c7d-a9c6-63a601db4c14/Building-Demolition-Changed.jpg",
      link: "/projects?category=Commercial",
    },
    {
      kicker: "Compliance Support",
      title: "Asbestos Removal Project",
      desc: "An asbestos-focused project delivered with stronger planning, compliance awareness and safer decision-making before wider demolition activities moved ahead.",
      outcome: "Compliance-first preparation before demolition progression.",
      tags: ["Asbestos", "Safety"],
      image:
        "https://www.asbestos.co.nz/wp-content/uploads/2024/08/scientist-wear-chemical-protection-suit-check-dang-2023-11-27-04-51-51-utc-min-scaled-1-1024x683.jpg",
      link: "/projects?category=Asbestos",
    },
    {
      kicker: "Industrial Clearance",
      title: "Industrial Site Clearance",
      desc: "A large-scale clearance project supported by practical sequencing, site-readiness planning and clearer coordination for the next project phase.",
      outcome: "Improved readiness for follow-on industrial works.",
      tags: ["Industrial", "Site Clearance"],
      image:
        "https://hirltd.co.uk/wp-content/uploads/2024/11/WhatsApp-Image-2023-11-29-at-17.57.04-2-1170x517.webp",
      link: "/projects?category=Industrial",
    },
    {
      kicker: "Interior Strip-Out",
      title: "Office Interior Strip-Out",
      desc: "A commercial interior strip-out prepared for renovation and redesign with clearer access planning, controlled removal and cleaner space recovery.",
      outcome: "Interior reset completed for refurbishment planning.",
      tags: ["Commercial", "Strip-Out"],
      image:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcQIxtGOhZjzK5bsSeqhzTkpPsTdyRgG_iJPRC98PCoQGTWL9sW10q1yJcHeyDGVdtQOmy8O7U-9",
      link: "/projects?category=Commercial",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Project Manager, BuildCo",
      tag: "Commercial Demolition",
      review:
        "YN Demolition handled our commercial site demolition with clear communication, strong site control and a practical approach that helped our wider project stay organised.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Property Developer",
      tag: "Asbestos & Planning",
      review:
        "We were impressed by how the team explained the asbestos-related process and helped us move through the next planning stage with more confidence.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Lee",
      role: "Civil Engineer, UrbanWorks",
      tag: "Site Clearance",
      review:
        "From first discussions through to site-clearance coordination, the communication was straightforward and the overall process felt much easier to manage.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  const serviceAreas = [
    {
      title: "Brisbane",
      description:
        "Primary focus area for residential, commercial, and site-clearance enquiries.",
    },
    {
      title: "Logan",
      description:
        "Fast response for property owners, builders, and redevelopment projects.",
    },
    {
      title: "Ipswich",
      description:
        "Support for demolition, asbestos removal, and land preparation jobs.",
    },
    {
      title: "Gold Coast",
      description:
        "Ideal for time-sensitive demolition scopes and redevelopment planning.",
    },
    {
      title: "Sunshine Coast",
      description:
        "Structured project support for builders and private property owners.",
    },
    {
      title: "Moreton Bay",
      description:
        "Coverage for house demolition, site clearance, and pre-construction works.",
    },
  ];

  const faqs = [
    {
      question: "What demolition services do you provide?",
      answer:
        "We handle residential demolition, commercial demolition, asbestos removal, site clearance, and related enabling works.",
    },
    {
      question: "Do you service areas outside Brisbane?",
      answer:
        "Yes. Brisbane is the priority area, but we also support nearby locations including Logan, Ipswich, Gold Coast, Sunshine Coast, and Moreton Bay.",
    },
    {
      question: "Can I request a quote before finalising my project scope?",
      answer:
        "Yes. Early quote requests help identify scope, likely access issues, and the right demolition pathway before construction starts.",
    },
    {
      question: "Do you help with asbestos-related enquiries?",
      answer:
        "Yes. We provide asbestos-related service guidance and can support projects where safe removal and compliance are required.",
    },
    {
      question: "Who is this service best suited for?",
      answer:
        "Our services are best suited for property owners, builders, developers, and clients preparing sites for renovation or redevelopment.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <BrisbaneLandingSection />

      <section className="bg-[#0d1418] py-16 text-white">
        <div className="container mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
              <video autoPlay loop muted playsInline controls preload="metadata" className="aspect-[4/5] h-full w-full object-cover">
                <source src={demolitionPromo} type="video/mp4" />
                Your browser does not support the video player.
              </video>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
              <video autoPlay loop muted playsInline controls preload="metadata" className="aspect-[4/5] h-full w-full object-cover">
                <source src={demolitionPromoTwo} type="video/mp4" />
                Your browser does not support the video player.
              </video>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
              Our Work in Action
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              See the work behind every cleared site
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              See the machinery, planning and controlled demolition work that
              help move Brisbane projects from an existing structure to a
              clean, ready-to-use site.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-blue-700">
              Brisbane Service Overview
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Brisbane Demolition, Civil and Site-Clearance Services That Keep
              Projects Moving
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Whether you need house demolition, commercial demolition,
              asbestos-related support or site preparation, our service approach
              is built around clearer planning, safer execution and a smoother
              handover into the next project stage.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Brisbane Priority Service",
              "Residential to Commercial Support",
              "Quote-Friendly Planning",
            ].map((point) => (
              <span
                key={point}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl md:p-6"
              >
                <div className="relative z-10 text-left">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-gray-200 transition-colors duration-300 group-hover:border-blue-500 md:h-24 md:w-24">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.24em] text-blue-600">
                        {item.kicker}
                      </p>
                      <h3 className="mt-2 text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-gray-600 md:text-[15px]">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className={`mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] ${item.buttonClass}`}
                  >
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-gray-200 bg-white shadow-xl transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-gray-900 shadow">
                    {service.kicker}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-gray-900 shadow-lg">
                      {service.cta}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col bg-white p-6 text-left sm:p-7">
                  <h3 className="text-2xl font-bold leading-tight text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600 md:text-[15px]">
                    {service.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-yellow-700">
                    {service.slogan}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-gray-500 md:text-base">
            Need help deciding which service fits your project? Start with a
            quote request and we can guide you toward the right demolition,
            civil or asbestos-related pathway.
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-16 md:bg-fixed md:py-20"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/j9dHZX8N/Whats-App-Image-2025-09-06-at-10-47-11-AM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,16,0.9),rgba(7,12,16,0.8)_34%,rgba(7,12,16,0.92))]"></div>

        <div className="relative container mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-200">
              Brisbane Trust Signals
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Why Brisbane Clients Choose YN Demolition for Safer Project
              Planning
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-200 md:text-lg md:leading-8">
              Property owners, builders and developers choose YN Demolition for
              clearer communication, licensed support, better site-readiness
              planning and a more dependable path into demolition, asbestos
              removal and clearance works.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Brisbane Priority",
              "Licensed Support",
              "Clearer Project Direction",
            ].map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/92 p-5 text-left shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl md:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-14 w-14 shrink-0"
                  />
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-amber-800">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold leading-tight text-gray-900 md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-300 md:text-base">
            If you need a Brisbane demolition team that values clarity,
            readiness and safer project movement, this is the part of the
            process where we help remove uncertainty before work begins.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-emerald-700">
              Compliance and Trust
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Certifications and Licenses That Support Safer Brisbane
              Demolition Projects
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Our certifications and industry alignment help reinforce the
              quality, safety and environmental standards clients expect when
              planning demolition, asbestos-related work and site preparation
              across Brisbane and nearby service areas.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Quality-Focused Delivery",
              "Safety-Led Planning",
              "Compliance-First Support",
            ].map((point) => (
              <span
                key={point}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-[1.8rem] border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 text-left shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl md:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="h-16 w-auto shrink-0 md:h-20"
                  />
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-800">
                    {cert.label}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {cert.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-[15px]">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-gray-500 md:text-base">
            For Brisbane property owners, builders and developers, these trust
            signals help show that project quality, safer planning and
            compliance are treated as part of the job from the beginning.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-700">
              Brisbane Project Examples
            </p>
            <h2 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-5xl">
              Featured Demolition Projects That Show How Work Moves Forward
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Explore project examples that highlight how demolition, asbestos
              removal and clearance work can be planned more clearly for
              Brisbane property owners, builders and redevelopment teams.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Residential and Commercial Examples",
              "Safer Planning Focus",
              "Project-Readiness Outcomes",
            ].map((point) => (
              <span
                key={point}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={18}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1.15, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1200: { slidesPerView: 3, spaceBetween: 28 },
              }}
              className="pb-10"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.title} className="h-auto">
                  <div className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-gray-200 bg-white shadow-lg transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                    <div className="relative h-52 overflow-hidden sm:h-60">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-gray-900 shadow">
                        {project.kicker}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 text-left sm:p-7">
                      <h3 className="text-2xl font-bold leading-tight text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-gray-600 md:text-[15px]">
                        {project.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="mt-5 text-sm leading-7 text-gray-500">
                        {project.outcome}
                      </p>

                      <Link
                        to={project.link}
                        className="mt-6 inline-flex w-fit rounded-full bg-yellow-500 px-5 py-3 text-sm font-bold text-gray-900 shadow transition hover:bg-yellow-400"
                      >
                        View Related Projects
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-gray-500 md:text-base">
            These featured projects are here to help visitors understand the
            type of demolition planning, project control and site-readiness
            outcomes they can expect before requesting a quote.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-violet-700">
              Client Feedback
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              What Brisbane Clients Say About Working With YN Demolition
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Feedback from project stakeholders helps show how our demolition,
              asbestos-related support and site-clearance planning are
              experienced by the people who rely on clearer communication and
              dependable project movement.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Builder and Owner Feedback",
              "Communication-Focused",
              "Project Confidence",
            ].map((point) => (
              <span
                key={point}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="px-1.5 sm:px-2.5">
                  <div className="relative overflow-hidden rounded-[1.9rem] border border-gray-200 bg-white p-6 text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 md:p-8">
                    <div className="absolute right-5 top-5 text-yellow-200">
                      <FaQuoteLeft className="text-3xl md:text-4xl" />
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <FaStar key={`${testimonial.name}-${idx}`} className="text-sm" />
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full border-2 border-yellow-500 object-cover md:h-20 md:w-20"
                      />
                      <div className="min-w-0">
                        <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-violet-800">
                          {testimonial.tag}
                        </span>
                        <h3 className="mt-3 text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm italic leading-7 text-gray-700 md:text-[15px]">
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-gray-500 md:text-base">
            For Brisbane visitors comparing demolition providers, this feedback
            helps reinforce the value of clearer communication, safer planning
            and a more reliable experience before work begins.
          </p>
        </div>
      </section>

      <section className="bg-[#0d1418] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Service Areas
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300">
            Brisbane is our primary focus, with support available across nearby
            service areas for demolition and site-preparation enquiries.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 text-left shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-amber-300">
                  {area.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Clear answers to common questions before you request a quote or
              plan a demolition project.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-3xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition hover:border-yellow-300"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-gray-900">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center lg:flex-row lg:space-x-12">
            <div className="group relative mb-10 lg:mb-0 lg:w-1/2">
              <img
                src="https://i.ibb.co.com/VchScrzt/Whats-App-Image-2025-09-06-at-10-47-17-AM.jpg"
                alt="YN Demolition team at a project site"
                className="h-auto w-full -rotate-3 rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:rotate-0"
              />
              <img
                src="https://i.ibb.co.com/B2656zKV/Whats-App-Image-2025-09-06-at-10-47-16-AM.jpg"
                alt="Wide demolition project view"
                className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-transparent opacity-30"></div>
            </div>

            <div className="text-center lg:w-1/2 lg:text-left">
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                The{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  YN Demolition
                </span>{" "}
                Story
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Established in 2002, YN Demolition has become Queensland's
                premier provider of demolition and asbestos removal services.
                Our expert team has successfully completed countless projects
                across the residential, commercial, and industrial sectors,
                earning a reputation for reliability and excellence.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                We believe in a modern approach to every job, focusing on{" "}
                <strong>innovation</strong>, <strong>safety</strong>, and{" "}
                <strong>environmental responsibility</strong>. Our commitment to
                these core principles ensures every project is completed to the
                highest standard.
              </p>
              <div className="mt-8">
                <Link
                  to="/our-story"
                  className="inline-block rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  Discover Our Values
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
