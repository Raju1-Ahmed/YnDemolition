import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const slides = [
  {
    image:
      "https://mag-engineering.b-cdn.net/wp-content/uploads/2023/04/Building-Demolition-Contractors-Banner-Images-1024x446.png",
    eyebrow: "Brisbane Demolition Specialists",
    title: "Brisbane Demolition Services for Homes, Builders and Commercial Sites",
    description:
      "YN Demolition delivers residential demolition, commercial demolition, asbestos removal and site clearance across Brisbane, Logan, Ipswich and nearby Queensland service areas with licensed crews, clear communication and dependable turnaround.",
    points: [
      "Licensed Brisbane Team",
      "Residential & Commercial Demolition",
      "Fast Site Clearance",
    ],
    primaryLabel: "Get Your Free Quote",
    primaryTo: "/quote",
    secondaryLabel: "Explore Demolition Services",
    secondaryTo: "/service",
    contentPosition: "items-center justify-start",
    textAlign: "text-left",
  },
  {
    image:
      "https://i.ibb.co.com/RpmhV3Ys/Whats-App-Image-2025-09-05-at-9-38-01-PM.jpg",
    eyebrow: "House Demolition Brisbane",
    title: "Residential Demolition That Helps Property Owners Move Forward Faster",
    description:
      "From knockdown rebuild projects to full house removal, we support Brisbane property owners with safer planning, cleaner site handover and practical next-step coordination.",
    points: [
      "Knockdown Rebuild Support",
      "Clear Scope Before Work Starts",
      "Cleaner Site Handover",
    ],
    primaryLabel: "Request House Demolition Quote",
    primaryTo: "/quote",
    secondaryLabel: "View Residential Services",
    secondaryTo: "/residential",
    contentPosition: "items-end justify-start",
    textAlign: "text-left",
  },
  {
    image:
      "https://abyssdemolition.com.au/wp-content/uploads/2024/11/10-e1733441566828.jpg.webp",
    eyebrow: "Builder-Focused Support",
    title: "Commercial Demolition and Site Preparation for Time-Sensitive Projects",
    description:
      "We help builders and project teams plan demolition, strip-out and site-clearance work with better communication, stronger safety controls and less disruption to program timing.",
    points: [
      "Builder-Friendly Coordination",
      "Commercial Site Readiness",
      "Reliable Turnaround",
    ],
    primaryLabel: "Talk to Our Team",
    primaryTo: "/quote",
    secondaryLabel: "See Commercial Services",
    secondaryTo: "/commercial",
    contentPosition: "items-center justify-end",
    textAlign: "text-left",
  },
  {
    image:
      "https://i.ibb.co.com/zT7PVDS8/Whats-App-Image-2025-09-06-at-10-47-12-AM.jpg",
    eyebrow: "Site Clearance & Access",
    title: "Demolition Planning for Tight Access, Structural Removal and Safer Clearance",
    description:
      "When projects involve complex access, staged removal or heavy structural work, our team helps clients plan a cleaner, safer demolition pathway from first enquiry to cleared site.",
    points: [
      "Safer Structural Removal",
      "Access-Aware Planning",
      "Practical Site Clearance",
    ],
    primaryLabel: "Plan Your Demolition",
    primaryTo: "/quote",
    secondaryLabel: "Contact the Brisbane Team",
    secondaryTo: "/contact",
    contentPosition: "items-end justify-start",
    textAlign: "text-left",
  },
  {
    image:
      "https://i.ibb.co.com/Dgvmt4F2/Whats-App-Image-2025-09-06-at-10-47-20-AM-1.jpg",
    eyebrow: "Asbestos & Compliance",
    title: "Asbestos Removal and Demolition Support with Compliance-First Communication",
    description:
      "For projects involving asbestos-related risks, we focus on responsible planning, clear client updates and the compliance support needed before the next stage begins.",
    points: [
      "Asbestos-Related Guidance",
      "Compliance-Focused Support",
      "Clear Client Communication",
    ],
    primaryLabel: "Request Asbestos Enquiry",
    primaryTo: "/quote",
    secondaryLabel: "Explore Asbestos Services",
    secondaryTo: "/asbestos",
    contentPosition: "items-center justify-start",
    textAlign: "text-left",
  },
  {
    image:
      "https://abyssdemolition.com.au/wp-content/uploads/2024/04/DSC02856-gnmfBwxT.jpeg.webp",
    eyebrow: "Queensland Service Coverage",
    title: "Brisbane-First Demolition Support Across Logan, Ipswich and Nearby Areas",
    description:
      "We prioritise Brisbane while supporting surrounding service areas for demolition, site preparation and pre-construction enquiries that need a dependable local team.",
    points: [
      "Brisbane Priority Service",
      "Logan & Ipswich Coverage",
      "Pre-Construction Support",
    ],
    primaryLabel: "Check Service Availability",
    primaryTo: "/quote",
    secondaryLabel: "View All Services",
    secondaryTo: "/service",
    contentPosition: "items-end justify-end",
    textAlign: "text-left",
  },
];

function HeroBanner() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      className="min-h-[640px] bg-[#081015]"
    >
      {slides.map((slide, idx) => {
        const TitleTag = idx === 0 ? "h1" : "h2";

        return (
          <SwiperSlide key={slide.title}>
            <section
              className="relative flex min-h-[640px] overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,12,16,0.88),rgba(6,12,16,0.56)_48%,rgba(6,12,16,0.74)),linear-gradient(180deg,rgba(6,12,16,0.22),rgba(6,12,16,0.56))]"></div>

              <div
                className={`relative z-10 container mx-auto flex min-h-[640px] px-6 py-20 ${slide.contentPosition}`}
              >
                <div
                  className={`max-w-3xl rounded-[2rem] border border-white/10 bg-[#081015]/45 p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8 ${slide.textAlign}`}
                >
                  <p className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-200 shadow-[0_12px_26px_rgba(0,0,0,0.24)]">
                    {slide.eyebrow}
                  </p>

                  <TitleTag className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                    {slide.title}
                  </TitleTag>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {slide.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur-sm"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      to={slide.primaryTo || "/quote"}
                      className={`group relative rounded-xl border-2 border-yellow-100 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-7 py-4 text-base font-black text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.46)] ring-4 ring-yellow-300/30 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:from-yellow-200 hover:via-yellow-300 hover:to-amber-300 hover:shadow-[0_24px_54px_rgba(250,204,21,0.62)] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-200 md:text-lg ${idx === 0 ? "animate-[pulse_2.4s_ease-in-out_infinite]" : ""}`}
                    >
                      {idx === 0 && (
                        <span className="absolute -right-2 -top-3 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                          Free Quote
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        {slide.primaryLabel}
                        <span aria-hidden="true" className="text-xl leading-none">→</span>
                      </span>
                    </Link>
                    <Link
                      to={slide.secondaryTo}
                      className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white/20"
                    >
                      {slide.secondaryLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroBanner;
