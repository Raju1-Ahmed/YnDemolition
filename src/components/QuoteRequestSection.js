import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCommentDots, FaEnvelope, FaPhoneAlt, FaStar } from "react-icons/fa";

const trustLogos = [
  "Brisbane City Council",
  "Australian Lands",
  "A Local Developer",
];

const serviceOptions = [
"Full House Demolition",
"Partial Demolition",
"Civil / Site Works",
"New Construction",
"Not Sure - Need Advice",
];

const startTimelineOptions = [
  "Emergency",
  "Within 1 month",
  "1–3+ months",
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  ownerStatus: [],
  startTimeline: "",
  interest: serviceOptions[0],
  location: "",
  details: "",
};

const GOOGLE_APPS_SCRIPT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby3I3mbiAEBumya5IgwMzeZXMe7kJEQLt6x_9enCUsZzZL8d3JxM5LLYGE7-osQRQBd-g/exec";

const pushToDataLayer = (event, parameters = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
};

function QuoteRequestSection({ focusForm = false }) {
  const [formState, setFormState] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormState((current) => ({
        ...current,
        [name]: checked
          ? [...current[name], value]
          : current[name].filter((item) => item !== value),
      }));
      setSubmitted(false);
      setSubmitError("");
      return;
    }

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));

    if (name === "startTimeline") {
      pushToDataLayer("quote_start_timeline_selected", {
        start_timeline: value,
      });
    }

    setSubmitted(false);
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    const formData = {
      name: formState.fullName,
      phone: formState.phone,
      email: formState.email,
      propertyOwner: formState.ownerStatus.join(", "),
      startTimeline: formState.startTimeline,
      service: formState.interest,
      landLocation: formState.location,
      message: formState.details,
    };

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("The quote request could not be submitted.");
      }

      pushToDataLayer("quote_form_submit", {
        form_name: "quote_request",
        start_timeline: formState.startTimeline,
        service_interest: formState.interest,
      });

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        "We could not submit your request right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={`relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 ${focusForm ? "py-8 md:py-12" : "py-24"} text-white`}>
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://i.ibb.co.com/chb9kwtB/Whats-App-Image-2025-09-05-at-9-38-01-PM.jpg"
          alt="Demolition project background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]"></div>

      <div className="relative container mx-auto px-6">
        {!focusForm && <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-white/80">
            Ready To Move Forward
          </p>
          <h2 className="mt-4 text-4xl font-extrabold drop-shadow-lg md:text-5xl">
            Ready to Start Your Next Project?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-100 md:text-xl">
            Partner with <span className="font-semibold">YN Demolition</span>{" "}
            for safe, efficient, and certified demolition services across
            Brisbane and nearby service areas.
          </p>
        </div>}

        {!focusForm && <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+610431270377"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0d1418] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#162027]"
          >
            <FaPhoneAlt />
            Call +61 0431 270 377
          </a>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-yellow-700"
          >
            <FaEnvelope />
            Contact Us
          </Link>
        </div>}

        {!focusForm && <p className="mt-12 text-center text-base font-black uppercase tracking-[0.18em] text-white md:text-xl">
          Licensed Brisbane Demolition Experts | Fast & Reliable
        </p>}

        <div
          id="main-quote-form"
          className={`relative mx-auto ${focusForm ? "mt-0 ring-4 ring-yellow-200/50 shadow-[0_24px_80px_rgba(15,103,255,0.34)]" : "mt-10"} max-w-5xl rounded-[2rem] border border-[#c9a44f] bg-[#10171c] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.42)] md:p-5`}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0f67ff] px-6 py-3 text-[11px] font-black uppercase tracking-[0.35em] text-white shadow-[0_16px_40px_rgba(15,103,255,0.32)] md:px-8">
            <span className="flex items-center gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </div>

          <div className="rounded-[1.6rem] bg-[#0d1418] px-5 pb-6 pt-10 md:px-8 md:pb-8">
            <div className="text-center">
              <h3 className="text-3xl font-black uppercase leading-tight md:text-5xl">
                Start Your Project Today
              </h3>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-amber-200">
                <FaCommentDots />
                Demolition • Civil Works • Construction
Serious Enquiries Only
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4 md:grid-cols-2"
            >
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  1. Your Full Name
                </span>
                <input
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0f67ff] focus:ring-2 focus:ring-[#0f67ff]/30"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  2. Best Contact Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+61"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0f67ff] focus:ring-2 focus:ring-[#0f67ff]/30"
                  required
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  3. Valid Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0f67ff] focus:ring-2 focus:ring-[#0f67ff]/30"
                  required
                />
              </label>

              <fieldset className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <legend className="px-2 text-sm font-semibold text-slate-200">
                  4. Which option best describes you?
                </legend>
                <div className="mt-3 grid gap-3 text-sm text-slate-200">
                  {["Yes, I am the owner", "I am a builder / developer", "Just enquiring"].map((option) => (
                    <label key={option} className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-amber-300/60 hover:bg-white/10">
                      <input
                        type="checkbox"
                        name="ownerStatus"
                        value={option}
                        checked={formState.ownerStatus.includes(option)}
                        onChange={handleChange}
                        className="h-4 w-4 accent-amber-400"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="rounded-2xl border border-white/10 bg-white/5 p-4 md:col-span-2">
                <legend className="px-2 text-sm font-semibold text-slate-200">
                  5. When are you planning to start?
                </legend>
                <div className="mt-3 grid gap-3 text-sm text-slate-200 md:grid-cols-3">
                  {startTimelineOptions.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-amber-300/60 hover:bg-white/10 has-[:checked]:border-amber-300 has-[:checked]:bg-amber-300/10"
                    >
                      <input
                        type="radio"
                        name="startTimeline"
                        value={option}
                        checked={formState.startTimeline === option}
                        onChange={handleChange}
                        required={option === startTimelineOptions[0]}
                        className="h-4 w-4 accent-amber-400"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-200">
                    6. What service do you need?
                  </span>
                  <select
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0f67ff] focus:ring-2 focus:ring-[#0f67ff]/30"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-200">
                    Project address / suburb?
Optiona
                  </span>
                  <input
                    type="text"
                    name="location"
                    value={formState.location}
                    onChange={handleChange}
                    placeholder="Enter your answer"
                    className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0f67ff] focus:ring-2 focus:ring-[#0f67ff]/30"
                    required
                  />
                </label>
              </div>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  Tell us about your project
                </span>
                <textarea
                  name="details"
                  value={formState.details}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Scope, timing, demolition type, access requirements..."
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0f67ff] focus:ring-2 focus:ring-[#0f67ff]/30"
                  required
                ></textarea>
              </label>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#0f67ff] px-6 py-4 text-base font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_34px_rgba(15,103,255,0.25)] transition hover:bg-[#1f75ff]"
                >
                  Submit Request
                </button>
                <p className="mt-3 text-center text-xs text-slate-400">
                  We respect your privacy.
                </p>
              </div>

              {submitted ? (
                <div className="md:col-span-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  Thanks. Your enquiry has been received and we will be in
                  touch soon.
                </div>
              ) : null}

              {submitError ? (
                <div className="md:col-span-2 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {submitError}
                </div>
              ) : null}
            </form>
          </div>
        </div>

        {!focusForm && <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {trustLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl bg-white px-6 py-5 text-center text-sm font-black uppercase tracking-[0.15em] text-slate-900 shadow-lg"
            >
              {logo}
            </div>
          ))}
        </div>}
      </div>
    </section>
  );
}

export default QuoteRequestSection;
