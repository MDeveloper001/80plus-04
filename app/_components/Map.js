"use client";

export default function ContactMap() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            Our Location
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Visit our office or find us easily on the map below.
          </p>
        </div>

        {/* MAP */}
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            title="80PLUS Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.123456789!2d7.441234!3d10.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef%3A0xabcdef123456789!2s5D%20Kanta%20Road%2C%20Kaduna%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
