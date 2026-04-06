"use client";

import { useState } from "react";

export default function GetInTouch() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <section id="get-in-touch" className="relative py-20 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-[#00509e] to-[#001f3f]"></div>

      <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-accent-500 blur-[120px] opacity-30"></div>

      <div className="relative max-w-xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Let’s Build Something Great
        </h2>

        {/* SUBTITLE */}
        <p className="text-sm md:text-base text-white/80 mb-10">
          Tell us about your project and we’ll get back to you.
        </p>

        {/* FORM */}
        <form
          action="https://formspree.io/f/xanbyryp"
          method="POST"
          onSubmit={handleSubmit}
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 md:p-8 rounded-2xl shadow-xl space-y-5"
        >
          {/* SELECT */}
          <select
            name="project"
            required
            className="w-full p-3 rounded-lg bg-white text-primary-900 font-medium outline-none"
          >
            <option value="">Select Project</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="construction">Construction</option>
            <option value="energy">Renewable Energy</option>
            <option value="industrial">Industrial Solutions</option>
            <option value="roads">Road Construction</option>
          </select>

          {/* TEXTAREA */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your message..."
            required
            className="w-full p-3 rounded-lg bg-white text-primary-900 outline-none resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-white text-primary-900 hover:bg-accent-500 hover:text-white transition-all duration-300"
          >
            Send Message →
          </button>
        </form>

        {/* SUCCESS */}
        {submitted && (
          <div className="mt-6 text-sm bg-green-500/20 text-green-300 py-2 px-4 rounded-md inline-block animate-fadeIn">
            ✅ Message sent successfully!
          </div>
        )}
      </div>
    </section>
  );
}
