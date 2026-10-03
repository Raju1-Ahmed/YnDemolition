import React from "react";
import { FaBriefcase, FaClock, FaFileInvoiceDollar } from "react-icons/fa";

const benefits = [
  {
    icon: FaBriefcase,
    title: "Brisbane-First Project Planning",
    text: "We help Brisbane property owners, builders and developers plan house demolition, commercial demolition and site preparation with a clearer starting scope.",
  },
  {
    icon: FaClock,
    title: "Faster Turnaround & Cleaner Handover",
    text: "Practical scheduling, faster response times and organised site-clearance support help projects move into the next stage with less delay.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Clear Quotes With Fewer Surprises",
    text: "Straightforward communication and transparent pricing help reduce unexpected costs before demolition, asbestos removal or clearance work begins.",
  },
];

function BrisbaneLandingSection() {
  return (
    <section className="bg-[#10181d] text-white">
      <div className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0">
          <div
            className="absolute inset-x-0 top-0 h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/v4jVf4Ks/Whats-App-Image-2025-09-06-at-10-47-12-AM-1.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,15,18,0.94),rgba(9,15,18,0.96)_38%,rgba(9,15,18,0.98))]"></div>
        </div>

        <div className="relative container mx-auto px-6 py-14 md:py-16">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-200">
              Brisbane Demolition Benefits
            </p>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
              Why Brisbane Property Owners and Builders Choose YN Demolition
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              From house demolition and commercial demolition to asbestos
              removal and site clearance, we focus on the things that matter
              most to Brisbane clients: clearer planning, better turnaround and
              more confidence before work starts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[1.8rem] border border-amber-300/15 bg-white/5 px-6 py-8 text-center shadow-[0_18px_46px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/50 text-2xl text-amber-300">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-2xl font-black leading-tight text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-400 md:text-base">
            Servicing Brisbane first, with support for surrounding areas where
            demolition, clearance and pre-construction planning need a reliable
            local team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BrisbaneLandingSection;
