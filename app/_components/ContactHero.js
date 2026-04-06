"use client";

import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-900 to-[#001f3f] opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            How can we help you?
          </h1>

          <p className="text-base sm:text-lg text-accent-600 max-w-xl mb-8">
            We welcome project inquiries, partnerships, and business
            discussions. Our team is ready to support your next big idea.
          </p>

          {/* CTA */}
          <Link
            href="#location"
            className="inline-block px-7 py-3 bg-white text-primary-900 font-semibold text-sm tracking-wide hover:bg-accent-500 hover:text-white transition-all duration-300"
          >
            Get in Touch →
          </Link>
        </div>

        <div
          id="location"
          className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-xl shadow-xl"
        >
          <ul className="space-y-5 text-sm sm:text-base">
            <li>
              <p className="font-semibold text-white">Office Address</p>
              <p className="text-accent-600">5D Kanta Road, Kaduna, Nigeria</p>
            </li>

            <li>
              <p className="font-semibold text-white">Email</p>
              <a
                href="mailto:info@80plus.net"
                className="text-accent-600 hover:underline"
              >
                info@80plus.net
              </a>
            </li>

            <li>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-accent-600">+234 802 712 5821</p>
            </li>

            <li>
              <p className="font-semibold text-white">Website</p>
              <a
                href="https://www.80plus.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:underline"
              >
                www.80plus.net
              </a>
            </li>

            <li>
              <p className="font-semibold text-white">Business Hours</p>

              <p className="text-accent-600">
                Monday – Friday | 8:00am – 5:00pm
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
