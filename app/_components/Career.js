import Image from "next/image";
import Link from "next/link";

export function CareerSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[600px] bg-white">
      {/* LEFT IMAGE */}

      <div className="flex-1 relative aspect-[4/3] md:aspect-[16/10]">
        <Image
          src="/mission/Team.png"
          alt="Career environment"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 px-6 sm:px-8 md:px-16 py-10 sm:py-12 md:py-20 flex flex-col justify-center">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          Career Opportunities
        </h2>

        {/* TEXT */}
        <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6">
          We believe in building careers, not just jobs. Join a team where
          innovation, safety, and professional excellence drive everything we
          do.
        </p>

        {/* BENEFITS */}
        <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Exposure to real construction projects</li>
          <li>Professional growth and training</li>
          <li>Strong safety culture</li>
          <li>Opportunity to contribute to national development</li>
        </ul>

        {/* SUBTITLE */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-900 mb-3">
          Available Roles
        </h3>

        {/* ROLES */}
        <ul className="mb-8 space-y-2 text-gray-800 font-medium text-sm sm:text-base">
          <li>Construction Engineers</li>
          <li>Site Supervisors</li>
          <li>Project Managers</li>
          <li>HSE Officers</li>
          <li>Technicians</li>
          <li>Graduate Trainees & Interns</li>
        </ul>

        {/* BUTTON */}
        <Link
          href="/contacts#get-in-touch"
          className="inline-block w-fit px-7 py-3 bg-primary-900 text-white text-sm font-semibold transition-all duration-300 hover:bg-[#002244]"
        >
          Opportunities →
        </Link>
      </div>
    </section>
  );
}
